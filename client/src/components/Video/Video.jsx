import React from "react";
import "./Video.scss";
import { Link } from "react-router-dom";

function Video(props) {
  return (
    <Link to={"/videos/" + props.id}>
    <article className="video" >
      <div className="video__leftSection">
        <img
          className="video__leftSection--image"
          src={"http://localhost:8080" + props.image}
          alt={props.title}
        />
      </div>
      <div className="video__rightSection">
        <p className="video__rightSection--title">{props.title}</p>
        <h3 className="video__rightSection--channel">{props.channel}</h3>
      </div>
    </article>
    </Link>
  );
}

export default Video;

