import Link from "next/link";
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";

export default function Header(){
    const pathname = usePathname()
  const pathnameYear = pathname.slice(-4)

    return (
        <>
        <header>
        <Link href={`/`} className="linkStyle"> <h1>Interactive NBA</h1> </Link>
            <nav className="flex">
                    
                        <Link href={`${Number(pathnameYear) - 1}`} className="linkStyle"> prev </Link>
                        
                        
                        <Dropdown />
                        <Link href={`${Number(pathnameYear) + 1}`} className="linkStyle"> next </Link>
                    
            </nav>
            <h2 className="headerTitle"> {`${pathnameYear} Playoffs`} </h2>
            
        </header>
            
  
  

        </>
    )
}