import { useInView } from "react-intersection-observer";

const SlideImage = ({ photo, frame, animateClass }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will only trigger once
  });

  return (
    <div
      ref={ref}
      className={`relative px-8 mb-4 ${
        inView ? animateClass : "opacity-0"
      } md:mb-0 md:px-0`}
    >
      <img className="md:w-[600px]" src={photo} />
      <div className="absolute max-w-[70%] -bottom-2 left-6 -z-10 md:-left-2">
        <img src={frame} />
      </div>
    </div>
  );
};

export default SlideImage;
