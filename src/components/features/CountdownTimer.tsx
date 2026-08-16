import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../../config/wedding-config';
import { activeTheme } from '../../config/theme-config';
import { scrollAnimation, viewportSettings } from '../animations/scrollAnimations';
import { PhotoIcon } from '@heroicons/react/24/outline';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(weddingConfig.event.akad.date) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
        setIsExpired(false);
      } else {
        setIsExpired(true);
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'dias', value: timeLeft.days },
    { label: 'horas', value: timeLeft.hours },
    { label: 'minutos', value: timeLeft.minutes },
    { label: 'segundos', value: timeLeft.seconds },
  ];

  if (!weddingConfig.specialFeatures.countdownTimer) {
    return null;
  }

  return (
    <motion.div
      className="relative pt-8 pb-16"
      style={{ backgroundColor: activeTheme.background }}
      variants={scrollAnimation}
      initial="offscreen"
      whileInView="onscreen"
      viewport={viewportSettings}
    >
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: 'url("wedding-invitation/images/pattern/subtle-pattern.webp")',
        backgroundRepeat: 'repeat' 
      }} />
      
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-center text-2xl md:text-3xl font-serif mb-8"
          style={{ color: activeTheme.text }}
        >
          {isExpired ? 'O nosso dia chegou!' : 'Contagem Regressiva para o Nosso Grande Dia'}
        </motion.h2>

        {isExpired ? (
          /* Botão visível quando o tempo acaba */
          <div className="flex justify-center">
            <motion.a
              href="https://drive.google.com/drive/folders/14XXjR5zkUnV5FQLW6_P4RBl8sXOQZMOh?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-white rounded-xl shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer z-10"
              style={{ cursor: 'pointer' }}
            >
              <PhotoIcon className="w-6 h-6" style={{ color: activeTheme.primary }} />
              <span className="font-semibold text-lg" style={{ color: activeTheme.text }}>
                Ver Fotos/Videos e Momentos
              </span>
            </motion.a>
          </div>
        ) : (

          /* Grid do contador visível antes de acabar */
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {timeUnits.map(({ label, value }, index) => (
              <motion.div
                key={label}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
                     style={{ borderColor: activeTheme.accent, borderWidth: '1px' }}>
                  <div className="text-4xl md:text-5xl font-bold mb-2" 
                       style={{ color: activeTheme.primary }}>
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm md:text-base capitalize" 
                       style={{ color: activeTheme.text }}>
                    {label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}