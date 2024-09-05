import SinglePlan from "./SinglePlan";

const PLANSDATA = [
  { type: "Diet only", price: "25" },
  { type: "Diet + Workout", price: "19", popular: true },
  { type: "Workout only", price: "25" },
];

const Plans = () => {
  return (
    <section className="hidden md:block">
      <div className="container mx-auto p-6 my-10 text-gray-50">
        <h1 className="text-center text-4xl my-16 font-bold leading-[55px]">
          Choose a plan that’s right for you
        </h1>
        <div className="flex justify-between items-center">
          {PLANSDATA.map((item, index) => (
            <SinglePlan
              key={index}
              type={item.type}
              price={item.price}
              popular={item.popular}
            />
          ))}
        </div>
        <hr className="orange-radial" />
      </div>
    </section>
  );
};

export default Plans;
