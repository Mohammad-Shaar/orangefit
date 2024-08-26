import ph1 from "../../../assets/GooglePlay.png";
import ph2 from "../../../assets/AppStore.png";
import phone1 from "../../../assets/Phone1.png";
import phone2 from "../../../assets/Phone2.png";

const Download = () => {
  return (
    <section className="rounded-2xl mt-10 bg-gradient-to-r from-[#FF6400] via-[#FF6400] to-[#FE8E22]">
      <div className="container flex items-center justify-between space-x-20 mx-auto p-6 py-10 text-gray-50">
        <div className="font-semibold max-w-[56%]">
          <p className=" text-6xl leading-[70px]">
            Level Up Your Fitness Journey With Orangefit App.
          </p>
          <p className="text-2xl mt-10">
            The only app you will need to reach your dream body.
          </p>
          <div className="flex space-x-8 mt-6">
            <div>
              <img src={ph1} />
            </div>
            <div>
              <img src={ph2} />
            </div>
          </div>
        </div>
        <div className="flex items-end relative">
          <div className="z-10">
            <img src={phone1} />
          </div>
          <div className="relative top-0 right-6">
            <img src={phone2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
