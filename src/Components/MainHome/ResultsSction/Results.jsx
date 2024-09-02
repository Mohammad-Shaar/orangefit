import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Results = () => {
  const [counterState, setCounterState] = useState(false);

  return (
    <section id="results">
      <ScrollTrigger
        onEnter={() => setCounterState(true)}
        onExit={() => setCounterState(false)}
      >
        <div className="container mx-auto p-6">
          <h1 className="font-bold text-2xl text-center text-orange-600 mt-6 p-6 md:text-4xl">
            What We've Been Up To ...
          </h1>
          <div className="flex flex-col gap-14 justify-center text-gray-50 font-bold my-12 md:flex-row md:gap-20 md:flex-wrap md:mb-32 md:mt-20">
            <div className="flex flex-col items-center">
              <p className="text-6xl">
                {counterState && (
                  <CountUp start={0} end={1200} duration={3.75}></CountUp>
                )}
                +
              </p>
              <p>Happy clients</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-6xl">
                {counterState && (
                  <CountUp start={0} end={110} duration={3.75}></CountUp>
                )}
                %
              </p>
              <p>guaranteed results</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-6xl">
                {counterState && (
                  <CountUp start={0} end={300} duration={3.75}></CountUp>
                )}
                +K
              </p>
              <p>workouts</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-6xl">
                {counterState && (
                  <CountUp start={0} end={500} duration={3.75}></CountUp>
                )}
                +
              </p>
              <p>Healthy Recipes</p>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </section>
  );
};

export default Results;
