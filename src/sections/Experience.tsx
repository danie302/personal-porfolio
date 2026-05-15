import { experience } from "@/data";

function formatYear(period: string): string {
  const years = period.match(/\d{4}/g);
  if (!years) return period;
  if (period.toLowerCase().includes("current")) return `${years[0]}—`;
  if (years.length >= 2) return `${years[0]}—${years[1].slice(2)}`;
  return years[0];
}

function formatLocation(period: string): string {
  // period format: "Nov 2021 – Current · Remote — Colombia"
  const parts = period.split("·");
  return parts.length > 1 ? parts[1].trim() : "";
}

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-header reveal">
        <span className="num">03 ⁄ EXPERIENCE</span>
        <h2>Where I&apos;ve <em>been.</em></h2>
      </div>
      <div className="timeline">
        {experience.map((job, i) => (
          <div className="job reveal" key={i}>
            <div className="year">{formatYear(job.period)}</div>
            <div className="job-body">
              <h4>{job.role}</h4>
              <div className="co">{job.company}</div>
              <p>{job.highlights[0]}</p>
            </div>
            <div className="where">{formatLocation(job.period)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
