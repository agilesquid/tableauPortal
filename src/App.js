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
  const [vizStatus, setVizStatus] = useState(false)


  return (
    <div className="App">
      <List 
        listStatus={listStatus} 
        setListStatus={setListStatus}
        vizStatus={vizStatus} 
        setVizStatus={setVizStatus}
        dashboards={dashboards}
        setDashboard={setDashboard}
        setCurrentDashboard={setCurrentDashboard}
      />
      <div className = {`viz-container ${vizStatus? "active-viz" : ""}`}>
      <Viz currentDashboard = {currentDashboard}/>
      <FontAwesomeIcon className="bars" icon = {faBars} 
      onClick={() => {
        setListStatus(!listStatus)
        setVizStatus(!vizStatus)
      }}
      />
      </div>
    </div>
  );
}

export default App;
