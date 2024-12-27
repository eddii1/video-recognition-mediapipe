import React, { useRef, useEffect, useState } from 'react';

import { Pose } from '@mediapipe/pose';
import { drawConnectors, drawLandmarks } from '@mediapipe/pose';

function App() {

  const videoRef = useRef(null);

  const canvasRef = useRef(null);
  const landmarkContainerRef = useRef(null);

  useEffect(() => {
    const canvasCtx = canvasRef.current.getContext("2d");

    const pose = new Pose({
      locateFile:(file2) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/pose${file2}`;
    }
    });

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: false,
      minDetectionConfidence: 0.5,
      minTrackingCondifence: 0.5,
    });

    pose.onResults((results) => {
      canvasCtx.clearRect(0,0,canvasRef.current.width, canvasRef.current.height);

      canvasCtx.drawImage(
        results.image,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height,
      );

      if (results.poseLandmarks){
        drawConnectors(canvasCtx,results.poseLandmarks, Pose.POSE_CONNECTIONS, {
          color: "white",
          linewidth: 2,
        });
        drawLandmarks(canvasCtx,results.poseLandmarks,{
          color:"red",
          linewidth:1,
        });
      }

    });

    const processVideo = async () => {
      if(videoRef.current.readyState >= 2)
        await pose.send({image: videoRef.current});
      requestAnimationFrame(processVideo);
    };

    videoRef.current?.addEventListener("play",processVideo);

    return()=>{
      videoRef.current?.removeEventListener("play", processVideo);
    };


  }, []);

  
  const handleVideo = (e) => {
    const file = e.target.files[0];
    if(!file.type.startsWith("video/")){
      alert("nu este video - te rog selecteaza un video valid")
      console.log("NU E VIDEO");
      return;
    }
    if(file){
      const url = URL.createObjectURL(file);
      videoRef.current.src = url;
      videoRef.current.onloadedmetadata = () => {
        videoRef.current.play();
      }

    }

  }


  return (
    <div>
        <input type='file' accept='video/*' onChange={handleVideo}></input>
        <video ref={videoRef} controls style={{ width:"640px", height:"360px"}}/>
        <canvas ref={canvasRef} width="640" height="360" style={{
          border:"1px solid black", marginTop: "10px"        }} />
    </div>
  );
}

export default App;
