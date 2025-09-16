import skills from "@data/skills.json";
import SectionHeader from "../Components/SectionHeader";
import SkillCard from "./SkillCard";

function Skills() {
    return (
        <section className="skills-section py-10" id="skills">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="My Skills"
                    description="We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers."
                    className="text-center"
                />
                {/* Skills Grid */}
                <div className="skills-grid grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    {
                        skills.map((skill, index) => (<SkillCard skill={skill} key={index} />))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills;