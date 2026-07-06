import { MagnifyingGlassIcon } from "@phosphor-icons/react";
export default function Home() {
    return (
        <div className="flex flex-col items-center mt-20">
            <div>
                <div>
                    <h1 className="text-8xl text-primary-600 font-semibold">
                        DevDock
                    </h1>
                    <div className="fixed inset-0 -z-10 overflow-hidden">
                        <div className="absolute -top-50 -left-40 h-96 w-96 rounded-full bg-primary-500/20 blur-xl animate-float" />

                        <div className="absolute top-3 right-0 h-150 w-150 rounded-full bg-violet-500/15 blur-3xl animate-float-delay" />

                        <div className="absolute bottom-3/5 left-1/5 h-90 w-90 rounded-full bg-cyan-400/15 blur-3xl animate-float-slow" />
                    </div>
                    <p className="text-text-muted text-lg">
                        Developer tools for your daily workflow.
                    </p>
                </div>
                <div className="bg-surface-2 flex items-center justify-center mt-10 px-4 py-2 gap-2 rounded-md">
                    <MagnifyingGlassIcon size={20} />
                    <input type="text" placeholder="Search" className="bg-surface-2 outline-0 w-full" />
                </div>
            </div>
        </div>
    );
}