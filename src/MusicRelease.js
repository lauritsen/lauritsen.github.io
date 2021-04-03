import React from 'react';

const MusicRelease = (props) => (
  <div className='music-release'>
    <a
      href={props.release.href}
      target='_blank'
      rel='nofollow noopener noreferrer'
    >
      <img
        src={props.release.cover}
        alt={props.release.title}
        className='cover-art'
      ></img>
      <div className='release-description'>
        <div>
          {props.release.band}
          <br />
          {props.release.title} ({props.release.year})
        </div>
        <div>{props.release.myRole}</div>
      </div>
    </a>
  </div>
);

export default MusicRelease;
