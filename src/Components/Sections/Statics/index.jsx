import statics from "@data/statics.json";
import StaticsCard from "./StaticsCard";

function Statics() {
    return (
        <section className="statics-section py-5" id="statics">
            <div className="container">
                {/* Statics Content */}
                <div className="statics-content grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5 md:p-10 rounded-xl border border-gray-soft dark:border-purple-dark bg-bg-light dark:bg-dark-surface transition">
                    {
                        statics.map((dataItem, index) => (<StaticsCard data={dataItem} key={index} />))
                    }
                </div>
            </div>
        </section>
    )
}

export default Statics;