import React from 'react';
import './styles/Header.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <Link to={"/"}>
                <h2>HLS Streaming</h2>
                </Link>
            </div>

            <div className="header_input">
                <input type="text" />
                <SearchRoundedIcon />
            </div>
        </div>
    )
}

export default Header;