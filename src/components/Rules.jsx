import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const  RulesContainer = styled.div`
 margin-left: 25%;
 margin-top: 125px;
 height: 220px;
 width: 780px;
 background-color: #fbf1f1f1;
 padding: 20px;
 

 h2 {
    display: flex;
    justify-content: center;
    font-size: 40px;
    font-weight: 900;
 }
 .text {
    
    margin-top: 24px;
 }
    
`