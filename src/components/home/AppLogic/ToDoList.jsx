import { PlusIcon, TrashIcon } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

export default function ToDos() {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);
    // const [isComplete, setIsComplete] = useState(false)
    // isComplete = false

    function addTask() {
        if (input.trim() === "") return;

        setTasks([
            ...tasks,
            {
                id: Date.now(),
                text: input,
                complete: false
            },
        ]);

        console.log("added")
        setInput("");
    }

    function handleComplete(id) {
        setTasks(tasks.map(task => task.id == id ? { ...task, complete: true } : task))
        // console.log(complete: true)
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <div className="w-100 min-h-50 bg-white p-4 rounded-xl flex flex-col gap-4">
            <div className="flex gap-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border border-neutral-700/40 outline-0 rounded-xl p-2 w-full"
                />

                <button
                    onClick={addTask}
                    className="bg-primary text-white p-2 px-4 rounded-xl"
                >
                    <PlusIcon size={14} />
                </button>
            </div>

            <div className="w-full h-50 overflow-y-scroll rounded-xl">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className=" cursor-pointer list-none p-4 m-2 bg-primary/10 flex justify-between gap-4 text-gray-600 rounded-xl h-fit"
                    >
                        <button className="bg-white h-5 w-5 rounded-full"
                            onClick={() => {
                                handleComplete(task.id)
                            }}
                            style={{
                                backgroundColor: task.complete ? "green" : "white"
                            }}
                            ></button>
                        <span className="w-[80%]"
                            style={{
                                textDecoration: task.complete ? "line-through" : "none"
                            }}>
                            {task.text}
                        </span>
                        <button onClick={() => deleteTask(task.id)}>
                            <TrashIcon size={14} className="text-pink-500" />
                        </button>
                    </li>
                ))}
            </div>
        </div>
    );
}