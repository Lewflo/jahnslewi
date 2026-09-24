import { useState } from "react";
import Navbar from "./Navbar";

export default function App() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jahnslewi.jl@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    const subject = encodeURIComponent(`Message from ${formData.name} via Portfolio`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:jahnslewi.jl@gmail.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  const coreFocusAreas = [
    {
      title: "Linux System & Network Administration",
      desc: "Hands-on experience configuring networks, administering Linux Server environments, managing operational security, and maintaining high system availability.",
      tags: ["Linux Server", "Networking", "System Hardening", "Shell Scripting"],
    },
    {
      title: "CI/CD, Containerization & Automation",
      desc: "Streamlining deployment workflows, packaging applications with Docker containers, and reducing repetitive operational tasks through automation scripts.",
      tags: ["Docker", "CI/CD Pipelines", "Bash", "Python Automation"],
    },
    {
      title: "Cloud Engineering (AWS & Azure)",
      desc: "Designing and maintaining cloud environments with a focus on cost optimization, security boundaries, and resilient multi-service architectures.",
      tags: ["Amazon Web Services", "Microsoft Azure", "Cloud Networking"],
    },
    {
      title: "DevOps & Infrastructure as Code",
      desc: "Bridging software development and systems operations through declarative infrastructure, reproducible setups, and reliability engineering.",
      tags: ["IaC", "Configuration Management", "Observability", "Reliability"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1A1A1A] antialiased">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="about" className="py-20 md:py-28 border-b border-[#E5E7EB]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-[#4B5563] bg-slate-100 border border-[#E5E7EB] mb-6">
              <span>Undergraduate at BINUS University</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] leading-[1.15] mb-6">
              Building reliable systems, cloud architecture, and automated infrastructure.
            </h1>

            <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl leading-relaxed mb-8">
              Hi there, I'm Lewi. A 3rd-year undergraduate student at BINUS University with a strong foundational
              background in Network and System Administration, currently expanding deep into IT
              Infrastructure, Cloud Computing (AWS and Azure), and DevOps practices.
            </p>

            {/* CTAs with explicit destinations */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:jahnslewi.jl@gmail.com"
                className="min-h-[44px] inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#0F172A] hover:bg-slate-800 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
              >
                Send Email
              </a>

              <a
                href="https://www.linkedin.com/in/jahnslewi/"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-[#1A1A1A] bg-white border border-[#E5E7EB] hover:bg-slate-50 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
              >
                LinkedIn Profile
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="min-h-[44px] inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-[#4B5563] hover:text-[#1A1A1A] bg-transparent hover:bg-slate-100/60 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                title="Copy email address to clipboard"
              >
                {copied ? "Copied to clipboard!" : "Copy: jahnslewi.jl@gmail.com"}
              </button>
            </div>
          </div>
        </section>

        {/* Core Focus Section */}
        <section id="focus" className="py-20 border-b border-[#E5E7EB]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-[#1A1A1A] mb-2">
                Core Technical Focus
              </h2>
              <p className="text-sm text-[#4B5563]">
                Practical domains where I operate, automate, and architect reliable systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreFocusAreas.map((area) => (
                <div
                  key={area.title}
                  className="bg-white border border-[#E5E7EB] rounded-lg p-6 flex flex-col justify-between hover:border-slate-400 transition-colors"
                >
                  <div>
                    <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">
                      {area.title}
                    </h3>
                    <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                      {area.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-0.5 rounded bg-slate-100 text-[#4B5563] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Background & Competitions Section */}
        <section id="background" className="py-20 border-b border-[#E5E7EB]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold tracking-tight text-[#1A1A1A] mb-6">
              Background & Recognitions
            </h2>

            <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">
                  Academic Journey & Competition Experience
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  Throughout my academic journey at BINUS University, I have had the privilege to compete
                  and achieve recognitions in several prestigious national technology competitions, both
                  individually and in collaborative teams. These experiences strengthened my practical
                  problem-solving abilities, teamwork under pressure, and drive to architect resilient
                  technical solutions.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-sm font-semibold text-[#1A1A1A] mb-1">
                  Current Readiness
                </h4>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  Always curious, open to learning, and eager to collaborate on impactful tech projects
                  or internship opportunities in DevOps, Cloud Engineering, and Systems Administration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-[#1A1A1A] mb-2">
                Connect & Collaborate
              </h2>
              <p className="text-sm text-[#4B5563]">
                Feel free to reach out for internship opportunities, technical discussions, or collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-[#1A1A1A] uppercase tracking-wider mb-2">
                    Direct Email
                  </h3>
                  <a
                    href="mailto:jahnslewi.jl@gmail.com"
                    className="text-base font-medium text-[#1A1A1A] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded"
                  >
                    jahnslewi.jl@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#1A1A1A] uppercase tracking-wider mb-2">
                    LinkedIn
                  </h3>
                  <a
                    href="https://www.linkedin.com/in/jahnslewi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-[#1A1A1A] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded inline-flex items-center gap-1"
                  >
                    linkedin.com/in/jahnslewi
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#1A1A1A] uppercase tracking-wider mb-2">
                    Location
                  </h3>
                  <p className="text-sm text-[#4B5563]">
                    Jakarta, Indonesia (BINUS University)
                  </p>
                </div>
              </div>

              {/* Message Composer Form */}
              <div className="bg-white border border-[#E5E7EB] rounded-lg p-6">
                <h3 className="text-base font-semibold text-[#1A1A1A] mb-4">
                  Send a Quick Note
                </h3>

                {formSubmitted ? (
                  <div className="py-4 text-center">
                    <p className="text-sm font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 rounded p-3 mb-4">
                      Thank you! Your email client has been prepared with your message.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: "", email: "", message: "" });
                      }}
                      className="text-xs font-semibold text-[#1A1A1A] underline hover:text-slate-600"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="sender-name" className="block text-xs font-medium text-[#4B5563] mb-1">
                        Your Name
                      </label>
                      <input
                        id="sender-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#E5E7EB] rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                      />
                    </div>

                    <div>
                      <label htmlFor="sender-email" className="block text-xs font-medium text-[#4B5563] mb-1">
                        Your Email
                      </label>
                      <input
                        id="sender-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#E5E7EB] rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                      />
                    </div>

                    <div>
                      <label htmlFor="sender-message" className="block text-xs font-medium text-[#4B5563] mb-1">
                        Message
                      </label>
                      <textarea
                        id="sender-message"
                        required
                        rows="3"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your message here..."
                        className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-[#E5E7EB] rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full min-h-[44px] py-2.5 px-4 text-sm font-semibold text-white bg-[#0F172A] hover:bg-slate-800 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                    >
                      Prepare Email Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E5E7EB] py-8 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4B5563]">
          <p>© {new Date().getFullYear()} Jahns Lewi. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-[#1A1A1A] transition-colors">
              Back to top
            </a>
            <a
              href="https://www.linkedin.com/in/jahnslewi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1A1A1A] transition-colors"
            >
              LinkedIn
            </a>
            <a href="mailto:jahnslewi.jl@gmail.com" className="hover:text-[#1A1A1A] transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
