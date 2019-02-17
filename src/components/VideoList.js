import React from "react";
import VideoItem from "./VideoItem";

const VideoList = props => {
  const renderedList = props.videos.map(videoRes => {
    return <VideoItem video={videoRes} />;
  });
  //props.videos
  // console.log(props);
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
