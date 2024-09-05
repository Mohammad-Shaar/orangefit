import { useState } from "react";
import arrowImg from "../../../assets/Arrow.svg";

const QuestionAndAnswer = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-start w-full border-t-2 border-orange-400 pt-8 mb-8">
      <div className="">
        <p className="font-bold text-lg mr-6 md:text-xl">{question}</p>
        {open && (
          <p className="text-lg pt-4 mr-2 animate-opacityIn">{answer}</p>
        )}
      </div>
      <img
        onClick={() => setOpen(!open)}
        src={arrowImg}
        className={`cursor-pointer ${open ? "transform -scale-y-100" : ""}`}
      />
    </div>
  );
};

export default QuestionAndAnswer;
