import { useState, useRef, useEffect } from "react"

const { tableau } = window

export default function Viz({ currentDashboard }) {
    const [viz, setViz] = useState(null)

    const ref = useRef(null)
    const options = {
        hideTabs: true,
        hideToolbar: true,
        width: "900px",
        height: "540px",
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
        <div className="viz-container">
            <h2>{currentDashboard.name}</h2>
            <h3>{currentDashboard.author}</h3>
            <div ref={ref}></div>
        </div>
    )

}

