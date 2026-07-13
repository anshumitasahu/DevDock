import { useState, useRef } from "react";
import TopBar from "./home/topbar";
import AppsBar from "./home/AppsBar";
import Calculator from "./home/AppLogic/Calculator";
import ToDos from "./home/AppLogic/ToDoList";
import Window from "./Window";

export default function Home() {
    const desktopRef = useRef();
    const [activeApp, setActiveApp] = useState(null);
    return (
        <div className="flex flex-col w-screen h-screen">
            <TopBar />
            <div ref={desktopRef} className="relative flex-1 overflow-hidden bg-red-500/20">
                {activeApp === "calculator" && (
                    <Window title="Calculator" desktopRef={desktopRef} closeApp={() => setActiveApp(null)}>
                        <Calculator />
                    </Window>
                )}
            </div>
            {activeApp === "to-dos" && <ToDos closeApp={() => setActiveApp(null)} />}
            <AppsBar setActiveApp={setActiveApp} />
        </div>
    );
}