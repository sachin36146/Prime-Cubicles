
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 md:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=1920" 
            alt="Corporate Office Architecture" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tighter">
            Elevate Your <span className="text-blue-400">Commercial Space</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Premium partition solutions engineered with genuine Action TESA boards and SS304 hardware. We deliver durability that looks like art.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-extrabold hover:bg-blue-700 transition transform hover:scale-105 shadow-xl shadow-blue-900/40"
            >
              Get Free Quote <i className="fas fa-arrow-right ml-2"></i>
            </Link>
            <Link 
              to="/services" 
              className="bg-transparent border-2 border-slate-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-slate-800 transition"
            >
              Our Solutions
            </Link>
          </div>
          
          <div className="mt-20 flex flex-wrap justify-center gap-10 opacity-70">
             <div className="flex items-center text-white font-bold"><i className="fas fa-certificate mr-2 text-yellow-400"></i> ISO 9001:2015</div>
             <div className="flex items-center text-white font-bold"><i className="fas fa-shield-halved mr-2 text-green-400"></i> 10-Year Warranty</div>
             <div className="flex items-center text-white font-bold"><i className="fas fa-truck-fast mr-2 text-blue-400"></i> Pan-India Delivery</div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Built for High Traffic</h2>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Our partition systems are designed for extreme longevity in environments that never sleep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 text-2xl group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg shadow-blue-200">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <Link to="/services" className="text-blue-600 font-extrabold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                  Specifications <i className="fas fa-arrow-right ml-2 text-xs"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced Visual Context */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
              {/* Detailed image of material/workmanship */}
              <img 
                src="https://images.unsplash.com/photo-1558442086-8ea19a79cd4d?auto=format&fit=crop&q=80&w=1000" 
                alt="Architectural Hardware Detail" 
                className="rounded-[3rem] shadow-2xl z-10 relative border-4 border-white"
              />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 px-8 py-6 bg-white rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100">
                <div className="text-blue-600 font-black text-3xl">100%</div>
                <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Action Tesa Certified</div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">The Prime Standard</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Engineering Integrity <br /> in Every Inch.
              </h2>
              <div className="space-y-8">
                {[
                  { title: "Indestructible Hardware", desc: "Marine-grade SS304 fixtures that resist corrosion and frequent sanitize cleaning.", icon: "fa-shield-halved" },
                  { title: "Structural Precision", desc: "Proprietary joint systems that eliminate rattling and ensure a solid feel.", icon: "fa-drafting-compass" },
                  { title: "Custom Aesthetics", desc: "Over 50+ laminate finishes to match your corporate brand identity.", icon: "fa-palette" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-md border border-slate-100">
                      <i className={`fas ${item.icon} text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xl mb-2">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link to="/about" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-slate-800 transition shadow-lg shadow-slate-200">
                  Read Our Full Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Ready to define your space?</h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">Get a professional consultation and quote tailored to your architectural floor plan.</p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 px-12 py-5 rounded-full font-black text-2xl hover:bg-slate-100 transition shadow-2xl inline-flex items-center group"
          >
            Start Your Project <i className="fas fa-chevron-right ml-4 group-hover:translate-x-2 transition-transform"></i>
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full"></div>
           <div className="absolute bottom-10 right-10 w-96 h-96 border-8 border-white rounded-full"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
