import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(videoRes => {
    return (
      <VideoItem
        key={videoRes.id.videoId}
        onVideoSelect={onVideoSelect}
        video={videoRes}
      />
    );
  });
  //props.videos
  console.log(videos);
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
