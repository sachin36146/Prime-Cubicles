
import React from 'react';
import { PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-slate-900 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-4">Our Product Catalog</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">Explore our range of HPL, Compact Laminate, and Action TESA board based systems.</p>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300">
                <div className="h-64 overflow-hidden relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    {product.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{product.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8">
                    {product.description} Built to withstand high moisture and heavy usage in commercial toilets and office dividers.
                  </p>
                  <ul className="mb-8 space-y-2">
                    <li className="flex items-center text-sm text-slate-500"><i className="fas fa-check text-green-500 mr-2"></i> Anti-Bacterial Coating</li>
                    <li className="flex items-center text-sm text-slate-500"><i className="fas fa-check text-green-500 mr-2"></i> Fire Retardant Properties</li>
                    <li className="flex items-center text-sm text-slate-500"><i className="fas fa-check text-green-500 mr-2"></i> 50+ Color Options</li>
                  </ul>
                  <Link 
                    to="/contact" 
                    className="block text-center bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Assistant Hook */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="text-6xl text-blue-600"><i className="fas fa-robot"></i></div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Unsure which material is right?</h3>
            <p className="text-slate-600 mb-6">Our AI-powered consultant can help you decide based on your project location and traffic volume.</p>
            <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition">Try AI Assistant</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
