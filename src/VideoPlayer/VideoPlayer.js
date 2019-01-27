import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlayIcon from './PlayIcon';
import VideoThumbnail from 'react-video-thumbnail';
import './styles/videoPlayer.css';

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showThumb: false
    };
    this.videoRef = {};
  }

  thumbLoaded() {
    this.setState({ showThumb: true });
  }

  videoPlay(e) {
    e.preventDefault();
    this.setState({ showVideo: true, showThumb: false });
    this.videoRef.play();
  }

  render() {
    return (
      <div className="video-player">
        <video className="video-player__video" controls ref={video => (this.videoRef = video)} preload="metadata" playsInline>
          <source src={this.props.videoUrl} type="video/mp4" />
          your browser does not support the video tag.
        </video>
        <a href="#" onClick={e => this.videoPlay(e)}>
          <div className="video-player__thumbnail-container" style={{ display: this.state.showThumb ? 'block' : 'none' }}>
            <div className="video-player__thumbnail-container__thumbnail" onLoad={e => this.thumbLoaded(e)}>
              <VideoThumbnail videoUrl={this.props.videoUrl} snapshotAtTime={this.props.snapshotAt} />
              <div className="video-player__icon-container">
                <PlayIcon className="video-player__icon-container__play-icon" />
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  videoUrl: PropTypes.string,
  snapshotAt: PropTypes.number
};
