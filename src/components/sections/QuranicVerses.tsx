import { motion } from 'framer-motion';
import { scrollAnimation, viewportSettings } from '../animations/scrollAnimations';

const WeddingVerses = () => {
  return (
    <motion.section
      className="py-16 bg-wedding-primary relative overflow-hidden"
      variants={scrollAnimation}
      initial="offscreen"
      whileInView="onscreen"
      viewport={viewportSettings}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={scrollAnimation}
          initial="offscreen"
          whileInView="onscreen"
          viewport={viewportSettings}
        >
          <motion.div 
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg"
            variants={scrollAnimation}
            initial="offscreen"
            whileInView="onscreen"
            viewport={viewportSettings}
          >
            <h3 className="text-xl font-semibold text-wedding-text mb-4">
              Provérbios 18:22
            </h3>
            <p className="text-wedding-text/80 leading-relaxed mb-4">
              "Quem acha uma esposa acha o bem, e alcança a benevolência do Senhor."
            </p>
            <p className="text-wedding-text/80 italic">
              - Santa Bíblia
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg"
            variants={scrollAnimation}
            initial="offscreen"
            whileInView="onscreen"
            viewport={viewportSettings}
          >
            <h3 className="text-xl font-semibold text-wedding-text mb-4">
              1 Coríntios 13:4-7
            </h3>
            <p className="text-wedding-text/80 leading-relaxed mb-4">
              "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor. O amor não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo espera, tudo suporta."
            </p>
            <p className="text-wedding-text/80 italic">
              - Santa Bíblia
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WeddingVerses;