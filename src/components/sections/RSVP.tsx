import { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding-config';
import { activeTheme } from '@/config/theme-config';
import { 
  CheckCircleIcon, 
  XCircleIcon, 
  QuestionMarkCircleIcon, 
  UserIcon, 
  UsersIcon, 
  ChatBubbleBottomCenterTextIcon,
  PaperAirplaneIcon 
} from '@heroicons/react/24/outline';

interface RSVPProps {
  guestName?: string;
}

// Componente auxiliar para gerar a chuva de pétalas
const FlowerPetalsRain = () => {
  // Criamos um array fixo com 15 pétalas com posições, durações e atrasos aleatórios
  const petals = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 5 + 5, // Entre 5s e 10s de queda
    delay: Math.random() * 5,       // Atraso inicial para não caírem todas juntas
    size: Math.random() * 12 + 14,  // Tamanho entre 14px e 26px
    rotation: Math.random() * 360,  // Rotação inicial
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{
            top: '-10%',
            left: petal.left,
            rotate: petal.rotation,
            opacity: 0.8,
          }}
          animate={{
            top: '110%',
            rotate: petal.rotation + 360,
            x: [0, 30, -30, 20, 0], // Efeito de balanço lateral (vento suave)
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            width: `${petal.size}px`,
            height: `${petal.size * 0.6}px`,
            backgroundColor: '#ffb7c5', // Tom suave de pétala de rosa
            borderRadius: '50% 0 50% 50%',
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
};

export default function RSVP({ guestName }: RSVPProps) {
  const [formData, setFormData] = useState({
    name: guestName || '',
    attendance: '',
    numberOfGuests: 1,
    wishes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const attendanceMap: Record<string, string> = {
      Yes: 'Sim, estarei presente ✅',
      No: 'Lamento, não poderei comparecer ❌',
      Maybe: 'Talvez ❓'
    };

    const attendanceText = attendanceMap[formData.attendance] || formData.attendance;

    const message = `*Confirmação de Presença (RSVP)*%0A%0A` +
      `👤 *Nome:* ${formData.name}%0A` +
      `✨ *Presença:* ${attendanceText}%0A` +
      `👥 *Total de Convidados:* ${formData.numberOfGuests}%0A` +
      `💬 *Votos aos Noivos:* ${formData.wishes || 'Nenhuma mensagem deixada.'}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${weddingConfig.rsvp.whatsappNumber}&text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: activeTheme.background }}>
      
      {/* Chuva de Pétalas Caindo ao Fundo */}
      <FlowerPetalsRain />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-white/60 shadow-sm font-semibold text-gray-600 inline-block mb-3">
            Sua presença é essencial
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-4" style={{ color: activeTheme.text }}>
            RSVP
          </h2>
          <p className="text-gray-600 mb-1 text-lg">Mal podemos esperar para celebrar connosco!</p>
          <p className="text-gray-500 text-sm">Por favor, preencha o formulário abaixo para confirmar sua resposta.</p>
        </motion.div>

        {/* Cartão do Formulário */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white p-8 md:p-10 relative z-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Campo: Nome */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <UserIcon className="w-4 h-4 text-gray-400" />
                O seu Nome Completo
              </label>
              <input
                type="text"
                required
                placeholder="Digite o seu nome"
                className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none text-gray-800 shadow-sm"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Campo: Presença (Cards Interativos de Seleção) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vai estar presente no grande dia?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { value: 'Yes', label: 'Sim, estarei!', icon: CheckCircleIcon, color: 'text-emerald-600 border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50' },
                  { value: 'No', label: 'Não poderei', icon: XCircleIcon, color: 'text-rose-600 border-rose-200 bg-rose-50/50 hover:bg-rose-50' },
                  { value: 'Maybe', label: 'Talvez', icon: QuestionMarkCircleIcon, color: 'text-amber-600 border-amber-200 bg-amber-50/50 hover:bg-amber-50' },
                ].map((option) => {
                  const Icon = option.icon;
                  const isSelected = formData.attendance === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: option.value })}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all cursor-pointer ${
                        isSelected 
                          ? 'border-gray-900 bg-gray-900 text-white shadow-md scale-[1.02]' 
                          : `border-gray-200 bg-white text-gray-700 hover:border-gray-300`
                      }`}
                    >
                      <Icon className={`w-6 h-6 mb-1 ${isSelected ? 'text-white' : option.color.split(' ')[0]}`} />
                      <span className="text-xs font-medium text-center">{option.label}</span>
                    </button>
                  );
                })}
              </div>
              {/* Select oculto para validação nativa do HTML5 */}
              <select 
                required 
                value={formData.attendance} 
                onChange={() => {}} 
                tabIndex={-1} 
                aria-hidden="true" 
                className="opacity-0 absolute h-0 w-0 pointer-events-none"
              >
                <option value="">Selecione...</option>
                <option value="Yes">Sim</option>
                <option value="No">Não</option>
                <option value="Maybe">Talvez</option>
              </select>
            </div>

            {/* Campo: Número de Convidados */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <UsersIcon className="w-4 h-4 text-gray-400" />
                Número de Convidados (incluindo você)
              </label>
              <input
                type="number"
                min="1"
                max="5"
                required
                className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none text-gray-800 shadow-sm"
                value={formData.numberOfGuests}
                onChange={(e) => setFormData({ ...formData, numberOfGuests: parseInt(e.target.value) || 1 })}
              />
            </div>

            {/* Campo: Votos / Mensagem */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <ChatBubbleBottomCenterTextIcon className="w-4 h-4 text-gray-400" />
                Deixe uma mensagem ou votos para os noivos (Opcional)
              </label>
              <textarea
                rows={3}
                placeholder="Escreva aqui uma mensagem especial..."
                className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none text-gray-800 shadow-sm resize-none"
                value={formData.wishes}
                onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
              ></textarea>
            </div>


            {/* Botão de Envio */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 px-6 text-white font-medium rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer hover:opacity-95"
              style={{ backgroundColor: activeTheme.primary }}
            >
              <PaperAirplaneIcon className="w-5 h-5 -rotate-45" />
              Enviar via WhatsApp
            </motion.button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}