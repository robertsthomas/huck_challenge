import React, { useState, useRef } from 'react';

import './Header.css';
import data from '../../assets/NavigationData.json';
import LogoHeader from '../LogoHeader/LogoHeader';

const Header = () => {
	const { navigation } = data;
	const [show, setShow] = useState(false);
	const [menuData, setMenuData] = useState(null);

	const toggleSubmenu = (data) => {
		if (data.children.length != 0) setShow(true);
		setMenuData(data);
	};
	const keepmenuopen = () => {
		setShow(true);
		return true;
	};
	const removeKeepEvent = () => {
		setShow(false);
		setMenuData(null);
	};
	const hideSubmenu = () => {
		if (keepmenuopen) {
			return;
		}

		setShow(false);
		setMenuData(null);
	};
	if (menuData != null) console.log(menuData);

	return (
		<div className='container'>
			<LogoHeader />
			<div className='Header'>
				<ul className='menu'>
					{navigation.items.map((data, idx) => (
						<div key={idx}>
							<li
								className='item'
								onMouseEnter={() =>
									data.children != 0 ? toggleSubmenu(data) : null
								}
								onMouseLeave={hideSubmenu}
								onClick={() => toggleSubmenu(data)}
							>
								<a href={data.url}>{data.title}</a>
							</li>
						</div>
					))}
				</ul>
				<div className='search'>search</div>
			</div>
			<hr style={{ borderBottom: '3px solid #1d2b39' }} />
			{show && (
				<div
					className='grid-container'
					onMouseEnter={keepmenuopen}
					onMouseLeave={removeKeepEvent}
				>
					<div className='navigation-panel'>
						<div className='categories'>
							{menuData.children.slice(0, 4).map((child, idx) => (
								<div className='column' key={idx}>
									<h4>
										<a href={child.url}>{child.title}</a>
									</h4>
									<ul>
										{child.children.map((innerChild, idx) => (
											<li key={idx}>
												<a href={innerChild.url} className='link'>
													{innerChild.title}
												</a>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
						<div className='features'>
							<div className='feature-column'>
								{menuData.features.tiles.slice(0, 2).map((tile, idx) => (
									<a className='tile' href={tile.url} key={idx}>
										<span
											className='image'
											style={{
												backgroundImage: `url(https://content.huckberry.com/assets/navigation/hero_fnt_2020_04-a23b5c02fc39c7ca4f7a93d3976bfef1ff4b93acabb5b11aeeaa4d2d0bd4af9a.jpg?auto=format%2Ccompress&crop=top&fit=clip&cs=tinysrgb&w=360&ixlib=react-9.0.1&h=280&w=360&q=75&dpr=1)`
											}}
										></span>
										<span className='title'>{tile.title}</span>
									</a>
								))}
							</div>
							<div className='feature-column'>
								{menuData.features.tiles.slice(2).map((tile, idx) => (
									<a className='tile' href={tile.url} key={idx}>
										<span
											className='image'
											style={{
												backgroundImage: `url(https://content.huckberry.com/assets/navigation/hero_fnt_2020_04-a23b5c02fc39c7ca4f7a93d3976bfef1ff4b93acabb5b11aeeaa4d2d0bd4af9a.jpg?auto=format%2Ccompress&crop=top&fit=clip&cs=tinysrgb&w=360&ixlib=react-9.0.1&h=280&w=360&q=75&dpr=1)`
											}}
										></span>
										<span className='title'>{tile.title}</span>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Header;
