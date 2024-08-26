import Header from "../Components/Header/Header";
import Download from "../Components/Main/DownloadSection/Download";
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
      <Download />
    </>
  );
};

export default Home;
