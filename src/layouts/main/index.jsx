import { Outlet } from "react-router-dom";
import Rightbar from "./rightbar";
import Sidebar from "./sidebar";

export default function MainLayout() {
    return(
        <div className="w-[1265px] mx-auto flex">
            <Sidebar/>
            <main className="flex-1 flex gap-[30px]">
                <main className="flex-1 border-x border-[#2f3336] max-w-[600px]">
                    <Outlet />
                </main>
            </main>
            <Rightbar />
        </div>
    )
}