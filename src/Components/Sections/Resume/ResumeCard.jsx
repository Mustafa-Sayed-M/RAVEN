function ResumeCard({ data = {} }) {

    const { name = "", jobTitle = "", yearIn = "", yearOut = "" } = data;

    return (
        <div
            className="resume-card ps-7 pb-7 relative after:absolute after:z-20 after:w-3 after:h-3 
            after:bg-primary-purple after:rounded-full after:-left-3 after:top-0 not-last-of-type:before:absolute 
            not-last-of-type:before:z-10 not-last-of-type:before:h-full not-last-of-type:before:w-0.5 before:bg-gray-soft 
            dark:not-last-of-type:before:bg-white/10 not-last-of-type:before:-left-[7px] not-last-of-type:before:transition"
        >
            {/* Name */}
            <h3 className="mb-2">{name}</h3>
            {/* Job Title */}
            <h4 className="mb-2">{jobTitle}</h4>
            {/* Years */}
            <div className="flex items-center gap-1">
                {/* Year In */}
                <p className="!text-white/50">{yearIn}</p>
                {/* - */}
                <span className="text-white/50">-</span>
                {/* Year Out */}
                <p className="!text-white/50">{yearOut}</p>
            </div>
        </div>
    )
}

export default ResumeCard;