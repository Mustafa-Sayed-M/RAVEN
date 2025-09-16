import { Link } from "react-router-dom";

function AppLogo({ className = "", as = "full" }) {

    const handleClick = (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
    };

    return (
        <a
            href="/"
            onClick={handleClick}
            className={`app-logo flex items-center gap-1 text-2xl md:text-4xl ${className} relative`}
        >
            {
                as === "full" ? (
                    <img
                        src="/assets/images/logo-icon.png"
                        alt="App Logo Icon"
                        width={30}
                        className="absolute -top-6 -left-3.5"
                    />
                ) : as === "icon" ? (
                    <img
                        src="/assets/images/logo-icon.png"
                        alt="App Logo Icon"
                        width={50}
                    />
                ) : null
            }
            {
                as !== "icon" &&
                <span>RAVEN</span>
            }
        </a>
    )
}

export default AppLogo;