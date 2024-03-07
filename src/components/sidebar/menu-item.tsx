import { SidebarItem } from "@/types/sidebar.type";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
export default function MenuItem({ item }: { item: SidebarItem }) {
    const { pathname } = useLocation();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <div className="">
            {item.hasChildren ? (
                <>
                    <button
                        onClick={toggleSubMenu}
                        className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${pathname.includes(item.path) ? 'bg-zinc-100' : ''
                            }`}
                    >
                        <div className="flex flex-row space-x-4 items-center">
                            {item.icon}
                            <span className="font-semibold text-xl  flex">{item.title}</span>
                        </div>

                        <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
                            <FaChevronDown />
                        </div>
                    </button>

                    {subMenuOpen && (
                        <div className="my-2 ml-12 flex flex-col space-y-4">
                            {item.childrens?.map((subItem, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        to={subItem.path}
                                        className={`${subItem.path === pathname ? 'font-bold' : ''
                                            }`}
                                    >
                                        <span>{subItem.title}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </>
            ) : (
                <Link
                    to={item.path}
                    className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${item.path === pathname ? 'bg-zinc-100' : ''
                        }`}
                >
                    {item.icon}
                    <span className="font-semibold text-xl flex">{item.title}</span>
                </Link>
            )}
        </div>
    );
}