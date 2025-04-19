function Header() {
    return (
        <>
        <div className="mt-5 flex justify-between items-center">
            <h1 className="ml-10  hover:bg-sky-700"><a href="#"> Logo </a></h1>
            <ul className="mr-10 flex gap-4">
                <li className=" hover:bg-sky-700">
                    <a href="#"> Home </a>
                </li>
                <li className=" hover:bg-sky-700">
                    <a href="#"> About Me </a>
                </li>
                <li className=" hover:bg-sky-700">
                    <a href="#"> Projects </a>
                </li>
            </ul>
        </div>
        </>
    );
}

export default Header;