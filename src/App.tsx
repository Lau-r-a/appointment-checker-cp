import { Footer, Header } from "./components"
import { MainPage } from "./page"
import { LucyColors } from "./lucyStyling"
import { useEffect, useState } from "react"
import ControllerRequest from "./api/controllerRequest"
import CurRequestState from "./models/enums/curRequestState"
import LoginPage from "./page/loginPage/loginPage"

function App() {

  const indexCSS: React.CSSProperties = {
    background: LucyColors.raisinBlack,
    color: LucyColors.apricot,
    fontFamily: "aileron-ultraLight",
    width: "100vw",
    height: "100vh",
    margin: "0"
  }

  const [isVeryfied, setIsVeryfied] = useState<boolean>(false)

  useEffect(() => {
    const result = ControllerRequest(CurRequestState.GETALL)
    result
      .then(() => {
        setIsVeryfied(true)
      })
      .catch(() => {
        setIsVeryfied(false)
      })
  }, [])

  if (isVeryfied) {
    return(
      <div style={indexCSS}>
        <Header />
        <MainPage />
        <Footer />
      </div>
    )
  }
  else {
    return(
      <div style={indexCSS}>
        <LoginPage />
      </div>
    )
  }
  
}

export default App