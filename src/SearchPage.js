import React from 'react';
import ReactDom from 'react-dom';
import { useState, useEffect } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import './styles/MainPageVideos.css';
import axios from 'axios';
import SpecyficVideo from './Video';
import { useLocation, Routes, Route, useParams } from 'react-router-dom';


function SearchPage() {

  const {inputSearch} = useParams();
  const decodedSearchInput = decodeURIComponent(inputSearch);
  const [videos, setVideos] = useState([])

  const fetchApi = async(event) => {
      const formData = new FormData();
      formData.append("title", decodedSearchInput);

      try {
      const response = await axios({
          method: "post",
          url: "http://localhost:8080/video-details/search",
          data: formData,
      })
      .then(function (res) {
        setVideos(res.data.detailsList)
      });
      } catch(error) {
          console.log(error);
      }
  }

  useEffect(() => {
    fetchApi();
  },[videos.prop]);

  return (
    <div className="mainPageVideos">
      <section className='videoList'>
        {videos.map(video => {
          return (
              <div className="mainPageVideos_videos"  key={video.id}>
                <SpecyficVideo key={video.id} {...video} />
              </div>
          )
        })}
      </section>
    </div>
  );
}
export default SearchPage;