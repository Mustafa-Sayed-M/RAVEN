import AppLogo from "../Navbar/Components/AppLogo";
import FastLinks from "./FastLinks";

function Footer() {
    return (
        <footer className="py-10 bg-primary-purple/30">
            <div className="container">
                {/* App Logo */}
                <AppLogo className="mx-auto w-fit mb-5" as="icon" />
                {/* Fast Links */}
                <FastLinks className="mb-5" />
                {/* Copyrights */}
                <p className="text-center transition">© 2025 All Rights Reserved by <a href="https://github.com/Mustafa-Sayed-M" target="_blank" className="bg-primary-purple ms-1 rounded-sm py-0.5 px-3 max-sm:mt-1 inline-block text-white transition sm:hover:bg-primary-purple/70">MUSTAFA SAYED</a></p>
            </div>
        </footer>
    )
}

export default Footer;