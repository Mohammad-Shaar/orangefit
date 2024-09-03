import ph1 from "../../../assets/01.png";
import ph2 from "../../../assets/02.png";
import ph3 from "../../../assets/03.png";
import frame from "../../../assets/frame.svg";
import SlideImage from "./slideImage";

const WhyUs = () => {
  return (
    <section className="overflow-hidden">
      <div className="container mb-20 mx-auto p-6 py-10 text-gray-50">
        <h1 className="text-orange-600 text-center my-16 text-4xl font-bold">
          Why choose orangefit ?
        </h1>
        <div className="flex flex-col justify-center items-center mt-10 md:flex-row-reverse md:space-x-14 md:space-x-reverse ">
          <div className="text-center mb-8 md:text-left md:mb-0 md:max-w-[35%]">
            <span className="font-bold text-5xl text-orange-600 md:text-7xl">
              1
            </span>
            <h2 className="font-bold text-3xl leading-10 my-5 md:text-4xl md:leading-[50px] md:my-8">
              Weekly customized meal plan for you
            </h2>
            <p className="text-lg leading-7 md:text-2xl md:leading-10">
              Different day = different meals (250+ healthy recipes with full
              instructions)
              <br />
              Who said dieting is boring !
            </p>
          </div>
          <SlideImage
            photo={ph1}
            frame={frame}
            animateClass="md:animate-slideInLeft"
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-24 md:flex-row md:space-x-14 md:mt-10">
          <div className="text-center mb-8 md:text-right md:mb-0 md:max-w-[34%]">
            <span className="font-bold text-5xl text-orange-600 md:text-7xl">
              2
            </span>
            <h2 className="font-bold text-3xl leading-10 my-5 md:text-4xl md:leading-[50px] md:my-8">
              customized workout plan for you
            </h2>
            <p className="text-lg leading-7 md:text-2xl md:leading-10">
              (500+ instructional workouts videos by Dr Michel , to guarantee
              you are performing the right technique)
            </p>
          </div>
          <SlideImage
            photo={ph2}
            frame={frame}
            animateClass="md:animate-slideInRight"
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-24 md:flex-row-reverse md:space-x-14 md:space-x-reverse md:mt-10">
          <div className="text-center mb-8 md:text-left md:mb-0 md:max-w-[35%]">
            <span className="font-bold text-5xl text-orange-600 md:text-7xl">
              3
            </span>
            <h2 className="font-bold text-3xl leading-10 my-5 md:text-4xl md:leading-[50px] md:my-8">
              Daily Weight tracking, and monthly check ups from the expert
              himself !
            </h2>
            <p className="text-lg leading-7 md:text-2xl md:leading-10">
              To make sure you are on the right track.
            </p>
          </div>
          <SlideImage
            photo={ph3}
            frame={frame}
            animateClass="md:animate-slideInLeft"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
