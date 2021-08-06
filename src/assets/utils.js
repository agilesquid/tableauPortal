import { v4 as uuidv4 } from "uuid"

export default function dashboardList() {
  return [
    {
      name: "Total Watch Time",
      author: "Bonnie Sanchez",
      image:
        "https://raw.githubusercontent.com/robcrock/embedded-side-nav/main/src/images/img-01.png",
      url:
        "https://10ax.online.tableau.com/t/developmentonlydev595736/views/DashboardList/kpi1",
      id: uuidv4(),
      active: true,
    },
    {
      name: "Average Watch Time",
      author: "Clarence Ward",
      image:
        "https://raw.githubusercontent.com/robcrock/embedded-side-nav/main/src/images/img-02.png",
      url:
        "https://10ax.online.tableau.com/t/developmentonlydev595736/views/DashboardList/kpi2",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Total Video Views",
      author: "Theresa Young",
      image:
        "https://raw.githubusercontent.com/robcrock/embedded-side-nav/main/src/images/img-03.png",
      url:
        "https://10ax.online.tableau.com/t/developmentonlydev595736/views/DashboardList/kpi3",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Total Unique Views",
      author: "Virginia Martin",
      image:
        "https://raw.githubusercontent.com/robcrock/embedded-side-nav/main/src/images/img-04.png",
      url:
        "https://10ax.online.tableau.com/t/developmentonlydev595736/views/DashboardList/kpi4",
      id: uuidv4(),
      active: false,
    },
  ]
}