import Header from "../Components/Header/Header";
import Quote from "../Components/Main/QuoteSction/Quote";
import Results from "../Components/Main/ResultsSction/Results";
import WhyUs from "../Components/Main/WhyUsSection/WhyUs";

const Home = () => {
  return (
    <>
      <Header />
      <Results />
      <Quote />
      <WhyUs />
    </>
  );
};

export default Home;
