import React from 'react';
import { useState, useEffect } from 'react';
import './styles/MainPageVideos.css';
import axios from 'axios';
import SpecyficVideo from './Video';

function MainPageVideos() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/video-details')
      .then(res => {
        setVideos(res.data.detailsList)
      })
  },[videos.prop]);
  
  return (
    <div className="mainPageVideos">
      <section className='videoList'>
        {videos.map(video => {
          return (
              <div className="mainPageVideos_videos" key={video.id}>
                <SpecyficVideo key={video.id} {...video} />
              </div>
          )
        })}
      </section>
    </div>
  );
}
export default MainPageVideos;