import ph1 from "../../../assets/GooglePlay.png";
import ph2 from "../../../assets/AppStore.png";
import phone1 from "../../../assets/Phone1.png";
import phone2 from "../../../assets/Phone2.png";

const Download = () => {
  return (
    <section className="rounded-2xl mt-10 bg-gradient-to-r from-[#FF6400] via-[#FF6400] to-[#FE8E22] md:mt-0">
      <div className="container flex flex-col items-center justify-between mx-auto p-6 py-24 text-gray-50 md:flex-row md:space-x-20 md:py-10">
        <div className="font-semibold text-center md:text-left md:max-w-[56%]">
          <p className="font-bold text-4xl leading-[46px] md:text-6xl md:leading-[70px]">
            Level Up Your Fitness Journey With Orangefit App.
          </p>
          <p className="text-xl leading-8 md:text-2xl mt-10">
            The only app you will need to reach your dream body.
          </p>
          <div className="hidden items-center gap-5 mt-6 md:flex">
            <div>
              <img src={ph1} />
            </div>
            <div>
              <img src={ph2} />
            </div>
          </div>
        </div>
        <div className="flex items-end relative py-8 md:py-0">
          <div className="z-10">
            <img src={phone1} />
          </div>
          <div className="relative right-10">
            <img src={phone2} />
          </div>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-5 mt-6 md:hidden">
          <div>
            <img src={ph1} />
          </div>
          <div>
            <img src={ph2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
