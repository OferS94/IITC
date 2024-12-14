import PropTypes from "prop-types";

function RatingStateEnd(props) {
    return (
        <div className="bg-neutral-dark-blue rounded-2xl shadow-lg w-80 p-6 flex flex-col justify-center items-center">
        <div className="mb-4">
            <img src="../../public/images/illustration-thank-you.svg" alt="" className="mx-auto"/>
        </div>
        <div className="text-primary-orange bg-neutral-dark-blue-light flex items-center mb-4 pr-3 pl-3 rounded-xl pb-1 pt-1">
        <p>You selected {props.userChoice} out of 5</p>
        </div>
        <p className="text-neutral-white font-bold text-2xl mb-4 ">Thank you!</p>
      
        <p className="text-neutral-light-grey">
            We appreciate you taking the time to give a rating. 
            If you ever need more support, 
            don’t hesitate to get in touch!
        </p>
        </div>
    )
}

RatingStateEnd.propTypes = {
    setUserChoice: PropTypes.func.isRequired,
    setDidUserChoose: PropTypes.func.isRequired,
  };

export default RatingStateEnd