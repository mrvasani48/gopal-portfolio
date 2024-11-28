import { useContext, useEffect, useRef } from "react";
import video from "../../assets/video/3d-abstract-ball.mp4";
import video1 from "../../assets/video/earth-lines-sphere.mp4";
import video2 from "../../assets/video/liquids-wavy.mp4";
import video3 from "../../assets/video/simple-strings.mp4";
import video4 from "../../assets/video/water-waves.mp4";

import { themeContext } from "App";

const BackgroundVideo = () => {
  const { shapes } = useContext<any>(themeContext);
  const videoRef = useRef();

  // Map the shapes to corresponding video sources
  const shapeVideos: any = {
    "Earth Lines Sphere": video1,
    "3D Abstract Ball": video,
    "Water Waves": video4,
    "Liquids Wavy": video2,
    "Simple Strings": video3,
    "Solid Color": "",
  };

  // Get the video source based on the selected shape
  const currentVideo = shapeVideos[shapes] || video;

  useEffect(() => {
    if (videoRef && shapes !== "Solid Color") {
      videoRef.current.src = currentVideo;
    }
  }, [shapes, videoRef]);

  return (
    <div>
      {shapes !== "Solid Color" ? (
        <video
          className="body-overlay"
          loop={true}
          autoPlay
          muted
          ref={videoRef}
          src={currentVideo}
          type="video/mp4"
        ></video>
      ) : null}
    </div>
  );
};

export default BackgroundVideo;
