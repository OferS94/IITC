import React from "react";

const RatingStateStart = (props) => {
    
    const updateChoice = (e) => {
        props.setUserChoice(+e.target.innerText);
    }
    const updateState = () => {
        props.setDidUserChoose(true)
    }


  return (
    <div className="BigCont">
        <div className="Text">
      <p>How did we do?</p>
      <p>
        Please let us know how we did with your support request.
      All feedback is appreciated to help us improve our offering!
      </p> 
        </div>
        <div className="Butts">
      <span className="UpChoo" onClick={updateChoice}>1</span>
      <span className="UpChoo" onClick={updateChoice}>2</span>
      <span className="UpChoo" onClick={updateChoice}>3</span>
      <span className="UpChoo" onClick={updateChoice}>4</span>
      <span className="UpChoo" onClick={updateChoice}>5</span>
      </div>
      <span className="SubButt" onClick={updateState}>Submit</span>
      
    </div>
  );
};

export default RatingStateStart;
