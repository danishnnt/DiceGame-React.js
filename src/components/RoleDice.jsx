import styled from 'styled-components'
import { useState } from 'react';

const RoleDice = ({roleDice,currentDice}) => {
    
  return (
    <DiceContainer>
        <div className='dice'>
            <img onClick={roleDice} src={`/Images/dice/dice_${currentDice}.png`} alt="1" />
        </div>
        <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 6vh;
cursor: pointer;

p {
    font-size: 24px;

}

`