import ListItem from "@/pages/inventory/item/list";
import App from "../App";
import Default from "../layouts/default";

export default [
    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/inventory/item",
                element: <ListItem />,
            },
        ],
    }
]