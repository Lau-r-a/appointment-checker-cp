import { Button, Input } from "../../lucyStyling"

function LoginPage() {

  const loginBodyCSS: React.CSSProperties = {
    position: "absolute",
    border: "1px solid red",
    marginTop: "100px",
    marginLeft: "2.5vw",
    width: "95vw",
  }
  return(
    <>
      <div
      style={loginBodyCSS}
    >
      <p>
        Email
      </p>
      <Input />
      <p>
        Password
      </p>
      <Input />
      <Button
        children="Login"
      />
    </div>
    </>
  )
}

export default LoginPage