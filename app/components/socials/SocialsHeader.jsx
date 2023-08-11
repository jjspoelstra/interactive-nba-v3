import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useContext } from "react";
import { useAuthContext } from "@/firebase/AuthContext"
import { AppContext }  from '@/app/components/statsContext'

export default function SocialsHeader() {
    const { toggleSocials } = useContext(AppContext)

  return (
    
      <header style={{ position: 'fixed',  left: '7px', width: '100%', zIndex: 1000, borderLeft: '3px solid grey'}}>
        <nav style={{ marginTop: '25px'}}>
        <span onClick={toggleSocials}>
            
        </span>       
        <Link href={'/brackets/2023'} className="linkStyle"> insights </Link>
        /
        teams /
        <b> denver nuggets</b> 

        <Link href={'/brackets/2023'} className="linkStyle" style={{position: "fixed",
                top: 15,
                right: 25}}> statistics </Link>

        </nav>
        
      </header>
    
  );
}
