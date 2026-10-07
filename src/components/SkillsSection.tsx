import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Layers } from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: "{ }",
    skills: [
      { name: "Python", level: 90 },
      { name: "C", level: 75 },
      { name: "JavaScript", level: 75 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Automation & Process",
    icon: "⚙️",
    skills: [
      { name: "Automation Anywhere", level: 85 },
      { name: "Microsoft Power Automate", level: 80 },
      { name: "Workflow Automation", level: 85 },
      { name: "REST APIs & JSON", level: 75 },
    ],
  },
  {
    title: "Tools & Analytics",
    icon: "$ _",
    skills: [
      { name: "Power BI", level: 85 },
      { name: "Microsoft Excel", level: 90 },
      { name: "Git & GitHub", level: 85 },
      { name: "Figma", level: 70 },
    ],
  },
  {
    title: "Cloud & Databases",
    icon: "☁️",
    skills: [
      { name: "AWS (Basic)", level: 65 },
      { name: "MySQL Workbench", level: 80 },
      { name: "MongoDB", level: 70 },
      { name: "Firebase", level: 70 },
    ],
  },
];

const codingProfiles = [
  {
    name: "GitHub",
    username: "AnnamPranav",
    link: "https://github.com/AnnamPranav",
  },
  {
    name: "LinkedIn",
    username: "pranav-annam",
    link: "https://www.linkedin.com/in/pranav-annam-65b283218/",
  },
  {
    name: "Infosys Springboard",
    username: "Full Stack Dev",
    link: "#",
  },
  {
    name: "AWS Learning",
    username: "Cloud Basics",
    link: "#",
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="skills"
      className="py-28 border-t border-border relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-muted/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <Layers size={16} className="text-terminal-green" />
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-terminal-green">03.</span> skills
            </p>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-black mb-16">
            Tech Stack<span className="text-muted-foreground">.</span>
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl">

          {/* Skills Cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {skillGroups.map((group, gi) => (
              <div
                key={group.title}
                className={`bg-card border border-border rounded-2xl overflow-hidden
                  hover:border-muted-foreground/30 hover:shadow-[0_0_20px_rgba(34,197,94,0.08)]
                  transition-all duration-700
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${(gi + 2) * 150}ms` }}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/20">
                  <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    {group.title}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground/50">
                    {group.icon}
                  </span>
                </div>

                {/* Skills */}
                <div className="p-6 space-y-5">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-foreground font-medium">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-terminal-green font-medium">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Clean Theme-matched Progress Bar */}
                      <div className="h-1.5 bg-muted/60 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-terminal-green rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(34,197,94,0.4)]"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${(gi + 2) * 150 + 300}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Profiles & Links */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <div className="bg-card border border-border rounded-2xl overflow-hidden relative">

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/20">
                <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Profiles & Certifications
                </h3>
              </div>

              {/* Profiles */}
              <div className="p-6 space-y-3">
                {codingProfiles.map((profile, index) => (
                  <a
                    key={profile.name}
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-border
                      hover:border-muted-foreground/30 hover:bg-muted/20
                      hover:shadow-[0_0_15px_rgba(34,197,94,0.08)]
                      transition-all duration-500"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="text-sm font-medium">
                      {profile.name}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">
                      {profile.username}
                    </span>
                  </a>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
