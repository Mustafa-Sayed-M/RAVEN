function SkillCard({ skill = {} }) {

    const { iconUrl = "", level = 0, name = "" } = skill;

    return (
        <div className="skill-card" >
            <div className="skill-content p-7 rounded-xl mb-3 border border-gray-soft dark:border-purple-dark bg-bg-light dark:bg-dark-surface transition">
                <img
                    src={iconUrl}
                    alt="Skill Icon"
                    width={83}
                    className="mx-auto mb-3"
                />
                {/* Level */}
                <h3 className="text-center tracking-wide text-2xl dark:text-gray-muted transition">{level}%</h3>
            </div>
            {/* Skill Name */}
            <h4 className="capitalize text-center font-medium transition">{name}</h4>
        </div>
    )
}

export default SkillCard;