
import { motion } from "framer-motion";
const transition = { ease: "easeOut", duration: 0.8, ease: [0, 0.71, 0.2, 1.00] };

export default function WestBracket(team) {
    return (

        <>
  
  <section className="conference west">
    <section className="firstRound left top">
      <div className="firstLeft westOneEight click1">
        <section className="matchupWest top">
          <img className="west1st" src="" alt="" />
          <img className="west8th" src="" alt="" />
        </section>
      </div>
      <div className="firstLeft westFourFive click1">
        <section className="matchupWest">
          <img className="west4th" src="" alt="" />
          <img className="west5th" src="" alt="" />
        </section>
      </div>
      <div className="firstLeft westTwoSeven click1">
        <section className="matchupWest">
          <img className="west2nd" src="" alt="" />
          <img className="west7th" src="" alt="" />
        </section>
      </div>
      <div className="firstLeft westThreeSix click1">
        <section className="matchupWest">
          <img className="west3rd" src="" alt="" />
          <motion.img 
          className="img west6th"
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}
          src={'https://res.cloudinary.com/doer2p9vb/image/upload/v1682978196/nba-logos/img2023/gsw.png'}
          alt={'warriors logo'}
          whileHover={{ scale: 1.15, transition:{ type: 'spring', stiffness: 125 } }}
          
          />  
        </section>
      </div>
    </section>

    <section className="secondRound left">
      <div className="secondLeft westUpper click2">
        <section className="matchupSecondWest">
          <img className="west1st8thWinner" src="" alt="" />
          <img className="west4th5thWinner" src="" alt="" />
        </section>
      </div>
      <div className="secondLeft westLower click2">
        <section className="matchupSecondWest">
          <img className="west2nd7thWinner" src="" alt="" />
          <img className="west3rd6thWinner" src="" alt="" />
        </section>
      </div>
    </section>

    <section className="thirdRound left">
      <div className="thirdWest westFinal click3">
        <section className="matchupThirdWest">
          <img className="west1st8th4th5thWinner" src="" alt="" />
          <img className="west2nd7th3rd6thWinner" src="" alt="" />
        </section>
      </div>
    </section>

    <section className="finals click4">
      <img className="westFinalistWinner" src="" alt="" />
      <div className="blank"></div>
      <div className="border"></div>
    </section>
  </section>

  <section className="champion">
    <img className="finalsChampion" src="" alt="" />
  </section>



        </>
        
      
    );
}
