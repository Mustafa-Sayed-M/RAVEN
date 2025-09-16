import { useApp } from "@contexts/AppContext";

function NavbarMenuToggler({ className = "" }) {

    const { navbarMenuIsOpen, setNavbarMenuIsOpen } = useApp();

    return (
        <button
            type="button"
            aria-label="Navbar Menu Toggler"
            title=""
            onClick={e => {
                e.stopPropagation();
                setNavbarMenuIsOpen(prev => !prev)
            }}
            className={`navbar-menu-toggler flex flex-col justify-center gap-2 overflow-hidden relative h-[48px] transition-transform ${navbarMenuIsOpen ? "rotate-45 delay-300" : "delay-[0]"} ${className}`}
        >
            <span className={`block w-8 h-1 rounded-xs transition-transform bg-primary-purple dark:bg-white ms-auto ${navbarMenuIsOpen ? "translate-x-10" : "delay-300"}`}></span>
            <span style={{}} className={`block w-10 h-1 rounded-xs transition-transform bg-primary-purple dark:bg-white`}></span>
            <span className={`block w-6 h-1 rounded-xs transition-transform bg-primary-purple dark:bg-white ms-auto ${navbarMenuIsOpen ? "translate-x-8" : "delay-300"}`}></span>
            {/* FLoating */}
            <span className={`w-1 h-10 rounded-xs bg-primary-purple dark:bg-white transition-transform absolute z-10 left-1/2 -translate-x-1/2 -translate-y-12 ${navbarMenuIsOpen ? "translate-y-0" : "delay-200"}`}></span>
        </button>
    )
}

export default NavbarMenuToggler;