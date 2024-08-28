import LinkBtn from "../../../UI/LinkBtn";
import persone from "../../../assets/persone.png";
import nameFrame from "../../../assets/nameFrame.png";

const Expert = () => {
  return (
    <section id="expert" className="bg-cover bg-center h-[1200px] my-8">
      <div className="container flex justify-between items-center mx-auto p-6 text-gray-50 py-[18%]">
        <div className="flex relative flex-col max-w-[50%]">
          <div className="absolute z-10">
            <img src={nameFrame} />
          </div>
          <p className="font-bold text-4xl z-20">Meet our expert</p>
          <p className="font-bold text-7xl mt-4">Dr.MICHEL ADIB</p>
          <p className="font-bold text-2xl mt-20 mb-6">My Philosophy</p>
          <p className="text-2xl leading-[27px]">
            “My goal is to let everybody get the healthy life they deserve , no
            matter where they are from or how much money they have” I know how
            much you suffered , I know how many diets you tried, to reach the
            body you deserve and failed, The problem is not you, The problem is
            the boring food , hunger in the diets you chose. Orangefit is the
            solution .
          </p>
          <div className="mt-6">
            <LinkBtn path={"#"}>start today</LinkBtn>
          </div>
        </div>
        <div className="max-w-[35%]">
          <img src={persone} />
        </div>
      </div>
    </section>
  );
};

export default Expert;
