import React from "react";
import "./Head.css";
import Intro from "./Intro/Intro";
import PrepTime from "./PrepTime/PrepTime";

const Head = () => {
    return (
        <div className="head">
            This is the head
            <PrepTime/>
            <Intro/>
        </div>
    )
}

export default Head;