import person1 from "../../../assets/person1.png";
import person2 from "../../../assets/person2.png";
import person3 from "../../../assets/person3.png";

const GridImageComp = ({ hide }) => {
  return (
    <div
      className={`${hide ? "hidden md:grid" : "grid"} grid-cols-3 items-center`}
    >
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
  );
};

export default GridImageComp;
