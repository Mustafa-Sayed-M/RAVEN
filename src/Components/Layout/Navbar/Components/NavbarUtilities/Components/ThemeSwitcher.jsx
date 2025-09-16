import { useState } from "react";

function ThemeSwitcher({ className = "" }) {

    const changeTheme = (theme) => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    };

    const [theme, setTheme] = useState(() => {
        const oldTheme = localStorage.getItem("theme");
        if (oldTheme) {
            changeTheme(oldTheme);
            return oldTheme;
        } else {
            changeTheme("dark");
            return "dark";
        }
    });

    return (
        <button
            title=""
            type="button"
            onClick={() => setTheme(prev => {
                const newTheme = prev === "dark" ? "light" : "dark";
                changeTheme(newTheme);
                return newTheme;
            })}
            aria-label="Theme Switcher"
            className={`theme-switcher w-9 h-9 leading-[2.25rem] xl:w-12 xl:h-12 xl:leading-[3rem] xl:text-xl text-center rounded-sm text-white bg-primary-purple relative overflow-hidden ${className}`}
        >
            <i className={`fa-solid fa-sun fa-fw absolute z-10 left-1/2 top-1/2 -translate-1/2 transition ${theme === "dark" ? "-translate-x-1/2" : "translate-x-7"}`}></i>
            <i className={`fa-solid fa-moon fa-fw absolute z-10 left-1/2 top-1/2 -translate-1/2 transition ${theme === "light" ? "-translate-x-1/2" : "translate-x-7"}`}></i>
        </button>
    )
}

export default ThemeSwitcher;