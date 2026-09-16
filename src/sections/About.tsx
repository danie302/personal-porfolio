import env from "@/lib/env";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-header reveal">
        <span className="num">01 ⁄ ABOUT</span>
        <h2>The <em>short</em> version.</h2>
      </div>
      <div className="about-grid">
        <p className="about-text reveal">{env.bio}</p>
        <div className="stats reveal">
          {env.stats.map((stat) => (
            <div className="stat" key={stat.l}>
              <div className="n">{stat.n}</div>
              <div className="l">{stat.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
