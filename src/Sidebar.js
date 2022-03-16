import React from "react";
import SidebarRow from './SidebarRow';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalMoviesRoundedIcon from '@mui/icons-material/LocalMoviesRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import './styles/Sidebar.css';
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
            <Link to={'/'}>
            <SidebarRow Icon={HomeRoundedIcon} title="Home"/>
            </Link>

            <Link to={'/player'}>
            <SidebarRow Icon={PlayCircleFilledRoundedIcon} title="Player"/>
            </Link>

            <Link to={'/myvideos'}>
            <SidebarRow Icon={LocalMoviesRoundedIcon} title="My Videos"/>
            </Link>

            <Link to={'/upload'}>
            <SidebarRow Icon={FileUploadRoundedIcon} title="Upload Video"/>
            </Link>
        </div>
    )
}

export default Sidebar;