import { useState } from "react"
import data from "./assets/utils"
import List from "./components/List"
import Viz from "./components/Viz"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import "./App.css"

function App() {

  const [dashboards, setDashboard] = useState(data())
  const [currentDashboard, setCurrentDashboard] = useState(dashboards[0])
  const [listStatus, setListStatus] = useState(false)


  return (
    <div className="App">
      <List 
        listStatus={listStatus} 
        setListStatus={setListStatus} 
        dashboards={dashboards}
        setDashboard={setDashboard}
        setCurrentDashboard={setCurrentDashboard}
      />
      <Viz currentDashboard = {currentDashboard} />
      <FontAwesomeIcon className="bars" icon = {faBars} 
      onClick={() => {
        setListStatus(!listStatus)
      }}
      />
    </div>
  );
}

export default App;
