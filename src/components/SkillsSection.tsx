import { motion } from "framer-motion";
import { Brain, MessageCircle, Zap } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Analytical thinking to break down complex problems into manageable solutions.",
      level: 90,
    },
    {
      icon: Zap,
      title: "Decision Making",
      description: "Quick and informed decisions based on careful evaluation of options.",
      level: 85,
    },
    {
      icon: MessageCircle,
      title: "Communication",
      description: "Clear and effective communication across diverse teams and contexts.",
      level: 95,
    },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">What I Bring</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            My <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{skill.description}</p>
              
              {/* Skill bar */}
              <div className="relative">
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.15 }}
                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                  />
                </div>
                <span className="absolute -top-6 right-0 text-xs text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
