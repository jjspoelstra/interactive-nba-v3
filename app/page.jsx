'use client'

import { useAuthContext } from "@/firebase/AuthContext"
import { Button } from "@mui/material"
import Link from "next/link"
import Header from "./components/Header"
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
  const {user} = useAuthContext() 
    return (
      <>
      <Header/>
      
      
      <Button variant='text'><Link href={"brackets/2023"}>enter</Link></Button>
        
        
      </>
        
    );
}
