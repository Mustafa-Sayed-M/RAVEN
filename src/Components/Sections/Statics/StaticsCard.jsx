function StaticsCard({ data = {} }) {

    const { icon, value, name } = data;

    return (
        <div className="statics-card text-center">
            {/* Icon */}
            <i className={`fa-solid fa-${icon} fa-fw text-primary-purple text-2xl`}></i>
            {/* Value */}
            <h2 className="text-5xl my-4 font-medium">{value}</h2>
            {/* Name */}
            <p>{name}</p>
        </div>
    )
}

export default StaticsCard;