'use client'

import { motion } from "framer-motion";

// Define the animation variants


// Define the transition
const transition = { ease: "easeOut", duration: 1, ease: [0, 0.71, 0.2, 1.00] };


export default function TeamLogo({src, alt, year}) {
    return (
        <div className="teamLogo">
            <motion.img 
            className="img west1st"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={transition}
            src={`https://res.cloudinary.com/doer2p9vb/image/upload/v1682978196/nba-logos/img${year}/${src}.png`}
            alt={alt}
            whileHover={{ scale: 1.15, transition:{ type: 'spring', stiffness: 125 } }}
            />        
        </div>
      
    );
}
