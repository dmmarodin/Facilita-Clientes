import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientesListPage from "./pages/ClientesListPage";
import "./styles/app.scss";
import { UserContextProvider } from "./contexts/UserContext";

function App() {
    return (
        <div className="App">
            <UserContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" Component={ClientesListPage} />
                    </Routes>
                </BrowserRouter>
            </UserContextProvider>
        </div>
    );
}

export default App;
