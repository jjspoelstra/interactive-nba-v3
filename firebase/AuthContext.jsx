import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import {app} from './firebaseConfig'

const auth = getAuth(app)

export const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({
    children,
}) => {
    const [user, setUser] = useState(null)


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                console.log(user)
            } else {
                setUser(null)
            }
        })

        return () => unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}