import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import MainPageVideos from './MainPageVideos';
import VideoPlayer from './VideoPlayer'; 
import UploadVideo from './UploadVideo';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={
            <>
            <div className='app_page'>
              <Sidebar />
              <MainPageVideos />
            </div>  
            </>
          } />

           <Route exact path="/player" element={
            <>
            <div className='app_page'>
              <Sidebar />
              <VideoPlayer />
            </div>  
            </>
          } />

          <Route exact path="/upload" element={
            <>
            <div className='app_page'>
              <Sidebar />
              <UploadVideo />
            </div> 
            </>
          } />

          <Route exact path="/myvideos" element={
            <>
            <div className='app_page'>
              <Sidebar />
              <MainPageVideos />
            </div>  
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
