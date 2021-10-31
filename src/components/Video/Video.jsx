import React from 'react';
import './Video.scss';

function Video(props) {
    console.log('video props', props);
    return (
      <article className="video"
          onClick={() => {
          props.handleActiveVideo(props.id);
          }}
          >
        <div className="video__leftSection">
        <img className="video__leftSection--image" src={props.image} alt={props.title} />
        </div>
        <div className="video__rightSection">
        <p className="video__rightSection--title">{props.title}</p>
        <h3 className="video__rightSection--channel">{props.channel}</h3>
        </div>
      </article>
    );
  }
  
  export default Video;