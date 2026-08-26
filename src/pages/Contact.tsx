import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-28 pb-16 bg-bg-base min-h-screen">

      {/* Page Header */}
      <div className="w-full max-w-6xl mx-auto px-4 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-brand-obsidian mb-5 leading-tight tracking-tight">
            How can we help you?
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto text-base font-light leading-relaxed">
            Please fill out the form and our team will contact you as soon as possible.
          </p>
        </motion.div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left Side: Contact Details & Map */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          {/* Phone Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-brand-obsidian mb-2">Request Appointment</h3>
              <p className="text-slate-600 text-lg">905-595-3480</p>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-brand-green text-white flex items-center justify-center flex-shrink-0">
              <Phone size={28} />
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-brand-obsidian mb-2">Email Us</h3>
              <p className="text-slate-600 text-lg">brampton@bpwi.ca</p>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-brand-green text-white flex items-center justify-center flex-shrink-0 relative">
              <Mail size={28} />
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-3xl p-2 border border-slate-200 shadow-sm overflow-hidden h-80">
            <iframe 
              src="https://maps.google.com/maps?q=155%20Clark%20Blvd,%20Brampton,%20ON%20L6T%204G6&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '1.5rem' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm"
        >
          <form className="flex flex-col gap-5 h-full justify-between">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="bg-slate-50 border border-slate-200 px-5 py-3 rounded-xl outline-none focus:border-brand-green text-brand-obsidian placeholder:text-slate-400 text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="bg-slate-50 border border-slate-200 px-5 py-3 rounded-xl outline-none focus:border-brand-green text-brand-obsidian placeholder:text-slate-400 text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number (For SMS)</label>
              <input
                type="tel"
                placeholder="(905) 555-0199"
                className="bg-slate-50 border border-slate-200 px-5 py-3 rounded-xl outline-none focus:border-brand-green text-brand-obsidian placeholder:text-slate-400 text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                className="bg-slate-50 border border-slate-200 px-5 py-3 rounded-xl outline-none focus:border-brand-green text-brand-obsidian placeholder:text-slate-400 text-sm resize-none flex-grow"
              />
            </div>
            
            <div className="flex flex-col gap-2 mt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 w-4 h-4 text-brand-green bg-slate-50 border-slate-300 rounded focus:ring-brand-green" required />
                <span className="text-xs text-slate-500 leading-relaxed">
                  By providing my phone number, I consent to receive SMS text messages from Beach Health. I understand that my personal info will not be shared with third parties for marketing purposes, message frequency varies, and I can reply STOP to opt-out or HELP for more info. Message & data rates may apply. <a href="/privacy-policy" className="text-brand-green hover:underline">Read Privacy Policy</a>.
                </span>
              </label>
            </div>

            <button
              type="button"
              className="mt-2 bg-brand-obsidian text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-brand-green transition-colors"
            >
              Send
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
