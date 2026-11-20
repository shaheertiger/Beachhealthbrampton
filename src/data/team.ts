export type TeamMember = {
  name: string;
  role: string;
  image: string;
  imageClassName?: string;
  bio: string;
};

export const teamMembers: TeamMember[] = [
  { 
    name: 'Shreya Parekh', 
    role: 'Physiotherapist', 
    image: '/shreyakumari-parekh.jpeg',
    bio: `Shreya Parekh is a Registered Physiotherapist. she is passionate about providing thoughtful, evidence-informed care that helps patients restore movement, build strength, manage pain, and return to the activities that matter most to them. Shreya has a broad clinical interest in musculoskeletal rehabilitation, chronic pain management, neurological rehabilitation, and post-surgical recovery.

Her approach to care is individualized, compassionate, and goal-oriented. Shreya believes that effective physiotherapy begins with listening. She takes the time to understand each patient’s concerns, lifestyle, challenges, and personal goals, while ensuring they have a clear understanding of their condition and treatment plan. She works collaboratively with her patients to develop treatment strategies that are tailored to their specific needs and designed to support meaningful, lasting progress.

For Shreya, physiotherapy is about more than treating an injury—it is about helping people get back to living their lives with greater comfort, confidence, and freedom of movement.

Outside the clinic, Shreya enjoys travelling, exploring art, and spending time socializing with friends, family, and the people around her. Her genuine empathy, patience, and commitment to her patients are reflected in the personalized care she provides to every individual she works with.` 
  },
  { 
    name: 'Guramritpal (GP) Aujla', 
    role: 'Chiropractor', 
    image: '/dr-aujla.jpeg', 
    bio: `Dr. Aujla is a chiropractor and a proud graduate of D’Youville University in Buffalo, NY. He is well-versed in a variety of chiropractic treatment techniques, including several forms of spinal and extremity adjustments, Active Release Techniques (ART), personalized exercise and rehabilitation programs, and therapeutic modalities such as shockwave therapy, ultrasound, and cold laser therapy. Dr. Aujla treats a wide range of conditions, from sciatica and migraines to sports injuries, musculoskeletal pain, and everything in between. His approach focuses on individualized, evidence-informed care tailored to each patient’s specific needs and goals.

When he is not in the clinic treating patients, Dr. Aujla can usually be found on the basketball court, in the gym, at the beach, or spending time with friends and family. He looks up to his father, as well as role models like Chris Bumstead and the late Kobe Bryant, whose drive and commitment to excellence inspire him to bring the same energy and dedication to every patient he sees.` 
  },
  { 
    name: 'Jaypreet Sahota', 
    role: 'Physiotherapist', 
    image: '/jaypreet-sahota.jpg', 
    bio: `Jaypreet has spent over 8 years helping people recover from injuries, manage chronic pain, and get back to the things that matter most to them, whether that's playing with their kids, returning to the field, or simply moving through a workday without discomfort.

She takes time to understand not just your injury, but your life - your goals, your schedule, and what is making recovery harder than it needs to be. From there, she build a plan that's realistic, evidence-based, and built around you.

She offers one-on-one sessions, so every appointment focuses entirely on your progress.` 
  },
];
