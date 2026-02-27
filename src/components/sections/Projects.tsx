import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { projects as projectsData } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const getCardsPerView = (): number => {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 4;
};

const getGridClass = (count: number): string => {
  if (count === 1) return "grid grid-cols-1";
  if (count === 2) return "grid grid-cols-2";
  return "grid grid-cols-4";
};

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [cardsPerView, setCardsPerView] = useState<number>(getCardsPerView);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const totalPages = Math.ceil(projectsData.length / cardsPerView);
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
      setCurrentIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      ".projects-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".projects-header",
          start: "top 80%",
        },
      },
    );
  }, []);
  useEffect(() => {
    if (!gridRef.current) return;
    const xFrom = direction === "right" ? 60 : -60;
    gsap.fromTo(
      gridRef.current,
      { opacity: 0, x: xFrom },
      { opacity: 1, x: 0, duration: 0.45, ease: "power2.out" },
    );
  }, [currentIndex]);

  const nextPage = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (i: number) => {
    setDirection(i > currentIndex ? "right" : "left");
    setCurrentIndex(i);
  };

  const start = currentIndex * cardsPerView;
  const visibleProjects = projectsData.slice(start, start + cardsPerView);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding bg-muted/30"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 projects-header">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've worked on recently.
          </p>
        </div>

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div ref={gridRef} className={`${getGridClass(cardsPerView)} gap-6`}>
            {visibleProjects.map((project, index) => (
              <Card
                key={`${currentIndex}-${index}`}
                className="group overflow-hidden border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.slice(0, 3).map((tech: string, i: number) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-10">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevPage}
                className="rounded-full hover:bg-primary/10"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <div className="flex gap-2 items-center">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextPage}
                className="rounded-full hover:bg-primary/10"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          )}
        </div>
        {/* View All Button */}
        <div className="text-center mt-10">
          <Link to="/projects">
            <Button size="lg" variant="outline" className="group">
              View All Projects
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
