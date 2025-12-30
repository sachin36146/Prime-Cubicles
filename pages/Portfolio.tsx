
import React from 'react';
import { CASE_STUDIES } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="bg-slate-50">
      <div className="bg-slate-900 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-4">Case Studies & Portfolio</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">Success stories of how we solved complex partition challenges for our clients.</p>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {CASE_STUDIES.map((study) => (
              <div key={study.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col lg:flex-row">
                <div className="lg:w-2/5 h-80 lg:h-auto overflow-hidden">
                  <img src={study.image} alt={study.projectName} className="w-full h-full object-cover" />
                </div>
                <div className="lg:w-3/5 p-8 lg:p-12">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-extrabold text-slate-900 mb-2">{study.projectName}</h2>
                      <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                        {study.clientType}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2 flex items-center uppercase text-xs tracking-widest"><i className="fas fa-triangle-exclamation mr-2 text-red-500"></i> The Problem</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2 flex items-center uppercase text-xs tracking-widest"><i className="fas fa-lightbulb mr-2 text-yellow-500"></i> The Solution</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl mb-10 border border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-4 text-xs uppercase tracking-widest">Skills & Tools Applied</h4>
                    <div className="flex flex-wrap gap-3">
                      {study.tools.map((tool, i) => (
                        <span key={i} className="bg-white px-4 py-2 rounded-lg text-sm text-slate-700 shadow-sm border border-slate-200 font-medium">{tool}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-blue-600 rounded-2xl text-white">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">Final Result</h4>
                      <p className="font-bold text-lg">{study.result}</p>
                    </div>
                    <div className="text-4xl opacity-30"><i className="fas fa-chart-line"></i></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
