import React from 'react';
import ReactDom from 'react-dom';
import { useState } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import UploadVideo from './UploadVideo';
import './styles/MainPageVideos.css';
import {data} from './videos';
import SpecyficVideo from './Video';
import { useLocation, Routes, Route, useParams } from 'react-router-dom';


function SearchPage() {

  const {inputSearch} = useParams();
  const decodedSearchInput = decodeURIComponent(inputSearch);

  return (
    <div className="mainPageVideos">
      <section className='videoList'>
        {data.map((video) => {
          if (((video.title).toLowerCase()).includes(decodedSearchInput.toLowerCase())) {
            return (
                <div className="mainPageVideos_videos"  key={video.title}>
                  <SpecyficVideo key={video.title} {...video} />
                </div>
            );
          } 
        })}
      </section>
    </div>
  );

}
export default SearchPage;