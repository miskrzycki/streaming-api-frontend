import React from "react";
import SidebarRow from './SidebarRow';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalMoviesRoundedIcon from '@mui/icons-material/LocalMoviesRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import './styles/Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow Icon={HomeRoundedIcon} title="Home"/>
            <SidebarRow Icon={LocalMoviesRoundedIcon} title="My Videos"/>
            <SidebarRow Icon={FileUploadRoundedIcon} title="Upload Video"/>
        </div>
    )
}

export default Sidebar;