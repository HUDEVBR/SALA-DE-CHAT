import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot, query, orderBy, QuerySnapshot } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBiKVn8jv-BHSqSM2P7S3HzDX19lIHkejs",
    authDomain: "sala-de-chat-14d9c.firebaseapp.com",
    databaseURL: "https://sala-de-chat-14d9c-default-rtdb.firebaseio.com",
    projectId: "sala-de-chat-14d9c",
    storageBucket: "sala-de-chat-14d9c.appspot.com",
    messagingSenderId: "571233724496",
    appId: "1:571233724496:web:94abedeeb3ae5b09e20955",
    measurementId: "G-B30VF61YZB"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


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

async function sendMessage(roomId, user, text) {
        try {
            await addDoc(collection(db, 'chat-rooms', roomId, 'messages'), {
                uid: user.id || null,
                displayName: user.displayName,
                text: text.trim(),
                timestamp: serverTimestamp(),
            });
        } catch (error) {
            console.log(error)
        }
}
    
function getMessages(roomId, callback) {
    return onSnapshot(
        query(
            collection(db, 'chat-rooms', roomId, 'messages'),
            orderBy('timestamp', 'asc')
        ),
        (querySnapshot) => {
            const messages = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            callback(messages);
        }
    )
}

export { loginWithGoogle, sendMessage, getMessages };