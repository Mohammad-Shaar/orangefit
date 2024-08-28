import Header from "../Components/Header/Header";
import Download from "../Components/MainHome/DownloadSection/Download";
import Expert from "../Components/MainHome/ExpertSection/expert";
import Opinions from "../Components/MainHome/OPinionSection/Opinions";
import Quote from "../Components/MainHome/QuoteSction/Quote";
import Results from "../Components/MainHome/ResultsSction/Results";
import WhyUs from "../Components/MainHome/WhyUsSection/WhyUs";

const Home = () => {
  return (
    <>
      <Header />
      <Results />
      <Quote />
      <WhyUs />
      <Download />
      <Opinions />
      <Expert />
    </>
  );
};

export default Home;
