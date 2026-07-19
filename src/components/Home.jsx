import { useState, useRef } from "react";
import TopBar from "./home/topbar";
import AppsBar from "./home/AppsBar";
import Calculator from "./home/AppLogic/Calculator";
import ToDos from "./home/AppLogic/ToDoList";
import Window from "./Window";
import { AppsMenu } from "../lib/apps";
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
    const desktopRef = useRef();
    const [opnedApps, setOpnedApps] = useState([]);

    function openApp(app) {
        const uniqueId = uuidv4();
        setOpnedApps(prev => [...prev, { ...app, id: uniqueId }]);
    }

    function closeApp(appId) {
        const newOpnedAppList = opnedApps.filter((app) => {
            if (app.id != appId) {
                return app;
            }
        })

        setOpnedApps(newOpnedAppList);
    }

    return (
        <div className="flex flex-col w-screen h-screen text-black">
            <div className="w-screen h-screen absolute -z-10">
                <img src="/bg2.png" alt="" className="h-full w-full object-cover" />
            </div>
            <TopBar />
            <div ref={desktopRef} className="relative flex-1 overflow-hidden">
                {opnedApps.map((app) => (
                    <Window
                        key={app.id}
                        title={app.name}
                        icon={<app.icon size={14} />}
                        zIndex={5}
                        desktopRef={desktopRef}
                        closeApp={() => closeApp(app.id)}
                    >
                        {app.app}
                    </Window>
                ))}
            </div>
            <AppsBar openApp={openApp} />
        </div >
    );
}