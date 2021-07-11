
import './App.css';
import WordCard from './WordCard';
import _ from 'lodash'


function App() {
  const word =["Hello","STREAM","MOUTAIN","DISNEY","MOVIE","THAILAND"] ;
  const randomWord = _.sample(word);

  const Header=()=>{
    <h1> Play Game </h1>
  }
  return (
    
      <div className="maingame" >
          <WordCard value = {ramdomWord}/>
      </div>
    
  );
}

export default App;
