import React from 'react';
import './styles/Header.css';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Header() {
    return (
        <div className="header">
            <div className="header_left"> 
                <MenuRoundedIcon />
                <img
                className='header_logo'
                src="./images/logo.jpg"
                />
            </div>

            <div className="header_input">
                <input type="text" />
                <SearchRoundedIcon />
            </div>
            
        </div>
    )
}

export default Header;