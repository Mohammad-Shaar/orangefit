import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const CircularBar = () => {
  const [percentage, setPercentage] = useState(25);
  const [animated, setAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will only trigger once
  });
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  const circleWidth = 230;
  const radius = 100;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray + (dashArray * percentage) / 100;

  const handleMouseEnter = () => {
    if (animated) return;

    setAnimated(true);
    let start = 25;
    const end = 95;
    const duration = 1000; // duration in ms
    const increment = (end - start) / (duration / 10);

    const animate = () => {
      if (start < end) {
        start += increment;
        setPercentage(Math.min(Math.round(start), end));
        requestAnimationFrame(animate);
      } else {
        setAnimated(true);
      }
    };

    animate();
  };

  useEffect(() => {
    if (mediaQuery.matches && inView) {
      handleMouseEnter();
    }
  }, [inView]);

  return (
    <div ref={ref} onMouseEnter={handleMouseEnter}>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="25px"
          r={radius}
          className="fill-none stroke-zinc-800"
        />

        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="25px"
          r={radius}
          className="fill-none stroke-gray-50"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="font-bold text-5xl"
          fill="#FCFCFD"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default CircularBar;
