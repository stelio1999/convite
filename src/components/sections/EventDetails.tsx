import { motion } from 'framer-motion';
import Image from 'next/image';
import { weddingConfig } from '@/config/wedding-config';
import { CalendarIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function EventDetails() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-MZ', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Função para abrir o Google Maps utilizando o endereço ou mapLink como destino e traçar a rota a partir da localização atual
  const handleGetDirections = (venue: string, address: string, mapLink: string) => {
    // Se o mapLink for uma URL válida do Google Maps contendo coordenadas ou query, tentamos extrair ou usar o endereço/venue
    const destinationQuery = encodeURIComponent(`${venue}, ${address}`);
    // A URL de direções do Google Maps ('/dir/') aceita o parâmetro destination. 
    // Quando omitimos o 'origin', o Google Maps usa automaticamente a localização atual do GPS do utilizador.
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destinationQuery}`;
    
    // Fallback: se o mapLink do config for um link customizado ou de coordenadas, podemos priorizá-lo se necessário, 
    // mas para a trajetória ponto-a-ponto o padrão de 'dir/' é o ideal.
    window.open(directionsUrl, '_blank');
  };

  const events = [
        { title: 'Lobolo', details: weddingConfig.event.lobolo },
    { title: 'Cerimónia Religiosa / Registo Civil', details: weddingConfig.event.akad },
    { title: 'Copo de Agua / Recepção', details: weddingConfig.event.reception },
    { title: 'Chiguiane', details: weddingConfig.event.chiguiane }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative bg-black/20 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-4xl font-serif mb-4 text-white">Reserve a Data</h2>
            <p className="text-white/90">Convidamo-vos a celebrar o nosso dia especial</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-white p-8 rounded-lg shadow-lg overflow-hidden"
              style={{ minHeight: '400px' }}
            >
              {/* Decorations for Cerimónia card */}
              {event.title === 'Cerimónia Religiosa / Registo Civil' && (
                <>
                  <div className="absolute -top-8 -left-8 w-32 h-32 opacity-50">
                    <Image
                      src="wedding-invitation/images/pattern/flower-1.webp"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-50 rotate-180">
                    <Image
                      src="wedding-invitation/images/pattern/flower-2.webp"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </>
              )}

              {/* Decorations for Copo de Agua card */}
              {event.title === 'Copo de Agua / Recepção' && (
                <>
                  <div className="absolute -top-8 -left-8 w-32 h-32 opacity-50">
                    <Image
                      src="wedding-invitation/images/pattern/flower-3.webp"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-50 rotate-180">
                    <Image
                      src="wedding-invitation/images/pattern/flower-1.webp"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </>
              )}
              <h3 className="text-2xl font-serif mb-6 text-center">{event.title}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CalendarIcon className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="font-medium">{formatDate(event.details.date)}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <ClockIcon className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="font-medium">{event.details.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPinIcon className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="font-medium">{event.details.venue}</p>
                    <p className="text-gray-600">{event.details.address}</p>
                  </div>
                </div>

                {event.details.dresscode && (
                  <div className="text-center mt-6">
                    {/*<p className="text-sm text-gray-500">Código de Vestimenta</p>
                    <p className="font-medium">{event.details.dresscode}</p>*/}
                  </div>
                )}

                <button
                  onClick={() => handleGetDirections(event.details.venue, event.details.address, event.details.mapLink)}
                  className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 rounded-lg transition-colors mt-6 cursor-pointer"
                >
                  Ver Localização
                </button>

                <button
                  onClick={() => {
                    const icsContent = [
                      'BEGIN:VCALENDAR',
                      'VERSION:2.0',
                      'PRODID:-//Wedding//Invitation//EN',
                      'BEGIN:VEVENT',
                      `UID:${Date.now()}@wedding`,
                      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
                      `DTSTART:${new Date(`${event.details.date}T${event.details.time}`).toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
                      `SUMMARY:${event.title} - ${weddingConfig.couple.bride.name} & ${weddingConfig.couple.groom.name}`,
                      `DESCRIPTION:${event.details.venue}\\n${event.details.address}`,
                      `LOCATION:${event.details.venue}, ${event.details.address}`,
                      'END:VEVENT',
                      'END:VCALENDAR'
                    ].join('\n');
                    
                    const blob = new Blob([icsContent], { type: 'text/calendar' });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = `${event.title.replace(/[\s/]+/g, '_')}_${weddingConfig.couple.bride.name}_${weddingConfig.couple.groom.name}.ics`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold text-lg py-4 px-6 rounded-lg shadow-lg border-2 border-gray-800 transition-all duration-200 mt-4 active:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 relative z-10 cursor-pointer"
                >
                  Adicionar ao Calendário
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}