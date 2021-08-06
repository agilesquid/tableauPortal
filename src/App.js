import { useState } from "react"
import data from "./assets/utils"
import Viz from "./components/Viz"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import "./App.css"

function App() {

  const [dashboards, setDashboard] = useState(data())
  const [currentDashboard, setCurrentDashboard] = useState(dashboards[0])

  console.log(currentDashboard)

  return (
    <div className="App">

      <Viz currentDashboard = {currentDashboard} />
      <FontAwesomeIcon className="bars" icon = {faBars} />
    </div>
  );
}

export default App;
