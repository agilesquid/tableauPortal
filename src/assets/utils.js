import { v4 as uuidv4 } from "uuid"

export default function dashboardList() {
  return [
    {
      name: "Backorder Details",
      author: "",
      image:
        "https://github.com/agilesquid/tableauportal/blob/main/src/assets/BackorderDetails.png?raw=true",
      url:
        "https://tableau.enlinx.com/views/BackorderDetails_15989935222450/Backorders?:origin=card_share_link&:embed=n",
      id: uuidv4(),
      active: true,
    },
    {
      name: "Inventory Days On Hand",
      author: "",
      image:
        "https://github.com/agilesquid/tableauportal/blob/main/src/assets/inventoryDaysOnHand.png?raw=true",
      url:
        "https://tableau.enlinx.com/views/InventoryDaysOnHand_15988964986080/InventoryDaysOnHand?:origin=card_share_link&:embed=n",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Open Order Summary",
      author: "",
      image:
        "https://github.com/agilesquid/tableauportal/blob/main/src/assets/openOrderSummary.png?raw=true",
      url:
        "https://tableau.enlinx.com/views/OpenOrderSummary_15990688480440/OpenOrderSummary?:origin=card_share_link&:embed=n",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Order Forecast",
      author: "",
      image:
        "https://github.com/agilesquid/tableauportal/blob/main/src/assets/orderForecast.png?raw=true",
      url:
        "https://tableau.enlinx.com/views/OrderForecast/OrderForecast?:origin=card_share_link&:embed=n",
      id: uuidv4(),
      active: false,
    },
    {
        name: "Shipping Volume (Day Over Day)",
        author: "",
        image:
          "https://github.com/agilesquid/tableauportal/blob/main/src/assets/shippingVolume.png?raw=true",
        url:
          "https://tableau.enlinx.com/views/ShippingVolumeDayOverDay_15988991620610/TotalOrderswithClientFilter?:origin=card_share_link&:embed=n",
        id: uuidv4(),
        active: false,
      },
  ]
}