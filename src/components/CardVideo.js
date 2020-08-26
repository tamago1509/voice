import React, { useEffect } from "react";
import { Button, Divider } from "antd";
import "antd/dist/antd.css";
import "./CardVideo.css";
import ScriptContext from "./context/ScriptContext";
import Speaking from "./Speaking";

// var player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     events: {
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }
// var done = false;
//     function onPlayerStateChange(event) {
//       if (event.data == YT.PlayerState.PLAYING && !done) {
//         setTimeout(stopVideo, 6000);
//         done = true;
//       }
//     }
//     function stopVideo() {
//       player.stopVideo();
//     }

function CardVideo (){

  
  

    return (
      <div className="card-video" id="player">
        <iframe
          src="https://www.youtube.com/embed/zzQVS7RSliU"
          frameborder="0"
          allow="accelerometer; autoplay; 
            encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="card-btn">
          <Button
            onClick={() => {
              this.context.setShow(!this.context.isShow);
            }}
            className="btn"
            type="primary"
          >
            PHỤ ĐỀ
          </Button>
          <Divider className="divide" type="vertical" />
          <Button className="btn">DỊCH</Button>
          <Divider className="divide" type="vertical" />
          <Button className="btn" type="dashed">
            LUYỆN NÓI
          </Button>
          <br />
        </div>
        <div className="card-content">
          <Speaking />
        </div>
      </div>
    );
  
}
CardVideo.contextType = ScriptContext;
export default CardVideo;
