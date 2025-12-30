
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="bg-slate-50">
      <div className="bg-slate-900 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-4">Partition Insights & Guides</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">Staying updated with the latest trends in commercial interior design and partition technology.</p>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="h-56 overflow-hidden">
                  <img src={`https://picsum.photos/seed/${post.id}/800/600`} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex-grow">
                  <div className="flex items-center text-xs font-bold text-blue-600 uppercase mb-4 tracking-widest">
                    <span>{post.category}</span>
                    <span className="mx-2 text-slate-300">•</span>
                    <span className="text-slate-500">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug hover:text-blue-600 transition cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex justify-between items-center border-t border-slate-100 pt-6">
                    <span className="text-xs text-slate-400 font-medium"><i className="far fa-clock mr-1"></i> {post.readTime} Read</span>
                    <button className="text-blue-600 font-bold text-sm hover:translate-x-1 transition-transform">
                      Read Article <i className="fas fa-chevron-right ml-1"></i>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100"><i className="fas fa-chevron-left text-xs"></i></button>
              <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</button>
              <button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100">2</button>
              <button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100"><i className="fas fa-chevron-right text-xs"></i></button>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
