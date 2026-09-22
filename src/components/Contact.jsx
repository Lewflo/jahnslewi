import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitted: false, loading: false });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, submitted: false });
    
    // Simulate sending message
    setTimeout(() => {
      setStatus({ loading: false, submitted: true });
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                Get In Touch
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
                Let's create something exceptional.
              </h2>
              <p className="mt-3 text-zinc-600 font-normal leading-relaxed">
                Whether you have an upcoming project, a freelance inquiry, or simply want to connect, my inbox is always open.
              </p>
            </div>

            {/* Email pill with copy button */}
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-white border border-zinc-200 shrink-0">
                  <Mail className="w-4 h-4 text-zinc-900" />
                </div>
                <div className="truncate">
                  <p className="text-xs text-zinc-400 font-medium">Direct Email</p>
                  <p className="text-sm font-semibold text-zinc-900 truncate">{personal.email}</p>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-zinc-200 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 transition-colors shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Social channels */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
                Social Profiles
              </p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
                <a
                  href={personal.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
                >
                  <TwitterIcon className="w-4 h-4" />
                  Twitter
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-3xl bg-zinc-50 border border-zinc-200">
              <h3 className="text-lg font-bold text-zinc-950 mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-zinc-500 mb-6">
                Fill out the form below and I will get back to you as soon as possible.
              </p>

              {status.submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 mx-auto flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-base">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-700">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus({ submitted: false, loading: false })}
                    className="mt-3 text-xs underline font-semibold text-emerald-900"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-zinc-300 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-zinc-300 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your project, timeline, or idea..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-zinc-300 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status.loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800 disabled:opacity-50 transition-colors shadow-xs"
                  >
                    {status.loading ? (
                      'Sending...'
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
