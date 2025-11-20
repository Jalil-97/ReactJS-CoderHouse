const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">

            <h1 className="text-7xl font-extrabold text-gray-800">404</h1>

            <p className="text-xl text-gray-600 mt-4">
                The page you're looking for doesn't exist.
            </p>

            <a
                href="/"
                className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
                Go back home
            </a>

        </div>
    );
};

export default NotFound;
