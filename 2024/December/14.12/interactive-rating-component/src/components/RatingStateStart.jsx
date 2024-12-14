import PropTypes from "prop-types";

const RatingStateStart = (props) => {
  const updateChoice = (e) => {
    props.setUserChoice(+e.target.innerText); // Correct prop name
  };

  const updateState = () => {
    props.setDidUserChoose(true); // Correct prop name
  };

  return (
    <div className="bg-neutral-dark-blue rounded-2xl shadow-lg w-80 p-6">
        <div className="bg-neutral-dark-blue-light w-10 h-10 rounded-full flex items-center justify-center mb-6">
      <img
        src="../../public/images/icon-star.svg"
        alt="star-icon"
        className="w-4 h-4"
      />
      </div>
      <div className="Text">
        <p className="text-neutral-white font-bold text-2xl mb-4 text-left">How did we do?</p>
        <p className="text-neutral-light-grey text-gray-400 text-sm leading-relaxed mb-6text-sm leading-relaxed mb-6 text-left">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="flex justify-between gap-4 mt-4 mb-6">
        <button
          className="w-12 h-12 rounded-full bg-neutral-dark-blue-light text-white text-lg flex items-center justify-center hover:bg-primary-orange focus:bg-neutral-white transition"
          onClick={updateChoice}
        >
          1
        </button>
        <button className="w-12 h-12 rounded-full bg-neutral-dark-blue-light text-white text-lg flex items-center justify-center hover:bg-primary-orange focus:bg-neutral-white transition" onClick={updateChoice}>
          2
        </button>
        <button className="w-12 h-12 rounded-full bg-neutral-dark-blue-light text-white text-lg flex items-center justify-center hover:bg-primary-orange focus:bg-neutral-white transition" onClick={updateChoice}>
          3
        </button>
        <button className="w-12 h-12 rounded-full bg-neutral-dark-blue-light text-white text-lg flex items-center justify-center hover:bg-primary-orange focus:bg-neutral-white transition" onClick={updateChoice}>
          4
        </button>
        <button className="w-12 h-12 rounded-full bg-neutral-dark-blue-light text-white text-lg flex items-center justify-center hover:bg-primary-orange focus:bg-neutral-white transition" onClick={updateChoice}>
          5
        </button>
      </div>
      <button className="bg-neutral-white text-white uppercase font-bold py-2 rounded-3xl w-full hover:bg-primary-orange transition" onClick={updateState}>
        Submit
      </button>
    </div>
  );
};

RatingStateStart.propTypes = {
  setUserChoice: PropTypes.func.isRequired,
  setDidUserChoose: PropTypes.func.isRequired,
};

export default RatingStateStart;
