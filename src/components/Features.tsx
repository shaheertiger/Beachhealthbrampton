import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const features = [
  {
    title: "Restore Your Wellbeing",
    description: "We're here to support and empower you on your path to recovery or improvement, ensuring that your treatment plan is as individual as you are.",
    image: "/physio-2.jpg",
    reversed: false,
    imageStyle: "rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-xl rounded-br-xl"
  },
  {
    title: "Overcome Your Pain",
    description: "Pain can get in the way of life, that's why we offer full body treatments with expert guidance to achieve lasting relief and improved quality of life.",
    image: "/chiro-1.jpg",
    reversed: true,
    imageStyle: "rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-xl rounded-bl-xl"
  },
  {
    title: "Optimize Your Movement",
    description: "Unlock the potential for a life in full motion with personalized assessment and treatment plans to optimize function and performance.",
    image: "/chiro-2.jpg",
    reversed: false,
    imageStyle: "rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-xl rounded-br-xl"
  }
];

export default function Features() {
  return (
    <section className="py-24 px-8 relative overflow-hidden bg-bg-base text-slate-600">
      <div className="max-w-6xl mx-auto flex flex-col gap-32">
        
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={twMerge(
              "flex flex-col lg:flex-row items-center gap-16 relative",
              feature.reversed ? "lg:flex-row-reverse" : ""
            )}
          >
            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: feature.reversed ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2"
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
              className="w-full lg:w-1/2 flex flex-col gap-6"
            >
              {/* Green Divider Line */}
              <div className="w-16 h-1 bg-brand-green mb-2"></div>
              
              <h2 className="text-4xl md:text-5xl font-black text-brand-obsidian uppercase leading-[1.1] tracking-tight">
                {feature.title.split(' ').map((word, i) => (
                  <span key={i} className={word === "Your" ? "text-brand-green block my-1" : "block"}>
                    {word}
                  </span>
                ))}
              </h2>
              
              <p className="text-lg leading-relaxed text-slate-500 font-light max-w-lg mt-4">
                {feature.description}
              </p>
              
              
            </motion.div>

            {/* Connecting Animated SVG Curve */}
            {index < features.length - 1 && (
              <div className="hidden lg:block absolute w-full h-[128px] left-0 pointer-events-none -bottom-[128px] z-0">
                <svg width="100%" height="100%" viewBox="0 0 1000 128" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id={`grad-curve-${index}`} x1={!feature.reversed ? "0%" : "100%"} y1="0%" x2={!feature.reversed ? "100%" : "0%"} y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    d={!feature.reversed 
                      ? "M 250,0 C 250,80 750,48 750,128" 
                      : "M 750,0 C 750,80 250,48 250,128"
                    }
                    stroke={`url(#grad-curve-${index})`}
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="8 8"
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
