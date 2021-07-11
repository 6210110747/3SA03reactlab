
import './App.css';
import WordCard from './WordCard';

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
  );
}

export default App;
