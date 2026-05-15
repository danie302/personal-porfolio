import { projects } from "@/data";

export default function Work() {
  return (
    <section id="work">
      <div className="section-header reveal">
        <span className="num">02 ⁄ SELECTED WORK</span>
        <h2>Things I&apos;ve <em>made.</em></h2>
      </div>
      <div className="work-grid">
        {projects.map((project, i) => (
          <article className="project reveal" key={i} data-hover>
            <div>
              <div className="proj-num">{String(i + 1).padStart(2, "0")}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div>
              <div className="project-tags">
                {project.tech.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              {project.repoUrl && (
                <a
                  className="project-link"
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-hover
                >
                  VIEW ON GITHUB →
                </a>
              )}
              {project.demoUrl && (
                <a
                  className="project-link"
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-hover
                >
                  LIVE DEMO →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
