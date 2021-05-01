import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/Header';

ReactDOM.render((
    <div>
        <Header />
        <div style={{ backgroundColor: '#F4F5F5', height: '89vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 0, zIndex: -1, width: '100%'}}>
            <h1 style={{fontSize: 40}}>Welcome to Huckberry</h1>
        </div>
    </div>)
    , document.getElementById('root'));
