import { GraduationCap, Award, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Vardhaman College of Engineering, Shamshabad",
    detail: "CGPA: 7",
    period: "2023 – 2027",
    status: "JNTUH · Ongoing",
    highlight: true,
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College, Manikonda",
    detail: "CGPA / Percentage: 8.47",
    period: "2021 – 2023",
    status: "TGBIE",
    highlight: false,
  },
  {
    degree: "Tenth Class (10th)",
    institution: "Sri Chaitanya School, Suncity",
    detail: "CGPA / Percentage: 10",
    period: "2021",
    status: "BSET",
    highlight: false,
  },
];

const EducationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="py-28 border-t border-border relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-muted/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-3">
            <GraduationCap size={16} className="text-terminal-green" />
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-terminal-green">02.</span> education
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black mb-16">
            Education<span className="text-muted-foreground">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
          {education.map((item, i) => (
            <div
              key={i}
              className={`group relative bg-card border rounded-2xl p-6 transition-all duration-700 hover:border-muted-foreground/30 hover:-translate-y-1 ${
                item.highlight ? "border-muted-foreground/20" : "border-border"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 2) * 150}ms` }}
            >
              {item.highlight && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-primary text-primary-foreground text-xs font-mono px-3 py-1 rounded-full">
                    Current
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2 mb-4">
                <Award size={16} className="text-terminal-green" />
                <span className="font-mono text-lg font-black text-foreground">{item.status}</span>
              </div>

              <h3 className="font-display font-bold text-foreground mb-1">{item.degree}</h3>
              <p className="text-sm text-muted-foreground mb-4">{item.institution}</p>

              <div className="flex items-center gap-2 pt-3 border-t border-border">
                <Calendar size={12} className="text-muted-foreground" />
                <span className="text-xs font-mono text-muted-foreground">{item.period}</span>
              </div>
              <p className="text-sm font-mono text-foreground mt-2">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
