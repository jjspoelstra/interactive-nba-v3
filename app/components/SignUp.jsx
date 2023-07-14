import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { signInWithGoogle } from '@/firebase/firebaseConfig';
import { useRouter } from 'next/navigation';

export default function SignUp({ open, onClose }) {
  const router = useRouter()
    const handleLogin = async () => {
        try {
            await signInWithGoogle();
            onClose();
        } catch (error) {
            console.error("Error during sign in:", error);
        }
    };

    const handleRegister = async () => {
        try {
          await signInWithGoogle()
          
          .then(router.push('/signup'))
            
            // You would replace signInWithGoogle() with a function to handle registration.
            // This might involve additional steps beyond just signing in with Google.
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Log In / Register</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please select if you would like to log in or register.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleLogin} color="primary">
                    Log in with Google
                </Button>
                <Button onClick={handleRegister} color="primary">
                    Register with Google
                </Button>
            </DialogActions>
        </Dialog>
    );
}
