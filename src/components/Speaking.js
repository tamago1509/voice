import React, { Component,useEffect,useState } from "react";


function Speaking(props) {
  let { jaSub } = props
  
  console.log(jaSub);

  const [transcript, setTran] = useState('');
  const [time,setTime] = useState(jaSub[0].minute)
  const [script,setScript] = useState(jaSub[0].content.replace(/<br>/g, ""));

  const [resultCheck, setResultCheck] = useState([])

  const SpeechRecognition = window.SpeechRecognition|| window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  recognition.onstart = ()=>{
      console.log('voice is activated, you can speak to microphone')


  }
  const resetTran = () =>{
    setResultCheck([])
    setTran('')
    
  }

  useEffect(()=>{
      recognition.onresult =(event) =>{
        const current = event.resultIndex;
        let transcript = event.results[current][0].transcript.replace(/ /g, "");
        let voice = transcript.split(''); //voice
        let checkTran = script.split('') //data
        
        
      
        let res = [] // { char : '', isTrue : 0 }
        // let step = 0 //3

        for(let i = 0; i < checkTran.length; i++){

          if(checkTran[i] == voice[i]){
            
            res.push({
              char : checkTran[i],
              isTrue : 1
            })
          } else {
              res.push({
                char : checkTran[i],
                isTrue : 0
              })
          }

        }
        setResultCheck(res)
        setTran(transcript) 
          
      }
  });
  

  return (
    <div>
      <div className="timeline">
        <button onClick={() => {
            props.play(0)
            // console.log(jaSub[0])
          }}>{time}</button>
        <span className="speak-content">
          {script}
        </span>
      </div>
      <div className="choice-btn">
        <button className="choi-btn">
          <img
            width="20"
            src="https://image.flaticon.com/icons/svg/565/565296.svg"
          />
        </button>
        <button onClick={()=>recognition.start()}className="talk choi-btn">
          <img
            width="20"
            src="https://image.flaticon.com/icons/svg/709/709682.svg"
          />
        </button>
        <button onClick= {()=> resetTran()}className="choi-btn">
          <img
            width="20"
            src="https://image.flaticon.com/icons/svg/60/60825.svg"
          />
        </button>
        <button className="choi-btn">
          <img
            width="20"
            src="https://image.flaticon.com/icons/svg/758/758569.svg"
          />
        </button>
      </div>
      <div className="content-check">
        <p className="speaking label">Your voice: </p>
        <p className="voice-tran">{transcript}</p>
        <p className="result label">Result:</p>
        <div >
          
          {
            resultCheck.map((item, index) => (<span key={index} className = {item.isTrue ? 'green' : 'red'}>{`${item.char} `}</span>))
          }
        </div>
      </div>
    </div>
  );
}

export default Speaking;
