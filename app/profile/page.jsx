'use client'
import React from "react";
import { useAuthContext } from "@/firebase/AuthContext";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/brackets/2023")
    }, [user])

    return (<h1>Only logged in users can view this page</h1>);
}

