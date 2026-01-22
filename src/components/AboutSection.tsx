import { motion } from "framer-motion";
import { User, Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: User,
      title: "Who I Am",
      description: "A passionate 2nd year B.Tech student eager to learn and grow in the tech industry.",
    },
    {
      icon: Target,
      title: "My Goal",
      description: "To become a skilled engineer who creates meaningful solutions that impact lives.",
    },
    {
      icon: Lightbulb,
      title: "My Approach",
      description: "I believe in continuous learning, collaboration, and tackling challenges head-on.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">About Me</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Get to Know <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="gradient-border p-8 rounded-xl hover:bg-secondary/50 transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
