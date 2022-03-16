import React, { useState } from 'react'
import { Link, State } from "react-router-dom";
import './styles/Video.css';

const Video = ({ id, streamName, description, thumbnailLink, masterLink, title }) => {

    const [state, setstate] = useState({data:""})

    const setCurrentVideoUrl = () => {  
        setstate({masterLink});
        console.log(masterLink) 
       }; 
  
    return (      
            <div className="videoCard" onClick={setCurrentVideoUrl}>
                <Link to={'/player/' + encodeURIComponent(masterLink)}>
                    <img className="videoCard_image" src={thumbnailLink} alt='' />
                </Link> 
                <div className="videoCard_text">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <p>{masterLink}</p>
                </div>
            </div>
    );
};

export default Video