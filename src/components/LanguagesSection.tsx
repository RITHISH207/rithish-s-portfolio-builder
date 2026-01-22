import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const LanguagesSection = () => {
  const languages = [
    { name: "Tamil", level: "Native" },
    { name: "Telugu", level: "Fluent" },
    { name: "Malayalam", level: "Fluent" },
    { name: "Kannada", level: "Fluent" },
    { name: "English", level: "Fluent" },
  ];

  return (
    <section id="languages" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Multilingual</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Languages I <span className="text-gradient">Speak</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Fluent in 5 languages, enabling seamless communication across diverse cultures
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="px-8 py-6 bg-card rounded-2xl border border-border group-hover:border-primary/50 transition-all duration-300 text-center min-w-[160px]">
                <Globe className="w-6 h-6 text-primary mx-auto mb-3" />
                <h3 className="font-display text-lg font-semibold">{lang.name}</h3>
                <span className="text-sm text-muted-foreground">{lang.level}</span>
              </div>
              <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
