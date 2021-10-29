import React from 'react';
import './Video.scss';



function Video(props) {
    console.log('video props', props);
    return (
      <article
          onClick={() => {
          props.handleActiveVideo(props.id);
          }}
          >
        <img className="image" src={props.image} alt={props.title} />
        <p>{props.title}</p>
        <h3>{props.channel}</h3>
      </article>
    );
  }
  
  export default Video;