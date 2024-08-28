import Frame from "../../../assets/Frame.png";

const Quote = () => {
  return (
    <section className="rounded-2xl bg-gradient-to-r from-[#FF6400] via-[#FF6400] to-[#FE8E22]">
      <div className="container flex items-center justify-between mx-auto p-6 py-10 text-gray-50">
        <div>
          <p className="text-5xl my-10">
            <span className="font-bold">"95%</span> of individuals who try
            <br />
            to lose weight <span className="font-bold">fail"</span>
          </p>
          <p className="font-semibold text-lg">
            You don't deserve that, you deserve orangefit.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-56 my-8">
            <img src={Frame} />
          </div>
          <p className="font-semibold text-lg">Don't Be a Statistic</p>
        </div>
      </div>
    </section>
  );
};

export default Quote;
