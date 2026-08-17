import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-20 px-8 max-w-4xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="prose prose-slate max-w-none prose-h2:text-brand-obsidian prose-h2:mt-12 prose-a:text-brand-green"
      >
        <h1 className="text-3xl md:text-5xl font-black text-brand-obsidian mb-8">Privacy Policy</h1>
        <p className="text-slate-500 text-lg mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-bold text-brand-obsidian mt-8 mb-4">1. Introduction</h2>
        <p className="text-slate-600 mb-6">
          Beach Health ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or communicate with us, including via SMS text messaging.
        </p>

        <h2 className="text-2xl font-bold text-brand-obsidian mt-8 mb-4">2. SMS Communications & Consent</h2>
        <p className="text-slate-600 mb-6">
          If you opt-in to receive SMS messages from us, you agree to the following terms regarding our text messaging program:
        </p>
        <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
          <li><strong>Consent:</strong> By providing your mobile number, you are consenting to receive SMS messages from Beach Health.</li>
          <li><strong>Data Sharing:</strong> Your personal information, including your mobile number, will <strong>not</strong> be shared with third parties for marketing or promotional purposes.</li>
          <li><strong>Message Frequency:</strong> The number of messages you receive per month/week varies based on your appointments and interactions. This includes recurring messages for appointment reminders and clinic updates.</li>
          <li><strong>Opt-Out:</strong> You may reply <strong>STOP</strong> (or other standard opt-out keywords) to cancel and opt-out of future messaging at any time.</li>
          <li><strong>Help:</strong> You may reply <strong>HELP</strong> for more information or assistance regarding our SMS program.</li>
          <li><strong>Rates:</strong> Standard message and data rates may apply depending on your mobile carrier plan.</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-obsidian mt-8 mb-4">3. Information Collection</h2>
        <p className="text-slate-600 mb-6">
          We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or otherwise contact us.
        </p>

        <h2 className="text-2xl font-bold text-brand-obsidian mt-8 mb-4">4. Contact Us</h2>
        <p className="text-slate-600 mb-6">
          If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:hello@beachhealth.com" className="text-brand-green hover:underline">hello@beachhealth.com</a>
        </p>
      </motion.div>
    </div>
  );
}
