import persone from "../../../assets/persone.png";
import e11 from "../../../assets/E11.svg";
import e10 from "../../../assets/E10.svg";
import e13 from "../../../assets/E13.svg";
import e14 from "../../../assets/E14.svg";
import e17 from "../../../assets/E17.svg";

const ExpertImge = () => {
  return (
    <div className="relative max-w-[80%] mx-auto md:max-w-[40%] md:mx-0">
      <img className="relative z-10" src={persone} />
      <img
        className="absolute -top-[15%] right-[10%] md:-top-[15%] md:right-[10%]"
        src={e11}
      />
      <img
        className="absolute -top-[10%] right-[10%] md:-top-[10%] md:right-[10%]"
        src={e10}
      />
      <img
        className="absolute -top-[5%] left-[32%] md:-top-[5%] md:left-[55%]"
        src={e13}
      />
      <img
        className="absolute top-[16%] -left-[7%] md:top-[25%] md:-left-[7%]"
        src={e17}
      />
      <img
        className="absolute top-[5%] -left-[5%] md:top-[25%] md:-left-[5%]"
        src={e14}
      />
    </div>
  );
};

export default ExpertImge;
