import React, { Component,useEffect,useState } from "react";


function Speaking() {
  const initialResult = 0;
const [transcript, setTran] = useState('');
const [time,setTime] = useState('1:23')
const [script,setScript] = useState('来週の参観日の授業で皆さんの作文を読みたいと思います');
const [result, setResult] = useState(initialResult);

const SpeechRecognition = window.SpeechRecognition|| window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = ()=>{
    console.log('voice is activated, you can speak to microphone')


}
const resetTran = () =>{
  setTran('')
  setResult(0)
}

useEffect(()=>{
   recognition.onresult =(event) =>{
    const current = event.resultIndex;
   let transcript = event.results[current][0].transcript;
    let splitTran = transcript.split('');
    let checkTran = script.split('')
    let oneTran = [];
    checkTran.map(word=>{
      if(oneTran.indexOf(word) ===-1){
        oneTran.push(word)
      }
    })
    
   
    for(let i = 0; i <splitTran.length; i ++){
      if(oneTran.indexOf(splitTran[i])!==-1){
        setResult(pre => pre +1);
        
      }
      
    }

    setTran(transcript)    
    }
});
  

  return (
    <div>
      <div className="timeline">
        <button>{time}</button>
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
    <p>{transcript}</p>
    <p className="result">{result}/{script.length}</p>
    </div>
    </div>
  );
}

export default Speaking;
