import { Footer, Header } from "./components"
import { MainPage } from "./page"
import { LucyColors } from "./lucyStyling"
import { Route, Switch } from "wouter"
import { useEffect, useState } from "react"
import ControllerRequest from "./api/controllerRequest"
import CurRequestState from "./models/enums/curRequestState"
import { Axios, AxiosError } from "axios"

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
    setIsVeryfied(result instanceof AxiosError)
    console.log("Controller request = ", result)
    console.log("isVeryfied", isVeryfied)
  }, [])

  return(
    <div style={indexCSS}>
      <Header />
      <MainPage />
      <Footer />
    </div>
  )
}

export default App