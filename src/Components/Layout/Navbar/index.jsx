import { useEffect, useState } from "react";
import AppLogo from "./Components/AppLogo";
import NavbarLinks from "./Components/NavbarLinks";
import NavbarUtilities from "./Components/NavbarUtilities";

function Navbar() {

    const [scrollY, setScrollY] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`py-7 sticky top-0 z-50 bg-white dark:bg-dark-bg transition border-b ${scrollY > 200 ? "border-primary-purple/50" : "border-b-transparent"}`}>
            <div className="container flex items-center justify-between gap-5">
                {/* App Logo */}
                <AppLogo />
                {/* Navbar Links */}
                <NavbarLinks className="lg:ms-auto" />
                {/* Navbar Utilities */}
                <NavbarUtilities />
            </div>
        </nav>
    )
}

export default Navbar;