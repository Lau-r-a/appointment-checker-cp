import { useState } from 'react'
import './App.css'

function App() {
  const [menuContent, setMenuContent] = useState(<></>)

  const createNewDoctorContent = () => {
    setMenuContent(
      <div>
        <p>Doctors name</p>
        <input></input>
        <p>Doctors appointment URL page</p>
        <input></input>
      </div>
    )
    console.log(menuContent)
  }
  const manageCurrentDoctorsContent = () => {
    setMenuContent(
      <div>
        <button onClick={createNewDoctorContent}>
          Create new doctor notification
        </button>
      </div>
    )
  }

  return (
    <div style={{backgroundColor:"Red"}}>
      <h1>Appointment checker</h1>
      <div>
        <button 
        onClick={createNewDoctorContent}>
          Create new doctor notification
        </button>
        <button
        onClick={manageCurrentDoctorsContent}>
          Manage current doctors
        </button>
        <button>Notification Settings</button>
      </div>
      <div>
        {menuContent}
      </div>
    </div>
  )
}

export default App
