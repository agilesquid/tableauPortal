export default function ListItem({
    dashboard,
    dashboards,
    setDashboard,
    setCurrentDashboard,
    id,
}) {

    const dashboardSelectHandler = () => {
        setCurrentDashboard(dashboard)
        const newDashboard = dashboards.map((dashboard) => {
            if (dashboard.id === id) {
                return {
                    ...dashboard,
                    active: true,
                }
            } else {
                return {
                    ...dashboard,
                    active: false,
                }
            }
        })

        setDashboard(newDashboard)

    }

    return (
        <div 
            className={`list-item ${dashboard.active ? "selected" : ""}`}
            onClick={dashboardSelectHandler}
            >
                <img src={dashboard.image} alt={dashboard.name}></img>
                <div className="dashboard-desctiption">
                    <h3>{dashboard.name}</h3>
                    <h4>{dashboard.author}</h4>
                </div>
            </div>
    )
}