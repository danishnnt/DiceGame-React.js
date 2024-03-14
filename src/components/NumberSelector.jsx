import styled from 'styled-components'
import { useState } from 'react';

const NumberSelector = ({error, number, setNumber}) => {
    
   
    
    const arrNumber = [1,2,3,4,5,6];
  return (
    <NumberSelectorContainer>
        <p>{error}</p>
        <div className='flex'>
        {arrNumber.map((value, i) => (
            <Box isSelected={value === number} 
            key={i} onClick={()=> setNumber(value)}>{value}</Box>
        ))}
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 50px;

 .flex {
    display: flex;
    gap: 24px;
 }
 p {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;

 }

`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 2px solid black;
    display: grid;
    place-items: center;
    font-size: 25px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
`