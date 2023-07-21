import Link from "next/link";
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { useAuthContext } from "@/firebase/AuthContext"
import { Button } from "@mui/material"
import LogOut from "./LogOut";
import SignUp from "./SignUp";
import { color } from "framer-motion";
import { grey } from "@mui/material/colors";

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
      <header style={{ position: 'fixed', top: 10, width: '100%', zIndex: 1000}}>
        
        <nav className="flex">
          <section>
          <Link href={'/brackets/2023'} className="linkStyle">
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
          </section>
        


       
              <section className="nav">
              <Link href={`/brackets/2023`} className="linkStyle">
            <span sx={{
                position: "fixed",
                top: 10,
                right: 200,
              }} disabled >  Home </span>
        </Link>   
              |
        {/* <Link href={`/contact`} className="linkStyle">
            <span sx={{
                position: "fixed",
                top: 10,
                right: 105,
              }} disabled> Contact </span>
        </Link>  
        | */}
        {user ? (
            <LogOut />
          ) : (
            <span
              variant="text"
              onClick={handleOpenPopup}
              disabled
              sx={{
                position: "fixed",
                top: 10,
                right: 10,
              }}
              
            >
              {` Sign In`}
            </span>
          )}
        
          
            

          

          <SignUp open={popupOpen} onClose={handleClosePopup} />
              </section>
       
        </nav>
      </header>
    </>
  );
}
