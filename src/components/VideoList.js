import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({videos,onVideoSelect}) => {
    const videoListItems = videos.map((video) => {
            return (
                <VideoListItem
                    onVideoSelect = {(video) => onVideoSelect(video)}
                    key={video.etag}
                    video={video}/>
            );
        });


    return (
            <ul className="col-md-4 list-group">
                {videoListItems}
            </ul>
    );
};
export default VideoList;