import React from "react";

// const FormComp = (props) => {
//     const updateChoice = (value) =>{
//         props.setUserChoice()
//     }

//     return (
//         <div>
//             <span onClick={() => updateChoice(1)}>1</span>
//             <span onClick={() => updateChoice(2)}>2</span>
//             <span onClick={() => updateChoice(3)}>3</span>
//             <span onClick={() => updateChoice(4)}>4</span>
//             <span onClick={() => updateChoice(5)}>5</span>
//         </div>
//     )
// }

const FormComp = (props) => {
    const updateChoice = (e) =>{
        console.log(e.target);

        props.setUserChoice(e.target.value)
    }

    return (
        <div>
            <span onClick={updateChoice}>1</span>
            <span onClick={updateChoice}>2</span>
            <span onClick={updateChoice}>3</span>
            <span onClick={updateChoice}>4</span>
            <span onClick={updateChoice}>5</span>
        </div>
    )
}


export default FormComp;