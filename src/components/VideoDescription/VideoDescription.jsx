import React from "react";
import PropTypes from "prop-types";
import viewsSrc from "../../assets/icons/views.svg";
import likeSrc from "../../assets/icons/likes.svg";
import CommentsList from "../CommentList/CommentsList";
//import VideosList from "../VideosList/VideosList";
import "./VideoDescription.scss";

const VideoDescription = ({ activeVideo }) => {
  const {
    image,
    video,
    title,
    channel,
    timestamp,
    views,
    likes,
    description,
    comments,
  } = activeVideo;

  return (
    <section class="videoProfile">
      <video className="videoProfile__activeVideo" controls poster={image}>
        <source src={video + "?api_key=123"} type="video/mp4" />
      </video>
      <div className="videoProfile__wrapper">
        <div className="videoDetails">
          <h1 className="videoDetails__title">{title}</h1>
          <div className="videoDetails__info">
            <div className="videoDetails__content">
              <p className="videoDetails__content--channel">By {channel}</p>
              <p className="videoDetails__content--date">{timestamp}</p>
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
          <div class="comments__form--left">
            <div class="comments__form--image"></div>
          </div>
          <div class="comments__form--right">
            <div>
              <label class="comments__form--label-tag" htmlFor="name">
                Join the conversation
              </label>
              <textarea
                class="comments__form--text"
                name="comment"
                id="comment"
                placeholder="Add a new comment"
              ></textarea>
            </div>
            <div class="comments__form--sbtwrapper">
              <button class="comments__form--sbt" type="submit">
                Comment
              </button>
            </div>
          </div>
        </form>

        <CommentsList comments={comments} />
        {/* <VideosList videos={video} /> */}
      </div>
    </section>
  );
};

VideoDescription.propTypes = {
  activeVideo: PropTypes.object.isRequired,
};

export default VideoDescription;


