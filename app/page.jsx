'use client'

import { useAuthContext } from "@/firebase/AuthContext"
import { Button } from "@mui/material"
import Link from "next/link"
import LogOut from "./components/LogOut";
import SignUp from "./components/SignUp";
import { useState } from "react";

// Define the animation variants

// Define the transition

export default function Home() {
  const [popupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
      setPopupOpen(true);
  };

  const handleClosePopup = () => {
      setPopupOpen(false);
  };
  const {user} = useAuthContext() //this will be ported to header soon, along with other auth changes
    return (
      <>
      <section className='flex'>
        <h1> welcome to the interactive history of the nba </h1>
      {user ? <LogOut/> : <Button 
                variant="text" 
                onClick={handleOpenPopup}
                
                className="fixed top-0 right-0"
                sx={{
                    position: 'fixed', 
                    top: 10, 
                    right: 10
                }}
            > 
                Sign in
            </Button>}
          <SignUp open={popupOpen} onClose={handleClosePopup} />
      </section>
      
      
      <Button variant='text'><Link href={"brackets/2023"}>enter</Link></Button>
        
        
      </>
        
    );
}
