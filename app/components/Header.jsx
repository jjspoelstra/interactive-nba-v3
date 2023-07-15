import Link from "next/link";
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { useAuthContext } from "@/firebase/AuthContext"
import { Button } from "@mui/material"
import LogOut from "./LogOut";
import SignUp from "./SignUp";

export default function Header() {
  const pathname = usePathname();

  const pathnameArray = pathname.split("/");
  pathnameArray.shift();

  const lastPathname = pathnameArray[pathnameArray.length - 1];

  const [popupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const { user } = useAuthContext();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header style={{ position: 'fixed', top: 10, width: '100%', zIndex: 1000 }}>
        
        <nav className="flex">
        <Link href={`/`} className="linkStyle">
          <span>Interactive NBA History /</span>
        </Link>
          {pathnameArray.map((e, index) => (
            <span key={index} className="padding">
              {"\u00A0"}
              {index === pathnameArray.length - 1 && !isNaN(lastPathname) ? (
                <div className="dropdown" >
                  <span onClick={toggleDropdown}> <b>{e}</b> </span>
                  <span className="dropdown-icon">&#9662;</span>
                  {isOpen && (
                    <div id="myDropdown" className="dropdown-content">
                      {Array.from({ length: 33 }, (_, i) => {
                        const year = 2023 - i;
                        return (
                          <Link key={year} href={`/brackets/${year}`} className="linkStyle">
                            {year}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                e + " / "
              )}
            </span>
          ))}


       

        <Link href={`/`} className="linkStyle">
            <Button sx={{
                position: "fixed",
                top: 10,
                right: 200,
              }} > Home</Button>
        </Link>   

        <Link href={`/contact`} className="linkStyle">
            <Button sx={{
                position: "fixed",
                top: 10,
                right: 105,
              }} disabled> Contact</Button>
        </Link>  
        
        {user ? (
            <LogOut />
          ) : (
            <Button
              variant="text"
              onClick={handleOpenPopup}

              sx={{
                position: "fixed",
                top: 10,
                right: 10,
              }}
            >
             Sign in
            </Button>
          )}
        
          
            

          

          <SignUp open={popupOpen} onClose={handleClosePopup} />
        </nav>
      </header>
    </>
  );
}
