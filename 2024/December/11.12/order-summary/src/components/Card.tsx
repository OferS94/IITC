import Payment from "./Payment";
import Summary from "./Summary";

function Card() {
  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg w-96">
        <img src="../../public/images/illustration-hero.svg" alt="" className="rounded-t-2xl" />
        <div className="bg-neutral-Very-pale-blue p-6 rounded-b-2xl">
          <Summary />
          <Payment />
          <div className="flex gap-4 mt-4 flex-col px-4 pb-6 ">
            <button
              className="
            bg-primary-Bright-blue text-neutral-Very-pale-blue px-4 py-2 rounded-md"
            >
              Proceed to Payment
            </button>
            <button className="text-neutral-Desaturated-blue font-bold"> Cancel Order </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
