const contactInfo = [
    {
        name: "Email",
        href: "mailto:mustafacoder9@gmail.com",
        icon: "envelope",
        label: "mustafa@gmail.com"
    },
    {
        name: "Phone",
        href: "tel:+20 11122124968",
        icon: "phone",
        label: "+20 11122124968"
    },
    {
        name: "Location",
        href: "https://www.google.com/maps/place/Kafr+Hamza,+Al+Khankah,+Al-Qalyubia+Governorate/@30.0864405,31.6439851,13z/data=!4m6!3m5!1s0x1458124769fc74f9:0xd26dba9c8fbbb476!8m2!3d30.2324261!4d31.3270841!16s%2Fg%2F1v0bvxz6?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D",
        icon: "location-dot",
        label: "Kafr Hamza, Al Khankah, Al-Qalyubia Governorate, Egypt"
    }
];

function ContactInfo() {
    return (
        <div className="contact-info">
            {/* Label */}
            <h3 className="font-semibold text-3xl mb-5">Contact Info</h3>
            {/* Contact Info */}
            <ul className="space-y-3">
                {
                    contactInfo.map((link, index) => (<li key={index}>
                        <a
                            className="flex items-center gap-3 bg-primary-purple/20 p-5 rounded-md transition sm:hover:bg-primary-purple/40"
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={link.name}
                            aria-label={link.name}
                        >
                            <i className={`fa-solid fa-${link.icon} fa-fw text-primary-purple text-2xl`}></i>
                            <p>{link.label}</p>
                        </a>
                    </li>))
                }
            </ul>
        </div>
    )
}

export default ContactInfo;