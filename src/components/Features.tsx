import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';

type Feature = {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  reversed: boolean;
  imageStyle: string;
  button?: { text: string; link: string };
  footerText?: string;
  renderTitleNormal?: boolean;
}

const features: Feature[] = [
  {
    title: "Physiotherapy & Chiropractic Care in Brampton",
    subtitle: "One coordinated team, under one roof.",
    description: "At Beachealth Brampton, our physiotherapists and chiropractors work together not in silos. We combine precise manual adjustments with advanced techniques like shockwave therapy, and we actually talk to each other about your care: sharing findings, coordinating treatment, and adapting as we see what's working.",
    image: "/physio-2.jpg",
    reversed: false,
    imageStyle: "rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-xl rounded-br-xl",
    button: { text: "Book Online", link: "https://beachealthbr.janeapp.com/login" },
    footerText: "Direct billing available · No referral needed · New patients welcome",
    renderTitleNormal: true
  },
  {
    title: "Overcome Your Pain",
    description: "If Neck pain, sciatica, headaches, or \"tech neck\" slowing you down and you want clear answers about what's happening and what to do about it. our physiotherapist can help!\n\nThey perform a thorough assessment and create a treatment plan focused on reducing your pain and restoring movement, so you can get back to what you were doing.",
    image: "/chiro-1.jpg",
    reversed: true,
    imageStyle: "rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-xl rounded-bl-xl",
    button: { text: "Book your first Physio visit", link: "https://beachealthbr.janeapp.com/login" }
  },
  {
    title: "Optimize Your Movement",
    description: "Whether you're recovering, training, or just want to move better, we build a personalized plan around you. And because comfort matters, we offer chiropractic adjusting style which is best for you. Manual adjustments use precise hands-on movements to free stuck joints and restore motion. Drop-table uses a gentle table \"drop\" to deliver targeted corrections with less force. Activator Methods® instrument adjusting is a low-force, handheld tool that's quiet, precise, and ideal if you prefer very gentle care.\n\nNot sure which is right for you? We'll figure it out together at your first visit.",
    image: "/chiro-2.jpg",
    reversed: false,
    imageStyle: "rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-xl rounded-br-xl",
    button: { text: "Book a chiropractic assessment", link: "https://beachealthbr.janeapp.com/login" }
  }
];

export default function Features() {
  return (
    <section className="py-24 px-8 relative overflow-hidden bg-bg-base text-slate-600">
      <div className="max-w-6xl mx-auto flex flex-col gap-20 md:gap-32">
        
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={twMerge(
              "flex flex-col lg:flex-row items-center gap-10 md:gap-16 relative",
              feature.reversed ? "lg:flex-row-reverse" : ""
            )}
          >
            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: feature.reversed ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 relative z-10"
            >
              <div className="relative aspect-square md:aspect-[4/3] w-full p-4">
                {/* Asymmetric border radius masking */}
                <div className={twMerge("w-full h-full overflow-hidden shadow-xl border border-slate-100 bg-white", feature.imageStyle)}>
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                {/* Decorative subtle border glow matching the shape */}
                <div className={twMerge("absolute inset-0 border border-brand-green/30 pointer-events-none -z-10 translate-x-4 translate-y-4", feature.imageStyle)}></div>
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex flex-col gap-6 relative z-10"
            >
              {/* Green Divider Line */}
              <div className="w-16 h-1 bg-brand-green mb-2"></div>
              
              {feature.renderTitleNormal ? (
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-obsidian leading-[1.1] tracking-tight">
                  {feature.title}
                </h2>
              ) : (
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-obsidian uppercase leading-[1.1] tracking-tight break-words">
                  {feature.title.split(' ').map((word, i) => (
                    <span key={i} className={word === "Your" ? "text-brand-green block my-1" : "block"}>
                      {word}
                    </span>
                  ))}
                </h2>
              )}

              {feature.subtitle && (
                <h3 className="text-xl md:text-2xl font-medium text-brand-obsidian mt-2">
                  {feature.subtitle}
                </h3>
              )}
              
              <p className="text-lg leading-relaxed text-slate-500 font-light max-w-lg mt-4 whitespace-pre-line">
                {feature.description}
              </p>

              {feature.button && (
                <div className="mt-4 flex flex-col items-start gap-4">
                  <motion.a 
                    href={feature.button.link} 
                    target="_blank" 
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block text-center bg-brand-green text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-lg shadow-brand-green/20 transition-all border border-brand-green/50 w-full md:w-auto"
                  >
                    {feature.button.text}
                  </motion.a>
                  {feature.footerText && (
                    <span className="text-sm text-slate-500 font-medium max-w-sm">
                      {feature.footerText}
                    </span>
                  )}
                </div>
              )}
              
            </motion.div>

            {/* Connecting Animated SVG Curve */}
            {index < features.length - 1 && (
              <div className="hidden lg:block absolute w-full h-[350px] left-0 pointer-events-none -bottom-[239px] z-0">
                <svg width="100%" height="100%" viewBox="0 0 1000 350" preserveAspectRatio="none">
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    d={!feature.reversed 
                      ? "M 250,0 C 250,175 750,175 750,350" 
                      : "M 750,0 C 750,175 250,175 250,350"
                    }
                    stroke="#0ea5e9" /* 1px blue line */
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
        
      </div>
    </section>
  );
}
