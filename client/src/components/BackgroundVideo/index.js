import React, { Component } from 'react';
import Cover from 'react-video-cover';
import ProjectorVideo from '../../images/projector_video.mp4';

const style = {
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: -1,
};
class BackgroundVideo extends Component {

  state = {
    resizeNotifier: () => {},
  }

  render() {
    const videoOptions = {
      src: ProjectorVideo,
      autoPlay: true,
      muted: true,
      loop: true,
    };

    return (
        <div style={style} >
          <Cover
            videoOptions={videoOptions}
            remeasureOnWindowResize
            getResizeNotifier={resizeNotifier => {
              this.setState({
                resizeNotifier,
              });
            }}
          />
        </div>
    );
  }
}

export default BackgroundVideo;