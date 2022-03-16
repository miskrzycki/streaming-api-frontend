import React from 'react';
import ReactDom from 'react-dom';
import { useState, useEffect } from 'react';
import { Typography, Button, Form, message, Input } from 'antd';
import ReactHlsPlayer from 'react-hls-player';
import './styles/MainPageVideos.css';
import axios from 'axios';

function MyVideos() {
  const [videos, setVideos] = useState([])
  
  function DeleteVideo(value) {
    axios.delete("http://localhost:8080/streaming-api", {
        data: {
            id : value,
        }
    })
  }

  useEffect(() => {
    axios.get('http://localhost:8080/video-details')
      .then(res => {
        console.log(res)
        setVideos(res.data.detailsList)
      })
  },[videos.prop]);

  return (
    <div className="mainPageVideos">
      <section className='videoList'>
        {videos.map(video => {
          return (
              <div key={video.id}>
                <div key={video.id} {...video}>
                    <h1>{video.title}</h1>
                    <h4>{video.id}</h4>
                    <Button className="buttonDelete"  onClick={() => DeleteVideo(video.id)}>
                    Delete
                    </Button>
                </div>
              </div>
          )
        })}
      </section>
    </div>
  );
}
export default MyVideos;