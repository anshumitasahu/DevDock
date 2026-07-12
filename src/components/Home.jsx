import { useState } from "react";
import TopBar from "./home/topbar";
import AppsBar from "./home/AppsBar";
import Calculator from "./home/AppLogic/Calculator";

export default function Home() {
    const [activeApp, setActiveApp] = useState(null);
    return (
        <div className="flex flex-col justify-between w-[100vw] h-[100vh]">
            <TopBar />
            {activeApp === "calculator" && <Calculator />}
            <AppsBar setActiveApp={setActiveApp} />
        </div>
    );
}