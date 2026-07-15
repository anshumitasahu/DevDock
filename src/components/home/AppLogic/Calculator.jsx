import { useState, useEffect } from "react";

export default function Calculator() {
    const [display, setDisplay] = useState("")

    const numbers = ["%", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", "00", 0, "."]

    const handleClick = (value) => {
        setDisplay((prev) => prev + value);
    };

    const handleClear = () => {
        setDisplay("");
    };

    const handleDelete = () => {
        setDisplay((prev) => prev.slice(0, -1));
    };

    const handleEqual = () => {
        try {
            const result = eval(display);
            setDisplay(result.toString());
        } catch {
            setDisplay("Error");
        }
    };


    const handleButtons = numbers.map((number) =>
        <button
            onClick={() => handleClick(number)}
            className="font-bold text-green-700 bg-gray-300/40 rounded-md px-2 py-4"
        >
            {number}
        </button>
    )
    return (
        <div className="text-black flex flex-col gap-3 w-fit h-fit p-3 rounded-md">
            <input
                type="text"
                value={display}
                readOnly
                className="border border-gray-400/50 outline-0 px-3 py-6 text-xl"
            />
            <div className="grid grid-cols-4 gap-3">
                <button onClick={handleClear} className="font-bold text-green-700 bg-gray-300/40 rounded-md px-2 py-4">C</button>
                <button onClick={handleDelete} className="font-bold text-green-700 bg-gray-300/40 rounded-md px-2 py-4">⌫</button>
                {handleButtons}
                <button onClick={handleEqual} className="font-bold bg-green-700 text-white px-2 py-4 rounded-md">=</button>
            </div>
        </div >
    );
}