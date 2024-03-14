import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
     <h1>{score}</h1>
    <p>Total Score</p>
        </ScoreContainer>
  )
}

export default TotalScore

const ScoreContainer = styled.div`
    * {
        margin: 0;
        padding: 0;
        text-align: center;
        max-width: 150px;
    }
    h1 {
        font-size: 100px;
        
    }

    p {
        font-size: 24px;
        font-weight: 500;
    }
`