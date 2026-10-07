import { FolderGit2, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Project {
  title: string;
  subtitle: string;
  points: string[];
  tags: string[];
  color: string;
  number: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "Emergency Response Drone for Women Safety",
    subtitle: "Smart India Hackathon Grand Finale Runner-Up",
    points: [
      "Designed and prototyped an autonomous drone system for rapid emergency response, real-time surveillance, and public safety.",
      "Integrated telemetry and live video streaming feeds to enable remote monitoring during critical incidents.",
      "Recognized as a Grand Finale Runner-Up at the Smart India Hackathon organized by the Ministry of Education & AICTE."
    ],
    tags: ["IoT", "Autonomous Systems", "Python", "Computer Vision"],
    color: "from-muted-foreground/10 to-transparent",
    number: "01",
    githubUrl: "https://github.com/AnnamPranav",
    liveUrl: "",
  },
  {
    title: "Intelligent License Plate Recognition (ALPR) & OCR",
    subtitle: "Computer Vision & Text Extraction System",
    points: [
      "Built an automated computer vision pipeline for real-time vehicle license plate detection and text recognition.",
      "Applied image processing techniques and OCR algorithms to extract vehicle registration numbers under varying lighting conditions.",
      "Optimized model inference time for efficient execution in automated traffic and parking management systems."
    ],
    tags: ["Python", "Computer Vision", "OCR", "OpenCV"],
    color: "from-muted-foreground/5 to-transparent",
    number: "02",
    githubUrl: "https://github.com/AnnamPranav",
    liveUrl: "",
  },
  {
    title: "LogPulse Operations Monitoring System",
    subtitle: "Automated Incident Detection & Reporting",
    points: [
      "Automated application log monitoring, incident detection, and operational reporting for accelerated troubleshooting.",
      "Streamlined system health checks by triggering real-time alerts upon detecting anomalous operational logs.",
      "Reduced mean time to resolution (MTTR) by centralizing log analysis into structured analytical views."
    ],
    tags: ["Python", "Automation", "REST APIs", "SQL"],
    color: "from-muted-foreground/10 to-transparent",
    number: "03",
    githubUrl: "https://github.com/AnnamPranav",
    liveUrl: "",
  },
  {
    title: "FlowSync Workflow Automation Platform",
    subtitle: "Business Process & Task Automation",
    points: [
      "Streamlined complex business processes by automating task assignments, approvals, tracking, and reporting workflows.",
      "Built automated data flow pipelines using REST APIs to connect operational tools seamlessly.",
      "Enhanced process visibility and operational efficiency across multi-step approval cycles."
    ],
    tags: ["Process Automation", "JavaScript", "REST APIs", "JSON"],
    color: "from-muted-foreground/5 to-transparent",
    number: "04",
    githubUrl: "https://github.com/AnnamPranav",
    liveUrl: "",
  },
  {
    title: "Fire & Smoke Detection System",
    subtitle: "Real-Time Hazard Detection",
    points: [
      "Developed a real-time fire and smoke detection application utilizing computer vision models.",
      "Processed live video streams to identify smoke and flame patterns early to prevent workplace hazards.",
      "Implemented alert triggers to notify operators immediately upon hazard identification."
    ],
    tags: ["Python", "Computer Vision", "OpenCV", "AI"],
    color: "from-muted-foreground/10 to-transparent",
    number: "05",
    githubUrl: "https://github.com/AnnamPranav",
    liveUrl: "",
  },
  {
    title: "Smart Plant-Based Air Purifier",
    subtitle: "IoT-Enabled Environmental Monitoring",
    points: [
      "Developing an IoT-enabled air purifier integrated with real-time air quality index (AQI) monitoring sensors.",
      "Configured sensor data pipelines to monitor indoor air pollutants and dynamically adjust purification settings.",
      "Connected sensor telemetry to cloud dashboards for live environmental tracking."
    ],
    tags: ["IoT", "Sensors", "C", "Firebase"],
    color: "from-muted-foreground/5 to-transparent",
    number: "06",
    githubUrl: "https://github.com/AnnamPranav",
    liveUrl: "",
  }
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-28 border-t border-border relative overflow-hidden">
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-3">
            <FolderGit2 size={16} className="text-terminal-green" />
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-terminal-green">04.</span> projects
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black mb-16">
            Selected Works<span className="text-muted-foreground">.</span>
          </h2>
        </div>

        <div className="space-y-8 max-w-4xl">
          {projects.map((project, i) => {
            const primaryLink = project.liveUrl || project.githubUrl || "#";

            return (
              <div
                key={project.title}
                className={`group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-muted-foreground/30 transition-all duration-700 hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(i + 2) * 150}ms` }}
              >
                {/* Gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative flex flex-col md:flex-row items-start gap-6 p-6 md:p-8">
                  {/* Number */}
                  <div className="shrink-0 pt-1">
                    <span className="font-display text-5xl font-black text-muted/80 group-hover:text-muted-foreground/20 transition-colors">
                      {project.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <a
                        href={primaryLink}
                        target={primaryLink !== "#" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="group/title"
                      >
                        <h3 className="font-display font-bold text-xl text-foreground group-hover/title:text-terminal-green transition-colors flex items-center gap-2">
                          {project.title}
                          <ArrowUpRight
                            size={18}
                            className="text-muted-foreground/30 group-hover/title:text-terminal-green group-hover/title:-translate-y-0.5 group-hover/title:translate-x-0.5 transition-all duration-300 shrink-0"
                          />
                        </h3>
                        <p className="text-xs font-mono text-muted-foreground mt-0.5">
                          {project.subtitle}
                        </p>
                      </a>

                      {/* Action Links */}
                      <div className="flex items-center gap-3 shrink-0">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub repository for ${project.title}`}
                            className="text-muted-foreground hover:text-foreground transition-colors p-1"
                          >
                            <Github size={18} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live demo for ${project.title}`}
                            className="text-muted-foreground hover:text-foreground transition-colors p-1"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Resume Bullet Points */}
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed">
                      {project.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-terminal-green font-mono text-xs mt-1">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono bg-muted/50 text-muted-foreground px-3 py-1 rounded-full border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
