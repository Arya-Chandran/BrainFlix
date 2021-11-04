import React from "react";
import "./VideoUploadPage.scss";
import videoThumbnail from "../../assets/icons/Upload-video-preview.jpg";

const VideoUploadPage = () => {
  return (
    <div className="upload">
      <div className="upload__wrapper">
        <h1 className="upload__title">Upload Video</h1>
        <form className="upload__form" action="">
          <div>
            <h4 className="upload__form--thumbnail">Video Thumbnail</h4>
            <img
              className="upload__form--image"
              src={videoThumbnail}
              alt="Video Thumbnail"
            />
          </div>
          <div className="upload__form--top-container">
            <label className="upload__form--label-tag" htmlFor="">
              Title your video
            </label>
            <input
              className="upload__form--title"
              type="text"
              placeholder="Add a title to your video"
            />

            <label className="upload__form--label-tag" htmlFor="name">
              Add a video description
            </label>
            <textarea
              className="upload__form--description"
              name="description"
              id="description"
              placeholder="Add a description to your video"
            ></textarea>
          </div>
        </form>
        <div className="upload__bottom-container">
          <div className="upload__publishWrapper">
            <button className="upload__publish">Publish</button>
          </div>
          <h2 className="upload__cancel">Cancel</h2>
        </div>
      </div>
    </div>
  );
};



export default VideoUploadPage;
