import { createContext, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";

const toastContext = createContext();

export function ToastContext({ children }) {
    // Wrapper em volta da lib react-toastify
    // para facilitar uso;

    return (
        <toastContext.Provider value={toast}>
            <ToastContainer position="bottom-right" />
            {children}
        </toastContext.Provider>
    );
}
