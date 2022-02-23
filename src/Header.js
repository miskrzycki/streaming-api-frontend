import React, { useState } from 'react';
import './styles/Header.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Link } from 'react-router-dom';

function Header() {
    const[inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            <div className="header_left">
                <Link to={"/"}>
                <h2>HLS Streaming</h2>
                </Link>
            </div>

            <div className="header_input">
                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} type="text" />
                <Link to={'search/${inputSearch}'}>
                    <SearchRoundedIcon />
                </Link>
            </div>
        </div>
    )
}

export default Header;