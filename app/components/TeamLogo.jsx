'use client'

import { motion } from "framer-motion";

// Define the animation variants


// Define the transition
const transition = { ease: "easeOut", duration: 0.8, ease: [0, 0.71, 0.2, 1.00] };


export default function TeamLogo({src, alt}) {
    return (
        <div className="teamLogo">
            <motion.img 
            className="img west1st"
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={transition}
            src={src} 
            alt={alt}
            whileHover={{ scale: 1.15, transition:{ type: 'spring', stiffness: 125 } }}
            
            />        
        </div>
      
    );
}
