import React, { useState } from 'react';
import { ArrowUpRight, Award, Crown, X, Cpu, Cloud, Server, GraduationCap, Mail, Award as CertIcon } from 'lucide-react';

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeGenre, setActiveGenre] = useState<string>('ai-ml');

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Credentials', href: '#credentials' },
  ];

  // 19 repositories categorized by genre
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

  return (
    <div className="relative w-full min-h-screen bg-[#070708] text-white font-inter select-none overflow-x-hidden">
      
      {/* Background Fixed Looping Video Overlay */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#070708]/60 via-[#070708]/85 to-[#070708] z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Top Glass Navigation Header */}
      <header className="fixed top-0 left-0 w-full z-40 px-6 sm:px-10 lg:px-16 py-5 lg:py-6 flex justify-between items-center bg-[#070708]/40 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center">
          <a href="#overview" className="font-podium text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
            VISHVA
          </a>
        </div>
        
        {/* Navigation items (Desktop) */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-widest text-white/80 hover:text-white transition-colors duration-300 font-semibold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 border border-white/20 hover:border-white/50 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-white/5"
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
          <span className="w-6 h-0.5 bg-white transition-all duration-300" />
          <span className="w-6 h-0.5 bg-white transition-all duration-300" />
          <span className="w-4 h-0.5 bg-white transition-all duration-300 group-hover:w-6" />
        </button>
      </header>

      {/* Fullscreen Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between px-6 sm:px-10 py-6 transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <span className="font-podium text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
            VISHVA
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-white/30 transition-colors text-white"
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
              className="font-podium text-4xl sm:text-5xl font-bold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors duration-300"
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
            className="group w-full max-w-xs justify-center inline-flex items-center gap-2 border border-white/20 hover:border-white/50 px-6 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-white/10"
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
        
        {/* SECTION 1: Fullscreen Hero Page (Overview) */}
        <section id="overview" className="min-h-[90vh] flex flex-col justify-center py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left text panel */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Tagline */}
              <div className="animate-fade-up flex items-center gap-2 mb-6 opacity-0 [animation-fill-mode:forwards]">
                <Crown className="w-4 h-4 text-white/70" />
                <span className="font-inter text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-white/70">
                  R. VISHVA KANNA &bull; software engineer
                </span>
              </div>

              {/* Bold Hero Header */}
              <h1 className="animate-fade-up-delay-1 font-podium text-white uppercase leading-[0.92] tracking-tight text-[clamp(2.6rem,7.5vw,6.5rem)] mb-6 lg:mb-8 opacity-0 [animation-fill-mode:forwards]">
                Design.<br />
                Disrupt.<br />
                Develop.
              </h1>

              {/* Descriptive Intro subtext */}
              <p className="animate-fade-up-delay-2 font-inter text-sm sm:text-base text-white/70 leading-relaxed max-w-lg opacity-0 [animation-fill-mode:forwards] font-light">
                I build high-performance systems and automated cloud infrastructure. 
                Architectures that don't just run — <strong className="font-bold text-white">they scale.</strong>
              </p>

              {/* Action items */}
              <div className="animate-fade-up-delay-3 flex flex-wrap items-center gap-4 sm:gap-6 mt-8 lg:mt-10 opacity-0 [animation-fill-mode:forwards]">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 bg-white text-black hover:bg-neutral-200 px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs font-bold tracking-widest uppercase transition-colors duration-300 rounded-full"
                >
                  SEE MY WORK
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <div className="hidden sm:flex items-center gap-3 border-l border-white/10 pl-6 py-1">
                  <Award className="w-8 h-8 text-white/50" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] tracking-widest text-white/60 font-semibold uppercase">
                      SRM IST
                    </span>
                    <span className="text-[10px] tracking-widest text-white/60 font-semibold uppercase">
                      CSE Final Year
                    </span>
                  </div>
                </div>
              </div>

              {/* Core Stats Row */}
              <div className="animate-fade-up-delay-4 flex flex-wrap gap-8 sm:gap-12 lg:gap-16 mt-12 lg:mt-16 opacity-0 [animation-fill-mode:forwards]">
                {[
                  { num: '+20', label: 'Systems Built' },
                  { num: '8.26', label: 'Academic CGPA' },
                  { num: '+19', label: 'Active Repos' },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-start">
                    <span className="font-inter text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                      {stat.num}
                    </span>
                    <span className="font-inter text-[9px] sm:text-xs font-medium tracking-widest uppercase text-white/50 mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Photo Column - Floating cutout photo aligned bottom right with no borders */}
            <div className="lg:col-span-5 flex justify-center items-end relative h-[380px] sm:h-[480px] lg:h-[600px] w-full mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-transparent to-transparent z-10 pointer-events-none" />
              <img
                src="images/profile.png"
                alt="R. Vishva Kanna"
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_50px_rgba(37,99,235,0.15)] z-0"
              />
            </div>

          </div>
        </section>

        {/* SECTION 2: About Me & Core Capabilities */}
        <section id="about" className="py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Biography description */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                <span className="text-[10px] tracking-widest text-teal-400 font-bold uppercase">Biography</span>
              </div>
              <h2 className="font-podium text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-white mb-8">
                About Me
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light mb-6">
                My engineering focus lies at the convergence of full-stack software development, automated DevOps pipelines, and cloud reliability engineering (SRE). I construct clean, testable codebases and configure containerized, elastic application environments.
              </p>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light mb-8">
                I specialize in building production-ready architectures, setting up continuous deployment patterns, configuring microservice observability networks, and managing database state persistence.
              </p>

              {/* Skills dashboard block */}
              <div className="w-full bg-white/[0.02] border border-white/5 rounded-2xl p-6 sm:p-8">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-white mb-6 border-b border-white/5 pb-3">
                  Technical Core Capabilities
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-white/50 mb-3">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'SQL', 'JavaScript', 'TypeScript', 'C++', 'Bash'].map(t => (
                        <span key={t} className="text-xs px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/90">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-white/50 mb-3">Cloud & DevOps</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Docker', 'Kubernetes', 'AWS', 'Terraform', 'GitHub Actions', 'Jenkins', 'Prometheus', 'Grafana'].map(t => (
                        <span key={t} className="text-xs px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/90">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-white/50 mb-3">Frameworks & DBs</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React.js', 'Next.js', 'FastAPI', 'Flask', 'PostgreSQL', 'MySQL', 'MongoDB', 'PyTorch'].map(t => (
                        <span key={t} className="text-xs px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/90">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Asymmetrical floating tactile blocks */}
            <div className="lg:col-span-6 flex flex-col gap-6 lg:mt-16">
              <div className="bg-white/[0.01] border border-white/5 p-6 sm:p-8 rounded-2xl flex items-start gap-5 hover:border-teal-500/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-teal-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Cognitive Automation</h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                    Engineering autonomous system agents using local LLMs, claim vector indices, predictive analytics, and self-hosted model streams.
                  </p>
                </div>
              </div>

              <div className="bg-white/[0.01] border border-white/5 p-6 sm:p-8 rounded-2xl flex items-start gap-5 hover:border-blue-500/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-blue-400">
                  <Cloud className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Kubernetes & Infrastructure</h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                    Automating infrastructure deployments, building secure GitOps pipelines with Helm/ArgoCD, and configuring telemetry dashboards.
                  </p>
                </div>
              </div>

              <div className="bg-white/[0.01] border border-white/5 p-6 sm:p-8 rounded-2xl flex items-start gap-5 hover:border-white/20 transition-colors duration-300">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/80">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Scalable Systems Architecture</h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                    Building robust APIs using Python (FastAPI/Flask) and Node.js, mapping relational schemas, and establishing reliable system protocols.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: Filterable Project Showcase */}
        <section id="work" className="py-24 border-t border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                <span className="text-[10px] tracking-widest text-blue-400 font-bold uppercase">Engineering Work</span>
              </div>
              <h2 className="font-podium text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-white">
                Selected Projects
              </h2>
            </div>

            {/* Filtering Tabs (keeps projects inside genres) */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'ai-ml', label: 'Intelligent Systems', icon: Cpu },
                { id: 'devops', label: 'DevOps & Infra', icon: Cloud },
                { id: 'systems', label: 'Full-Stack & Systems', icon: Server },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveGenre(tab.id)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest border transition-all cursor-pointer ${
                      activeGenre === tab.id
                        ? 'bg-white text-black border-white'
                        : 'bg-white/5 border-white/5 text-white/60 hover:text-white hover:border-white/15'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid display of boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => project.genre === activeGenre)
              .map((project) => (
                <div
                  key={project.title}
                  className="bg-white/[0.02] border border-white/5 hover:border-white/15 rounded-2xl p-6 flex flex-col justify-between min-h-[300px] hover:translate-y-[-4px] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[9px] uppercase tracking-wider text-teal-400 font-bold">
                        {project.genreLabel}
                      </span>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white/40 hover:text-white transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                      </a>
                    </div>
                    
                    <h3 className="font-semibold text-lg text-white mb-3 tracking-wide leading-snug">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-bold uppercase tracking-wider bg-white/5 border border-white/5 text-white/70 px-2.5 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* SECTION 4: Credentials (Timeline & Certifications) */}
        <section id="credentials" className="py-24 border-t border-white/5">
          <div className="flex flex-col items-start mb-12">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
              <span className="text-[10px] tracking-widest text-purple-400 font-bold uppercase">Qualifications</span>
            </div>
            <h2 className="font-podium text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-white">
              Education & Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Timeline Panel */}
            <div className="lg:col-span-7">
              <h3 className="font-semibold text-sm uppercase tracking-widest text-white mb-8 flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-teal-400" /> Academic Timeline
              </h3>
              
              <div className="border-l border-white/10 pl-6 ml-3 space-y-12">
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-teal-500 rounded-full left-[-32.5px] top-1.5 border border-[#070708]" />
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-white font-bold">2023 - 2027</span>
                    <span className="text-[9px] uppercase tracking-wider font-bold bg-teal-500/10 border border-teal-500/20 text-teal-400 px-2 py-0.5 rounded">Final Year</span>
                  </div>
                  <h4 className="font-bold text-lg text-white mb-1">SRM Institute of Science and Technology</h4>
                  <p className="text-xs text-white/50 font-medium mb-3">B.Tech in Computer Science & Engineering</p>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light mb-3">
                    Core subjects include Operating Systems, Object-Oriented Analysis, Relational Database Management, Software Engineering, and Computer Networks.
                  </p>
                  <span className="inline-block text-xs bg-white/5 border border-white/10 text-white/95 px-3 py-1 rounded-lg">CGPA: 8.26 / 10.00</span>
                </div>

                <div className="relative">
                  <div className="absolute w-3 h-3 bg-white/20 rounded-full left-[-32.5px] top-1.5 border border-[#070708]" />
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-white/60 font-bold">2021 - 2023</span>
                    <span className="text-[9px] uppercase tracking-wider font-bold bg-white/5 border border-white/5 text-white/50 px-2 py-0.5 rounded">Schooling</span>
                  </div>
                  <h4 className="font-bold text-lg text-white/90 mb-1">Kendriya Vidyalaya, Thanjavur</h4>
                  <p className="text-xs text-white/50 font-medium mb-3">All India Senior School Certificate Examination (CBSE)</p>
                  <span className="inline-block text-xs bg-white/5 border border-white/10 text-white/80 px-3 py-1 rounded-lg">Percentage: 71.8%</span>
                </div>
              </div>
            </div>

            {/* Certifications Block */}
            <div className="lg:col-span-5">
              <h3 className="font-semibold text-sm uppercase tracking-widest text-white mb-8 flex items-center gap-3">
                <CertIcon className="w-5 h-5 text-blue-400" /> Certifications
              </h3>

              <div className="space-y-3.5">
                {[
                  { name: 'AWS Cloud Practitioner Essentials', issuer: 'Amazon Web Services', year: '2026' },
                  { name: 'Fundamentals of DevOps on AWS', issuer: 'Simplilearn', year: '2026' },
                  { name: 'Linux Unhatched Certification', issuer: 'Cisco Networking Academy', year: '2026' },
                  { name: 'MERN Stack Developer Internship', issuer: 'EY GDS & AICTE', year: '2025' },
                  { name: 'Getting Started with AI', issuer: 'IBM', year: '2026' },
                ].map((cert) => (
                  <div key={cert.name} className="flex items-center gap-4 bg-white/[0.01] border border-white/5 hover:border-white/15 p-4 rounded-xl transition-all duration-300">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-blue-400">
                      <CertIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-0.5">{cert.name}</h4>
                      <span className="text-[10px] text-white/50">{cert.issuer} &bull; {cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 5: Inquire / Contact */}
        <section id="contact" className="py-24 border-t border-white/5">
          <div className="bg-white/[0.01] border border-white/5 rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div className="max-w-xl text-left">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                <span className="text-[10px] tracking-widest text-yellow-400 font-bold uppercase">Let's Collaborate</span>
              </div>
              <h2 className="font-podium text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-white mb-6">
                Get In Touch
              </h2>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                I am seeking full-time software engineering roles, developer internships, or technical collaborations. Drop me a line and let's construct something durable.
              </p>
            </div>

            {/* Social channels grid */}
            <div className="flex flex-col gap-3 w-full md:w-auto max-w-sm">
              <a
                href="mailto:vishvasaimon@gmail.com"
                className="group flex items-center justify-between gap-6 bg-white/5 border border-white/5 hover:border-white/15 px-6 py-4 rounded-xl transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-white/70" />
                  <div className="flex flex-col items-start">
                    <span className="text-[9px] uppercase tracking-wider text-white/50 font-bold">Email Address</span>
                    <span className="text-xs text-white font-medium">vishvasaimon@gmail.com</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://linkedin.com/in/vishvakanna"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-6 bg-white/5 border border-white/5 hover:border-white/15 px-6 py-4 rounded-xl transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-white/70"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[9px] uppercase tracking-wider text-white/50 font-bold">LinkedIn Portal</span>
                    <span className="text-xs text-white font-medium">linkedin.com/in/vishvakanna</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://github.com/vishva-ux"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-6 bg-white/5 border border-white/5 hover:border-white/15 px-6 py-4 rounded-xl transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-white/70"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[9px] uppercase tracking-wider text-white/50 font-bold">GitHub Portal</span>
                    <span className="text-xs text-white font-medium">github.com/vishva-ux</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer info */}
        <footer className="py-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 mt-12">
          <span className="text-[10px] tracking-widest text-white/50 uppercase">
            &copy; 2026 R. VISHVA KANNA. All rights reserved.
          </span>
          <div className="flex gap-4">
            <a href="https://github.com/vishva-ux" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
            <a href="https://linkedin.com/in/vishvakanna" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default App;
