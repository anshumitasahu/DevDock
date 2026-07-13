import { useState, useEffect } from "react";

export default function ToDos() {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);

    function addTask() {
        if (input.trim() === "") return;

        setTasks([
            ...tasks,
            {
                id: Date.now(),
                text: input,
                completed: false,
            },
        ]);

        setInput("");
    }
    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button>add task</button>
        </div>
    );
}