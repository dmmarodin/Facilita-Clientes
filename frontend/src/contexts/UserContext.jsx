import { createContext, useContext } from "react";

const userContext = createContext();

export function UserContextProvider({ children }) {
    // Esses valores deveriam vir de uma API.
    // Como uma autenticação não é requerimento do projeto, ficará
    // fixo em código.

    const value = {
        nome: "Alexandre",
        role: "Administrador",
    };

    return (
        <userContext.Provider value={value}>{children}</userContext.Provider>
    );
}

export function useUserContext() {
    return useContext(userContext);
}
