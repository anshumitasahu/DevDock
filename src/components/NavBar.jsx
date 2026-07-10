import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="flex justify-between items-center px-5 bg-surface border-b-2 border-b-border">

            <Link to="/" className="flex items-center">
                <img src="/LogoDevDock.png" alt="" className="w-auto h-15" />

                <div className="text-md font-semibold">
                    <h1 className="text-xl font-bold text-white">
                        DevDock
                    </h1>
                </div>
            </Link>

            <ul className="flex gap-8">
                <li>
                    <NavLink
                        to="/tools"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white border-b border-b-primary-500"
                                : "text-gray-300 hover:text-white"
                        }
                    >
                        Tools
                    </NavLink>
                </li>

                {/* <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500 font-semibold"
                                : "text-gray-300 hover:text-white"
                        }
                    >
                        About
                    </NavLink>
                </li> */}
            </ul>

            <div className="flex gap-6">
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-surface-2 px-2 py-1 rounded-sm"
                />
                <p>GitHub</p>
            </div>
        </div>
    );
}