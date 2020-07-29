import React from 'react';
import './styles.css';
import { ReactComponent as Logo } from '../../assets/huckberry-logo.svg';
import bag from '../../assets/icon-bag.svg';

const LogoHeader = () => {
	return (
		<div className='top-container'>
			<div className='header'>
				<div className='full-width'>
					<div className='row'>
						<div className='col'></div>
						<div className='col'>
							<h1 className='logo-container'>
								<a className='text'>
									<Logo />
								</a>
							</h1>
						</div>
						<div className='col'>
							<ul className='list'>
								<li className='list-item'>
									<div className='account-link'>
										<a href='/'>My Account</a>
									</div>
								</li>
								<li className='list-item'>
									<button className='cart'>
										<img src={bag} />
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LogoHeader;
