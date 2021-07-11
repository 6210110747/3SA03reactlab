
import './App.css';
import React, { useState }from 'react';
import WordCard from './WordCard';
import _ from 'lodash'



function App() {
  const word =["Hello","STREAM","MOUTAIN","DISNEY","MOVIE","THAILAND"] ;
  const randomWord = _.sample(word);

  const newGame = () => {
    window.location.reload()
  }
  
  return (
    <div className="head">
      <header>
        <h1> React Game </h1>
      </header>
      <div className="maingame" >
          <WordCard value = {randomWord}/>
      </div>
      <button className="newgame" onClick={newGame}>
          Restart
      </button>
        
      
    </div>

  );
}

export default App;
