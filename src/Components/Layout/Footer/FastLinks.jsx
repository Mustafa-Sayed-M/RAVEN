const links = [
    {
        href: "#about",
        label: "About"
    },
    {
        href: "#projects",
        label: "Projects"
    },
    {
        href: "#skills",
        label: "Skills"
    },
    {
        href: "#resume",
        label: "Experience"
    },
    {
        href: "#",
        label: "Blog"
    }
];

function FastLinks({ className = "" }) {
    return (
        <ul className={`flex items-center justify-center gap-2 flex-wrap ${className}`}>
            {
                links.map((link, index) => (<li key={index}>
                    <a
                        href={link.href}
                        className="font-medium transition text-purple-dark dark:text-white sm:hover:text-primary-purple"
                    >{link.label}.</a>
                </li>))
            }
        </ul>
    )
}

export default FastLinks;