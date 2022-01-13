import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
        </Routes>
    );
}

function App() {
    return (
        <div>
            <Router />
            <Home />
        </div>
    );
}

export default App;
