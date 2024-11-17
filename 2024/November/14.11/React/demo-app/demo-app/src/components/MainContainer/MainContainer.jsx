import "./MainContainer.css"
import React from "react";
import Head from "../Head/Head";
import Recipe from "../Recipe/Recipe";

const MainContainer = () => {
    return(
        <div className="main-container">
            <Head/>
            <Recipe/>
        </div>
    );
};

export default MainContainer;