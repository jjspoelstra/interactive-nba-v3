import { motion } from "framer-motion";
const transition = { ease: "easeOut", duration: 0.8, ease: [0, 0.71, 0.2, 1.00] };

export default function EastBracket(team) {
    return (

        <>
        <section className="eastWinner click4"></section>

<section className="eastConference east">
  <section className="finalsEast">
    <img className="eastFinalistWinner" src="" alt="" />
    <div className="blank"></div>
    <div className="border"></div>
  </section>
  <section className="thirdRound east">
    <div className="thirdEast eastFinal click3">
      <section className="matchupThird">
        <img className="east1st8th4th5thWinner" src="" alt="" />
        <img className="east2nd7th3rd6thWinner" src="" alt="" />
      </section>
    </div>
  </section>
  <section className="secondRound east">
    <div className="secondEast eastUpper click2">
      <section className="matchupSecond">
        <img className="east1st8thWinner" src="" alt="" />
        <img className="east4th5thWinner" src="" alt="" />
      </section>
    </div>
    <div className="secondEast eastLower click2">
      <section className="matchupSecond">
        <img className="east2nd7thWinner" src="" alt="" />
        <img className="east3rd6thWinner" src="" alt="" />
      </section>
    </div>
  </section>
  <section className="firstRound east">
    <div className="firstEast eastOneEight click1">
      <section className="matchup">
        <img className="east1st" src="" alt="" />
        <img className="east8th" src="" alt="" />
      </section>
    </div>
    <div className="firstEast eastFourFive click1">
      <section className="matchup">
        <img className="east4th" src="" alt="" />
        <motion.img 
          className="img west1st"
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}
          src={'https://res.cloudinary.com/doer2p9vb/image/upload/v1682978196/nba-logos/img2023/nyk.png'}
          alt={'knicks logo'}
          whileHover={{ scale: 1.15, transition:{ type: 'spring', stiffness: 125 } }}
          
          />  
      </section>
    </div>
    <div className="firstEast eastTwoSeven click1">
      <section className="matchup">
        <img className="east2nd" src="" alt="" />
        <img className="east7th" src="" alt="" />
      </section>
    </div>
    <div className="firstEast eastThreeSix click1">
      <section className="matchup">
        <img className="east3rd" src="" alt="" />
        <img className="east6th" src="" alt="" />
      </section>
    </div>
  </section>
</section>
        </>

    )
}
