import Header from "@/components/header/header";
import MarginWidthWrapper from "@/components/wrapper/margin-wrapper";
import Sidebar from "@/components/sidebar/sidebar";
import { Outlet } from "react-router-dom";
import PageWrapper from "@/components/wrapper/page-wrapper";
import HeaderMobile from "@/components/header/header-mobile";
export default function Default() {
    return <>
        <div className="min-h-screen bg-gray-100">
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    <MarginWidthWrapper>
                        <Header />
                        <HeaderMobile />
                        <PageWrapper>
                            <Outlet />
                        </PageWrapper>
                    </MarginWidthWrapper>
                </div>
            </div>
        </div>
    </>
}