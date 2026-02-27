import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { contactInfo as contactInfoData } from "@/constants";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      ".contact-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".contact-card",
          start: "top 80%",
        },
      },
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: Mail, ...contactInfoData[0] },
    { icon: Phone, ...contactInfoData[1] },
    { icon: MapPin, ...contactInfoData[2] },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Got a project idea? Let’s work together to create something amazing.
            Contact me anytime for questions or collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="contact-card p-6 md:p-8 border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  className="resize-none max-h-48 overflow-y-auto"
                />
              </div>

              <Button
                type="submit"
                className="w-full flex items-center justify-center"
                size="lg"
                disabled={loading}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="contact-card p-6 hover-lift border-border/50 hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center glow-effect">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {info.label}
                      </p>
                      <p className="font-semibold">
                        {info.label.toLowerCase().includes("phone") ? (
                          <a
                            href={`tel:${info.value}`}
                            className="cursor-pointer"
                          >
                            {info.value}
                          </a>
                        ) : info.label.toLowerCase().includes("email") ? (
                          <a
                            href={`mailto:${info.value}`}
                            className="cursor-pointer"
                          >
                            {info.value}
                          </a>
                        ) : info.label.toLowerCase().includes("location") ? (
                          <a
                            href={`https://maps.google.com/?q=${encodeURIComponent(info.value)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                          >
                            {info.value}
                          </a>
                        ) : (
                          info.value
                        )}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}

            <Card className="contact-card p-6 border-border/50 bg-primary/5">
              <h3 className="text-xl font-semibold mb-3">Let's Connect!</h3>
              <p className="text-muted-foreground mb-4">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <p className="text-sm text-muted-foreground">
                Response time: Usually within 24 hours
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
