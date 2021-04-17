import React from 'react';
import '../css/VideoItem.css';

const VideoList = ({ videos ,onVideoSelect }) => {
    const renderedList =videos.map(video =>
        {
            return(
                <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
            )
        });
        return <div className="ui relaxed divided list">{renderedList}</div>;

}
export default VideoList;