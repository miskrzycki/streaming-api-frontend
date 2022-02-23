import React, { useState } from 'react'
import { Link, State } from "react-router-dom";
import './styles/Video.css';
import VideoPlayer from './VideoPlayer';

const Video = ({ title, author, image, url}) => {
/*
    const [state, setstate] = useState({data:""})
*/
    const setCurrentVideoUrl = () => {  
        //setstate({data: url});
        console.log(url) 
       }; 
  
/*
    const setCurrentVideoUrl = (e) => {
        const currentVideoUrl = url;
        console.log(currentVideoUrl);
        return currentVideoUrl;     
    };
*/
    return (      
            <div className="videoCard" onClick={setCurrentVideoUrl}>

                <Link to='/player'>
                    <img className="videoCard_image" src={image} alt='' />
                </Link> 
                {/* <img className="videoCard_image" src={image} alt='' /> */}
                <div className="videoCard_text">
                    <h4>{title}</h4>
                    <p>{author}</p>
                    <p>{url}</p>
                </div>
            </div>
    );
};

export default Video