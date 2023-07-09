

export default function StatsContainer(){
    return(
        <section className="statsContainer">
        <section id="stats" className="hidden">
        <span className="record"></span> Top Performers
        <section className="Players">
            {[...Array(5).keys()].map((i) => (
            <section key={i} className={`player${i}`}>
                <span className="playerName"></span>
                <span className="gp"></span>
                <span className="mpg"></span>
                <span className="ppg"></span>
                <span className="rpg"></span>
                <span className="apg"></span>
                <span className="spg"></span>
                <span className="bpg"></span>
                <span className="fg_pct"></span>
                <span className="three_pct"></span>
                <span className="ft_pct"></span>
                <span className="ts_pct"></span>
                <span className="ws"></span>
                <span className="bpm"></span>
                <span className="vorp"></span>
            </section>
            ))}
        </section>
        </section>
        </section>
    )
}

