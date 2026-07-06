import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="flex justify-between items-center px-5 bg-surface border-b-4 border-b-border-light">
            <Link to="/" className="flex items-center ">
                <div>
                    <img src="/LogoDevDock.png" alt="" className="w-auto h-15" />
                </div>
                <div className="text-md font-semibold">
                    <h1 className="text-xl font-bold text-white">
                        DevDock
                    </h1>
                </div>
            </Link>
            <ul className="flex gap-8">
                <li>Tools</li>
                <li>About</li>
            </ul>
            <div className="flex gap-6">
                <input type="text" placeholder="Search" className="bg-surface-2 px-2 py-1 rounded-sm" />
                <p>
                    GitHub
                </p>
            </div>
        </div>
    );
}