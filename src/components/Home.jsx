import { useState, useRef } from "react";
import TopBar from "./home/topbar";
import AppsBar from "./home/AppsBar";
import Calculator from "./home/AppLogic/Calculator";
import ToDos from "./home/AppLogic/ToDoList";
import Window from "./Window";

export default function Home() {
    const desktopRef = useRef();

    const [topZ, setTopZ] = useState(1);

    const [openApps, setOpenApps] = useState([]);

    const APPS = {
        calculator: {
            title: "Calculator",
            component: Calculator,
        },
        todos: {
            title: "To-Do List",
            component: ToDos,
        },
    };

    function openApp(id) {
        setOpenApps(prev => {
            if (prev.some(app => app.id === id))
                return prev;

            return [
                ...prev,
                {
                    id,
                    zIndex: topZ + 1,
                },
            ];
        });

        setTopZ((z) => z + 1)
    }

    function closeApp(id) {
        setOpenApps(prev =>
            prev.filter(app => app.id !== id)
        );
    }

    function bringToFront(id) {
        setTopZ(prev => {
            const next = prev + 1;

            setOpenApps(apps =>
                apps.map(app =>
                    app.id === id
                        ? { ...app, zIndex: next }
                        : app
                )
            );

            return next;
        });
    }

    return (
        <div className="flex flex-col w-screen h-screen">
            <TopBar />
            <div ref={desktopRef} className="relative flex-1 overflow-hidden">
                {openApps.map(app => {
                    const Component = APPS[app.id].component;

                    return (
                        <Window
                            key={app.id}
                            id={app.id}
                            title={APPS[app.id].title}
                            zIndex={app.zIndex}
                            desktopRef={desktopRef}
                            bringToFront={bringToFront}
                            closeApp={() => closeApp(app.id)}
                        >
                            <Component />
                        </Window>
                    );
                })}
            </div>
            <AppsBar openApp={openApp} />
        </div >
    );
}