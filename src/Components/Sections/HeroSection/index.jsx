import SocialProfiles from "@components/UI/SocialProfiles";

function HeroSection() {
    return (
        <section className="hero-section py-5 md:py-10" id="home">
            <div className="container">
                <div className="hero-section-content-wrapper flex lg:items-center max-lg:flex-col gap-5 lg:gap-10 p-5 lg:p-10 bg-light-background dark:bg-dark-background rounded-3xl transition border border-gray-soft dark:border-purple-dark bg-bg-light dark:bg-dark-surface">
                    {/* Hero Image */}
                    <div className="hero-section-image">
                        <img
                            src="/assets/images/hero.jpg"
                            alt="Hero Image"
                            className="aspect-square object-cover rounded-xl border border-purple-dark sm:hover:border-primary-purple transition"
                            fetchPriority="high"
                        />
                    </div>
                    {/*  */}
                    <div className="w-full">
                        <h1 className="text-4xl font-semibold mb-3 transition leading-[3rem]">Hi, I am <span className="uppercase">Raven</span> - Web Developer</h1>
                        <p className="text-lg transition mb-4">I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                        {/* Actions */}
                        <div className="actions flex sm:items-center max-sm:flex-col max-lg:justify-center gap-5">
                            {/* Hire me */}
                            <a
                                href="#"
                                className="flex items-center gap-2 py-2 xl:py-4 px-4 xl:px-6 rounded-full bg-primary-purple text-white font-medium text-nowrap group"
                            >
                                <span>Hire me</span>
                                <div className="icon-container relative w-5 h-5 flex rotate-45 flex-col gap-2 overflow-hidden group-hover:[&>i]:first-of-type:-translate-y-6 group-hover:[&>i]:first-of-type:animate-pulse group-hover:[&>i]:last-of-type:-translate-y-6">
                                    <i className="fa-solid fa-arrow-up fa-fw transition"></i>
                                    <i className="fa-solid fa-arrow-up fa-fw transition"></i>
                                </div>
                            </a>
                            {/* Social Profiles */}
                            <SocialProfiles />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;