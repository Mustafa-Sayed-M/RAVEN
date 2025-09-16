function SectionHeader({ className = "", title = "", description = "" }) {
    return (
        <div className={`section-header mb-5 md:mb-10 ${className}`}>
            <h2 className="font-semibold text-2xl sm:text-3xl lg:text-5xl transition bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-white">{title}</h2>
            {
                description && <p className="md:max-w-[700px] mx-auto transition mt-4">{description}</p>
            }
        </div>
    )
}

export default SectionHeader;