import { useState, useRef, useEffect } from "react"


const { tableau } = window


export default function Viz({ currentDashboard, vizStatus}) {
    const [viz, setViz] = useState(null)

    const ref = useRef(null)
    const options = {
        hideTabs: true,
        hideToolbar: true,
        width: "1600px",
        height: "900px",
    }

    const initViz = () => {
        if (viz){
            viz.dispose()
            setViz(null)
        }

        setViz(new tableau.Viz(ref.current, currentDashboard.url, options))
    }

    useEffect(initViz, [currentDashboard])

    return (
        <div className={`viz-container ${vizStatus? "active-viz" : ""}`}>



            <div ref={ref}></div>
        </div>
    )

}

