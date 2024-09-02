import Frame from "../../../assets/Frame.png";
import CircularBar from "./CircularBar";

const Quote = () => {
  return (
    <section className="rounded-2xl bg-gradient-to-r from-[#FF6400] via-[#FF6400] to-[#FE8E22]">
      <div className="container flex flex-col items-center justify-between mx-auto p-6 py-10 text-gray-50 md:flex-row">
        <div>
          <p className="font-semibold text-4xl text-center leading-[47px] mt-10 mb-5 md:text-6xl md:leading-[70px] md:text-left md:my-10">
            &quot;95%{" "}
            <span className="font-light">
              of individuals who try
              <br />
              to lose weight
            </span>{" "}
            fail&quot;
          </p>
          <p className="font-semibold text-xl leading-7 text-center md:text-2xl md:text-left">
            You don't deserve that, you deserve orangefit.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <CircularBar />
          {/* <div className="md:w-56 my-8">
            <img src={Frame} />
          </div> */}
          <p className="font-semibold text-xl md:text-2xl">
            Don't Be a Statistic
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quote;
