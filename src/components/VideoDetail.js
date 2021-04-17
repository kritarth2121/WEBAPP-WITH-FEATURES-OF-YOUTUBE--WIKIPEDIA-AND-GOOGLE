import React from 'react';
import '../css/VideoDetail.css';

const VideoDetail =({ video }) => {
    if(!video){
        return <div className="load">Loading...</div>
    }
    const videosrc=`https://www.youtube.com/embed/${video.id.videoId}`;
    return(
        <div className="videoo">
            <div className="ui embed">
                <iframe title="video player" src={videosrc}></iframe>

            
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>

            </div>
        </div>
    )
}
export default VideoDetail;