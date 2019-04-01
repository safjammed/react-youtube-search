import React from 'react';

const VideoDetails = ({video}) => {
    if (!video){
        return (<div>LOADING...</div>);
    }


    return (
        <div className="col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe
                    className="embed-responsive-item"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                />
            </div>
            <div className="video-detail">
                <div className="details">
                    <h5>{video.snippet.title}</h5>
                    <p className="text-info">
                        <a href={`http://youtube.com/channel/${video.snippet.channelId}`} target={"_blank"}>{video.snippet.channelTitle}</a>
                    </p>
                    <p className="my-2">{video.snippet.description}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoDetails;