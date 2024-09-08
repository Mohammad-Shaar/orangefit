const Slider = ({ title, paragraph, clientName }) => {
  return (
    <div className="flex flex-col gap-8 mt-4 justify-center items-center md:gap-6 md:mt-0">
      <p className="font-bold text-center leading-[44px] text-4xl">{title}</p>
      <p className="text-lg text-center leading-[27px] md:text-2xl">
        {paragraph}
      </p>
      <p className="font-bold text-center text-3xl">{clientName}</p>
    </div>
  );
};

export default Slider;
