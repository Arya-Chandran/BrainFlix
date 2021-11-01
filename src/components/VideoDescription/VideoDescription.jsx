import React from "react";
import PropTypes from "prop-types";
import viewsSrc from "../../assets/icons/views.svg";
import likeSrc from "../../assets/icons/likes.svg";
import CommentsList from "../CommentList";
import "./VideoDescription.scss";

const VideoDescription = ({ activeVideo }) => {
  const { title, channel, timestamp, views, likes, description, comments } = activeVideo;

  const newTimestamp = new Date(activeVideo.timestamp)
    .toLocaleString()
    .split(",")[0];

  return (
    <div className="videoProfile">
      <div className="videoProfile__wrapper">
        <div className="videoDetails">
          <h1 className="videoDetails__title">{title}</h1>
          <div className="videoDetails__info">
            <div className="videoDetails__content">
              <p className="videoDetails__content--channel">By {channel}</p>
              <p className="videoDetails__content--date">{newTimestamp}</p>
            </div>
            <div className="videoDetails__container">
              <div className="videoDetails__views">
                <img
                  className="videoDetails__views--icon"
                  src={viewsSrc}
                  alt="View Icon"
                />
                <p className="videoDetails__views--count">{views}</p>
              </div>
              <div className="videoDetails__likes">
                <img
                  className="videoDetails__likes--icon"
                  src={likeSrc}
                  alt="Like Icon"
                />
                <p className="videoDetails__likes--count">{likes}</p>
              </div>
            </div>
          </div>
          <p className="videoDetails__description">{description}</p>
        </div>
        <h5 className="comments__heading">{comments.length} Comments</h5>
        <form className="comments__form">
          <div className="comments__form--left">
            <div className="comments__form--image"></div>
          </div>
          <div className="comments__form--right">
            <div className="comments__form--top">
              <label className="comments__form--label-tag" htmlFor="name">
                Join the conversation
              </label>
              <textarea
                className="comments__form--text"
                name="comment"
                id="comment"
                placeholder="Add a new comment"
              ></textarea>
            </div>
            <div className="comments__form--sbtwrapper">
              <button className="comments__form--sbt" type="submit">
                Comment
              </button>
            </div>
          </div>
        </form>

        <CommentsList comments={comments} />
      </div>
    </div>
  );
};

VideoDescription.propTypes = {
  activeVideo: PropTypes.object.isRequired
};

export default VideoDescription;
