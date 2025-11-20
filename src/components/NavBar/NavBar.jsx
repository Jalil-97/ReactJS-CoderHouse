import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {


    return (
        <header className="flex justify-between items-center bg-blue-300 text-dark px-8 py-4 shadow-md">
            <div className="flex">

                <img className='h-8 w-10' src="https://cdn-icons-png.flaticon.com/256/434/434062.png" alt="Logo" />
                <NavLink to="/"><h1 className="text-2xl font-bold tracking-wide">Padel Store</h1></NavLink>

            </div>
            <nav>
                <ul className="flex gap-6">

                    <li> <NavLink to="/categorias/paletas">Rackets</NavLink></li>
                    <li> <NavLink to="/categorias/pelotas">Balls</NavLink></li>
                    <li> <NavLink to="/categorias/mochilas">Bags & Backpacks</NavLink></li>

                </ul>
            </nav>

            <CartWidget />

        </header>
    );
};

export default NavBar;


