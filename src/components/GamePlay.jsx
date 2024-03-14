import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from 'react'
import Rules from './Rules.jsx'

function GamePlay() {
    const [score, setScore] = useState(0);
    const [number, setNumber] = useState();
    const [currentDice,setCurrentDice] = useState(1);
    const [error , setError] = useState("");
    const [showRules , setShowRules ] = useState(false)
      
    const resetScore = () => {
      setScore(0);
    }

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
      }
      

    const roleDice = () => {
        if(!number) {
            setError("You Have Not Selected Any Number");
            return;
        }
        setError("");
        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice ((prev) => randomNumber);

        if(!number) return;

        if(number===randomNumber) {
            setScore((prev) => prev + randomNumber);
        }
        else {
            setScore((prev) => prev - 2);
        }
        
        setNumber(undefined);
    };



  return (
    <><MainContainer>
        <div className='top_section'>
        <TotalScore score={score}/>
        <NumberSelector error={error} number={number} setNumber={setNumber} />
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice}  />
        <div className='btns'>
            <button onClick={resetScore} className='btn1'>Reset Score</button>
            <button onClick={() => setShowRules((prev)  => !prev)}
             {
              ...showRules ? "Hide" : "Show" 
            } className='btn2'>Show Rules</button>
        </div>
        {showRules &&  <Rules/>}
    </MainContainer>
    </>
  )
}

export default GamePlay

const MainContainer = styled.main`
  .top_section {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  button {
    width: 200px;
    height: 44px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 18px;
    gap: 10px;
    border-radius: 5px;
     background-color: black;
     border: none;
     color: white;
     font-size: larger;
     font-weight: 800;
     border:2px solid transparent ;
     cursor: pointer;
     transition: all 0.5s ease-in-out;


 &:hover {
    background-color: #b6d1fcea;
    color: black;
    border:2px solid black ;
    transition: all 0.5s ease-in-out;
 }
  }

  .btn1 {
    position: absolute;
    left: 43.5%;
    color: black;
    background-color: white;
    border:2px solid black
  }
  .btn2 {
    position: absolute;
    left: 43.5%;
    bottom: 3vh;
    
  }

`