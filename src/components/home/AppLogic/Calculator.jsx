import { useState, useEffect } from "react";

export default function Calculator() {
    const [display, setDisplay] = useState("")

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

    return (
        <div className="bg-white text-black flex flex-col gap-3 w-fit h-fit p-3 rounded-md">
            <input
                type="text"
                value={display}
                readOnly
                className="border border-gray-400/50 outline-0 px-3 py-6 text-xl"
            />
            <div className="grid grid-cols-4 gap-3">
                <button onClick={handleClear} className="font-bold text-green-700 bg-gray-300/40 rounded-md px-2 py-4">C</button>
                <button onClick={handleDelete} className="font-bold text-green-700 bg-gray-300/40 rounded-md px-2 py-4">⌫</button>
                <button onClick={() => handleClick("%")} className="font-bold text-green-700 bg-gray-300/40 rounded-md px-2 py-4">%</button>
                <button onClick={() => handleClick("/")} className="font-bold text-green-700 bg-gray-300/40 rounded-md px-2 py-4">/</button>
                <button onClick={() => handleClick("7")} className="itext-gray-800 bg-gray-300/40 rounded-md px-2 py-4">7</button>
                <button onClick={() => handleClick("8")} className="text-gray-800 bg-gray-300/40 rounded-md px-2 py-4">8</button>
                <button onClick={() => handleClick("9")} className="text-gray-800 bg-gray-300/40 rounded-md px-2 py-4">9</button>
                <button onClick={() => handleClick("*")} className="font-bold text-green-700 bg-gray-300/40 rounded-md px-2 py-4">x</button>
                <button onClick={() => handleClick("4")} className="text-gray-800 bg-gray-300/40 rounded-md px-2 py-4">4</button>
                <button onClick={() => handleClick("5")} className="text-gray-800 bg-gray-300/40 rounded-md px-2 py-4">5</button>
                <button onClick={() => handleClick("6")} className="text-gray-800 bg-gray-300/40 rounded-md px-2 py-4">6</button>
                <button onClick={() => handleClick("-")} className="font-bold text-green-700 bg-gray-300/40 rounded-md px-2 py-4">-</button>
                <button onClick={() => handleClick("1")} className="text-gray-800 bg-gray-300/40 rounded-md px-2 py-4">1</button>
                <button onClick={() => handleClick("2")} className="text-gray-800 bg-gray-300/40 rounded-md px-2 py-4">2</button>
                <button onClick={() => handleClick("3")} className="text-gray-800 bg-gray-300/40 rounded-md px-2 py-4">3</button>
                <button onClick={() => handleClick("+")} className="font-bold text-green-700 bg-gray-300/40 rounded-md px-2 py-4">+</button>
                <button onClick={() => handleClick("00")} className="text-gray-800 bg-gray-300/40 rounded-md px-2 py-4">00</button>
                <button onClick={() => handleClick("0")} className="text-gray-800 bg-gray-300/40 rounded-md px-2 py-4">0</button>
                <button onClick={() => handleClick(".")} className="font-bold text-green-700 bg-gray-300/40 rounded-md px-2 py-4">.</button>
                <button onClick={handleEqual} className="font-bold bg-green-700 text-white px-2 py-4 rounded-md">=</button>
            </div>
        </div >
    );
}