import person1 from "../../../assets/person1.png";
import person2 from "../../../assets/person2.png";
import person3 from "../../../assets/person3.png";
import whiteDot from "../../../assets/whiteDot.png";
import OrangeDot from "../../../assets/orangeDot.png";

const Opinions = () => {
  return (
    <section>
      <div className="container mx-auto p-6 my-24 md:my-10 text-gray-50">
        <h1 className="text-center text-orange-600 text-3xl md:text-4xl font-bold leading-[55px]">
          Orangefit is the best,
          <br />
          Here’s the proof
        </h1>
        <div className="flex flex-col md:space-x-10 my-8 md:flex-row">
          <div className="grid grid-cols-3">
            <div>
              <img src={person1} />
            </div>
            <div>
              <img src={person2} />
            </div>
            <div>
              <img src={person3} />
            </div>
            <div>
              <img src={person2} />
            </div>
            <div>
              <img src={person3} />
            </div>
            <div>
              <img src={person1} />
            </div>
          </div>
          <div className="flex flex-col gap-8 mt-4 md:max-w-[35%] justify-center items-center md:gap-6 md:mt-0">
            <p className="font-bold leading-[44px] text-4xl">
              10 Kgs in 3 weeks
            </p>
            <p className="leading-[27px] text-lg md:text-2xl text-center">
              “I tried all the diets in the world and failed, Even when I lose
              weight , I gain it back because the diets were unsustainable.
              Thank god I discovered orangefit .”
            </p>
            <p className="text-3xl font-bold">Anshuman Khuranna</p>
            <div className="flex space-x-3">
              <span>
                <img src={whiteDot} />
              </span>
              <span>
                <img src={OrangeDot} />
              </span>
              <span>
                <img src={whiteDot} />
              </span>
              <span>
                <img src={whiteDot} />
              </span>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-3">
            <div>
              <img src={person1} />
            </div>
            <div>
              <img src={person2} />
            </div>
            <div>
              <img src={person3} />
            </div>
            <div>
              <img src={person2} />
            </div>
            <div>
              <img src={person3} />
            </div>
            <div>
              <img src={person1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opinions;
