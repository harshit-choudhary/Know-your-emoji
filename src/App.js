import "./styles.css";
import React,{useState} from "react";

var emojiDictionary = {
  '😊': 'Smiling',
  '😍': 'Loving',
  '🤣': 'Lauging',
  '❤️': 'Heart',
}
var emojisWeKnow = Object.keys(emojiDictionary)

export default function App() {
    const[meaning,setEmoji]=useState('')

    function inputChangeHandler(event){
      var userInput = event.target.value;
      var meaning = emojiDictionary[userInput];
      setEmoji(meaning);
    }
    
    function emojiClickHandler(emoji){
      var meaning = emojiDictionary[emoji];
      setEmoji(meaning)
    }
 
  return (
    <div className="App">
      <h1>Emoji Interpreter!</h1>
      <div style={{height:"2rem",border:"2px solid black",width:"12rem",margin:"auto",fontSize:"1.5rem"}}>{meaning}</div>

      <h2>Emojis we know</h2>
      {emojisWeKnow.map(function (emoji){
        return (<span onClick={() => emojiClickHandler(emoji)} style={{fontSize:"2rem",padding: "0.5rem",cursor:"pointer"}} key={emoji}>{emoji}</span>)
      })}
    </div>
  );
}
