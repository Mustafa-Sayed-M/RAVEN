const links = [
    {
        href: "https://facebook.com/",
        icon: "facebook",
        label: "Facebook"
    },
    {
        href: "https://instagram.com/",
        icon: "instagram",
        label: "Instagram"
    },
    {
        href: "https://x.com",
        icon: "x",
        label: "X-Twitter"
    },
    {
        href: "https://linkedin.com/",
        icon: "linkedin",
        label: "Linkedin"
    },
    {
        href: "http://github.com/",
        icon: "github",
        label: "GitHub"
    }
]

function SocialProfiles({ className = "" }) {
    return (
        <ul className={`social-profiles flex items-center justify-center gap-2 ${className}`}>
            {
                links.map((link, index) => (<li key={index}>
                    <a
                        href={link.href}
                        className="block w-10 h-10 leading-10 text-center border border-primary-purple rounded-full text-primary-purple transition sm:hover:bg-primary-purple sm:hover:text-white relative group"
                    >
                        <div className="tooltip py-2 px-4 rounded-md bg-primary-purple text-white absolute z-10 left-1/2 -translate-x-1/2 top-0 -mt-12 text-sm text-nowrap transition opacity-0 pointer-events-none sm:group-hover:opacity-100 translate-y-2 sm:group-hover:translate-y-0">{link.label}</div>
                        <i className={`fa-brands fa-${link.icon} fa-fw`}></i>
                        <span className="sr-only">{link.label}</span>
                    </a>
                </li>))
            }
        </ul>
    )
}

export default SocialProfiles;