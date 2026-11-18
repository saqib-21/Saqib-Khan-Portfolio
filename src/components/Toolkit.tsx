import { useState } from "react";
import { Search } from "lucide-react";

const skillGroups = [
  { name: "Languages", skills: ["TypeScript", "JavaScript", "Ruby", "Python", "Java", "SQL", "C", "C++", "Bash"] },
  { name: "Frontend", skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { name: "Backend", skills: ["Node.js", "Ruby on Rails", "Flask", "Django", "REST APIs"] },
  { name: "Data & infrastructure", skills: ["PostgreSQL", "Docker", "CI/CD (GitHub Actions)", "Linux", "Git", "GitHub", "Tableau"] },
  { name: "Tools & practices", skills: ["Testing (Jest, pytest, JUnit)", "SDLC", "Agile", "System design basics", "OOP"] },
  { name: "Embedded & robotics", skills: ["Arduino", "ESP32", "STM32", "I²C", "UART", "Verilog", "VHDL", "ROS"] },
  { name: "Machine learning & vision", skills: ["PyTorch", "OpenCV"] },
];

const categories = ["All skills", ...skillGroups.map(({ name }) => name)];

export function Toolkit() {
  const [category, setCategory] = useState(categories[0]);
  const [search, setSearch] = useState("");
  const query = search.trim().normalize("NFKC").toLowerCase();
  const groups = skillGroups
    .filter(({ name }) => category === categories[0] || category === name)
    .map(({ name, skills }) => ({
      name,
      skills: skills.filter((skill) => skill.normalize("NFKC").toLowerCase().includes(query)),
    }))
    .filter(({ skills }) => skills.length);
  const total = groups.reduce((sum, { skills }) => sum + skills.length, 0);

  return (
    <section className="portfolio-skills" id="skills" aria-labelledby="skills-title">
      <div className="portfolio-shell portfolio-section">
        <div className="skills-heading">
          <h2 id="skills-title">Skills<span>.</span></h2>
          <label className="skills-search">
            <Search size={17} aria-hidden />
            <span className="sr-only">Search skills</span>
            <input type="search" placeholder="Search skills" value={search} onChange={(event) => setSearch(event.target.value)} />
          </label>
        </div>
        <div className="skills-explorer">
          <div className="skills-filters" role="group" aria-label="Filter skills by category">
            {categories.map((name) => (
              <button key={name} type="button" aria-pressed={category === name} onClick={() => setCategory(name)}>
                {name}
              </button>
            ))}
          </div>
          <div className="skills-results">
            <p className="skills-count" role="status">{total} {total === 1 ? "match" : "matches"}</p>
            <div className="skills-grid">
              {groups.map(({ name, skills }) => (
                <div className="skill-group" key={name}>
                  <h3>{name}</h3>
                  <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                </div>
              ))}
            </div>
            {total === 0 && <p className="skills-empty">Try a different search or choose All skills.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
