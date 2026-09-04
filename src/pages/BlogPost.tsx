import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { blogs } from '../data/blogs';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const blog = blogs.find(b => b.slug === slug);

  // Redirect to blog listing if not found
  useEffect(() => {
    if (!blog) {
      navigate('/blog');
    }
  }, [blog, navigate]);

  if (!blog) return null;

  return (
    <div className="pt-24 pb-24 min-h-screen bg-bg-base">
      
      {/* Hero Image Section */}
      <div className="w-full h-[40vh] md:h-[60vh] relative">
        <img 
          src={blog.imageUrl} 
          alt={blog.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
        
        {/* Title Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-8">
          <div className="max-w-4xl mx-auto w-full">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-brand-green transition-colors font-bold uppercase tracking-widest text-xs mb-8 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full"
            >
              <ArrowLeft size={14} /> Back to Blog
            </Link>
            
            <div className="inline-block bg-brand-green text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              {blog.category}
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <User size={16} className="text-brand-green" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-brand-green" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-brand-green" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-8 pt-16">
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-none"
        >
          {blog.content.map((paragraph, index) => (
            <p key={index} className="text-slate-600 text-[17px] md:text-lg font-light leading-relaxed mb-8">
              {paragraph}
            </p>
          ))}
        </motion.article>

        {/* Call to Action Footer */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="bg-white rounded-3xl p-8 md:p-12 text-center border border-slate-100 shadow-xl shadow-brand-green/5">
            <h3 className="text-2xl font-black text-brand-obsidian uppercase tracking-tight mb-4">
              Ready to feel better?
            </h3>
            <p className="text-slate-500 mb-8 max-w-lg mx-auto">
              If you're dealing with pain or looking to optimize your movement, our expert team is here to help you get back to what you love.
            </p>
            <a 
              href="https://beachealthbr.janeapp.com/login"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-brand-green text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 hover:bg-[#0284c7] transition-all shadow-lg shadow-brand-green/30"
            >
              Book An Assessment
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}
