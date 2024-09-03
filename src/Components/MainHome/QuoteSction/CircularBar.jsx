const CircularBar = () => {
  const circleWidth = "230";
  const radius = 100;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray + (dashArray * 25) / 100;
  const t = 25;
  return (
    <div>
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
          {t}%
        </text>
      </svg>
    </div>
  );
};

export default CircularBar;
