import person1 from "../../../assets/person1.png";
import person2 from "../../../assets/person2.png";
import person3 from "../../../assets/person3.png";
import whiteDot from "../../../assets/whiteDot.png";
import OrangeDot from "../../../assets/orangeDot.png";

const Opinions = () => {
  return (
    <section>
      <div className="container mx-auto p-6 my-24 text-gray-50 md:my-10">
        <h1 className="font-bold text-3xl text-center text-orange-600 leading-[55px] md:text-4xl">
          Orangefit is the best,
          <br />
          Here’s the proof
        </h1>
        <div className="flex flex-col my-8 md:flex-row md:gap-10">
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
          <div className="flex flex-col gap-8 mt-4 justify-center items-center md:max-w-[35%] md:gap-6 md:mt-0">
            <p className="font-bold text-center leading-[44px] text-4xl">
              10 Kgs in 3 weeks
            </p>
            <p className="text-lg text-center leading-[27px] md:text-2xl">
              “I tried all the diets in the world and failed, Even when I lose
              weight , I gain it back because the diets were unsustainable.
              Thank god I discovered orangefit .”
            </p>
            <p className="font-bold text-center text-3xl">Anshuman Khuranna</p>
            <div className="flex gap-3">
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
