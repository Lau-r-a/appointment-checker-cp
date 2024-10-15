import { AllNotifyItems, Footer, Header } from "./components"
import { MainPage } from "./page"
import { LucyColors } from "./lucyStyling"
import { useState } from "react"
import { CurNotifyStateEnum } from "./models"

function App() {
  const indexCSS: React.CSSProperties = {
    background: LucyColors.raisinBlack,
    color: LucyColors.apricot,
    fontFamily: "aileron-ultraLight",
    width: "100vw",
    height: "100vh",
    margin: "0"
  }

  const [curState, setCurState] = useState<CurNotifyStateEnum>(CurNotifyStateEnum.ALLITEMS)

  return(
    <div style={indexCSS}>
      <Header state={curState} setState={setCurState}/>
      <MainPage state={curState}/>
      <Footer />
    </div>
  )
}

export default App