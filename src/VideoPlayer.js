import React from 'react';
import ReactDom from 'react-dom';
import { useState } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import './styles/MainPageVideos.css';
import { currentVideoUrl } from './Video';
import Video from './Video';
import { useLocation, Routes, Route, useParams } from 'react-router-dom';


function VideoPlayer(props) {

    const {url} = useParams();
    const decodedUrl = decodeURIComponent(url);
    const [hlsUrl, setHlsUrl] = useState(decodedUrl);
 
    return (
        <div className="mainPageVideos">
            <div className="videoUrl">
                <input
                    type="text"
                    placeholder="HLS Url..."
                    value={hlsUrl}
                    aria-label="hls-url"
                    aria-describedby="set-hls-url"
                    onChange={(e) => setHlsUrl(e.target.value)}
                />
            </div>

            <div className="videoPlayer">
                <ReactHlsPlayer
                    src= {hlsUrl}
                    autoPlay={false}
                    controls={true}
                    width="60%"
                    height="auto"
                />
            </div>
        </div>
    );
}

export default VideoPlayer;