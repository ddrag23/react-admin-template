import { FaGauge, FaWarehouse } from "react-icons/fa6";

export const MENU_SIDEBAR = [
    {
        path: '/',
        icon: <FaGauge />,
        title: 'Dashboard'
    },
    {
        icon: <FaWarehouse />,
        title: 'Inventory',
        path: 'inventory',
        hasChildren: true,
        childrens: [
            {
                path: 'inventory/item',
                title: 'Item'
            },
        ]
    },
]
