import LinkBtn from "../../../UI/LinkBtn";
import persone from "../../../assets/persone.png";
import nameFrame from "../../../assets/nameFrame.png";

const Expert = () => {
  return (
    <section
      id="expert"
      className="bg-cover relative bg-center h-[1200px] my-8"
    >
      <div className="absolute top-[20%] z-10">
        <img src={nameFrame} />
      </div>
      <div className="container flex justify-between items-center mx-auto p-6 text-gray-50 py-[18%]">
        <div className="flex flex-col max-w-[50%]">
          <p className="font-bold text-4xl z-20">Meet our expert</p>
          <p className="font-bold text-7xl mt-4 z-20">Dr.MICHEL ADIB</p>
          <p className="font-bold text-2xl mt-20 mb-6">My Philosophy</p>
          <p className="font-bold text-[27px] leading-[32px] mb-6">
            “My goal is to let everybody get the healthy life they deserve , no
            matter where they are from or how much money they have”
          </p>
          <p className="leading-[27px] text-xl">
            I know how much you suffered ,<br /> I know how many diets you
            tried,
            <br /> to reach the body you deserve and failed,
            <br /> The problem is not you,
            <br /> The problem is the boring food , hunger in the diets you
            chose.
            <br />
            <span className="font-semibold text-xl">
              Orangefit is the solution .
            </span>
          </p>
          <p className="mt-4 text-base text-[#F6FFF8B2]">
            Michel Adib , Founder of orangefit.
          </p>
          <div className="mt-6">
            <LinkBtn path={"#"}>start today</LinkBtn>
          </div>
        </div>
        <div className="max-w-[40%]">
          <img src={persone} />
        </div>
      </div>
    </section>
  );
};

export default Expert;
