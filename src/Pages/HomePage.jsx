import About from "@components/Sections/About";
import Resume from "@components/Sections/Resume";
import Contact from "@components/Sections/Contact";
import HeroSection from "@components/Sections/HeroSection";
import Projects from "@components/Sections/Projects";
import Skills from "@components/Sections/Skills";
import Statics from "@components/Sections/Statics";

function HomePage() {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <HeroSection />
            {/* Statics Section */}
            <Statics />
            {/* About Section */}
            {/* <About /> */}
            {/* Projects Section */}
            <Projects />
            {/* Resume Section */}
            <Resume />
            {/* Skills Section */}
            <Skills />
            {/* Contact Section */}
            <Contact />
        </div>
    )
}

export default HomePage;