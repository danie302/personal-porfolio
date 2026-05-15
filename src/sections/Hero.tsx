import env from "@/lib/env";

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-meta">
        <span>PORTFOLIO ⁄ VOL. 01</span>
        <span>BARRANQUILLA, CO · 10°59′N</span>
      </div>

      <svg className="star-deco" viewBox="0 0 100 100" aria-hidden="true">
        <path
          d="M50 0 L58 38 L96 42 L66 64 L78 100 L50 78 L22 100 L34 64 L4 42 L42 38 Z"
          fill="none"
          stroke="#0E0D0B"
          strokeWidth="2.5"
        />
        <circle cx="50" cy="50" r="6" fill="#FF4A2E" />
      </svg>

      <div className="hero-main">
        <h1>
          <span className="line">DANIEL</span>
          <span className="line">
            <span className="ital">building</span> things
          </span>
          <span className="line">
            that <span className="ital">work.</span>
          </span>
        </h1>
        <p className="hero-tagline">{env.tagline} — shipping from the Caribbean coast.</p>
      </div>

      <div className="hero-foot">
        <div className="pill" data-hover>
          <span className="dot" />
          Available for new projects
        </div>
        <div className="scroll-cue">scroll to explore</div>
      </div>
    </header>
  );
}
