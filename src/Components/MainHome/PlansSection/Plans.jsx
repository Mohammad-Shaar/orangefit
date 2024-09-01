const Plans = () => {
  return (
    <section>
      <div className="container mx-auto p-6 my-10 text-gray-50">
        <h1 className="text-center text-4xl my-16 font-bold leading-[55px]">
          Choose a plan that’s right for you
        </h1>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center space-y-4 p-12 pt-20 w-[30%] rounded-xl h-full bg-custom-dark">
            <h2 className="font-bold text-2xl">Diet only</h2>
            <p className="text-lg text-orange-400">/user/mo</p>
            <p className="font-bold text-6xl">25</p>
            <button className="bg-[#FD7B03] py-3 px-14 text-lg rounded-lg ">
              Subscribe
            </button>
          </div>
          <div className="relative flex flex-col items-center space-y-4 p-12 pt-20 w-[30%] rounded-xl h-full bg-custom-dark">
            <h2 className="font-bold text-2xl">Diet + Workout</h2>
            <p className="text-lg text-orange-400">/user/mo</p>
            <p className="font-bold text-6xl">19</p>
            <button className="bg-[#FD7B03] py-3 px-14 text-lg rounded-lg ">
              Subscribe
            </button>
            <p className="absolute text-center -top-4 w-full py-3 font-bold text-2xl rounded-t-xl bg-gradient-to-r from-[#FF6400] via-[#FF6400] to-[#FE8E22]">
              Most popular
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 p-12 pt-20 w-[30%] rounded-xl h-full bg-custom-dark">
            <h2 className="font-bold text-2xl">Workout only</h2>
            <p className="text-lg text-orange-400">/user/mo</p>
            <p className="font-bold text-6xl">25</p>
            <button className="bg-[#FD7B03] py-3 px-14 text-lg rounded-lg ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
