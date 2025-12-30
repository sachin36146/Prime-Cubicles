
import React from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-slate-900 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-4">Professional Partition Services</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">Expert design, supply, and end-to-end installation for all commercial needs.</p>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SERVICES.map((service, idx) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
              >
                <div className="md:w-1/2">
                  <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                    Expert Solutions
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {service.description} We specialize in {service.title} installations that comply with international safety and hygiene standards. Our team works closely with architects to ensure seamless integration.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-slate-800 mb-3">Best Used In:</h4>
                    <p className="text-slate-600 flex items-center">
                      <i className="fas fa-location-dot text-blue-500 mr-2"></i> {service.useCase}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold text-slate-800 mb-3">SEO Keywords & Search Intent:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.seoKeywords.map((kw, i) => (
                        <span key={i} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded">#{kw.replace(/\s+/g, '')}</span>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact" className="inline-flex items-center text-blue-600 font-bold hover:underline">
                    Inquire about {service.title} <i className="fas fa-arrow-right ml-2 text-sm"></i>
                  </Link>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src={`https://picsum.photos/seed/${service.id}/800/600`} 
                    alt={service.title} 
                    className="rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-500" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Linking / Secondary CTA */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Need a custom partition material comparison?</h3>
          <p className="text-slate-600 mb-8">
            Check out our <Link to="/blog" className="text-blue-600 font-bold underline">HPL vs Compact Laminate guide</Link> to make the right choice for your specific project environment.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
