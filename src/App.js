import React from "react";
import Navi from "./pages/Navi";
import Home from "./pages/Home";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
    return (
        <div>
            <Navi></Navi>
            <Home></Home>
            <About></About>
            <Skill></Skill>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
}

export default App
