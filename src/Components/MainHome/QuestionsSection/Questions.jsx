import arrowImg from "../../../assets/Arrow.svg";

const Questions = () => {
  return (
    <section className="mt-32">
      <div className="container flex flex-col-reverse gap-20 justify-between mx-auto p-6 my-10 text-gray-50 md:flex-row">
        <div className="flex flex-col md:max-w-[50%]">
          <div className="flex justify-between items-center border-t-2 border-orange-400 pt-8 mb-8">
            <p className="font-bold text-xl mr-6">
              How do i sign up for the project?
            </p>
            <img src={arrowImg} className="cursor-pointer" />
          </div>
          <div className="flex justify-between items-center border-t-2 border-orange-400 pt-8 mb-8">
            <p className="font-bold text-xl mr-6">
              What thing that i should prepare before starting?
            </p>
            <img src={arrowImg} className="cursor-pointer" />
          </div>
          <div className="flex justify-between items-center border-t-2 border-orange-400 pt-8 mb-8">
            <p className="font-bold text-xl mr-6">
              Does my company need help for marketing advices?
            </p>
            <img src={arrowImg} className="cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col md:max-w-[34%]">
          <h1 className="font-bold text-4xl mb-8">How We Can Help You?</h1>
          <p className="font-bold text-xl leading-9 text-[#F6FFF8] opacity-75">
            Follow our newsletter. We will regulary update our latest project
            and availability.
          </p>
          <form className="mt-8">
            <div className="flex justify-center md:block">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="font-bold text-zinc-900 md:max-w-[70%] py-3 px-6 mr-2 rounded-[37px] border-none outline-none"
              />
              <button className="font-bold bg-orange-500 py-3 px-6 rounded-[70px]">
                Lets Talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Questions;
