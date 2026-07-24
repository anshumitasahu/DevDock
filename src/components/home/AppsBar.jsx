
import { AppsMenu } from "../../lib/apps";

export default function AppsBar({ openApp }) {
    return (
        <div className="w-full flex justify-center items-center absolute bottom-0 z-1000">
            <div className="flex justify-center items-center gap-5 w-fit bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white">
                <div
                    className="cursor-pointer"
                    onClick={() => alert("menu not implememnted")}
                >
                    <img src="/devscope-icon.png" className="w-12 bg-blue-500 p-2 rounded-md hover:-translate-y-1" />
                </div>

                {
                    AppsMenu.map((apps, index) => (
                        <div
                            className="bg-pink-700 text-white p-3 rounded-md hover:-translate-y-1 cursor-pointer"
                            onClick={() => openApp(apps)}
                            key={index}
                        >
                            <apps.icon size={24} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}