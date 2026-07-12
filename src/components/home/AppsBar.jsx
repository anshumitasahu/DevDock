import { CalculatorIcon, StackIcon, TerminalWindowIcon, GearIcon, NotepadIcon, ListChecksIcon, ClockIcon, CalendarIcon, PlaylistIcon, VideoIcon } from "@phosphor-icons/react";
import Calculator from "./AppLogic/Calculator";

export default function AppsBar({ setActiveApp }) {
    return (
        <div className="flex justify-center items-center gap-5">
            <div>
                <img src="/devscope-icon.png" className="w-15 bg-blue-500 p-2 rounded-md hover:-translate-y-1" />
            </div>
            <div className="bg-pink-500 p-4 rounded-md hover:-translate-y-1">
                <CalculatorIcon size={28} onClick={() => setActiveApp("calculator")} />
            </div>
            <div className="bg-green-600 p-4 rounded-md hover:-translate-y-1">
                <StackIcon size={28} />
            </div>
            <div className="bg-orange-400 p-4 rounded-md hover:-translate-y-1">
                <TerminalWindowIcon size={28} />
            </div>
            <div className="bg-mauve-500 p-4 rounded-md hover:-translate-y-1">
                <GearIcon size={28} />
            </div>
            <div className="bg-yellow-500 p-4 rounded-md hover:-translate-y-1">
                <NotepadIcon size={28} />
            </div>
            <div className="bg-pink-700 p-4 rounded-md hover:-translate-y-1">
                <ListChecksIcon size={28} />
            </div>
            <div className="bg-green-500 p-4 rounded-md hover:-translate-y-1">
                <ClockIcon size={28} />
            </div>
            <div className="bg-indigo-500 p-4 rounded-md hover:-translate-y-1">
                <CalendarIcon size={28} />
            </div>
            <div className="bg-cyan-600 p-4 rounded-md hover:-translate-y-1">
                <PlaylistIcon size={28} />
            </div>
            <div className="bg-olive-500 p-4 rounded-md hover:-translate-y-1">
                <VideoIcon size={28} />
            </div>
        </div>
    );
}