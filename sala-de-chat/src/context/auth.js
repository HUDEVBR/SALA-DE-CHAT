import React from 'react';
import { loginWithGoogle } from '../services/firebase';
import { AuthContext } from '../context/auth';

const AuthContext = React.createContext();

const AuthProvider = (props) => {
    const [user, setUser] = React.useState(null);

    const login = async () => {
        const user = await loginWithGoogle();

        if (!user) {
            
        }
        setUser(user)
    }
    const value = { user, login };
    return <AuthContext.Provider value={value}{...props} />;
};

function useAuth(){
    const value = React.useContext(AuthContext);

    if (!value) {
        throw new Error("AuthContext's value is undefined.");
    }

    return value;

}

export { AuthContext, AuthProvider };
export { useAuth };