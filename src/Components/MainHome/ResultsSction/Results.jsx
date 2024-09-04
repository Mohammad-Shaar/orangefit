import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Results = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will only trigger once
  });

  return (
    <section id="results">
      <div className="container mx-auto p-6">
        <h1 className="font-bold text-2xl text-center text-orange-600 mt-6 p-6 md:text-4xl">
          What We&apos;ve Been Up To ...
        </h1>
        <div className="flex flex-col gap-14 justify-center text-gray-50 font-bold my-12 md:flex-row md:gap-20 md:flex-wrap md:mb-32 md:mt-20">
          <div className="flex flex-col items-center">
            <p ref={ref} className="text-6xl">
              {inView ? (
                <CountUp start={0} end={1200} duration={3.75}></CountUp>
              ) : (
                0
              )}
              +
            </p>
            <p>Happy clients</p>
          </div>
          <div className="flex flex-col items-center">
            <p ref={ref} className="text-6xl">
              {inView ? (
                <CountUp start={0} end={110} duration={3.75}></CountUp>
              ) : (
                0
              )}
              %
            </p>
            <p>guaranteed results</p>
          </div>
          <div className="flex flex-col items-center">
            <p ref={ref} className="text-6xl">
              {inView ? (
                <CountUp start={0} end={300} duration={3.75}></CountUp>
              ) : (
                0
              )}
              +K
            </p>
            <p>workouts</p>
          </div>
          <div className="flex flex-col items-center">
            <p ref={ref} className="text-6xl">
              {inView ? (
                <CountUp start={0} end={500} duration={3.75}></CountUp>
              ) : (
                0
              )}
              +
            </p>
            <p>Healthy Recipes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
