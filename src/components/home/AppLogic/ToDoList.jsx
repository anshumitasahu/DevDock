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

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <div className="min-w-100 min-h-50">
            <div className="flex gap-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border border-neutral-700/40 outline-0"
                />
                <button onClick={addTask}>add task</button>
            </div>

            <div className="w-full border border-border/30 h-50 overflow-scroll">
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.text}
                        <button onClick={() => deleteTask(task.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </div>
        </div>
    );
}