import { useQuery } from "@tanstack/react-query";
import { Github, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import "./GitHubActivity.css";

type Contribution = { date: string; count: number; level: number };

const username = new URL(siteConfig.social.github).pathname.split("/").filter(Boolean)[0];
const step = 15;
const monthFormat = new Intl.DateTimeFormat("en", { month: "short", timeZone: "UTC" });
const dateFormat = new Intl.DateTimeFormat("en", { dateStyle: "long", timeZone: "UTC" });

async function fetchContributions(signal: AbortSignal): Promise<Contribution[]> {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`,
    { signal },
  );
  if (!response.ok) throw new Error("Could not load GitHub activity");
  const data = await response.json();
  if (!Array.isArray(data.contributions) || !data.contributions.length) {
    throw new Error("No contribution calendar returned");
  }
  return data.contributions;
}

function ContributionCalendar({ days }: { days: Contribution[] }) {
  const offset = new Date(`${days[0].date}T00:00:00Z`).getUTCDay();
  const width = Math.ceil((days.length + offset) / 7) * step;
  const total = days.reduce((sum, { count }) => sum + count, 0);

  return (
    <>
      <div className="github-calendar-scroll" role="region" aria-label="Scrollable contribution calendar" tabIndex={0}>
        <svg className="github-calendar" viewBox={`0 0 ${width} 126`} role="img" aria-label={`${total} contributions in the past year`}>
          {days.map(({ date, count, level }, index) => {
            const position = index + offset;
            const x = Math.floor(position / 7) * step;
            const y = (position % 7) * step + 21;
            const day = new Date(`${date}T00:00:00Z`);
            const newMonth = !index || date.slice(0, 7) !== days[index - 1].date.slice(0, 7);
            return (
              <g key={date}>
                {newMonth && x < width - 28 && (index === 0 || x > step * 2) && (
                  <text x={x} y={12}>{monthFormat.format(day)}</text>
                )}
                <rect x={x} y={y} width={12} height={12} rx={2.5} data-level={level}>
                  <title>{count} {count === 1 ? "contribution" : "contributions"} on {dateFormat.format(day)}</title>
                </rect>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="github-calendar-caption">
        <span>{total.toLocaleString()} {total === 1 ? "contribution" : "contributions"} in the past year</span>
        <div className="github-calendar-legend" aria-label="Color scale from less to more activity">
          Less
          {[0, 1, 2, 3, 4].map((level) => <span key={level} data-level={level} aria-hidden />)}
          More
        </div>
      </div>
    </>
  );
}

export function GitHubActivity() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["github-contributions", username],
    queryFn: ({ signal }) => fetchContributions(signal),
    staleTime: 30 * 60_000,
    retry: 1,
  });

  return (
    <section id="github-activity" className="portfolio-shell portfolio-section github-activity" aria-labelledby="github-activity-title">
      <div className="section-heading">
        <h2 id="github-activity-title">GitHub activity</h2>
        <a href={siteConfig.social.github} className="portfolio-link" aria-label={`View ${username} on GitHub`}>
          <Github size={17} aria-hidden /> {username} <ArrowUpRight size={15} aria-hidden />
        </a>
      </div>
      <div className="github-activity-card">
        {data ? <ContributionCalendar days={data} /> : (
          <p className="github-calendar-status" role="status">
            {isPending && "Loading GitHub activity…"}
            {isError && <>Activity is temporarily unavailable. <a href={siteConfig.social.github}>View the calendar on GitHub</a>.</>}
          </p>
        )}
      </div>
    </section>
  );
}
