import React from 'react';
import "./styles/VideoCard.css"

const videoCards = [
  {
    title: 'Test1',
    author: 'Jan Kowalski',
    image: 'https://blog.cyfrowe.pl/wp-content/uploads/2019/08/chmury-glowne-foto-.jpg',
    url: 'http://localhost:8080/streaming-api/test./test_master.m3u8'
  },
  {
    title: 'Test2',
    author: 'Jan Kowalski',
    image: 'https://blog.cyfrowe.pl/wp-content/uploads/2019/08/chmury-glowne-foto-.jpg',
    url: 'http://localhost:8080/streaming-api/test./test_master.m3u8'
  },
  {
    title: 'Test3',
    author: 'Jan Kowalski',
    image: 'https://blog.cyfrowe.pl/wp-content/uploads/2019/08/chmury-glowne-foto-.jpg',
    url: 'http://localhost:8080/streaming-api/test./test_master.m3u8'
  }
];

function VideoCardList() {
  return (
    <section className='videoCardList'>
      {videoCards.map((videoCard) => {
        return <VideoCard key={videoCard.name} videoCard={videoCard}></VideoCard>
      })}
  </section>
  );
}
const VideoCard = ({image, title, author, url}) => {
    return (
        <div className="videoCard">
            <img className="videoCard_image" src = {image} alt=""/>
            <div className="videoCard_info">
                <div className="videoCard_text">
                    <h4>{title}</h4>
                    <p>{author}</p>
                    <p>{url}</p>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;