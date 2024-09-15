const SinglePlan = ({ type, price, popular, Subscribe }) => {
  return (
    <div className="relative flex flex-col items-center space-y-4 p-12 pt-20 w-[30%] rounded-xl h-full bg-custom-dark border-4 border-custom-dark duration-300 hover:border-orange-600">
      <h2 className="font-bold text-2xl">{type}</h2>
      <p className="text-lg text-orange-400">/user/mo</p>
      <p className="flex pt-1 font-bold text-6xl">
        <sup className="text-2xl">$</sup>
        {price}
      </p>
      <button className="bg-[#FD7B03] py-3 px-14 text-lg rounded-lg ">
        {Subscribe}
      </button>
      {popular && (
        <p className="absolute text-center -top-5 w-custom py-3 font-bold text-2xl rounded-t-xl bg-gradient-to-r from-[#FF6400] via-[#FF6400] to-[#FE8E22]">
          {popular}
        </p>
      )}
    </div>
  );
};

export default SinglePlan;
