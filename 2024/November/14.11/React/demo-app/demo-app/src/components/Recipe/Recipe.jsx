import React from "react";
import "./Recipe.css";
import Ingredients from "./Ingredients/Ingredients";
import Instructions from "./Instructions/Instructions";
import Nut from "./Nut/Nut";

const Recipe = () => {
    return (
        <div className="recipe">
            This is the Recipe
            <Ingredients/>
            <Instructions/>
            <Nut/>
        </div>
    )
}

export default Recipe;