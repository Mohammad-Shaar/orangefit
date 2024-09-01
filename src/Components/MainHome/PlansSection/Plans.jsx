const Plans = () => {
  return (
    <section>
      <div className="container mx-auto p-6 my-10 text-gray-50">
        <h1 className="text-center text-4xl my-16 font-bold leading-[55px]">
          Choose a plan that’s right for you
        </h1>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center space-y-4 p-12 pt-20 w-[30%] rounded-xl h-full bg-custom-dark border-4 border-custom-dark duration-300 hover:border-orange-600">
            <h2 className="font-bold text-2xl">Diet only</h2>
            <p className="text-lg text-orange-400">/user/mo</p>
            <p className="flex pt-1 font-bold text-6xl">
              <sup className="text-2xl">$</sup>25
            </p>
            <button className="bg-[#FD7B03] py-3 px-14 text-lg rounded-lg ">
              Subscribe
            </button>
          </div>
          <div className="relative flex flex-col items-center space-y-4 p-12 pt-20 w-[30%] rounded-xl h-full bg-custom-dark border-4 border-custom-dark duration-300 hover:border-orange-600">
            <h2 className="font-bold text-2xl">Diet + Workout</h2>
            <p className="text-lg text-orange-400">/user/mo</p>
            <p className="flex pt-1 font-bold text-6xl">
              <sup className="text-2xl">$</sup>19
            </p>
            <button className="bg-[#FD7B03] py-3 px-14 text-lg rounded-lg ">
              Subscribe
            </button>
            <p className="absolute text-center -top-5 w-custom py-3 font-bold text-2xl rounded-t-xl bg-gradient-to-r from-[#FF6400] via-[#FF6400] to-[#FE8E22]">
              Most popular
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 p-12 pt-20 w-[30%] rounded-xl h-full bg-custom-dark border-4 border-custom-dark duration-300 hover:border-orange-600">
            <h2 className="font-bold text-2xl">Workout only</h2>
            <p className="text-lg text-orange-400">/user/mo</p>
            <p className="flex pt-1 font-bold text-6xl">
              <sup className="text-2xl">$</sup>25
            </p>
            <button className="bg-[#FD7B03] py-3 px-14 text-lg rounded-lg ">
              Subscribe
            </button>
          </div>
        </div>
        <hr className="orange-radial" />
      </div>
    </section>
  );
};

export default Plans;
