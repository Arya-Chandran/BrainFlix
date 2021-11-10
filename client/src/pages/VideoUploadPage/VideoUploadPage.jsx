import { Component } from "react";
import "./VideoUploadPage.scss";
import { Link } from "react-router-dom";
import videoThumbnail from "../../assets/icons/Upload-video-preview.jpg";

class VideoUploadPage extends Component {
  state = {
    title: "",
    description: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  isFormValid = () => {
    if (!this.state.title || !this.state.description) {
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isFormValid()) {
      alert("Upload video successfully");
      this.props.history.push("/", {});
    } else {
      alert("Failed to upload");
    }
  };

  render() {
    return (
      <div className="upload">
        <div className="upload__wrapper">
          <h1 className="upload__title">Upload Video</h1>
          <form onSubmit={this.handleSubmit} className="upload__form" action="">
            <div className="upload__form--top-container">
              <div className="upload__form--topBox">
                <h4 className="upload__form--thumbnail">Video Thumbnail</h4>
                <img
                  className="upload__form--image"
                  src={videoThumbnail}
                  alt="Video Thumbnail"
                />
              </div>
              <div className="upload__form--uploadDetails">
                <div className="upload__form--bottomBox">
                  <label className="upload__form--label-tag" htmlFor="">
                    Title your video
                  </label>
                  <input
                    className="upload__form--title"
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder="Add a title to your video"
                  />
                </div>
                <label className="upload__form--label-tag" htmlFor="name">
                  Add a video description
                </label>
                <textarea
                  className="upload__form--description"
                  name="description"
                  id="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                  placeholder="Add a description to your video"
                ></textarea>
              </div>
            </div>
            <div className="upload__form--bottom-container">
              <div className="upload__form--publishWrapper">
                <button
                  type="submit"
                  className="upload__form--publish"
                  onClick={(e) => this.handleSubmit(e)}
                >
                  Publish
                </button>
              </div>
              <div className="upload__form--cancelWrapper">
                <Link to="/">
                  <button className="upload__form--cancel">Cancel</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default VideoUploadPage;
