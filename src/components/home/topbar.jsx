import { useEffect, useState } from "react";

export default function TopBar() {
    const [now, setNow] = useState(new Date())


    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000)

        return () => clearInterval(interval);
    }, [])

    const time = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    })

    const date = now.toLocaleDateString("en-IN", {
        weekday: "short",
        day: "2-digit",
        month: "long",
        year: "numeric"
    })
    return (
        <div className="bg-surface px-10 py-5 flex justify-between w-full">
            <div>
                Kobayashi OS
            </div>
            <div>{time} {date}</div>
        </div>
    );
}