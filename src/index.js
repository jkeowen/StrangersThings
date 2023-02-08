import React, { useState} from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Posts from "./components/Posts";

const App = () => {
    const [ userPosts, setUserPosts] = useState([]);
1

    return(
        <div className="app">
            <Header />
            <Posts userPosts={userPosts} setUserPosts={setUserPosts} />
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);