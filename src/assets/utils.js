import { v4 as uuidv4 } from "uuid"

export default function dashboardList() {
  return [
    {
      name: "Backorder Details",
      author: "Alex",
      image:
        "https://github.com/agilesquid/tableauportal/blob/4ac9cb15851efa21a6408bc83f188f63260db7b5/src/assets/BackorderDetails.png",
      url:
        "https://tableau.enlinx.com/views/BackorderDetails_15989935222450/Backorders?:origin=card_share_link&:embed=n",
      id: uuidv4(),
      active: true,
    },
    {
      name: "Inventory Days On Hand",
      author: "Alex",
      image:
        "https://github.com/agilesquid/tableauportal/blob/4ac9cb15851efa21a6408bc83f188f63260db7b5/src/assets/inventoryDaysOnHand.png",
      url:
        "https://tableau.enlinx.com/views/InventoryDaysOnHand_15988964986080/InventoryDaysOnHand?:origin=card_share_link&:embed=n",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Open Order Summary",
      author: "Alex",
      image:
        "https://github.com/agilesquid/tableauportal/blob/4ac9cb15851efa21a6408bc83f188f63260db7b5/src/assets/openOrderSummary.png",
      url:
        "https://tableau.enlinx.com/views/OpenOrderSummary_15990688480440/OpenOrderSummary?:origin=card_share_link&:embed=n",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Order Forecast",
      author: "Alex",
      image:
        "https://github.com/agilesquid/tableauportal/blob/4ac9cb15851efa21a6408bc83f188f63260db7b5/src/assets/orderForecast.png",
      url:
        "https://tableau.enlinx.com/views/OrderForecast/OrderForecast?:origin=card_share_link&:embed=n",
      id: uuidv4(),
      active: false,
    },
    {
        name: "Shipping Volume (Day Over Day)",
        author: "Alex",
        image:
          "https://github.com/agilesquid/tableauportal/blob/4ac9cb15851efa21a6408bc83f188f63260db7b5/src/assets/shippingVolume.png",
        url:
          "https://tableau.enlinx.com/views/ShippingVolumeDayOverDay_15988991620610/TotalOrderswithClientFilter?:origin=card_share_link&:embed=n",
        id: uuidv4(),
        active: false,
      },
  ]
}