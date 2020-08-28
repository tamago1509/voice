import React, { useEffect, useState } from "react";
import { Button, Divider } from "antd";
import "antd/dist/antd.css";
import "./CardVideo.css";
import ScriptContext from "./context/ScriptContext";
import Speaking from "./Speaking";


function CardVideo (){

  const [player, setPlayer] = useState(null)
  
  
  useEffect(()=>{
    if(window.YT == undefined){
      function onPlayerStateChange(){}
   
      window.onYouTubeIframeAPIReady = function() {
        let tempPlayer = new window.YT.Player('player', {
          events: {
            'onStateChange': onPlayerStateChange
            
          }
        });
        console.log(tempPlayer)
        setPlayer(pre => {
          return tempPlayer
        })
        
      }
      //add event to window
      // window.addEventListener('onYouTubeIframeAPIReady', onYouTubeIframeAPIReady)
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      // tag.async = true;
      
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      // document.body.appendChild(tag);
      
    // } else {
     

      
      // console.log(player)
      // console.log(window)
      
    // }
    } else {
      console.log(player)

      
      
    }



  }, [player])
  

    return (
      <div className="card-video">
        {/* <div className="player"></div> */}
        <iframe id="player"
          src="https://www.youtube.com/embed/zzQVS7RSliU?enablejsapi=1"
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
          <Speaking play={() => {
            player.seekTo(0)
            setTimeout(()=>{
              player.stopVideo()
            },5000)
          }}/>
        </div>
      </div>
    );
  
}
CardVideo.contextType = ScriptContext;
export default CardVideo;
