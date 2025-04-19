function Header() {
    return (
        <>
        <div className="mt-5 flex justify-between items-center sticky top-0  bg-white z-50 shadow">
            <h1 className="ml-10  hover:bg-gray-500"><a href="#"> Logo </a></h1>
            <ul className="text-xs md:text-base mr-10 flex gap-4 font-sans md:font-Arial">
                <li className="hover:bg-gray-800 hover:text-white hover:px-6 transition-all duration-300">
                    <a href="#"> HOME </a>
                </li>
                <li className="hover:bg-gray-800 hover:text-white hover:px-6 transition-all duration-300">
                    <a href="#"> ABOUT ME </a>
                </li>
                <li className="hover:bg-gray-800 hover:text-white hover:px-6 transition-all duration-300">
                    <a href="#"> PROJECTS </a>
                </li>
            </ul>
        </div>
        </>
    );
}

export default Header;