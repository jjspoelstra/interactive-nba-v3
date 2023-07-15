import { useState, useEffect } from "react";

export default function Series({ series, topSeed, lowSeed }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMediaQuery = (event) => {
      setIsMobile(event.matches);
    };

    const mediaQuery = window.matchMedia("(max-width: 1280px)");
    mediaQuery.addEventListener("change", handleMediaQuery);
    handleMediaQuery(mediaQuery); // Initial check on page load

    // Cleanup the listener when component unmounts
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQuery);
    };
  }, []);

  const games = series.gameScores;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const showGame = (index) => {
    setHoveredIndex(index);
  };

  const hideGame = () => {
    setHoveredIndex(null);
  };

  let topWins = 0;
  let lowWins = 0;

  const teams = [
    "ATL", "BOS", "BRK", "CHI", "CHO", "CLE", "DAL", "DEN", "DET", "GSW", 
    "HOU", "IND", "LAC", "LAL", "MEM", "MIA", "MIL", "MIN", "NOP", "NYK", 
    "OKC", "ORL", "PHI", "PHO", "POR", "SAC", "SAS", "TOR", "UTA", "WAS"
  ];

  const teamNames = [
    "hawks", "celtics", "nets", "bulls", "hornets", "cavaliers", "mavericks", 
    "nuggets", "pistons", "warriors", "rockets", "pacers", "clippers", "lakers", 
    "grizzlies", "heat", "bucks", "timberwolves", "pelicans", "knicks", "thunder", 
    "magic", "76ers", "suns", "blazers", "kings", "spurs", "raptors", "jazz", "wizards"
  ];

  const getTeamName = (abbreviation) => {
    const index = teams.indexOf(abbreviation);
    if (index !== -1) {
      return teamNames[index];
    }
    return "";
  };

  const firstAwayTeam = games[0]?.awayTeam.toLowerCase() || "";
  const firstAwayTeamName = teamNames.find((team) => firstAwayTeam.includes(team));
  const isFirstAwayTeamTopSeed = firstAwayTeamName === getTeamName(topSeed);

  let topClass = topSeed.toLowerCase()
  let lowClass = lowSeed.toLowerCase()
   
  return (
    isMobile ? <></> :
    <section>
      {games.map((game, i) => {
        const awayScore = Number(game.awayTeam.slice(-3).trim());
        const homeScore = Number(game.homeTeam.slice(-3).trim());
        const isHovered = hoveredIndex === i;

        if (awayScore > homeScore) {
          if (i === 0 || i === 1 || i === 4 || i === 6) {
            
            if (isFirstAwayTeamTopSeed) {
              topWins++;
            } else {
              lowWins++;
            }
            return (
              <span
                key={i}
                className={`game ${isFirstAwayTeamTopSeed ? "topSeedWin" : "lowSeedWin"}${isFirstAwayTeamTopSeed ? topWins : lowWins} ${isFirstAwayTeamTopSeed ? `${topClass}Win` : `${lowClass}Win`}`}
                onMouseEnter={() => showGame(i)}
                onMouseLeave={hideGame}
              >
                ▶
                <span
                  className={`toolTipText Game${i + 1} ${isHovered ? "" : "hidden"}`}
                >
                  {`Game ${i + 1}: ${awayScore}-${homeScore}`}
                </span>
              </span>
            );
          } else {
            if (isFirstAwayTeamTopSeed) {
              lowWins++;
            } else {
              topWins++;
            }
            return (
              <span
                key={i}
                className={`game ${isFirstAwayTeamTopSeed ? "lowSeedWin" : "topSeedWin"}${isFirstAwayTeamTopSeed ? lowWins : topWins} ${isFirstAwayTeamTopSeed ? `${lowClass}Win` : `${topClass}Win`}`}
                onMouseEnter={() => showGame(i)}
                onMouseLeave={hideGame}
              >
                ▶
                <span
                  className={`toolTipText Game${i + 1} ${isHovered ? "" : "hidden"}`}
                >
                  {`Game ${i + 1}: ${awayScore}-${homeScore}`}
                </span>
              </span>
            );
          }
        } else {
          if (i === 0 || i === 1 || i === 4 || i === 6) {
            if (isFirstAwayTeamTopSeed) {
              lowWins++;
            } else {
              topWins++;
            }
            return (
              <span
                key={i}
                className={`game ${isFirstAwayTeamTopSeed ? "lowSeedWin" : "topSeedWin"}${isFirstAwayTeamTopSeed ? lowWins : topWins} ${isFirstAwayTeamTopSeed ? `${lowClass}Win` : `${topClass}Win`}`}
                onMouseEnter={() => showGame(i)}
                onMouseLeave={hideGame}
              >
                ▶
                <span
                  className={`toolTipText Game${i + 1} ${isHovered ? "" : "hidden"}`}
                >
                  {`Game ${i + 1}: ${awayScore}-${homeScore}`}
                </span>
              </span>
            );
          } else {
            if (isFirstAwayTeamTopSeed) {
              topWins++;
            } else {
              lowWins++;
            }
            return (
              <span
                key={i}
                className={`game ${isFirstAwayTeamTopSeed ? "topSeedWin" : "lowSeedWin"}${isFirstAwayTeamTopSeed ? topWins : lowWins} ${isFirstAwayTeamTopSeed ? `${topClass}Win` : `${lowClass}Win`}`}
                onMouseEnter={() => showGame(i)}
                onMouseLeave={hideGame}
              >
                ▶
                <span
                  className={`toolTipText Game${i + 1} ${isHovered ? "" : "hidden"}`}
                >
                  {`Game ${i + 1}: ${awayScore}-${homeScore}`}
                </span>
              </span>
            );
          }
        }
      })}
    </section>
  ) 
}
