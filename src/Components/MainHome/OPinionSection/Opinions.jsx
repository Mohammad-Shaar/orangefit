import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GridImageComp from "./gridImageComp";
import Slide from "./Slide";

const CLIENTSDATA = [
  {
    title: "10 Kgs in 3 weeks",
    paragraph: `“I tried all the diets in the world and failed, Even when I lose
              weight , I gain it back because the diets were unsustainable.
              Thank god I discovered orangefit.”`,
    clientName: "Anshuman Khuranna",
  },
  {
    title: "10 Kgs in 3 weeks",
    paragraph: `“I tried all the diets in the world and failed, Even when I lose
              weight , I gain it back because the diets were unsustainable.”`,
    clientName: "Liam Anderson",
  },
  {
    title: "10 Kgs in 3 weeks",
    paragraph: `“I tried all the diets in the world and failed, Even when I lose
              weight.”`,
    clientName: "Sophia Martinez",
  },
  {
    title: "10 Kgs in 3 weeks",
    paragraph: `“I tried all the diets in the world and failed, Even when I lose
              weight , I gain it back because the diets were unsustainable.
              Thank god I discovered orangefit.”`,
    clientName: "Ethan Johnson",
  },
];

const Opinions = () => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <div className="container mx-auto p-6 my-24 text-gray-50 md:my-10">
        <h1 className="font-bold text-3xl text-center text-orange-600 leading-[55px] md:text-4xl">
          Orangefit is the best,
          <br />
          Here’s the proof
        </h1>
        <div className="flex flex-col my-8 md:flex-row md:gap-10">
          <GridImageComp />

          <div className="w-full md:w-[37%] min:h-[290px] m-auto">
            <Slider {...settings}>
              {CLIENTSDATA.map((item, index) => (
                <Slide
                  key={index}
                  title={item.title}
                  paragraph={item.paragraph}
                  clientName={item.clientName}
                />
              ))}
            </Slider>
          </div>

          <GridImageComp hide={true} />
        </div>
      </div>
    </section>
  );
};

export default Opinions;
