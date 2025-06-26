import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const skillsData = [
  { name: "HTML/CSS", level: 68, category: "frontend" },
  { name: "JavaScript", level: 77, category: "frontend" },
  { name: "React", level: 60, category: "frontend" },
  { name: "TypeScript", level: 45, category: "frontend" },
  { name: "Tailwind CSS", level: 89, category: "frontend" },
  { name: "Next.js", level: 55, category: "frontend" },

  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 66, category: "backend" },

  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 22, category: "tools" },
  { name: "Figma", level: 40, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "pgAdmin4", level: 50, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

// Generate a smooth pastel color
function getPastelBackground() {
  const hue = Math.floor(Math.random() * 360); // 0–359
  return `hsl(${hue}, 70%, 80%)`;
}

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const [levels, setLevels] = useState(
    skillsData.map((skill) => ({
      level: Math.floor(Math.random() * skill.level),
      dir: 1,
      max: skill.level,
    }))
  );

  const [bgColors, setBgColors] = useState(() =>
    skillsData.map(() => getPastelBackground())
  );

  // Bounce skill levels up and down
  useEffect(() => {
    const levelInterval = setInterval(() => {
      setLevels((prev) =>
        prev.map((item) => {
          let newLevel = item.level + item.dir;
          let newDir = item.dir;

          if (newLevel >= item.max) {
            newLevel = item.max;
            newDir = -1;
          } else if (newLevel <= 0) {
            newLevel = 0;
            newDir = 1;
          }

          return { level: newLevel, dir: newDir, max: item.max };
        })
      );
    }, 100); // bounce every 100ms
    return () => clearInterval(levelInterval);
  }, []);

  // Smooth color updates every 3s
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setBgColors(() => skillsData.map(() => getPastelBackground()));
    }, 3000); // change every 3s
    return () => clearInterval(colorInterval);
  }, []);

  const filteredSkills = skillsData.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-xs transform transition-transform duration-200 hover:scale-105"
              style={{
                background: bgColors[index],
                transition: "background 2s ease-in-out",
              }}
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg text-slate-800">
                  {skill.name}
                </h3>
              </div>
              <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-slate-800 rounded-full origin-left transition-all ease-linear"
                  style={{ width: levels[index].level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-slate-800">
                  {levels[index].level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
