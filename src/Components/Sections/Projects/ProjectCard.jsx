const ProjectTechs = ({ techs = [] }) => {
    return (
        <div className="project-techs flex items-center gap-2 flex-wrap">
            {
                techs.map((tech, index) => (<div
                    key={index}
                    className="techs-item bg-primary-purple/50 py-2 px-4 rounded-full text-sm flex items-center gap-2"
                >
                    <img
                        src={tech.icon}
                        alt=""
                        width={18}
                    />
                    <span>{tech.name}</span>
                </div>))
            }
        </div>
    )
};

function ProjectCard({ project = {} }) {

    const { title = "", name = "", description = "", techs = [], thumbnail = "" } = project;

    return (
        <div className="project-card p-5 md:p-10 rounded-xl shadow-md bg-light dark:bg-text-dark border border-gray-soft dark:border-purple-dark transition grid md:grid-cols-2 gap-x-10 gap-y-5 items-center">
            {/* Project Details */}
            <div className="project-details">
                {/* Title */}
                <span className="text-white/50 font-light">{title}</span>
                {/* Name */}
                <h3 className="font-bold mt-2 mb-5 text-2xl">{name}</h3>
                {/* Description */}
                <p className="mb-7">{description}</p>
                {/* Techs */}
                <ProjectTechs techs={techs} />
            </div>
            {/* Thumbnail */}
            <div className="project-thumbnail rounded-lg border border-gray-soft dark:border-purple-dark transition">
                <img
                    src={thumbnail}
                    alt="Project Thumbnail"
                    className="w-full rounded-lg"
                />
            </div>
        </div>
    )
}

export default ProjectCard;