import { Footer, Header } from "./components"
import { MainPage } from "./page"
import { LucyColors } from "./lucyStyling"

function App() {
  const indexCSS: React.CSSProperties = {
    background: LucyColors.raisinBlack,
    color: LucyColors.apricot,
    fontFamily: "aileron-ultraLight",
    width: "100vw",
    height: "100vh",
    margin: "0"
  }

  return(
    <div style={indexCSS}>
      <Header />
      <MainPage />
      <Footer />
    </div>
  )
}

export default App