import React, { useEffect, useState, useReducer } from "react";
import { Button, Divider } from "antd";
import "antd/dist/antd.css";
import "./CardVideo.css";
import ScriptContext from "./context/ScriptContext";
import Speaking from "./Speaking";
import ScriptContent from "./ScriptContent";

const initialController = {
  showScript : true,
  showTrans : false,
  showSpeak : false
}

function reducer(state, action){
  switch (action.type) {
    
    case 'showScript':
      return {
        showScript : true,
        showTrans : false,
        showSpeak : false
      }
    
    case 'showTrans':
      return {
        showScript : false,
        showTrans : true,
        showSpeak : false
      }
    
    case 'showSpeak':
      return {
        showScript : false,
        showTrans : false,
        showSpeak : true
      }

    default:
      return state
  }
}

function CardVideo (){


  //controller
  const [controller, dispatch] = useReducer(reducer, initialController);

  // const [showScript, setShowScript] = useState(true)
  // const [showTran, setShowTran] = useState(false)
  // const [showSpeak, setShowSpeak] = useState(false)

  //player
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
            onClick={() => dispatch( { type : 'showScript' } )}
            className="btn"
            type="primary"
          >
            PHỤ ĐỀ
          </Button>
          <Divider className="divide" type="vertical" />
          <Button className="btn"  onClick={() => dispatch( { type : 'showTrans' } )}>
            DỊCH
          </Button>
          <Divider className="divide" type="vertical" />
          <Button 
            onClick={() => dispatch( { type : 'showSpeak' } )}
            className="btn" 
            type="dashed"
          >
            LUYỆN NÓI
          </Button>
          <br />
        </div>
        <div className="card-content">
          {/* <Speaking play={() => {
            player.seekTo(0)
            setTimeout(()=>{
              player.stopVideo()
            },5000)
          }}/> */}
          {/* <ScriptContent /> */}
          {
            controller.showScript && <ScriptContent />
          }
          {
            controller.showTrans && `Translate section`
          }
          {
            controller.showSpeak &&
            <Speaking play={() => {
              player.seekTo(0)
              setTimeout(()=>{
                player.stopVideo()
              },5000)
            }}/>
          }
        </div>
      </div>
    );
  
}
CardVideo.contextType = ScriptContext;
export default CardVideo;
