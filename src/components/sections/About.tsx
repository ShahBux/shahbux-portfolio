import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";
import { aboutFeatures, aboutDescription } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".about-card");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  const features = [
    { ...aboutFeatures[0], icon: Code2 },
    { ...aboutFeatures[1], icon: Palette },
    { ...aboutFeatures[2], icon: Rocket },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate MERN Stack developer dedicated to turning ideas into
            reality through code.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="about-card p-6 hover-lift border-border/50 hover:border-primary/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 glow-effect">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto about-card">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {aboutDescription}
          </p>
        </div>
      </div>
    </section>
  );
};
