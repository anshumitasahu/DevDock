import { useState, useEffect, useRef } from "react";
export default function Window({
    title,
    closeApp,
    children,
    desktopRef
}) {
    const windowRef = useRef(null);
    const [position, setPosition] = useState({
        x: 200,
        y: 100,
    });

    const [isDragging, setIsDragging] = useState(false);

    const [offset, setOffset] = useState({
        x: 0,
        y: 0,
    });

    const handleMouseDown = (e) => {
        setIsDragging(true);

        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const newX = e.clientX - offset.x;
        const newY = e.clientY - offset.y;

        const windowWidth = windowRef.current.offsetWidth;
        const windowHeight = windowRef.current.offsetHeight;

        const desktopWidth = desktopRef.current.clientWidth;
        const desktopHeight = desktopRef.current.clientHeight;

        setPosition({
            x: Math.max(0, Math.min(newX, desktopWidth - windowWidth)),
            y: Math.max(0, Math.min(newY, desktopHeight - windowHeight)),
        });

        console.log({
            desktopWidth,
            desktopHeight,
            windowWidth,
            windowHeight,
        });

    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging, offset]);

    return (
        <div
            ref={windowRef}
            className="bg-white text-black p-2 rounded-lg"
            style={{
                position: "absolute",
                left: position.x,
                top: position.y,
            }}
        >
            <div className="flex justify-between cursor-move"
                onMouseDown={handleMouseDown}>
                <div>
                    {title}
                </div>
                <div className="flex gap-4">
                    <button>- </button>
                    <button>+</button>
                    <button onClick={closeApp} className="bg-red-400 text-white font-bold rounded-full px-2
                    py-0">x</button>
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}