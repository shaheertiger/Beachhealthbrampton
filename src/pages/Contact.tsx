import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-28 pb-16 bg-bg-base min-h-screen">

      {/* Page Header */}
      <div className="w-full max-w-4xl mx-auto px-4 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-brand-obsidian mb-5 leading-tight tracking-tight">
            Initiate <span className="text-brand-green">Recovery.</span>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto text-base font-light leading-relaxed">
            Ready to start your journey? Reach out to our Brampton clinic to book a comprehensive biomechanical assessment.
          </p>
        </motion.div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 flex flex-col gap-6">

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm"
        >
          <h3 className="text-xl font-bold text-brand-obsidian uppercase tracking-wide mb-6">
            Direct Inquiry
          </h3>
          <form className="flex flex-col gap-5">
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
                className="bg-slate-50 border border-slate-200 px-5 py-3 rounded-xl outline-none focus:border-brand-green text-brand-obsidian placeholder:text-slate-400 text-sm resize-none"
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
              className="bg-brand-obsidian text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-brand-green transition-colors"
            >
              Transmit Message
            </button>
          </form>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm"
        >
          <h3 className="text-xl font-bold text-brand-obsidian uppercase tracking-wide mb-6">
            Coordinates
          </h3>
          <div className="flex flex-col gap-5">
            {[
              { Icon: MapPin, label: 'Headquarters', value: '123 Health Ave, Brampton, ON' },
              { Icon: Phone, label: 'Direct Line', value: '(905) 555-0123' },
              { Icon: Mail, label: 'Electronic Mail', value: 'hello@beachhealth.com' },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-brand-green" />
                </div>
                <div>
                  <p className="font-bold text-sm text-brand-obsidian">{label}</p>
                  <p className="text-slate-500 text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Priority Booking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm text-center"
        >
          <h3 className="text-xl font-bold text-brand-obsidian uppercase tracking-wide mb-2">
            Priority Booking
          </h3>
          <p className="text-slate-500 text-sm mb-6">Skip the queue. Secure your assessment online instantly.</p>
          <button className="w-full border-2 border-brand-obsidian text-brand-obsidian py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-brand-obsidian hover:text-white transition-colors">
            Access Booking Portal
          </button>
        </motion.div>

      </div>
    </div>
  );
}
