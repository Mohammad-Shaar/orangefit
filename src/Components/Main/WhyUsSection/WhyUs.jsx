import ph1 from "../../../assets/01.png";
import ph2 from "../../../assets/02.png";
import ph3 from "../../../assets/03.png";

const WhyUs = () => {
  return (
    <section>
      <div className="container mx-auto p-6 py-10 text-gray-50">
        <h1 className="text-orange-600 text-center mt-6 p-6 text-4xl font-bold">
          Why choose orangefit ?
        </h1>
        <div className="mt-10 flex flex-row-reverse justify-center items-center space-x-14 space-x-reverse">
          <div className="max-w-[34%]">
            <span className="font-bold text-7xl text-orange-600">1</span>
            <h2 className="font-bold text-4xl leading-[50px] my-8">
              Weekly customized meal plan for you
            </h2>
            <p className="text-2xl leading-10">
              Different day = different meals (250+ healthy recipes with full
              instructions)
              <br />
              Who said dieting is boring !
            </p>
          </div>
          <div>
            <img src={ph1} />
          </div>
        </div>
        <div className="mt-10 flex justify-center items-center space-x-14">
          <div className="max-w-[34%] text-right">
            <span className="font-bold text-7xl text-orange-600">2</span>
            <h2 className="font-bold text-4xl leading-[50px] my-8">
              customized workout plan for you
            </h2>
            <p className="text-2xl leading-10">
              (500+ instructional workouts videos by Dr Michel , to guarantee
              you are performing the right technique)
            </p>
          </div>
          <div>
            <img src={ph2} />
          </div>
        </div>
        <div className="mt-10 flex flex-row-reverse justify-center items-center space-x-14 space-x-reverse">
          <div className="max-w-[35%]">
            <span className="font-bold text-7xl text-orange-600">3</span>
            <h2 className="font-bold text-4xl leading-[50px] my-8">
              Daily Weight tracking, and monthly check ups from the expert
              himself !
            </h2>
            <p className="text-2xl leading-10">
              To make sure you are on the right track.
            </p>
          </div>
          <div>
            <img src={ph3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
