import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  X,
  Users,
} from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.png";
import { personalInfo, socialLinks } from "@/constants";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = personalInfo.name;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [fullText]);

  useEffect(() => {
    if (!heroRef.current || !textRef.current) return;
    gsap.set(
      [
        ".hero-profile",
        ".hero-title",
        ".hero-subtitle",
        ".hero-description",
        ".hero-cta",
      ],
      {
        opacity: 0,
        y: 50,
      },
    );

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(".hero-profile", {
      opacity: 1,
      y: 0,
      duration: 1,
      scale: 1,
    })
      .to(
        ".hero-title",
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=0.5",
      )
      .to(
        ".hero-subtitle",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.5",
      )
      .to(
        ".hero-description",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.5",
      )
      .to(
        ".hero-cta",
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
        },
        "-=0.4",
      );
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90 dark:bg-background/95" />
      </div>
      <div
        ref={textRef}
        className="relative z-10 container mx-auto px-4 text-center"
      >
        <div className="hero-profile flex justify-center mb-8 md:mt-20">
          <div className="relative z-10">
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-spin-slow blur-md"
              style={{ animationDuration: "3s" }}
            />
            <div className="relative w-36 h-36 sm:w-32 sm:h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-background">
              <img
                src={profileImg}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <h1 className="hero-title text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-gradient">{typewriterText}</span>
          {typewriterText.length < fullText.length && (
            <span className="animate-pulse">|</span>
          )}
        </h1>

        <p className="hero-subtitle text-lg sm:text-xl md:text-3xl font-semibold mb-4 text-muted-foreground">
          {personalInfo.title}
        </p>

        <p className="hero-description text-base md:text-lg max-w-2xl mx-auto mb-8 text-muted-foreground px-4">
          {personalInfo.description}
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button
            size="lg"
            className="hero-cta group relative overflow-hidden"
            onClick={scrollToNext}
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>

          <Button variant="outline" size="lg" className="hero-cta">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center"
            >
              Get in Touch
              <Mail className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="flex gap-4 justify-center mt-8 relative z-10">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta hover-lift"
          >
            <Button variant="ghost" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta hover-lift"
          >
            <Button variant="ghost" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a
            href={socialLinks.teams}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta hover-lift"
          >
            <Button variant="ghost" size="icon" className="rounded-full">
              <Users className="h-5 w-5" />
            </Button>
          </a>

          <a
            href={socialLinks.faceboook}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta hover-lift"
          >
            <Button variant="ghost" size="icon" className="rounded-full">
              <Facebook className="h-5 w-5" />
            </Button>
          </a>
          <a href={`tel:${personalInfo.phone}`} className="hero-cta hover-lift">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Phone className="h-5 w-5" />
            </Button>
          </a>

          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta hover-lift"
          >
            <Button variant="ghost" size="icon" className="rounded-full">
              <X className="h-5 w-5" />
            </Button>
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta hover-lift"
          >
            <Button variant="ghost" size="icon" className="rounded-full">
              <Instagram className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
