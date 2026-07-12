import { CalculatorIcon, StackIcon, TerminalWindowIcon, GearIcon, NotepadIcon } from "@phosphor-icons/react";

export default function AppsBar() {
    return (
        <div className="flex justify-center items-center gap-5">
            <div>
                <img src="/devscope-icon.png" className="w-15 bg-blue-500 p-2 rounded-md" />
            </div>
            <div className="bg-pink-500 p-4 rounded-md">
                <CalculatorIcon size={28} />
            </div>
            <div className="bg-green-600 p-4 rounded-md">
                <StackIcon size={28} />
            </div>
            <div className="bg-orange-400 p-4 rounded-md">
                <TerminalWindowIcon size={28} />
            </div>
            <div className="bg-mauve-500 p-4 rounded-md">
                <GearIcon size={28} />
            </div>
            <div className="bg-yellow-500 p-4 rounded-md">
                <NotepadIcon size={28} />
            </div>
        </div>
    );
}