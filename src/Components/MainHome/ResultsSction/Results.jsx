const Results = () => {
  return (
    <section id="results">
      <div className="container mx-auto p-6">
        <h1 className="text-orange-600 text-center mt-6 p-6 text-4xl font-bold">
          What We've Been Up To ...
        </h1>
        <div className="flex flex-col space-x-16 justify-between text-gray-50 font-bold my-32">
          <div className="flex flex-col items-center">
            <p className="text-6xl">1200+</p>
            <p>Happy clients</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-6xl">110%</p>
            <p>guaranteed results</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-6xl">300+K</p>
            <p>workouts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-6xl">500+</p>
            <p>Healthy Recipes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
