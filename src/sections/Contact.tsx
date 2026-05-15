import env from "@/lib/env";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-headline reveal">
        Let&apos;s build <em>something</em><br />worth shipping.
      </h2>
      <a className="email-link reveal" href={`mailto:${env.email}`} data-hover>
        {env.email} ↗
      </a>
      <a className="cv-download reveal" href={env.cvPath} download data-hover>
        Download CV ↓
      </a>
      <div className="contact-foot">
        <div>© Daniel Daza — Barranquilla, 2026</div>
        <div className="socials">
          {env.githubUrl && (
            <a href={env.githubUrl} target="_blank" rel="noopener noreferrer" data-hover>
              GITHUB
            </a>
          )}
          {env.linkedinUrl && (
            <a href={env.linkedinUrl} target="_blank" rel="noopener noreferrer" data-hover>
              LINKEDIN
            </a>
          )}
          <a href={env.cvPath} download data-hover>CV</a>
        </div>
      </div>
    </section>
  );
}
