
import './App.css';
import WordCard from './WordCard';
import _ from 'lodash'


<<<<<<< HEAD
const word = "HELLO";
function App() {
  const word =["Hello","STREAM","MOUTAIN","DISNEY","MOVIE","THAILAND"] ;
  const randomWord = .sample(word);

  return (
    <div className="head">
      <header>
        <h1> Play game </h1>
      </header>
      <div className="maingame" >
          <WordCard value = {randomWord}/>
      </div>
    </div>
=======
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
    
>>>>>>> 9e08288664b8b91b6566fe30c05f93aa67671dde
  );
}

export default App;
