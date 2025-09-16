import NavbarMenuToggler from "./Components/NavbarMenuToggler";
import ResumeDownload from "./Components/ResumeDownload";
import ThemeSwitcher from "./Components/ThemeSwitcher";

function NavbarUtilities() {
    return (
        <div className="navbar-utilities flex items-center gap-3">
            {/* Resume Download */}
            <ResumeDownload />
            {/* Theme Switcher */}
            <ThemeSwitcher />
            {/* Navbar Menu Toggler */}
            <NavbarMenuToggler className="xl:hidden" />
        </div>
    )
}

export default NavbarUtilities;