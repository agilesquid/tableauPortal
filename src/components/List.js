
import React from "react"
import Viz from "./Viz"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

import ListItem from "./ListItem"


export default function List({ 
        listStatus, 
        setListStatus,
        setVizStatus,
        dashboards,
        setDashboard,
        setCurrentDashboard,
        vizStatus  = Viz.vizStatus,    
    }) {
    return (
        <div className={`list ${listStatus ? "active-list" : ""}`}>

            <div className="list-header">

                <h2>Dashboards</h2>

                <FontAwesomeIcon
                    className="close"
                    icon={faTimes}

                    onClick={() => {
                        setListStatus(!listStatus)
                        setVizStatus(!vizStatus)
                    }}
                />
            </div>
            <div className="list-items">
              
        {dashboards.map((dashboard) => (
          <ListItem
            dashboard={dashboard}
            dashboards={dashboards}
            setDashboard={setDashboard}
            setCurrentDashboard={setCurrentDashboard}
            // React requires the key prop with a unique values on components
            // that have the same props.
            key={dashboard.id}
            id={dashboard.id}
            

          />
        ))}
        
      </div>
    </div>
    )
}