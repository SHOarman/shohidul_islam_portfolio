"use client";

import type React from "react";

import { useEffect, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".scroll-animate");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formsubmit.co/ajax/cba6f307eaabed9825c3f803df8f538c", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New Message from Portfolio",
          _captcha: "false"
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Form submit error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const skills = [
    { name: "Flutter", icon: "📱" },
    { name: "Dart", icon: "🎯" },
    { name: "REST APIs", icon: "🔗" },
    { name: "Git & GitHub", icon: "📝" },
    { name: "App Store Deploy", icon: "🍎" },
    { name: "Play Store Deploy", icon: "▶️" },
    { name: "Firebase", icon: "🔥" },
    { name: "GetX & Provider", icon: "⚙️" },
    { name: "Clean Architecture", icon: "🏗️" },
    { name: "Push Notifications", icon: "🔔" },
    { name: "RevenueCat", icon: "💳" },
    { name: "Payment Integration", icon: "💲" },
  ];

  const projects = [
    {
      title: "GoRise – AI Productivity & Mindfulness Coach",
      role: "Mobile App Developer",
      description:
        "AI-integrated mobile application for productivity coaching and interactive journaling with subscription models.",
      features: [
        "Integrated an AI Chatbot for automated productivity coaching and interactive journaling",
        "Implemented in-app subscriptions and paywalls using RevenueCat",
        "Integrated FCM Push Notifications for daily habit reminders and motivation alerts",
        "Built real-time dashboards for tracking goals, tasks, and habits with GetX",
      ],
      tech: ["Flutter", "GetX", "REST API", "Firebase", "RevenueCat", "Push Notification"],
      image: "/placeholder.svg",
      liveDemo: "#",
      github: "https://github.com/SHOarman/Rosan",
    },
    {
      title: "ZeusTucker (Fitness AI)",
      role: "Mobile App Developer",
      description:
        "Fitness AI & Coach Management multi-role system with client progress tracking and workout consistency analysis.",
      features: [
        "Multi-Role System with dual interface for Coaches to manage clients",
        "Progress tracking & visualization integrating pie charts",
        "AI-Powered story generation module for motivational tips",
        "Client visibility & dynamic control with automated refresh cycles",
      ],
      tech: ["Flutter", "GetX", "REST API"],
      image: "/placeholder.svg",
      liveDemo: "#",
      github: "https://github.com/SHOarman/zeustucker",
    },
    {
      title: "Home Tutor & Learning Integration",
      role: "Mobile App Developer",
      description:
        "Multi-role application for finding nearby tutors and real-time messaging between students and teachers.",
      features: [
        "Multi-role app (Teacher, Student, Admin) with secure Admin approval",
        "Location-based discovery using GPS coordinates",
        "Real-time instant communication using Web Sockets",
      ],
      tech: ["Flutter", "GetX", "WebSocket", "REST API"],
      image: "/placeholder.svg",
      liveDemo: "#",
      github: "https://github.com/SHOarman/NextClass",
    },
    {
      title: "MotorBridge (Fleet Solution)",
      role: "Mobile App Developer",
      description:
        "Automated fleet tracking system for vehicle MOT, road tax, and insurance with a secure digital vault.",
      features: [
        "Real-time vehicle tracking via registration APIs",
        "Smart notification engine for upcoming service dates",
        "Document vault for centralized digital record keeping",
        "Subscription-based model for commercial fleets",
      ],
      tech: ["Flutter", "GetX", "Node.js", "MVC"],
      image: "/motorbridge-fleet.png",
      liveDemo: "#",
      github: "https://github.com/SHOarman/motorbridge",
    },
    {
      title: "Artisan (Service Marketplace)",
      role: "Mobile App Developer",
      description:
        "On-demand service booking system connecting users with local skilled workers.",
      features: [
        "Dynamic real-time booking and management flow",
        "Location-based search with Google Maps and Geolocation",
        "Interactive UI/UX with custom Flutter widgets",
        "Real-time data synchronization using Firebase",
      ],
      tech: ["Flutter", "GetX", "Firebase", "MVC"],
      image: "/artisan.png",
      liveDemo: "#",
      github: "https://github.com/SHOarman/astisan",
    },

  ];

  const experiences = [
    {
      title: "Mobile App Developer",
      company: "Sparktech IT Limited",
      period: "December 2025 - Present",
      description:
        "Developing cross-platform applications using MVC architecture for clean code separation. Collaborating with the MindMatrix AI Development team.",
      achievements: [
        "Developed cross-platform applications using MVC architecture",
        "Collaborated with the MindMatrix AI Development team",
      ],
    },
    {
      title: "Industrial Attachment",
      company: "BDCalling IT",
      period: "September 2025 - December 2025",
      description:
        "Completed 3 months of intensive training on industry-standard Flutter development workflows.",
      achievements: [
        "Completed intensive training on industry-standard Flutter development workflows",
      ],
    },
  ];
  const services = [
    {
      icon: "�",
      title: "Cross-Platform App Development",
      description:
        "Building high-performance, native-like mobile applications for both Android and iOS from a single Flutter codebase.",
    },
    {
      icon: "🎨",
      title: "UI/UX Implementation",
      description:
        "Translating beautiful Figma designs into responsive, pixel-perfect, and animated user interfaces using Flutter.",
    },
    {
      icon: "🏗️",
      title: "State Management & Architecture",
      description:
        "Implementing Clean Architecture with robust state management solutions like GetX, Provider, or BLoC for scalable apps.",
    },
    {
      icon: "�",
      title: "API & Third-Party Integration",
      description:
        "Seamlessly integrating RESTful APIs, Firebase, payment gateways like RevenueCat, and push notifications.",
    },
    {
      icon: "⚡",
      title: "App Performance Optimization",
      description:
        "Optimizing widget rebuilds, tackling memory leaks, and reducing app size to ensure butter-smooth 60fps performance.",
    },
    {
      icon: "�",
      title: "App Store Deployment",
      description:
        "Handling the complete deployment lifecycle for Google Play Store and Apple App Store, ensuring compliance and smooth rollouts.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* ... existing hero section code ... */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10">
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-ping"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-ping"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent/50 rounded-full animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/2 right-1/4 w-1 h-1 bg-primary rounded-full animate-ping"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-accent/30 rounded-full animate-pulse"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center px-4 max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="mb-6 overflow-hidden">
              <h1 className="text-5xl md:text-7xl font-bold text-balance animate-slide-in-left">
                Hi, I'm{" "}
                <span className="text-accent relative inline-block">
                  <span className="animate-gradient-text bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent bg-300% animate-gradient">
                    Shohidul Islam
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary animate-expand-width"></span>
                </span>
              </h1>
            </div>
            <div className="mb-8 overflow-hidden">
              <p
                className={`text-xl md:text-2xl text-muted-foreground text-pretty transition-all duration-1000 delay-300 ${isVisible
                  ? "animate-slide-in-left"
                  : "opacity-0 translate-x-10"
                  }`}
              >
                Mobile App Developer (Flutter & Dart)
              </p>
            </div>
            <div className="mb-12 overflow-hidden">
              <p
                className={`text-lg text-muted-foreground max-w-2xl text-pretty transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in" : "opacity-0"
                  }`}
              >
                A passionate Mobile App Developer building scalable, high-performance Android and iOS applications focused on exceptional UI/UX and AI integration. Experienced in Clean Architecture and end-to-end product lifecycles.
              </p>
            </div>
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${isVisible ? "animate-slide-in-up" : "opacity-0 translate-y-10"
                }`}
            >
              <a
                href="#projects"
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 hover:bg-accent/90 animate-pulse-subtle"
              >
                View My Work
              </a>
              <button className="border border-border px-8 py-3 rounded-lg font-semibold hover:bg-muted hover:scale-105 transition-all duration-300 hover:shadow-lg">
                Get In Touch
              </button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-10"
              }`}
          >
            <div className="relative group">
              {/* Animated border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-2xl blur opacity-30 group-hover:opacity-50 animate-gradient-rotate"></div>

              {/* Main image container */}
              <div className="relative bg-card rounded-2xl p-2 shadow-2xl">
                <div className="relative h-[450px] md:h-[600px] rounded-xl overflow-hidden">
                  <Image
                    src="/new_profile_image.jpg"
                    alt="Shohidul Islam - Profile Photo"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Overlay with floating code snippets */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent">
                    <div className="absolute top-4 right-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium animate-bounce-subtle">
                      Flutter Expert
                    </div>
                    <div
                      className="absolute bottom-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium animate-float"
                      style={{ animationDelay: "1s" }}
                    >
                      Dart Developer
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements around the image */}
              <div
                className="absolute -top-4 -left-4 w-8 h-8 bg-accent rounded-full animate-float opacity-60"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary rounded-full animate-float opacity-60"
                style={{ animationDelay: "1.5s" }}
              ></div>
              <div
                className="absolute top-1/2 -right-6 w-4 h-4 bg-accent/50 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-gradient-to-b from-accent to-primary rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
          <p className="text-xs text-muted-foreground mt-2 animate-pulse">
            Scroll Down
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate">
            <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <div className="bg-card p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                  Mobile Application Developer
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                  With 1+ years of professional experience, I specialize in building and optimizing scalable Android & iOS applications using Flutter and Dart. My technical expertise spans GetX, Provider, Clean Architecture, and seamless REST API integrations.
                </p>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  I manage the complete application lifecycle—from crafting intuitive, high-performance UI/UX and integrating AI features to successful deployments on both Google Play Console and App Store Connect.
                </p>
              </div>
            </div>
            <div className="scroll-animate">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="bg-card p-4 rounded-lg text-center hover:scale-105 transition-transform duration-200 hover:shadow-md"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className="text-3xl mb-2 animate-float"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {skill.icon}
                    </div>
                    <p className="text-sm font-medium text-card-foreground">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate">
            <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="scroll-animate bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <div className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium inline-block mb-2">
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-muted-foreground leading-relaxed mb-4 text-pretty">
                      {exp.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-card-foreground">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-accent mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate">
            <h2 className="text-4xl font-bold text-center mb-16">Services</h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto text-pretty">
              I offer comprehensive mobile application development services to help
              businesses build robust, scalable cross-platform apps
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="scroll-animate bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce-subtle transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate">
            <h2 className="text-4xl font-bold text-center mb-16">
              Featured Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="scroll-animate bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.liveDemo}
                      className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="border border-border px-4 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate">
            <h2 className="text-4xl font-bold text-center mb-16">
              What Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="scroll-animate bg-card p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    John Doe
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    CTO, TechStartup
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                "Shohidul delivered an exceptional Django API that scaled perfectly
                with our growing user base. His attention to performance
                optimization saved us thousands in server costs."
              </p>
              <div className="flex text-accent mt-4">{"★".repeat(5)}</div>
            </div>
            <div
              className="scroll-animate bg-card p-8 rounded-xl shadow-lg"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent font-bold">SM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    Sarah Miller
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Product Manager, E-commerce Co
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                "Working with Shohidul was a game-changer. He built our entire
                backend infrastructure from scratch and delivered ahead of
                schedule. Highly recommended!"
              </p>
              <div className="flex text-accent mt-4">{"★".repeat(5)}</div>
            </div>
            <div
              className="scroll-animate bg-card p-8 rounded-xl shadow-lg"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent font-bold">MJ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    Mike Johnson
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Founder, Analytics Platform
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                "Shohidul's expertise in database optimization helped us process
                millions of records efficiently. His code is clean,
                well-documented, and maintainable."
              </p>
              <div className="flex text-accent mt-4">{"★".repeat(5)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-animate">
            <h2 className="text-4xl font-bold text-center mb-16">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-pretty">
              Ready to start your next project? Let's discuss how I can help you
              build something amazing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="scroll-animate">
              <div className="bg-card p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-pretty">
                  I'm always interested in new opportunities and exciting
                  projects. Whether you need a robust API, database
                  optimization, or a complete backend solution, let's discuss
                  how I can help bring your ideas to life.
                </p>
                <div className="space-y-4">
                  <a href="mailto:shohidulislamarifbillah@gmail.com" className="flex items-center gap-3 group hover:scale-105 transition-transform duration-200">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <span className="text-accent text-xl">📧</span>
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">Email</p>
                      <p className="text-muted-foreground group-hover:text-accent transition-colors break-all">
                        shohidulislamarifbillah@gmail.com
                      </p>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/shohidulislam-arifbillah-3b0642355/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group hover:scale-105 transition-transform duration-200">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <span className="text-accent text-xl">💼</span>
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">
                        LinkedIn
                      </p>
                      <p className="text-muted-foreground group-hover:text-accent transition-colors">
                        linkedin.com/in/shohidulislam-arifbillah-3b0642355
                      </p>
                    </div>
                  </a>
                  <a href="https://github.com/SHOarman" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group hover:scale-105 transition-transform duration-200">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <span className="text-accent text-xl">🐙</span>
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">GitHub</p>
                      <p className="text-muted-foreground group-hover:text-accent transition-colors">
                        github.com/SHOarman
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="scroll-animate">
              <div className="bg-card p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                  Send Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-card-foreground"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 hover:border-accent/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-card-foreground"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 hover:border-accent/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-card-foreground"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 hover:border-accent/50 resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  {submitStatus === "success" && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg animate-fade-in">
                      <p className="font-medium">
                        Message sent successfully! 🎉
                      </p>
                      <p className="text-sm">
                        I'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg animate-fade-in">
                      <p className="font-medium">Failed to send message 😞</p>
                      <p className="text-sm">
                        Please try again or contact me directly via email.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="text-lg">🚀</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}
