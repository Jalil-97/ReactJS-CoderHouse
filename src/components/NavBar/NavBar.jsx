import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {


    return (
        <header className="flex justify-between items-center bg-blue-300 text-dark px-8 py-4 shadow-md">
            <div className="flex">
                <img className='h-8 w-10' src="https://cdn-icons-png.flaticon.com/256/434/434062.png" alt="Logo" />
                <h1 className="text-2xl font-bold tracking-wide">Padel Store</h1>
            </div>
            <nav>
                <ul className="flex gap-6">
                    <li className="hover:text-gray-300 cursor-pointer transition">Rackets</li>
                    <li className="hover:text-gray-300 cursor-pointer transition">Balls</li>
                    <li className="hover:text-gray-300 cursor-pointer transition">Bags & Backpacks</li>
                </ul>

            </nav>

            <CartWidget />

        </header>
    );
};

export default NavBar;


