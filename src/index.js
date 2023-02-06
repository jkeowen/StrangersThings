import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";

const App = () => {
    return(
        <div className="app">
            <Header />
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);