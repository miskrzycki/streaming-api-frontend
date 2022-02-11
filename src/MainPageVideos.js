import React from 'react';
import ReactDom from 'react-dom';
import { useState } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import VideoCard from './VideoCard';
import './styles/MainPageVideos.css';


function MainPageVideos() {
    const [hlsUrl, setHlsUrl] = useState(
    "http://localhost:8080/streaming-api/test/test_master.m3u8"
  );

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

            <div className="mainPageVideos_videos">
                <VideoCard
                title="Test"
                author="Jan Kowalski"
                image="https://blog.cyfrowe.pl/wp-content/uploads/2019/08/chmury-glowne-foto-.jpg"
                url="http://localhost:8080/streaming-api/test./test_master.m3u8"
               />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    );
}

export default MainPageVideos;