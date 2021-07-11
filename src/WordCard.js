import _, { attempt } from 'lodash';
import React, { useState }from 'react';
import CharacterCard from './CharacterCard';

const prepareStateFromWord = given_word =>{
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt:1,
        guess:'',
        completed: false
    }
}

export default function WordCard(props){
    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c =>{
        console.log (`${c} has been activated.`)
        let guess = state.guess + c 
        setState({...state, guess : guess})

        if(guess.length == state.word.length){  //ถ้าตัวอักษรที่ทาย ครบจำนวนเเล้ว ให้ดูว่าเหมือนกับตัวต้นเเบบไหม
            if (guess == state.word){
                console.log('yeah!')
                setState({...state, completed : true})  // ถ้าเหมือน ถูก
            }else {  
                console.log('reset,next attempt')
                setState({...state,guess: '', attempt: state.attempt + 1 }) // ไม่เหมือน จะ reset เป็น attemp
            }
        }
        
    }

    return (
        <div className="main">
             {
                state.chars.map((c, i) => 
                    <CharacterCard value ={c} key = {i} activationHandler={activationHandler} attempt={state.attempt}/>)
             }
             <p class> {state.attempt}</p>
        </div>
    )
}