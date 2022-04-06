import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'antd';
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
                <div className="listItem" key={video.id} {...video}>
                  <div className="textItem">
                    <h1>{video.title}</h1>
                    <h4>{video.id}</h4>
                  </div>
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