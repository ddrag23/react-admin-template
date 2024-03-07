import { SidebarItem } from "@/types/sidebar.type";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import MenuItem from "./menu-item";

type MenuItemWithSubMenuProps = {
    item: SidebarItem;
    toggleOpen: () => void;
};
export default function MenuItemWithSubMenu({
    item,
    toggleOpen,
}: MenuItemWithSubMenuProps) {
    const { pathname } = useLocation();
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    return (
        <>
            <MenuItem>
                <button
                    className="flex w-full text-2xl"
                    onClick={() => setSubMenuOpen(!subMenuOpen)}
                >
                    <div className="flex flex-row justify-between w-full items-center">
                        <span
                            className={`${pathname.includes(item.path) ? 'font-bold' : ''}`}
                        >
                            {item.title}
                        </span>
                        <div className={`${subMenuOpen && 'rotate-180'}`}>
                            <FaChevronDown />
                        </div>
                    </div>
                </button>
            </MenuItem>
            <div className="mt-2 ml-2 flex flex-col space-y-2">
                {subMenuOpen && (
                    <>
                        {item.childrens?.map((subItem, subIdx) => {
                            return (
                                <MenuItem key={subIdx}>
                                    <Link
                                        to={subItem.path}
                                        onClick={() => toggleOpen()}
                                        className={` ${subItem.path === pathname ? 'font-bold' : ''
                                            }`}
                                    >
                                        {subItem.title}
                                    </Link>
                                </MenuItem>
                            );
                        })}
                    </>
                )}
            </div>
        </>
    );
};