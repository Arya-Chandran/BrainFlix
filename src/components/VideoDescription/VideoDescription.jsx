import React from "react";
import PropTypes from "prop-types";
import imageSrc from "../../assets/images/Mohan-muruge.jpg";
import viewsSrc from "../../assets/icons/views.svg"
import likeSrc from "../../assets/icons/likes.svg"
import addCommentSrc from "../../assets/icons/add_comment.svg"
import CommentsList from "../CommentList/CommentsList";

const VideoDescription = ({ activeVideo }) => {
    const {video, title, channel, timestamp,  description, comments} = activeVideo;
  return (
    <>
      <video width="750" height="500" controls>
      <source src={video} type="video/mp4"/>
      </video>
      <p>{title}</p>
      <p>By {channel}</p>
      <p>{timestamp}</p>
      <img src={viewsSrc} alt="View Icon" />
      <img src={likeSrc} alt="Like Icon" />
      <p>{description}</p>
      <h3>3 comments</h3>
      <h2>Join the conversation</h2>
      <img src={imageSrc} alt="Mohan muruge" />
      <img src={addCommentSrc} alt="Add comment Icon" />
      <CommentsList comments={comments} />
    </>
  );
};

VideoDescription.propTypes = {
  activeVideo: PropTypes.object.isRequired,
};

export default VideoDescription;
