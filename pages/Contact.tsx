
import React, { useState } from 'react';
import { getAIQuoteSuggestion } from '../services/geminiService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Washroom Partition',
    requirements: ''
  });
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // In a real app, you'd send this to your CRM/Backend
    console.log("Submitting lead:", formData);
    
    // Using Gemini to provide an immediate "AI Consultant" response
    const suggestion = await getAIQuoteSuggestion(formData.requirements || `New ${formData.projectType} inquiry`);
    setAiResponse(suggestion);
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-slate-900 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-4">Contact Us</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">Get a personalized quote or consultation for your project.</p>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get In Touch</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl shrink-0">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Phone</h4>
                    <p className="text-slate-600">+91 98765 43210</p>
                    <p className="text-slate-500 text-sm">Mon-Sat, 9AM-7PM</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-xl shrink-0">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">WhatsApp</h4>
                    <p className="text-slate-600">+91 98765 43210</p>
                    <p className="text-slate-500 text-sm">Instant Support</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl shrink-0">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <p className="text-slate-600">hello@primecubicles.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-200 text-slate-600 rounded-xl flex items-center justify-center text-xl shrink-0">
                    <i className="fas fa-location-dot"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Office</h4>
                    <p className="text-slate-600">Industrial Area Phase 2, Bangalore, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-slate-900 rounded-3xl text-white">
                <h4 className="text-xl font-bold mb-4">Why Prime Cubicles?</h4>
                <ul className="space-y-3 opacity-80 text-sm">
                  <li><i className="fas fa-check text-blue-400 mr-2"></i> Free Site Measurement</li>
                  <li><i className="fas fa-check text-blue-400 mr-2"></i> 24-Hour Quote Response</li>
                  <li><i className="fas fa-check text-blue-400 mr-2"></i> Authorized Action TESA Boards</li>
                  <li><i className="fas fa-check text-blue-400 mr-2"></i> SS304 Grade Hardware</li>
                </ul>
              </div>
            </div>

            <div className="lg:w-2/3">
              {!submitted ? (
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">Request a Professional Quote</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="John Doe" 
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Email Address</label>
                        <input 
                          required
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="john@company.com" 
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition" 
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+91 00000 00000" 
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Project Type</label>
                        <select 
                          value={formData.projectType}
                          onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
                        >
                          <option>Toilet Partition</option>
                          <option>Office Divider</option>
                          <option>Urinal Screen</option>
                          <option>Modular Workstation</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Project Details / Requirements</label>
                      <textarea 
                        rows={4} 
                        value={formData.requirements}
                        onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                        placeholder="Tell us about the space dimensions, number of cubicles, and preferred material..." 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full bg-blue-600 text-white py-4 rounded-xl font-extrabold text-lg hover:bg-blue-700 transition shadow-lg flex items-center justify-center"
                    >
                      {loading ? <i className="fas fa-circle-notch fa-spin mr-2"></i> : null}
                      {loading ? 'Processing...' : 'Send Inquiry'}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 animate-fade-in">
                   <div className="text-center mb-8">
                     <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                       <i className="fas fa-check-circle"></i>
                     </div>
                     <h3 className="text-3xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
                     <p className="text-slate-600">Our senior engineer will contact you shortly.</p>
                   </div>
                   
                   {aiResponse && (
                     <div className="mt-8 p-8 bg-blue-50 border border-blue-100 rounded-2xl relative">
                        <div className="absolute -top-3 left-6 bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full font-bold tracking-widest uppercase shadow-lg">
                          AI Assistant Insight
                        </div>
                        <p className="text-slate-800 leading-relaxed font-medium">
                          {aiResponse}
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-blue-600 text-sm font-bold">
                          <i className="fas fa-sparkles"></i> Based on your specific project requirements.
                        </div>
                     </div>
                   )}

                   <button 
                     onClick={() => {setSubmitted(false); setAiResponse(null);}} 
                     className="mt-10 text-slate-500 font-bold hover:text-blue-600 transition"
                    >
                     Send another inquiry
                   </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
