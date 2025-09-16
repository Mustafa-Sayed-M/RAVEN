import SectionHeader from "../Components/SectionHeader";
import projects from "@data/projects.json"
import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <section className="projects-section py-5 md:py-10" id="projects">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="Recent Projects"
                />
                {/* Projects Content */}
                <div className="projects-content space-y-5">
                    {
                        projects.map((project, index) => (<ProjectCard key={index} project={project} />))
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects;