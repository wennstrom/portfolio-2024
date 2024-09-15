const Nav = () => {
    return (
        <nav className="flex min-w-full py-4 border-b border-gray-400 justify-center">
            <div className="flex w-full max-w-[1200px] justify-between">
                <div className="flex items-center">
                    <span className="text-xl">OSKAR WENNSTRÖM </span>
                </div>
                <div className="flex">
                    <ul className="flex flex-inline gap-6 items-center text-sm">
                        <li><a href="#hero">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div> </div>
        </nav>
    )
}

export default Nav;