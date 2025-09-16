
import React from 'react';
import { Card } from './components/Card';
import { HangingStars } from './components/HangingStars';
import { ToyBlocksIcon } from './components/icons/ToyBlocksIcon';
import { TeddyBearIcon } from './components/icons/TeddyBearIcon';
import { BeachBallIcon } from './components/icons/BeachBallIcon';
import { BabyRockerIcon } from './components/icons/BabyRockerIcon';
import { ClownIcon } from './components/icons/ClownIcon';
import { ButterflyIcon } from './components/icons/ButterflyIcon';

const App: React.FC = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-pink-100 via-sky-100 to-yellow-100 text-[#5a4f7c]">
            <HangingStars />
            
            <div className="absolute top-4 right-4 sm:top-8 sm:right-8 opacity-60 animate-float">
                 <ToyBlocksIcon className="h-24 w-24 sm:h-32 sm:w-32" />
            </div>
            <div className="absolute bottom-1/4 left-4 sm:left-8 opacity-70 animate-float" style={{animationDelay: '1s'}}>
                 <BabyRockerIcon className="h-28 w-28 sm:h-40 sm:w-40" />
            </div>
             <div className="absolute bottom-10 right-4 sm:right-8 opacity-70 animate-float" style={{animationDelay: '2s'}}>
                 <TeddyBearIcon className="h-28 w-28 sm:h-36 sm:w-36" />
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-70 animate-float" style={{animationDelay: '0.5s'}}>
                 <BeachBallIcon className="h-20 w-20 sm:h-28 sm:w-28" />
            </div>


            <main className="relative z-10 mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                <header className="text-center mb-12">
                    <h1 className="font-comic text-5xl sm:text-7xl md:text-8xl font-bold text-pink-400" style={{ textShadow: '3px 3px 0px rgba(255,255,255,0.8)' }}>
                        Día del Bebé Prematuro
                    </h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <Card title="Detalles del Evento">
                        <InfoItem icon="📅" label="Fecha" text="17 Noviembre 2025" />
                        <InfoItem icon="📍" label="Lugar" text="Auditorium Hospital IGSS, Quetzaltenango" />
                        <InfoItem icon="⏰" label="Hora" text="9:30 a 12:00 Horas" />
                        <InfoItem icon="📱" label="Contacto" text="5018-3145 (WhatsApp)" />
                    </Card>

                    <Card title="Tendremos">
                         <ActivityItem icon={<ClownIcon className="w-10 h-10"/>} text="Globoflexia" />
                         <ActivityItem icon={<ButterflyIcon className="w-10 h-10"/>} text="Show de payasos" />
                         <ActivityItem icon={<span className="text-3xl">🍬</span>} text="Candy bar" />
                    </Card>
                </section>

                <Card title="Confirma tu asistencia" className="bg-teal-100/80 border-teal-300">
                    <p className="text-center mb-4 text-teal-800">Para confirmar, por favor envía los siguientes datos al número de WhatsApp:</p>
                    <ol className="list-decimal list-inside space-y-3 text-teal-900 font-semibold text-left mx-auto max-w-md">
                        <li>Nombre completo de quien en su momento fue prematuro.</li>
                        <li>Nombres de acompañantes (no más de 2 personas).</li>
                        <li>Número de celular para agregar al grupo de WhatsApp.</li>
                    </ol>
                </Card>

                <footer className="text-center mt-12">
                    <p className="italic text-gray-500 mb-8">"La fe sin ciencia, es coja; la ciencia sin fe, es ciega."</p>
                    <a
                        href="https://forms.gle/hPvdPa5R3KFGm7Qj6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-pink-500 text-white font-bold text-2xl px-12 py-5 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300"
                    >
                        Confirmar Asistencia
                    </a>
                </footer>
            </main>
        </div>
    );
};

interface InfoItemProps {
    icon: string;
    label: string;
    text: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, label, text }) => (
    <div className="flex items-start space-x-4 mb-3">
        <span className="text-3xl">{icon}</span>
        <div>
            <p className="font-bold text-lg">{label}</p>
            <p className="text-md">{text}</p>
        </div>
    </div>
);

interface ActivityItemProps {
    icon: React.ReactNode;
    text: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ icon, text }) => (
     <div className="flex items-center space-x-4 mb-3 text-lg">
        <div className="flex-shrink-0">{icon}</div>
        <span>{text}</span>
    </div>
);

export default App;
