function ResumeDownload() {
    return (
        <a
            href="#"
            className="flex items-center gap-2 py-2 xl:py-4 px-4 xl:px-6 rounded-full bg-primary-purple text-white font-medium text-nowrap group"
        >
            <span>Resume</span>
            <div className="icon-container relative w-5 h-5 flex flex-col gap-2 overflow-hidden group-hover:[&>i]:first-of-type:translate-y-0 group-hover:[&>i]:first-of-type:animate-pulse group-hover:[&>i]:last-of-type:translate-y-0">
                <i className="fa-solid fa-download fa-fw transition -translate-y-6"></i>
                <i className="fa-solid fa-download fa-fw transition -translate-y-6"></i>
            </div>
        </a>
    )
}

export default ResumeDownload;