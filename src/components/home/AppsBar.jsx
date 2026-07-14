import { CalculatorIcon, StackIcon, TerminalWindowIcon, GearIcon, NotepadIcon, ListChecksIcon, ClockIcon, CalendarIcon, PlaylistIcon, VideoIcon } from "@phosphor-icons/react";
import Calculator from "./AppLogic/Calculator";
import ToDos from "./AppLogic/ToDoList";
import { AppsMenu } from "../../lib/apps";

export default function AppsBar({ openApp }) {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="flex justify-center items-center gap-5 w-fit bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white">
                <div>
                    <img src="/devscope-icon.png" className="w-12 bg-blue-500 p-2 rounded-md hover:-translate-y-1" />
                </div>
                {/* <div className="bg-pink-500 p-3 rounded-md hover:-translate-y-1" onClick={() => openApp("calculator")}>
                    <CalculatorIcon size={24} />
                </div>
                <div className="bg-pink-700 p-3 rounded-md hover:-translate-y-1" onClick={() => openApp("todos")}>
                    <ListChecksIcon size={24} />
                </div> */}
                {
                    AppsMenu.map((apps) => (
                        <div className="bg-pink-700 text-white p-3 rounded-md hover:-translate-y-1" onClick={() => openApp(apps)}>
                            <apps.icon size={24}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}