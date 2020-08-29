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
  const data = [{
    "videoURL":"https://www.youtube.com/embed/zzQVS7RSliU?enablejsapi=1",
    "jaSub":[
            {"start": 482,"minute":"8:02","times": 2000, "content": "ただいま～<br>"},
            {"start": 487, "minute":"8:07","times": 2000, "content":"お父さんのバッカ～<br>"},
            {"start": 489, "minute":"8:09","times": 3000, "content":"なんだ、なんだい<br>"},
            {"start": 491, "minute":"8:11","times": 4000, "content":"どうして私のことなんてどうでも良かったんでしょう<br>"},
            {"start": 495, "minute":"8:15","times": 2000, "content":"何に言ってんな、こいつ<br>"},
            {"start": 498, "minute":"8:18","times": 4000, "content":"私が生まれたとき、全然病院に来なかったんでしょう<br>"},
            {"start": 502, "minute":"8:22","times": 2000, "content":"いつの話だよ<br>"},
            {"start": 503, "minute":"8:23","times": 4000, "content":"生まれた時と言ってんじゃん～<br>"},
            {"start": 507, "minute":"8:27","times": 4000, "content":"そんな昔の話今更言われてもなぁ<br>"},
            {"start": 511, "minute":"8:31","times": 2000, "content":"そうだよ、丸子、もうよしなさい<br>"},
            {"start": 513, "minute":"8:33","times": 2000, "content":"うるさい～<br>"},
            {"start": 515, "minute":"8:35","times": 4000, "content":"お母さんまでお父さんの見方をするき<br>"},
            {"start": 519, "minute":"8:39","times": 1000, "content":"味方じゃないけど<br>"},
            {"start": 520, "minute":"8:40","times": 2000, "content":"もう済んだことだから<br>"},
            {"start": 524, "minute":"8:44","times": 5000, "content":"お父さんを責めるな、よしなさいといってるの<br>"},
            {"start": 529, "minute":"8:49","times": 2000, "content":"私今聞いたばかりでちっとも済んじゃないよ<br>"},
            {"start": 531, "minute":"8:51","times": 3000, "content":"あ～、丸子の言う通りじゃん<br>"},
            {"start": 534, "minute":"8:54","times": 3000, "content":"ちっとも済んじゃいないよ宏<br>"},
            {"start": 538, "minute":"8:58","times": 4000, "content":"これ、火に油を注ぐことを言うじゃないよ<br>"},
            {"start": 542, "minute":"9:02","times": 4000, "content":"もし私は男の子だったら、毎日見に来たんでしょう<br>"},
            {"start": 544, "minute":"9:04","times": 2000, "content":"行ったかもな、バッカ（妻）<br>"},
            {"start": 547, "minute":"9:07","times": 2000, "content":"行かなかったって言いなよ<br>"},
            {"start": 552, "minute":"9:12","times": 5000, "content":"お姉ちゃんの時ばかり毎日病院に行ったんだって<br>"},
            {"start": 557, "minute":"9:17","times": 3000, "content":"初めての子供の時はみんなそうだ<br>"},
            {"start": 563, "minute":"9:23","times": 6000, "content":"二人目で悪かったね、また女で悪かったね　わ～は～<br>`"}
        ],
    "vietSub":
            [{"start": 482, "minute":"8:02","times": 2000, "content": "Bố về rồi đây<br>"},
            {"start": 487, "minute":"8:07","times": 2000, "content":"Bố ngốc nghếch<br>"},
            {"start": 489, "minute":"8:09","times": 3000, "content":"Cái gì thế<br>"},
            {"start": 491, "minute":"8:11","times": 4000, "content":"Tại sao bố lại để mặc con sao cũng được chứ<br>"},
            {"start": 495, "minute":"8:15","times": 2000, "content":"Con bé này nói cái gì thế hông biết<br>"},
            {"start": 498, "minute":"8:18","times": 4000, "content":"Lúc con sinh ra, bố chẳng thèm đến viện thăm<br>"},
            {"start": 502, "minute":"8:22","times": 2000, "content":"Chuyện khi nào cơ<br>"},
            {"start": 503, "minute":"8:23","times": 4000, "content":" Con nói lúc con sinh còn gì<br>"},
            {"start": 507, "minute":"8:27","times": 4000, "content":"Chuyện xưa lắc bây giờ nói lại bố cũng...<br>"},
            {"start": 511, "minute":"8:31","times": 2000, "content":"Đúng đấy Maruko, bỏ đi nè<br>"},
            {"start": 513, "minute":"8:33","times": 2000, "content":"Mọi người im đi<br>"},
            {"start": 515, "minute":"8:35","times": 4000, "content":"Đến mẹ cũng về phe bố nữa<br>"},
            {"start": 519, "minute":"8:39","times": 1000, "content":"Mẹ không về phe bố,"},
            {"start": 520, "minute":"8:40","times": 2000, "content":"mẹ nói chuyện đã qua rồi đừng trách bố nữa"},
            {"start": 524, "minute":"8:44","times": 5000, "content":" và hãy bỏ qua đi<br>"},
            {"start": 529, "minute":"8:49","times": 2000, "content":"giờ con mới nghe tới, chưa xong đâu<br>"},
            {"start": 531, "minute":"8:51","times": 3000, "content":"Maruko nói đúng đấy<br>"},
            {"start": 531, "minute":"8:54","times": 3000, "content":" Chuyện chưa xong đâu Hiroshi<br>"},
            {"start": 534, "minute":"8:58","times": 4000, "content":"Ông đừng có mà đổ thêm dầu vào lửa<br>"},
            {"start": 538, "minute":"9:02","times": 4000, "content":"Nếu con là con trai thì ngày nào bố cũng tới đúng không<br>"},
            {"start": 542, "minute":"9:04","times": 2000, "content":"Chắc là tới,(đồ ngốc)<br>"},
            {"start": 544, "minute":"9:07","times": 2000, "content":"Anh phải nói là không tới chứ<br>"},
            {"start": 547, "minute":"9:12","times": 5000, "content":"Chỉ có chị 2 là ngày nào bố cũng tới thôi<br>"},
            {"start": 552, "minute":"9:17","times": 3000, "content":" Đẻ đứa đầu ai mà chẳng thế chứ<br>"},
            {"start": 557, "minute":"9:23","times": 6000, "content":"Đứa thứ 2 thì có tội tình gì, rồi con gái thì có tội tình gì chứ hix<br>"},
    ]
  
  }]
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
          src = { data[0]['videoURL'] }
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
            controller.showScript && <ScriptContent jaSub = {data[0]['jaSub']}/>
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
