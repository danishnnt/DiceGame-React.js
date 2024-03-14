import { useState } from "react"
import Sgame from "./components/Sgame"
import GamePlay from "./components/GamePlay"



function App() {

  const [isGameStarted , setIsgameStarted] = useState(false)

  const ToggleGamePlay = () => {
    setIsgameStarted ((prev) => (!prev));
  }
  
  return (
    <>
    {
      isGameStarted ? <GamePlay/> : <Sgame toggle={ToggleGamePlay}/>
    }
    </>
  )
}

export default App


