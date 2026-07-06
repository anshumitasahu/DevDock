import { MagnifyingGlassIcon } from "@phosphor-icons/react";
export default function Home() {
    return (
        <div className="flex flex-col items-center relative">
            <div className="mt-20">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-1/3 right-0 -translate-y-1/2 translate-x-1/2 h-[400px] w-[400px] rounded-full bg-primary-500/30 blur-2xl" />
                    <div className="absolute top-1/3 left-0 -translate-y-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-primary-500/30 blur-2xl" />
                </div>

                <h1 className="text-8xl text-primary-600 font-semibold">
                    DevDock
                </h1>

                <p className="text-text-muted text-lg">
                    Developer tools for your daily workflow.
                </p>

                <div className="bg-surface-2 flex items-center justify-center mt-10 px-4 py-2 gap-2 rounded-md">
                    <MagnifyingGlassIcon size={20} />
                    <input type="text" placeholder="Search" className="bg-surface-2 outline-0 w-full" />
                </div>
            </div>
            <div className="mt-15 flex flex-col items-center">
                <h1 className="font-bold text-3xl mb-3">
                    Why <span className="text-primary-600">DevDock</span> ?
                </h1>
                <div className="grid grid-cols-2 gap-6 ">

                    <div className="bg-surface-2 px-4 py-2 border border-border-light rounded-md">
                        <h2 className="text-lg">
                            Fragmented tooling
                        </h2>
                        <p className="text-text-subtle">
                            Developers switch between too many platforms
                        </p>
                    </div>

                    <div className="bg-surface-2 px-4 py-2 border border-border-light rounded-md">
                        <h2 className="text-lg">
                            Unnecessary overhead
                        </h2>
                        <p className="text-text-subtle">
                            Even simple tasks require context switching
                        </p>
                    </div>

                    <div className="bg-surface-2 px-4 py-2 border border-border-light rounded-md">
                        <h2 className="text-lg">
                            Unified workspace
                        </h2>
                        <p className="text-text-subtle">
                            DevDock brings essential tools together
                        </p>
                    </div>

                    <div className="bg-surface-2 px-4 py-2 border border-border-light rounded-md">
                        <h2 className="text-lg">
                            Zero tool hunting
                        </h2>
                        <p className="text-text-subtle">
                            Everything is immediately accessible
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}