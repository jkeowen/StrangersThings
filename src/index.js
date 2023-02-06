import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
    return(
        <div className="app">
            <h1>TEST</h1>
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);