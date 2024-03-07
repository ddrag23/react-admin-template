import { Link } from "react-router-dom";
import { MENU_SIDEBAR } from "@/constant/menu";
import MenuItem from "./menu-item";
export default function Sidebar() {
    return <aside className="md:w-60 bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
        <div className="flex flex-col space-y-6 w-full">
            <Link
                to="/"
                className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 h-12 w-full"
            >
                <span className="h-7 w-7 bg-zinc-300 rounded-lg" />
                <span className="font-bold text-xl hidden md:flex">Yess POS</span>
            </Link>

            <div className="flex flex-col space-y-2  md:px-6 ">
                {MENU_SIDEBAR.map((item, idx) => {
                    return <MenuItem key={idx} item={item} />;
                })}
            </div>
        </div>
    </aside>
}