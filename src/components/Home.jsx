import { useState, useRef } from "react";
import TopBar from "./home/topbar";
import AppsBar from "./home/AppsBar";
import Calculator from "./home/AppLogic/Calculator";
import ToDos from "./home/AppLogic/ToDoList";
import Window from "./Window";

export default function Home() {
    const desktopRef = useRef();

    const [topZ, setTopZ] = useState();

    const nextZ = () => {
        setTopZ(z => z + 1);
        return topZ + 1;
    };

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
            const existing = prev.find(app => app.id === id);
            if (existing) {
                const nextZ = topZ + 1;
                setTopZ(nextZ);

                return prev.map(app =>
                    app.id === id
                        ? {
                            ...app,
                            minimized: false,
                            zIndex: nextZ,
                        }
                        : app
                );
            }
            return [
                ...prev,
                {
                    id,
                    zIndex: topZ + 1,
                    minimized: false,
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

    function minimizeApp(id) {
        setOpenApps(prev =>
            prev.map(app =>
                app.id === id
                    ? { ...app, minimized: true }
                    : app
            )
        );
    }

    return (
        <div className="flex flex-col w-screen h-screen">
            <TopBar />
            <div ref={desktopRef} className="relative flex-1 overflow-hidden">
                {openApps
                    .filter(app => !app.minimized)
                    .map(app => {
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
                                minimizeApp={() => minimizeApp(app.id)}
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