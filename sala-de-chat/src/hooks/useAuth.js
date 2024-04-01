import React from "react";
import { AuthContext } from "../context/auth";

function useAuth() {
    const value = React.useContext(AuthContext);

    if (!value) {
        throw new Error ('O valor do contexto de autenticação é inválido')
    }

    return value;
}

export { useAuth };