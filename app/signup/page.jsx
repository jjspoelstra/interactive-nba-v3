'use client'

import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { useAuthContext } from "@/firebase/AuthContext";
import { savePreferences } from "@/firebase/firebaseConfig"; // assuming you've set this up

const SignUp = () => {
  const { user } = useAuthContext();

  if (!user) return (<></>)

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [favoriteTeams, setFavoriteTeams] = useState("");
  
  // Get user information if available
  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName);
      setEmail(user.email);
    }
  }, [user]);
  
  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const preferences = { displayName, email, favoriteTeams };
    savePreferences(preferences) // redirect after saving
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleFormSubmit}>
        <TextField
          label="Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Favorite Teams"
          value={favoriteTeams}
          onChange={(e) => setFavoriteTeams(e.target.value)}
          required
        />
        <Button type="submit" href="/brackets/2023">Submit</Button>
      </form>
    </div>
  );
};

export default SignUp;
