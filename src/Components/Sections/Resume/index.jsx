import SectionHeader from "../Components/SectionHeader";
import resumeData from '@data/resume.json';
import ResumeCard from "./ResumeCard";

function Resume() {
    return (
        <section className="resume-section py-5 md:py-10" id="resume">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="Education & Work Experience"
                />
                {/* Resume Content */}
                <div className="resume-content grid md:grid-cols-2 xl:grid-cols-3 gap-5 p-5 md:p-10 rounded-xl border border-gray-soft dark:border-purple-dark bg-bg-light dark:bg-dark-surface transition">
                    {/* Education */}
                    <div className="resume-education">
                        {
                            resumeData.education.map((data, index) => (<ResumeCard data={data} key={index} />))
                        }
                    </div>
                    {/* Experience */}
                    <div className="resume-education">
                        {
                            resumeData.experience.map((data, index) => (<ResumeCard data={data} key={index} />))
                        }
                    </div>
                    {/* Past Roles */}
                    <div className="resume-education">
                        {
                            resumeData.pastRoles.map((data, index) => (<ResumeCard data={data} key={index} />))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;