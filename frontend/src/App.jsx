import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientesListPage from "./pages/ClientesListPage/ClientesListPage";
import "./styles/app.scss";
import { UserContextProvider } from "./contexts/UserContext";
import { ToastContext } from "./contexts/ToastContext";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="App">
            <ToastContext>
                <UserContextProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" Component={ClientesListPage} />
                        </Routes>
                    </BrowserRouter>
                </UserContextProvider>
            </ToastContext>
        </div>
    );
}

export default App;
