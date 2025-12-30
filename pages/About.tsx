
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden text-slate-900">
      {/* 1. Immersive Header - Sets the professional tone */}
      <div className="relative bg-slate-900 py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
            alt="Modern Corporate Architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Established Excellence
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-none">
            Architecting <span className="text-blue-500">Privacy.</span><br />
            Ensuring <span className="text-slate-400">Durability.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Prime Cubicles represents the intersection of industrial-grade engineering and high-end commercial design.
          </p>
        </div>
      </div>

      {/* 2. Our Story - High-Quality Industrial Image */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">The Genesis</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Solving the Durability Crisis in Indian Commercial Spaces</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Our journey began with a single observation: high-traffic commercial washrooms and offices in India were plagued by substandard partitions that warped, rusted, and failed within months.
                </p>
                <p>
                  <strong>Prime Cubicles</strong> was founded to set a new benchmark. By integrating <strong>Action TESA's</strong> moisture-resistant board technology with <strong>Marine-grade SS304 hardware</strong>, we created a system that doesn't just look premium—it performs indefinitely.
                </p>
                <p>
                  Today, we are the preferred partner for architects who value the "set and forget" peace of mind that comes with precision engineering and factory-finish quality.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Architectural Engineering" 
                  className="rounded-3xl shadow-2xl z-10 relative border-[12px] border-slate-50 object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-blue-100 rounded-3xl -z-0"></div>
                <div className="absolute top-8 -left-8 bg-blue-600 text-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                  <div className="text-3xl font-black">10+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Years of Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Material Excellence */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Material Mastery</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We select only the components that can survive high-humidity and heavy-usage cycles.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1 relative">
                <div className="relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1553051021-9f94520a6cad?auto=format&fit=crop&q=80&w=1200" 
                    alt="Premium Partition Texture Detail" 
                    className="rounded-3xl shadow-xl transition-transform duration-500 group-hover:scale-105 h-[500px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent rounded-3xl"></div>
                </div>
             </div>
             <div className="order-1 md:order-2 space-y-8">
                {[
                  { title: "Action TESA High-Density Board", desc: "Advanced fiber-technology that resists swelling even when exposed to direct water contact.", icon: "fa-layer-group" },
                  { title: "SS304 Anti-Bacterial Hardware", desc: "Grade 304 stainless steel fixtures that inhibit pathogen growth and never lose their finish.", icon: "fa-shield-virus" },
                  { title: "Industrial Adhesion", desc: "Using high-temperature glues that prevent edge-banding from peeling over time.", icon: "fa-link" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-white text-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all"><i className={`fas ${item.icon} text-xl`}></i></div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 4. Ethics - Fixed Broken Images Here */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
            <div className="lg:w-1/2">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Commitment</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">The Ethics of Zero-Error Installation</h2>
              <div className="space-y-6">
                 {[
                   { title: "Authorized Authenticity", text: "We never cut corners. Every project comes with a warranty certificate and material authenticity proof from Action TESA." },
                   { title: "Time-Sensitive Execution", text: "We understand site dependencies. Our 48-hour rapid assembly ensures your facility opens on schedule." },
                   { title: "Lifelong Partnership", text: "A sale is just the beginning. We provide preventive maintenance audits for all our corporate clients." }
                 ].map((ethics, idx) => (
                   <div key={idx} className="p-6 bg-slate-50 rounded-2xl border-l-4 border-blue-600 hover:bg-slate-100 transition-colors shadow-sm">
                      <h5 className="font-bold text-slate-900 mb-2">{ethics.title}</h5>
                      <p className="text-slate-600 text-sm leading-relaxed">{ethics.text}</p>
                   </div>
                 ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" 
                  alt="Premium Washroom Installation" 
                  className="rounded-3xl shadow-lg w-full h-[400px] object-cover mt-12"
                />
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern Office Partitioning" 
                  className="rounded-3xl shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to define your space?</h2>
          <p className="text-xl text-slate-400 mb-12 font-light">
            Don't leave your commercial infrastructure to chance. Work with the experts in partition technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact" 
              className="px-12 py-4 bg-blue-600 text-white rounded-full font-extrabold text-lg shadow-2xl hover:bg-blue-700 transition transform hover:scale-105"
            >
              Get a Project Quote
            </Link>
            <Link 
              to="/portfolio" 
              className="px-12 py-4 border-2 border-slate-700 text-white rounded-full font-bold text-lg hover:border-blue-600 transition"
            >
              View Case Studies
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </section>
    </div>
  );
};

export default About;
