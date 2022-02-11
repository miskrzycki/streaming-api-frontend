import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainPageVideos from './MainPageVideos';
import './styles/App.css';



function App() {
  return (
    <div className="app">
      <Header />

      <div className='app_page'>
        <Sidebar />
        <MainPageVideos />
      </div>

    </div>
  );
}

export default App;
