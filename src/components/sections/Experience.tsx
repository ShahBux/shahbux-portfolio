import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";
import { experiences as experiencesData } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const timelineItems = sectionRef.current.querySelectorAll(".timeline-item");

    timelineItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using modern tech stack. Mentoring junior developers and implementing best practices.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects. Specialized in React and Node.js applications with focus on performance optimization.",
    },
    {
      title: "Frontend Developer",
      company: "Startup Co.",
      period: "2018 - 2020",
      description: "Built responsive web interfaces and collaborated with designers to implement pixel-perfect designs. Improved site performance by 40%.",
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiencesData.map((exp, index) => (
              <div
                key={index}
                className={`timeline-item relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? "" : "md:text-right"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-8 w-4 h-4 rounded-full bg-primary -translate-x-1/2 glow-effect hidden md:block" />

                {/* Content */}
                <Card
                  className={`p-6 hover-lift border-border/50 hover:border-primary/50 transition-colors duration-300 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8 md:col-start-2"
                  }`}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-muted-foreground font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
