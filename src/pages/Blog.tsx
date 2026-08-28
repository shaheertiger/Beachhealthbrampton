import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { ChevronRight } from 'lucide-react';

export default function Blog() {
  const [filter, setFilter] = useState<'All' | 'Physiotherapy' | 'Chiropractic Care'>('All');

  const filteredBlogs = blogs.filter(blog => filter === 'All' || blog.category === filter);

  return (
    <div className="pt-32 pb-24 px-8 min-h-screen bg-bg-base">
      <div className="max-w-7xl mx-auto">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-1 bg-brand-green mx-auto mb-6"></div>
          <h1 className="text-4xl md:text-6xl font-black text-brand-obsidian uppercase tracking-tight mb-6">
            Health & <span className="text-brand-green">Wellness</span> Insights
          </h1>
          <p className="text-lg text-slate-500 font-light leading-relaxed">
            Stay informed with our latest articles on physiotherapy, chiropractic care, injury prevention, and tips for living a pain-free life.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['All', 'Physiotherapy', 'Chiropractic Care'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category as any)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-widest transition-all ${
                filter === category
                  ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20 border border-brand-green'
                  : 'bg-white text-slate-500 border border-slate-200 hover:border-brand-green/50 hover:text-brand-green shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-brand-green/10 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={blog.imageUrl} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-brand-green uppercase tracking-wider shadow-sm">
                  {blog.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-medium">
                  <span>{blog.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span>{blog.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-brand-obsidian leading-tight mb-4 group-hover:text-brand-green transition-colors">
                  <Link to={`/blog/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {blog.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${blog.slug}`}
                  className="flex items-center gap-2 text-brand-green font-bold text-sm uppercase tracking-widest mt-auto group/link"
                >
                  Read Article
                  <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No articles found in this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}
