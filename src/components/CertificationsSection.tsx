import { Award, ArrowUpRight } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      name: "Smart India Hackathon Grand Finale (Runner)",
      issuer: "Ministry of Education, AICTE",
      date: "December 2024",
      link: "/certificates/sih-2024.pdf",
    },
    {
      name: "AWS Certification",
      issuer: "MassMutual",
      date: "October 2025",
      link: "/certificates/aws-massmutual.pdf",
    },
    {
      name: "Full Stack Development",
      issuer: "Infosys Springboard",
      date: "July 2025",
      link: "/certificates/fullstack-infosys.pdf",
    },
    {
      name: "YeSummit",
      issuer: "TGIC",
      date: "November 2024",
      link: "/certificates/yesummit.pdf",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-28 border-t border-border relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-3">
          <Award size={16} className="text-terminal-green" />

          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-terminal-green">05.</span> certifications
          </p>
        </div>

        {/* Section Title */}
        <h2 className="font-display text-4xl md:text-6xl font-black mb-16">
          Certifications<span className="text-muted-foreground">.</span>
        </h2>

        {/* Certificates List */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl">

          {certifications.map((cert, i) => (
            <div
              key={i}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-muted-foreground/30 transition-all duration-700 hover:-translate-y-1"
            >

              {/* Hover Gradient Accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-muted-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Content */}
              <div className="relative flex items-center justify-between p-8">

                {/* Certificate Info */}
                <div className="flex flex-col gap-2 w-full">

                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display font-bold text-xl text-foreground group-hover:text-foreground transition-colors">
                      {cert.name}
                    </h3>
                    <span className="font-mono text-xs text-terminal-green shrink-0 bg-muted/50 px-2.5 py-1 rounded-md border border-border">
                      {cert.date}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mt-2 w-fit"
                  >
                    View Certificate <ArrowUpRight size={16} />
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
