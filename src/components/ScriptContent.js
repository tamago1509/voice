import React, { useState,useEffect } from "react";
// import ScriptContext from "./context/ScriptContext";
import { Button, Result, Spin } from "antd";
import "antd/dist/antd.css";
import * as wanakana from 'wanakana';
import { isKanji,toHiragana } from 'wanakana';
import Kuroshiro from "kuroshiro";
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";
import axios from 'axios'




// async function translate(text){
//   const kuroshiro = new Kuroshiro();
//   const result = await kuroshiro
//   .convert(text, {mode:"furigana", to:"hiragana"})
//   .then(result=>{
//     console.log(result)
//   })
//   return result;
// }


function ScriptContent () {

  
  const kana = "来週の参観日の授業で皆さんの作文を読みたいと思います<br>今日は私の生まれた本当彼氏がいる"
  const [script, setScript] = useState(kana)
  const [furi, setFuri] = useState(false)
  const [isLoading, setLoading] = useState(false)
  
  function translate(script){
    if(script.indexOf('<ruby>') == -1){
      
      setLoading(true)
      axios.post("https://cors-anywhere.herokuapp.com/https://api.kuroshiro.org/convert", {
      str: script,
      to: 'hiragana',
      mode: 'furigana'
      }, {
        headers : {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
      .then(function (res) {
        console.log(res.data.result)
        setLoading(false)
        setScript(res.data.result.replace(/&lt;br&gt;/g, `<br>`) )
        setFuri(true)
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error);
      });

    } else {
      setFuri(true)
    }
  }
  
  // useEffect(()=>{
    
  // })

    return (
      

        <div className="script">
          
          {
            !furi ? 
            (<Button 
              onClick={()=>{translate(script)}}
              className="btn furigana" 
              type="primary"
              disabled={isLoading}
            >
              Furigana
            </Button>) :
            (<Button 
              onClick={()=>{setFuri(false)}}
              className="btn furigana" 
              type="primary"
            >
              Kana
            </Button>)
          }
          <div className="script-content">
          {
            !furi ? 
            <div>{ isLoading ? <Spin size='small'/> : <p dangerouslySetInnerHTML={{__html : kana}}></p> }</div> :
            <p dangerouslySetInnerHTML={{__html : script}} ></p>
          }
          </div>
        </div>

    );
  
}


export default ScriptContent;
