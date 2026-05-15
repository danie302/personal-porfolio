const items = [
  "FRONTEND DEVELOPER",
  "TYPESCRIPT · REACT · NEXT.JS",
  "OPEN TO OPPORTUNITIES",
  "BASED IN BARRANQUILLA, CO",
  "BUILDING SINCE 2020",
];

function Segment() {
  return (
    <span>
      {items.map((item, i) => (
        <span key={i}>
          {item} <span className="sep">✦</span>
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <Segment />
        <Segment />
      </div>
    </div>
  );
}
