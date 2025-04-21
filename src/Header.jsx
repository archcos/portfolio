import Logo from "./assets/aclogo.svg";

function Header() {
    return (
        <>
        <div className="flex justify-between items-center sticky top-0  p-2 bg-white z-50 shadow">
            <a href="#"><img src={Logo} alt="logo" className="ml-10 w-10 h-7"></img></a>
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