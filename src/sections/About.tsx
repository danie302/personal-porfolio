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
          <div className="stat">
            <div className="n">5+</div>
            <div className="l">Years shipping</div>
          </div>
          <div className="stat">
            <div className="n">4</div>
            <div className="l">Companies</div>
          </div>
          <div className="stat">
            <div className="n">9</div>
            <div className="l">Projects built</div>
          </div>
          <div className="stat">
            <div className="n">3</div>
            <div className="l">Languages</div>
          </div>
        </div>
      </div>
    </section>
  );
}
