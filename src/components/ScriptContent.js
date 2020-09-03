import React, { useState,useEffect } from "react";
// import ScriptContext from "./context/ScriptContext";
import { Button, Result, Spin } from "antd";
import "antd/dist/antd.css";
import * as wanakana from 'wanakana';
import { isKanji,toHiragana } from 'wanakana';
import Kuroshiro from "kuroshiro";
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";
import axios from 'axios'
import Script from "./Script/Script";




// async function translate(text){
//   const kuroshiro = new Kuroshiro();
//   const result = await kuroshiro
//   .convert(text, {mode:"furigana", to:"hiragana"})
//   .then(result=>{
//     console.log(result)
//   })
//   return result;
// }


function ScriptContent (props) {
  let { jaSub } = props
  const fullContent = jaSub.reduce((content, item) => (content + item.content), '')
 
  // const kana = "来週の参観日の授業で皆さんの作文を読みたいと思います<br>今日は私の生まれた本当彼氏がいる"
 
  const kana = fullContent.split('<br>')
  kana.pop()
  console.log(kana)
  const [script, setScript] = useState(fullContent)
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
        
        setLoading(false)
        console.log(res.data.result)
        setScript(pre => {
          let temp = res.data.result.replace(/&lt;br&gt;/g, `<br>`)
          return temp
        })
        // console.log(script)
        
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
  
  // const splitScript = (script, cb) =>  {
  //   const result = cb(script);
  //   const script = result.split("<br>");
  //   script.pop();
  //   setScript(script);


  // }
 
    return (
      

        <div className="script">
          
          {
            !furi ? 
            (<Button 
              onClick={() => translate(script)}
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
            <div>
              { 
                isLoading ? <Spin size='small'/> : /*<p dangerouslySetInnerHTML={{__html : kana}}></p>*/ 
                <div style={{
                    padding: "0 10px",
                    maxHeight: "200px",
                    overflowY : 'scroll'
                }}>
                  {
                    kana.map((item, index) => 
                      <Script 
                        key={index} 
                        content={( <p>{item}</p> )} 
                        time={jaSub[index].minute} 
                      />
                    )
                  }
                </div>
              }
            </div> :
            <div style={{
                padding: "0 10px",
                maxHeight: "200px",
                overflowY : 'scroll'
              }}
            >
              {
                script.split('<br>').slice(0, -1).map((item, index) => 
                  <Script 
                    key={index} 
                    content={( <p dangerouslySetInnerHTML={{__html : item}}></p> )} 
                    time={jaSub[index].minute} 
                  />
                )
              }
            </div>
          }
          </div>
        </div>

    );
  
}


export default ScriptContent;
