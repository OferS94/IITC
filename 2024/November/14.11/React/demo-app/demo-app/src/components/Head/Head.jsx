import React from "react";
import "./Head.css";
import Intro from "./Intro/Intro";
import PrepTime from "./PrepTime/PrepTime";

const Head = () => {
    return (
        <div className="head">
            <Intro/>
            <PrepTime/>
            
        </div>
    )
}

export default Head;