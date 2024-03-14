import styled from "styled-components"

function Sgame({toggle}) {
  return (
    <Container>
        <img src="/Images/dices.png"/>
        <div className="content">
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
            
        </div>
    </Container>
  )
}

export default Sgame

const Container = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     height: 100vh;
     width: 100%;

     .content h1 {
        font-size: 110px;
        white-space: nowrap;
     }
`
const Button = styled.button`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 18px;
gap: 10px;
border-radius: 5px;

width: 220px;
height: 44px;

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

`
