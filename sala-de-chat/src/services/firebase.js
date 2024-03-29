import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

async function loginWithGoogle(){
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        const { user } = await signInWithPopup(auth, provider);

        return { uid: user.id, displayName: user.displayName };    
    } catch (error) {
        if (error.code !== 'auth/cancelled-popup-request') {
            console.log(error);
        }
        return null;
    }
} 
export { loginWithGoogle };