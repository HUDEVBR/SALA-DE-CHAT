import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBiKVn8jv-BHSqSM2P7S3HzDX19lIHkejs",
    authDomain: "sala-de-chat-14d9c.firebaseapp.com",
    projectId: "sala-de-chat-14d9c",
    storageBucket: "sala-de-chat-14d9c.appspot.com",
    messagingSenderId: "571233724496",
    appId: "1:571233724496:web:94abedeeb3ae5b09e20955",
    measurementId: "G-B30VF61YZB"
}

const app = initializeApp(firebaseConfig);

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