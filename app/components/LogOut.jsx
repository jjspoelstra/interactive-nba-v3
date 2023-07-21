import { signOutUser } from "@/firebase/firebaseConfig"
import { Button } from "@mui/material"

export default function LogOut() {

    return (
        <>
       
        
            <span
                variant="text" 
                onClick={signOutUser} 
                className="fixed top-0 right-0"
                sx={{
                    position: 'fixed', 
                    top: 10, 
                    right: 10
                }}
            > 
                Sign Out
            </span>

            </>
        )
}
