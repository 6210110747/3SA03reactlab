
import './App.css';
import WordCard from './WordCard';
import _ from 'lodash'



function App() {
  const word =["Hello","STREAM","MOUTAIN","DISNEY","MOVIE","THAILAND"] ;
  const randomWord = _.sample(word);

  
  return (
    <div className="head">
      <header>
        <h1> React Game </h1>
      </header>
      <div className="maingame" >
          <WordCard value = {randomWord}/>
      </div>
      
        
      
    </div>

  );
}

export default App;
