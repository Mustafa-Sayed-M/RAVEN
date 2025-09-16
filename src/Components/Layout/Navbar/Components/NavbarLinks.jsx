import { useApp } from "@contexts/AppContext";
import React, { useEffect, useRef, useState } from "react";

const links = [
    {
        href: "#home",
        label: "Home"
    },
    // {
    //     href: "#about",
    //     label: "About"
    // },
    {
        href: "#projects",
        label: "Projects"
    },
    {
        href: "#resume",
        label: "Resume"
    },
    {
        href: "#skills",
        label: "Skills"
    },
    {
        href: "#contact",
        label: "Contact"
    }
];

const NavbarLinks = React.memo(({ className = "" }) => {

    const { navbarMenuIsOpen, setNavbarMenuIsOpen } = useApp();

    const navbarLinksRef = useRef(null);

    // Handle Animation Transition While Window Resizing:
    useEffect(() => {
        const handleResizeWin = () => {

            const navbarLinksRefCurrent = navbarLinksRef.current;

            if (navbarLinksRefCurrent) {
                navbarLinksRefCurrent.classList.remove("max-xl:transition");
                navbarLinksRefCurrent.classList.remove("max-xl:duration-300");
            }
        };

        window.addEventListener('resize', handleResizeWin);
        return () => window.removeEventListener('resize', handleResizeWin);

    }, []);

    // Handle Click User Any Area Not Equal Menu:
    useEffect(() => {
        const handleClickOutSide = () => {
            setNavbarMenuIsOpen(false);
        };

        document.addEventListener('click', handleClickOutSide);
        return () => document.removeEventListener('click', handleClickOutSide);

    }, [setNavbarMenuIsOpen]);

    // Following Tab:
    const [tabStyle, setTabStyle] = useState(() => {
        return JSON.parse(sessionStorage.getItem("tabStyle")) || { left: 0, width: 0, href: "#home" };
    });
    const observerRef = useRef(null);
    const stopObserverRef = useRef(false);

    // Save last data to session storage:
    useEffect(() => {
        sessionStorage.setItem("tabStyle", JSON.stringify(tabStyle));
    }, [tabStyle]);

    const handleClick = (e) => {
        e.preventDefault();
        setNavbarMenuIsOpen(false);

        const { offsetLeft, offsetWidth } = e.target;
        const href = e.target.getAttribute("href");
        setTabStyle({ left: offsetLeft, width: offsetWidth, href });

        const section = document.getElementById(href.slice(1));
        if (section) {
            stopObserverRef.current = true;
            section.scrollIntoView({ behavior: "smooth" });
        }
        const onScrollEnd = () => {
            stopObserverRef.current = false;
            window.removeEventListener("scrollend", onScrollEnd);
        }
        window.addEventListener("scrollend", onScrollEnd);
    };

    // ===== Intersection Observer =====
    useEffect(() => {
        const sections = links.map(link => document.getElementById(link.href.slice(1))).filter(Boolean);

        observerRef.current = new IntersectionObserver(
            (entries) => {
                if (stopObserverRef.current) return;
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const href = `#${entry.target.id}`;
                        const linkEl = navbarLinksRef.current.querySelector(`a[href="${href}"]`);
                        if (linkEl) {
                            if (window.innerWidth > 1280) {
                                setTabStyle({ left: linkEl.offsetLeft, width: linkEl.offsetWidth, href });
                            }
                        }
                    }
                });
            },
            { root: null, rootMargin: "0px", threshold: 0.3 }
        );

        sections.forEach(section => observerRef.current.observe(section));

        return () => {
            sections.forEach(section => observerRef.current.unobserve(section));
        };
    }, []);

    return (
        <div
            ref={navbarLinksRef}
            className={`navbar-links max-xl:absolute max-xl:z-50 max-xl:top-full max-xl:left-0 max-xl:w-full max-xl:transition max-xl:duration-300 ${navbarMenuIsOpen ? "" : "max-xl:opacity-0 max-xl:pointer-events-none max-xl:-translate-y-2"} ${className}`}
        >
            <div className="max-xl:container">
                <ul
                    onClick={e => e.stopPropagation()}
                    className="flex xl:items-center max-xl:flex-col max-xl:bg-primary-purple/50 max-xl:rounded-md max-xl:overflow-hidden relative"
                >
                    {/* following tab */}
                    <span
                        className="absolute bottom-0 h-[2px] bg-primary-purple transition-all duration-300 max-xl:hidden"
                        style={{
                            left: tabStyle.left,
                            width: tabStyle.width,
                        }}
                    />

                    {
                        links.map((link, index) => (<li key={index}>
                            <a
                                href={link.href}
                                onClick={handleClick}
                                className={`block text-xl p-4 xl:p-2 max-xl:px-4 font-normal tracking-widest text-purple-dark
                                transition max-xl:sm:hover:bg-primary-purple dark:max-xl:sm:hover:text-white
                                dark:sm:hover:text-primary-purple xl:overflow-hidden xl:relative ${tabStyle.href === link.href ? "dark:text-primary-purple" : "dark:text-white"}
                                `}
                            >{link.label}</a>
                        </li>))
                    }
                </ul>
            </div>
        </div>
    )
})

export default NavbarLinks;