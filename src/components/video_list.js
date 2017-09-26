import React from "react";
import VideoListItem from "./video_list_item";
import PropTypes from "prop-types";

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect} //Property (func onVideoSelect) passed from parent to child. It's rare to go more than two levels deep.
        key={video.etag}
        video={video}
      />
    );
  });

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;

VideoList.propTypes = {
  videos: PropTypes.array,
  onVideoSelect: PropTypes.func
};
