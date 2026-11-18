import { experience } from "@/config/portfolio";

const years = [...new Set(experience.map(({ startDate }) => startDate.slice(0, 4)))];
const periodFormat = new Intl.DateTimeFormat("en-CA", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function ExperienceTimeline() {
  return (
    <section id="experience" className="portfolio-shell portfolio-section experience-layout" aria-labelledby="experience-title">
      <h2 id="experience-title">Experience<span>.</span></h2>
      <div className="experience-timeline">
        {years.map((year) => (
          <section className="experience-year" key={year} aria-labelledby={`experience-${year}`}>
            <h3 id={`experience-${year}`} className="experience-year-label">{year}</h3>
            <ol className="experience-list">
              {experience.filter(({ startDate }) => startDate.startsWith(year)).map(({
                organization, role, startDate, category, logo, description,
              }) => (
                <li className="experience-stop" key={organization}>
                  <span className="experience-marker" aria-hidden>
                    <img src={logo} alt="" loading="lazy" decoding="async" />
                  </span>
                  <article className="experience-entry">
                    <div>
                      <p className="portfolio-kicker">{organization}</p>
                      <h4>{role}</h4>
                    </div>
                    <div className="experience-meta">
                      <p className="experience-date">
                        <time dateTime={startDate}>{periodFormat.format(new Date(`${startDate}-01T00:00:00Z`))}</time> – Present
                      </p>
                      <span className="experience-tag" data-category={category}>{category}</span>
                    </div>
                    <p className="experience-description">{description}</p>
                  </article>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </section>
  );
}
