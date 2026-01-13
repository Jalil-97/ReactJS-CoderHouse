import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const linkClass = ({ isActive }) =>
        isActive
            ? "text-blue-600 font-semibold"
            : "text-gray-700 hover:text-blue-600 transition-colors duration-200";

    return (
        <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo + Title */}
                <div className="flex items-center gap-3">
                    <img
                        className="h-10 w-10 object-contain drop-shadow-[0_0_6px_rgba(0,132,255,0.6)]"
                        src="https://cdn-icons-png.flaticon.com/256/434/434062.png"
                        alt="Logo"
                    />

                    <NavLink to="/">
                        <h1 className="text-lg md:text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                            Padel Store
                        </h1>
                    </NavLink>
                </div>

                {/* Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex gap-6 font-medium">
                        <li>
                            <NavLink to="/categorias/rackets" className={linkClass}>
                                Rackets
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/categorias/balls" className={linkClass}>
                                Balls
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/categorias/bags-backpacks" className={linkClass}>
                                Bags & Backpacks
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Cart */}
                <CartWidget />
            </div>
        </header>
    );
};

export default NavBar;
    