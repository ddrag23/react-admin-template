import useScroll from "@/hooks/useScroll";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DROPDOWN_NAVBAR } from "@/constant/dropdown-navbar";

export default function Header() {
    const scrolled = useScroll(5);
    return <>
        <div className={cn("sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200", {
            'border-b border-gray-200 bg-white/75 backdrop-blur-lg': scrolled,
        })}>
            <div className="flex h-[47px] items-center justify-between px-4">
                <div className="flex items-center space-x-4">
                    <Link
                        to="/"
                        className="flex flex-row space-x-3 items-center justify-center md:hidden"
                    >
                        <span className="h-7 w-7 bg-zinc-300 rounded-lg" />
                        <span className="font-bold text-xl flex ">Logo</span>
                    </Link>
                </div>

                <div className="hidden md:block">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {DROPDOWN_NAVBAR.map((item, key) => <DropdownMenuItem key={key}><Link to={item.route}>{item.title}</Link></DropdownMenuItem>)}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>

    </>
}