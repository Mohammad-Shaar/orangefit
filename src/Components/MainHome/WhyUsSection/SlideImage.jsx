import { useEffect, useRef } from "react";

const SlideImage = ({ photo, frame, animateClass }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animateClass);
          entry.target.classList.remove("opacity-0");
        }
      });
    });

    const { current } = sectionRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative px-8 mb-4 opacity-0 md:mb-0 md:px-0"
    >
      <img className="md:w-[600px]" src={photo} />
      <div className="absolute max-w-[70%] -bottom-2 left-6 -z-10 md:-left-2">
        <img src={frame} />
      </div>
    </div>
  );
};

export default SlideImage;
