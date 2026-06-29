import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, X, Cpu, Cloud, Server, Mail } from 'lucide-react';

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeGenre, setActiveGenre] = useState<string>('ai-ml');
  const scrollRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Credentials', href: '#credentials' },
  ];

  // Scroll reveal Intersection Observer setup
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [activeGenre]); // Re-register scroll observer when category changes

  // 19 categorized repositories
  const projects = [
    {
      title: "AI Village Autonomous Simulator",
      genre: "ai-ml",
      genreLabel: "Intelligent Systems",
      tech: ["React", "FastAPI", "SQLite", "Ollama"],
      description: "Autonomous multi-agent simulation simulating a virtual cyberpunk city. Features local LLM inference via Ollama and SQLite state persistence.",
      github: "https://github.com/vishva-ux/AI-Village"
    },
    {
      title: "AI Streaming Chat System",
      genre: "ai-ml",
      genreLabel: "Intelligent Systems",
      tech: ["React", "FastAPI", "SQLite", "SQLAlchemy"],
      description: "Token-streamed chat platform built with React and FastAPI. Supports zero-latency AI response rendering and persistent SQLite database sessions.",
      github: "https://github.com/vishva-ux/AI-Streaming-Chat-System-"
    },
    {
      title: "Smart Canteen Demand Prediction",
      genre: "ai-ml",
      genreLabel: "Intelligent Systems",
      tech: ["Python", "Scikit-Learn", "FastAPI", "Streamlit"],
      description: "Machine learning application leveraging historical campus order data to forecast daily canteen inventory demand using Gradient Boosting (R²=0.97).",
      github: "https://github.com/vishva-ux/smart-canteen-demand-prediction"
    },
    {
      title: "CNN for Plastic Waste Segregation",
      genre: "ai-ml",
      genreLabel: "Intelligent Systems",
      tech: ["TensorFlow", "Keras", "OpenCV", "Python"],
      description: "Deep Convolutional Network (CNN) trained with augmented image datasets to classify plastic waste classes in real-time video streams (92.4% accuracy).",
      github: "https://github.com/vishva-ux/CNN-for-plastic-waste-segregation"
    },
    {
      title: "Lung Cancer Diagnostics",
      genre: "ai-ml",
      genreLabel: "Intelligent Systems",
      tech: ["PyTorch", "Medical Imaging", "DICOM", "ResNet"],
      description: "Diagnostic image classification system using custom convolutional layers and ResNet transfer learning to detect malignant nodules in medical CT scans.",
      github: "https://github.com/vishva-ux/Lung-cancer-detection"
    },
    {
      title: "Security Alert Triage System",
      genre: "ai-ml",
      genreLabel: "Intelligent Systems",
      tech: ["Python", "FastAPI", "SQLite", "Triage Logic"],
      description: "Automated alert priority triage dashboard utilizing FastAPI and custom rulesets to accelerate incident response times and triage logs.",
      github: "https://github.com/vishva-ux/Security-alert-triage-system"
    },
    {
      title: "AI Patent Insight Assistant",
      genre: "ai-ml",
      genreLabel: "Intelligent Systems",
      tech: ["LangChain", "Pinecone DB", "OpenAI API", "FastAPI"],
      description: "Document intelligence assistant querying claim overlays and prior art in patents using Retrieval-Augmented Generation (RAG) and Pinecone vector database.",
      github: "https://github.com/vishva-ux/ai-patent-insight-assistant"
    },
    {
      title: "AI Muse Synthesizer",
      genre: "ai-ml",
      genreLabel: "Intelligent Systems",
      tech: ["JavaScript", "Web Audio API", "Gain Nodes", "Oscillators"],
      description: "Interactive ambient audio synthesizer utilizing Web Audio API oscillators, filters, and gain nodes to dynamically compose melody in real-time.",
      github: "https://github.com/vishva-ux/ai-muse"
    },
    {
      title: "SupportSphere Service Desk",
      genre: "devops",
      genreLabel: "DevOps & Infrastructure",
      tech: ["FastAPI", "React", "PostgreSQL", "Prometheus", "Grafana"],
      description: "ServiceDesk platform mirroring ServiceNow. Orchestrated via FastAPI/PostgreSQL with Nginx reverse proxying and active Prometheus/Grafana monitoring.",
      github: "https://github.com/vishva-ux/SupportSphere"
    },
    {
      title: "Cloud-Native DevOps Platform",
      genre: "devops",
      genreLabel: "DevOps & Infrastructure",
      tech: ["Kubernetes", "Docker", "Jenkins", "Terraform", "Istio"],
      description: "Provisioned automated cloud infrastructure using Terraform Infrastructure-as-Code (IaC), multi-stage Jenkins CI/CD pipelines, and auto-scaling Kubernetes.",
      github: "https://github.com/vishva-ux/cloud-native-devops-platform"
    },
    {
      title: "GitOps Delivery Platform",
      genre: "devops",
      genreLabel: "DevOps & Infrastructure",
      tech: ["ArgoCD", "Kubernetes", "GitHub Actions", "Helm"],
      description: "Built automated GitOps continuous deployment pipelines using ArgoCD and Helm charts on Kubernetes to guarantee sync state and zero-downtime rolling updates.",
      github: "https://github.com/vishva-ux/cloud-native-gitops-delivery-platform"
    },
    {
      title: "Enterprise Observability Platform",
      genre: "devops",
      genreLabel: "DevOps & Infrastructure",
      tech: ["Istio Service Mesh", "Prometheus", "Jaeger Tracing", "Grafana"],
      description: "Configured distributed tracing and golden telemetry signals on Istio service mesh, compiling automated SRE metrics dashboards and alert policies.",
      github: "https://github.com/vishva-ux/enterprise-observability-sre-platform"
    },
    {
      title: "Real-Time Notification Broker",
      genre: "systems",
      genreLabel: "Full-Stack & Systems",
      tech: ["React", "Node.js", "Socket.io", "Express"],
      description: "High-volume notification broker implementing Socket.io client-server sync, a custom O(n log n) priority sorting scoring algorithm, and retry policies.",
      github: "https://github.com/vishva-ux/Real_Time_Notification_system"
    },
    {
      title: "Graph Insights Dashboard",
      genre: "systems",
      genreLabel: "Full-Stack & Systems",
      tech: ["Next.js", "React", "DFS/BFS", "Tailwind CSS"],
      description: "Web application running custom DFS/BFS algorithms to parse JSON arrays, count disjoint trees, discover cycles, and render node hierarchies recursively.",
      github: "https://github.com/vishva-ux/srm-challenge"
    },
    {
      title: "Compiler Lexer & Parser Engine",
      genre: "systems",
      genreLabel: "Full-Stack & Systems",
      tech: ["C++", "Flex Lexer", "Bison Parser", "Syntax Trees"],
      description: "Syntax and lexical parser mapping C++ code subsets into token structures, compiling Abstract Syntax Trees, and managing scoped symbol tables.",
      github: "https://github.com/vishva-ux/Compiler_main"
    },
    {
      title: "Xeno Transaction Validator",
      genre: "systems",
      genreLabel: "Full-Stack & Systems",
      tech: ["Node.js", "Express", "PostgreSQL", "HMAC/SHA-256"],
      description: "Security validator engine parsing transaction batches, checking double-spend attempts, and verifying signatures using concurrent worker queues.",
      github: "https://github.com/vishva-ux/xeno-transaction-validator"
    },
    {
      title: "Spotify Album Finder",
      genre: "systems",
      genreLabel: "Full-Stack & Systems",
      tech: ["React", "Spotify Web API", "OAuth 2.0", "JavaScript"],
      description: "Elegant music directory calling the Spotify API using PKCE OAuth 2.0 authentication, supporting debounced searches and discography displays.",
      github: "https://github.com/vishva-ux/album-finder-with-spotify-api"
    },
    {
      title: "HR Workflow Designer",
      genre: "systems",
      genreLabel: "Full-Stack & Systems",
      tech: ["React Flow", "Zustand", "Node.js", "SQLite"],
      description: "Visual hiring pipeline editor integrating React Flow canvas boards, Zustand state management, and coordinate persistence via Node/SQLite.",
      github: "https://github.com/vishva-ux/-hr-workflow-designer"
    },
    {
      title: "Skycrate S3 File Sharing",
      genre: "systems",
      genreLabel: "Full-Stack & Systems",
      tech: ["Node.js", "Express", "AWS S3 SDK", "MongoDB"],
      description: "Self-expiring file exchange system generating temporary AWS S3 pre-signed URLs and tracking usage constraints in MongoDB.",
      github: "https://github.com/vishva-ux/skycrate-"
    }
  ];

  // Mouse move tilt effect handler for cards (True 3D layout rotation)
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation angles based on mouse offsets (capped at 24 degrees max tilt)
    const rotateX = -((y / rect.height) - 0.5) * 24;
    const rotateY = ((x / rect.width) - 0.5) * 24;
    
    const inner = card.querySelector('.tilt-inner') as HTMLDivElement;
    if (inner) {
      inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const inner = card.querySelector('.tilt-inner') as HTMLDivElement;
    if (inner) {
      inner.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
  };

  return (
    <div ref={scrollRef} className="relative w-full min-h-screen bg-[#ffffff] text-[#1d1d1f] font-inter overflow-x-hidden selection:bg-[#2563eb]/10 selection:text-[#2563eb]">
      
      {/* Background Liquid Soft Gradient Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#2563eb]/3 to-transparent blur-[120px]" />
        <div className="absolute top-[40%] left-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#2563eb]/2 to-transparent blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#2563eb]/2 to-transparent blur-[120px]" />
      </div>

      {/* Fixed Background Scenery Image */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-1 pointer-events-none opacity-[0.09]">
        <img
          src="images/scenery_bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sticky Glass Navigation Header */}
      <header className="fixed top-0 left-0 w-full z-40 px-6 sm:px-10 lg:px-16 py-5 lg:py-6 flex justify-between items-center bg-[#ffffff]/80 backdrop-blur-md border-b border-[#e5e7eb]">
        <div className="flex items-center">
          {/* Removed top left logo text */}
        </div>
        
        {/* Navigation items (Desktop) */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-widest text-[#4b5563] hover:text-[#1d1d1f] transition-colors duration-300 font-semibold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 border border-[#1d1d1f]/20 hover:border-[#1d1d1f]/50 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-[#1d1d1f]/5"
          >
            GET IN TOUCH
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger menu toggle */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex md:hidden flex-col justify-between items-end w-6 h-4 group cursor-pointer focus:outline-none"
          aria-label="Open Navigation Menu"
        >
          <span className="w-6 h-0.5 bg-[#1d1d1f] transition-all duration-300" />
          <span className="w-6 h-0.5 bg-[#1d1d1f] transition-all duration-300" />
          <span className="w-4 h-0.5 bg-[#1d1d1f] transition-all duration-300 group-hover:w-6" />
        </button>
      </header>

      {/* Fullscreen Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-50 bg-[#ffffff]/98 backdrop-blur-md flex flex-col justify-between px-6 sm:px-10 py-6 transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <span className="font-podium text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[#1d1d1f]">
            VISHVA
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 hover:border-black/20 transition-colors text-black"
            aria-label="Close Navigation Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col items-center gap-6 my-auto">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-podium text-4xl sm:text-5xl font-bold uppercase tracking-wider text-[#1d1d1f] hover:text-[#4b5563] transition-colors duration-300"
              style={{
                transitionDelay: `${idx * 80 + 100}ms`,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: menuOpen ? 1 : 0,
                transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="w-full flex justify-center pb-8">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="group w-full max-w-xs justify-center inline-flex items-center gap-2 border border-black/20 hover:border-black/40 px-6 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-black/5"
            style={{
              transitionDelay: `${navLinks.length * 80 + 100}ms`,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: menuOpen ? 1 : 0,
              transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
            }}
          >
            GET IN TOUCH
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Main Containers */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-28">
        
        {/* SECTION 1: Editorial Landing Page (Overview) */}
        <section id="overview" className="min-h-[85vh] flex flex-col justify-center py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left text panel */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Tagline */}
              <div className="animate-fade-up flex items-center gap-2 mb-6 opacity-0 [animation-fill-mode:forwards]">
                <span className="font-inter text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#4b5563]">
                  R. VISHVA KANNA
                </span>
              </div>

              {/* Bold Greeting Header (Im Vishva - no apostrophe to avoid DEMO watermark) */}
              <h1 className="animate-fade-up-delay-1 font-podium text-[#1d1d1f] uppercase leading-[0.92] tracking-tight text-[clamp(2.6rem,7.5vw,6.5rem)] mb-6 lg:mb-8 opacity-0 [animation-fill-mode:forwards] reveal">
                Hello,<br />
                Im Vishva
              </h1>

              {/* Lead text */}
              <p className="animate-fade-up-delay-2 font-inter text-sm sm:text-base text-[#4b5563] leading-relaxed max-w-lg opacity-0 [animation-fill-mode:forwards] font-light reveal">
                A final-year student at SRM Institute of Science and Technology. I specialize in building end-to-end full-stack software applications, robust systems APIs, and automated cloud deployments.
              </p>

              {/* Action buttons */}
              <div className="animate-fade-up-delay-3 flex flex-wrap items-center gap-4 sm:gap-6 mt-8 lg:mt-10 opacity-0 [animation-fill-mode:forwards] reveal">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 bg-[#1d1d1f] text-white hover:bg-neutral-800 px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs font-bold tracking-widest uppercase transition-colors duration-300 rounded-full"
                >
                  SEE MY WORK
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Core Stats Row (Updated CGPA to 8.29 with 3D hover) */}
              <div className="animate-fade-up-delay-4 flex flex-wrap gap-8 sm:gap-12 lg:gap-16 mt-12 lg:mt-16 opacity-0 [animation-fill-mode:forwards] reveal">
                {[
                  { num: '+20', label: 'Systems Built' },
                  { num: '8.29', label: 'Academic CGPA' },
                  { num: '+19', label: 'Active Repos' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="group flex flex-col items-start reveal perspective-1000 p-2 border border-transparent hover:border-black/5 rounded-xl transition-all duration-300 cursor-default"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="tilt-inner flex flex-col items-start" style={{ transformStyle: 'preserve-3d' }}>
                      <span style={{ transform: 'translateZ(30px)' }} className="font-inter text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1d1d1f]">
                        {stat.num}
                      </span>
                      <span style={{ transform: 'translateZ(20px)' }} className="font-inter text-[9px] sm:text-xs font-medium tracking-widest uppercase text-[#4b5563] mt-1">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5 flex justify-center items-end relative h-[380px] sm:h-[480px] lg:h-[580px] w-full mt-8 lg:mt-0 reveal">
              <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff] via-transparent to-transparent z-10 pointer-events-none" />
              <img
                src="images/profile.png"
                alt="R. Vishva Kanna"
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_50px_rgba(37,99,235,0.08)] z-0"
              />
            </div>

          </div>
        </section>

        {/* SECTION 2: About Me & Core Capabilities with 3D Hover Cards */}
        <section id="about" className="py-24 border-t border-[#e5e7eb] reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Biography description */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-4 reveal">
                <div className="w-1.5 h-1.5 bg-[#4b5563] rounded-full" />
                <span className="text-[10px] tracking-widest text-[#4b5563] font-bold uppercase">Biography</span>
              </div>
              <h2 className="font-podium text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-[#1d1d1f] mb-8 reveal">
                About Me
              </h2>
              <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed font-light mb-6 reveal">
                My focus lies at the convergence of full-stack software development, automated deployment pipelines, and cloud reliability (SRE). I construct clean, testable codebases and configure containerized, elastic application environments.
              </p>
              <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed font-light mb-8 reveal">
                I specialize in building production-ready architectures, setting up continuous deployment patterns, configuring microservice observability networks, and managing database state persistence.
              </p>

              {/* Skills dashboard block */}
              <div className="w-full bg-white border border-[#e5e7eb] rounded-2xl p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.02)] reveal">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-[#1d1d1f] mb-6 border-b border-[#e5e7eb] pb-3 reveal">
                  Technical Core Capabilities
                </h3>
                
                <div className="space-y-6">
                  <div className="reveal">
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#4b5563]/70 mb-3">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'SQL', 'JavaScript', 'TypeScript', 'HTML / CSS'].map(t => (
                        <span key={t} className="text-xs px-3.5 py-1.5 bg-[#f8f7f4] border border-[#e5e7eb] rounded-lg text-[#1d1d1f] font-medium">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="reveal">
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#4b5563]/70 mb-3">Cloud & DevOps</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Docker', 'Kubernetes', 'AWS', 'Terraform', 'GitHub Actions', 'Jenkins', 'Prometheus', 'Grafana'].map(t => (
                        <span key={t} className="text-xs px-3.5 py-1.5 bg-[#f8f7f4] border border-[#e5e7eb] rounded-lg text-[#1d1d1f] font-medium">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="reveal">
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#4b5563]/70 mb-3">Frameworks & DBs</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React.js', 'Next.js', 'FastAPI', 'Express.js', 'PostgreSQL', 'MySQL', 'MongoDB', 'PyTorch'].map(t => (
                        <span key={t} className="text-xs px-3.5 py-1.5 bg-[#f8f7f4] border border-[#e5e7eb] rounded-lg text-[#1d1d1f] font-medium">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Capabilities blocks (with 3D Hover tilt) */}
            <div className="lg:col-span-6 flex flex-col gap-6 lg:mt-16">
              {[
                { icon: Cpu, title: "Cognitive Automation", desc: "Engineering autonomous system agents using local LLMs, claim vector indices, predictive analytics, and self-hosted model streams." },
                { icon: Cloud, title: "Kubernetes & Infrastructure", desc: "Automating infrastructure deployments, building secure GitOps pipelines with Helm/ArgoCD, and configuring telemetry dashboards." },
                { icon: Server, title: "Scalable Systems Architecture", desc: "Building robust APIs using Python (FastAPI/Flask) and Node.js, mapping relational schemas, and establishing reliable system protocols." }
              ].map((cap) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.title}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="group bg-white border border-[#e5e7eb] p-6 sm:p-8 rounded-2xl flex items-start gap-5 hover:border-black/20 transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.04)] perspective-1000 cursor-default reveal"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="tilt-inner flex items-start gap-5 w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                      <div style={{ transform: 'translateZ(30px)' }} className="w-12 h-12 bg-[#f8f7f4] border border-[#e5e7eb] rounded-xl flex items-center justify-center text-[#1d1d1f] flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div style={{ transform: 'translateZ(45px)' }}>
                        <h3 className="font-semibold text-lg text-[#1d1d1f] mb-2">{cap.title}</h3>
                        <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                          {cap.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* SECTION 3: Filterable Project Showcase with 3D Hover tilt */}
        <section id="work" className="py-24 border-t border-[#e5e7eb] reveal">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4 reveal">
                <div className="w-1.5 h-1.5 bg-[#4b5563] rounded-full" />
                <span className="text-[10px] tracking-widest text-[#4b5563] font-bold uppercase">Work Showcase</span>
              </div>
              <h2 className="font-podium text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-[#1d1d1f] reveal">
                Selected Projects
              </h2>
            </div>

            {/* Filtering Tabs */}
            <div className="flex flex-wrap gap-2 reveal">
              {[
                { id: 'ai-ml', label: 'Intelligent Systems', icon: Cpu },
                { id: 'devops', label: 'Cloud & Deployments', icon: Cloud },
                { id: 'systems', label: 'Web & Applications', icon: Server },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveGenre(tab.id)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest border transition-all cursor-pointer ${
                      activeGenre === tab.id
                        ? 'bg-[#1d1d1f] text-white border-black'
                        : 'bg-white border-[#e5e7eb] text-[#4b5563] hover:text-[#1d1d1f] hover:border-[#4b5563]/30'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid display of 3D cards (Removed reveal class to prevent category blankouts) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => project.genre === activeGenre)
              .map((project) => (
                <div
                  key={project.title}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="group bg-white border border-[#e5e7eb] rounded-2xl p-6 flex flex-col justify-between min-h-[310px] transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] hover:border-black/20 cursor-default perspective-1000"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="tilt-inner transition-transform duration-200 ease-out flex flex-col flex-grow" style={{ transformStyle: 'preserve-3d' }}>
                    <div style={{ transform: 'translateZ(30px)' }} className="flex justify-between items-start mb-6">
                      <span className="text-[9px] uppercase tracking-wider text-[#4b5563] font-bold">
                        {project.genreLabel}
                      </span>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-400 hover:text-black transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                      </a>
                    </div>
                    
                    <h3 style={{ transform: 'translateZ(45px)' }} className="font-semibold text-lg text-[#1d1d1f] mb-3 tracking-wide leading-snug">
                      {project.title}
                    </h3>
                    
                    <p style={{ transform: 'translateZ(35px)' }} className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-light mb-6">
                      {project.description}
                    </p>

                    <div style={{ transform: 'translateZ(50px)' }} className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-[#e5e7eb]">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-bold uppercase tracking-wider bg-[#f8f7f4] border border-[#e5e7eb] text-[#4b5563] px-2.5 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* SECTION 4: Credentials (Timeline & Certifications) - Changed & to AND in heading */}
        <section id="credentials" className="py-24 border-t border-[#e5e7eb] reveal">
          <div className="flex flex-col items-start mb-12">
            <div className="flex items-center gap-2 mb-4 reveal">
              <div className="w-1.5 h-1.5 bg-[#4b5563] rounded-full" />
              <span className="text-[10px] tracking-widest text-[#4b5563] font-bold uppercase">Qualifications</span>
            </div>
            <h2 className="font-podium text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-[#1d1d1f] reveal">
              Education and Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Timeline Panel */}
            <div className="lg:col-span-7 reveal">
              <h3 className="font-semibold text-sm uppercase tracking-widest text-[#1d1d1f] mb-8">
                Academic Timeline
              </h3>
              
              <div className="border-l border-[#e5e7eb] pl-6 ml-3 space-y-12">
                {/* School 1 */}
                <div
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="relative p-6 bg-white border border-[#e5e7eb] rounded-2xl hover:border-black/20 transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.03)] cursor-default perspective-1000 reveal"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="tilt-inner" style={{ transformStyle: 'preserve-3d' }}>
                    <div className="absolute w-3 h-3 bg-[#4b5563] rounded-full left-[-38.5px] top-[26px] border border-[#ffffff]" />
                    <div style={{ transform: 'translateZ(30px)' }} className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-[#1d1d1f] font-bold">2023 - 2027</span>
                      <span className="text-[9px] uppercase tracking-wider font-bold bg-black/5 border border-black/10 text-[#4b5563] px-2 py-0.5 rounded">Final Year</span>
                    </div>
                    <h4 style={{ transform: 'translateZ(45px)' }} className="font-bold text-lg text-[#1d1d1f] mb-1">SRM Institute of Science and Technology</h4>
                    <p style={{ transform: 'translateZ(35px)' }} className="text-xs text-[#4b5563] font-medium mb-3">B.Tech in Computer Science</p>
                    <p style={{ transform: 'translateZ(30px)' }} className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-light mb-4">
                      Engineering core competencies include Operating Systems, Object-Oriented Analysis, Relational Database Management, Software Engineering, and Computer Networks.
                    </p>
                    <span style={{ transform: 'translateZ(40px)' }} className="inline-block text-xs bg-[#f8f7f4] border border-[#e5e7eb] text-[#1d1d1f] px-3 py-1 rounded-lg">CGPA: 8.29 / 10.00</span>
                  </div>
                </div>

                {/* School 2 */}
                <div
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="relative p-6 bg-white border border-[#e5e7eb] rounded-2xl hover:border-black/20 transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.03)] cursor-default perspective-1000 reveal"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="tilt-inner" style={{ transformStyle: 'preserve-3d' }}>
                    <div className="absolute w-3 h-3 bg-neutral-300 rounded-full left-[-38.5px] top-[26px] border border-[#ffffff]" />
                    <div style={{ transform: 'translateZ(30px)' }} className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-[#4b5563] font-bold">2021 - 2023</span>
                      <span className="text-[9px] uppercase tracking-wider font-bold bg-[#f8f7f4] border border-[#e5e7eb] text-[#4b5563] px-2 py-0.5 rounded">Schooling</span>
                    </div>
                    <h4 style={{ transform: 'translateZ(45px)' }} className="font-bold text-lg text-[#1d1d1f]/90 mb-1">Kendriya Vidyalaya, Thanjavur</h4>
                    <p style={{ transform: 'translateZ(35px)' }} className="text-xs text-[#4b5563] font-medium mb-3">All India Senior School Certificate Examination (CBSE)</p>
                    <span style={{ transform: 'translateZ(40px)' }} className="inline-block text-xs bg-[#f8f7f4] border border-[#e5e7eb] text-[#4b5563] px-3 py-1 rounded-lg">Percentage: 71.8%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Block (Added 3D perspective to certificate cards) */}
            <div className="lg:col-span-5 reveal">
              <h3 className="font-semibold text-sm uppercase tracking-widest text-[#1d1d1f] mb-8">
                Certifications
              </h3>

              <div className="space-y-3.5">
                {/* 1. AWS Cloud Practitioner */}
                <div
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="flex items-center gap-4 bg-white border border-[#e5e7eb] p-4 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.015)] hover:border-black/20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.03)] transition-all duration-500 perspective-1000 cursor-default reveal"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="tilt-inner flex items-center gap-4 w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                    <div style={{ transform: 'translateZ(30px)' }} className="w-10 h-10 bg-[#f8f7f4] border border-[#e5e7eb] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#FF9900]">
                        <path d="M4 14c2.5 3 6.5 3 9 0M14 11l3 3-3 3"/>
                      </svg>
                    </div>
                    <div style={{ transform: 'translateZ(40px)' }}>
                      <h4 className="text-sm font-semibold text-[#1d1d1f] mb-0.5">AWS Cloud Practitioner Essentials</h4>
                      <span className="text-[10px] text-[#4b5563]">Amazon Web Services &bull; 2026</span>
                    </div>
                  </div>
                </div>

                {/* 2. DevOps on AWS */}
                <div
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="flex items-center gap-4 bg-white border border-[#e5e7eb] p-4 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.015)] hover:border-black/20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.03)] transition-all duration-500 perspective-1000 cursor-default reveal"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="tilt-inner flex items-center gap-4 w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                    <div style={{ transform: 'translateZ(30px)' }} className="w-10 h-10 bg-[#f8f7f4] border border-[#e5e7eb] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#0A66C2]">
                        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                        <path d="M5 13.18v4l7 3.82 7-3.82v-4L12 17l-7-3.82z"/>
                      </svg>
                    </div>
                    <div style={{ transform: 'translateZ(40px)' }}>
                      <h4 className="text-sm font-semibold text-[#1d1d1f] mb-0.5">Fundamentals of DevOps on AWS</h4>
                      <span className="text-[10px] text-[#4b5563]">Simplilearn &bull; 2026</span>
                    </div>
                  </div>
                </div>

                {/* 3. Cisco Linux Unhatched */}
                <div
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="flex items-center gap-4 bg-white border border-[#e5e7eb] p-4 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.015)] hover:border-black/20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.03)] transition-all duration-500 perspective-1000 cursor-default reveal"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="tilt-inner flex items-center gap-4 w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                    <div style={{ transform: 'translateZ(30px)' }} className="w-10 h-10 bg-[#f8f7f4] border border-[#e5e7eb] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#049FD9]">
                        <rect x="2" y="10" width="2" height="4" rx="0.5"/>
                        <rect x="5" y="7" width="2" height="10" rx="0.5"/>
                        <rect x="8" y="5" width="2" height="14" rx="0.5"/>
                        <rect x="11" y="8" width="2" height="8" rx="0.5"/>
                        <rect x="14" y="5" width="2" height="14" rx="0.5"/>
                        <rect x="17" y="7" width="2" height="10" rx="0.5"/>
                        <rect x="20" y="10" width="2" height="4" rx="0.5"/>
                      </svg>
                    </div>
                    <div style={{ transform: 'translateZ(40px)' }}>
                      <h4 className="text-sm font-semibold text-[#1d1d1f] mb-0.5">Linux Unhatched Certification</h4>
                      <span className="text-[10px] text-[#4b5563]">Cisco Networking Academy &bull; 2026</span>
                    </div>
                  </div>
                </div>

                {/* 4. EY GDS Internship */}
                <div
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="flex items-center gap-4 bg-white border border-[#e5e7eb] p-4 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.015)] hover:border-black/20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.03)] transition-all duration-500 perspective-1000 cursor-default reveal"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="tilt-inner flex items-center gap-4 w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                    <div style={{ transform: 'translateZ(30px)' }} className="w-10 h-10 bg-[#f8f7f4] border border-[#e5e7eb] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <rect x="3" y="3" width="18" height="18" rx="2" fill="#1D1D1F"/>
                        <polygon points="12,18 18,18 18,12" fill="#FFE600"/>
                        <text x="5" y="13" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="sans-serif">EY</text>
                      </svg>
                    </div>
                    <div style={{ transform: 'translateZ(40px)' }}>
                      <h4 className="text-sm font-semibold text-[#1d1d1f] mb-0.5">MERN Stack Developer Internship</h4>
                      <span className="text-[10px] text-[#4b5563]">EY GDS & AICTE &bull; 2025</span>
                    </div>
                  </div>
                </div>

                {/* 5. IBM AI Certification */}
                <div
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="flex items-center gap-4 bg-white border border-[#e5e7eb] p-4 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.015)] hover:border-black/20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.03)] transition-all duration-500 perspective-1000 cursor-default reveal"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="tilt-inner flex items-center gap-4 w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                    <div style={{ transform: 'translateZ(30px)' }} className="w-10 h-10 bg-[#f8f7f4] border border-[#e5e7eb] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#0530AD]">
                        <path d="M2 4h20v2H2zm0 3h20v2H2zm0 3h20v2H2zm0 3h20v2H2zm0 3h20v2H2zm0 3h20v2H2z" />
                      </svg>
                    </div>
                    <div style={{ transform: 'translateZ(40px)' }}>
                      <h4 className="text-sm font-semibold text-[#1d1d1f] mb-0.5">Getting Started with AI</h4>
                      <span className="text-[10px] text-[#4b5563]">IBM &bull; 2026</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* SECTION 5: Inquire / Contact with 3D hover redirection cards */}
        <section id="contact" className="py-24 border-t border-[#e5e7eb] reveal">
          <div className="bg-white border border-[#e5e7eb] rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
            <div className="max-w-xl text-left">
              <div className="flex items-center gap-2 mb-4 reveal">
                <div className="w-1.5 h-1.5 bg-[#4b5563] rounded-full" />
                <span className="text-[10px] tracking-widest text-[#4b5563] font-bold uppercase">Let's Collaborate</span>
              </div>
              <h2 className="font-podium text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-[#1d1d1f] mb-6 reveal">
                Get In Touch
              </h2>
              <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-light reveal">
                I am seeking full-time software developer roles, graduate placements, or technical collaborations. Drop me a line and let's construct something durable.
              </p>
            </div>

            {/* Social channels grid with 3D hover layout */}
            <div className="flex flex-col gap-3 w-full md:w-auto max-w-sm reveal">
              {/* 1. Email */}
              <a
                href="mailto:vishvasaimon@gmail.com"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group flex items-center justify-between gap-6 bg-[#f8f7f4] border border-[#e5e7eb] hover:border-black/25 px-6 py-4 rounded-xl transition-all duration-500 hover:bg-white perspective-1000 cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="tilt-inner flex items-center justify-between w-full" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="flex items-center gap-4">
                    <div style={{ transform: 'translateZ(25px)' }} className="w-10 h-10 bg-white border border-[#e5e7eb] rounded-lg flex items-center justify-center text-neutral-500">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div style={{ transform: 'translateZ(40px)' }} className="flex flex-col items-start">
                      <span className="text-[9px] uppercase tracking-wider text-[#4b5563] font-bold">Email Address</span>
                      <span className="text-xs text-[#1d1d1f] font-medium">vishvasaimon@gmail.com</span>
                    </div>
                  </div>
                  <ArrowUpRight style={{ transform: 'translateZ(30px)' }} className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
                </div>
              </a>

              {/* 2. LinkedIn */}
              <a
                href="https://linkedin.com/in/vishvakanna"
                target="_blank"
                rel="noreferrer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group flex items-center justify-between gap-6 bg-[#f8f7f4] border border-[#e5e7eb] hover:border-black/25 px-6 py-4 rounded-xl transition-all duration-500 hover:bg-white perspective-1000 cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="tilt-inner flex items-center justify-between w-full" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="flex items-center gap-4">
                    <div style={{ transform: 'translateZ(25px)' }} className="w-10 h-10 bg-white border border-[#e5e7eb] rounded-lg flex items-center justify-center text-neutral-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </div>
                    <div style={{ transform: 'translateZ(40px)' }} className="flex flex-col items-start">
                      <span className="text-[9px] uppercase tracking-wider text-[#4b5563] font-bold">LinkedIn Portal</span>
                      <span className="text-xs text-[#1d1d1f] font-medium">linkedin.com/in/vishvakanna</span>
                    </div>
                  </div>
                  <ArrowUpRight style={{ transform: 'translateZ(30px)' }} className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
                </div>
              </a>

              {/* 3. GitHub */}
              <a
                href="https://github.com/vishva-ux"
                target="_blank"
                rel="noreferrer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group flex items-center justify-between gap-6 bg-[#f8f7f4] border border-[#e5e7eb] hover:border-black/25 px-6 py-4 rounded-xl transition-all duration-500 hover:bg-white perspective-1000 cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="tilt-inner flex items-center justify-between w-full" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="flex items-center gap-4">
                    <div style={{ transform: 'translateZ(25px)' }} className="w-10 h-10 bg-white border border-[#e5e7eb] rounded-lg flex items-center justify-center text-neutral-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    </div>
                    <div style={{ transform: 'translateZ(40px)' }} className="flex flex-col items-start">
                      <span className="text-[9px] uppercase tracking-wider text-[#4b5563] font-bold">GitHub Portal</span>
                      <span className="text-xs text-[#1d1d1f] font-medium">github.com/vishva-ux</span>
                    </div>
                  </div>
                  <ArrowUpRight style={{ transform: 'translateZ(30px)' }} className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Footer info */}
        <footer className="py-12 border-t border-[#e5e7eb] flex flex-col sm:flex-row justify-between items-center gap-6 mt-12 reveal">
          <span className="text-[10px] tracking-widest text-[#4b5563] uppercase">
            &copy; 2026 R. VISHVA KANNA. All rights reserved.
          </span>
          <div className="flex gap-4">
            <a href="https://github.com/vishva-ux" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-black transition-colors"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
            <a href="https://linkedin.com/in/vishvakanna" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-black transition-colors"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default App;
