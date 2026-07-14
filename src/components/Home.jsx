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
        console.log("opending appid:", uniqueId);
        setOpnedApps(prev => [...prev, {...app, id: uniqueId}]);
    }

    function closeApp(appId) {
        console.log("close app id:", appId);
        const newOpnedAppList = opnedApps.filter((app) => {
            if (app.id != appId) {
                return app;
            }
        })

        console.log(newOpnedAppList);

        setOpnedApps(newOpnedAppList);
    }

    function bringToFront(app) {

    }

    function minimizeApp(app) {
        alert("not implemented");
    }

    return (
        <div className="flex flex-col w-screen h-screen text-black">
            <div>
                <img src="/bg.jpeg" alt="" className="w-screen h-screen absolute z-[-10]" />
            </div>
            <TopBar />
            <div ref={desktopRef} className="relative flex-1 overflow-hidden">
                {opnedApps
                    .map((app) => {
                        return (
                            <Window
                                key={app.name}
                                title={app.name}
                                icon={<app.icon size={14}/>}
                                zIndex={5}
                                desktopRef={desktopRef}
                                bringToFront={bringToFront}
                                closeApp={() => closeApp(app.id)}
                                minimizeApp={() => minimizeApp(app)}
                            >
                                {app.app}
                            </Window>
                        );
                    })}
            </div>
            <AppsBar openApp={openApp} />
        </div >
    );
}