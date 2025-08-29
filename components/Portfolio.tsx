import React from 'react';
import { 
    BuildingLibraryIcon,
    ChartBarIcon,
    CogIcon,
    CurrencyDollarIcon,
    VideoCameraIcon,
    UserGroupIcon,
    BrainCircuitIcon
} from './IconComponents';

const serviceAreas = [
    {
        icon: <BuildingLibraryIcon className="h-8 w-8 text-cyan-600" />,
        title: 'Gobierno abierto y Transparencia',
        description: [
            'Diagnóstico de procesos de publicación de indicadores y expedientes.',
            'Diseño e implementación de portales de datos abiertos con APIs y semáforos de cumplimiento.',
            'Automatización de la generación de dictámenes, reportes y libros de gobierno (TXT, PDF, XLS).'
        ]
    },
    {
        icon: <ChartBarIcon className="h-8 w-8 text-lime-600" />,
        title: 'Gestión por resultados y Tableros de control',
        description: [
            'Modelado de indicadores estratégicos/operativos como objetos vivos (YAML/JSON).',
            'Dashboards en tiempo real que integren datos con alertas automáticas.',
            'Semáforos de diferencias trimestrales y agentes que propongan reconducciones.'
        ]
    },
    {
        icon: <CogIcon className="h-8 w-8 text-orange-600" />,
        title: 'Automatización y RPA de procesos administrativos',
        description: [
            'Creación de scripts y flujos RPA para captura de datos desde sistemas legacy.',
            'Integración de Python + pywinauto/AutoHotkey para llenar formularios o ingesta en BD.',
            'Construcción de pipelines “manifiesto → ejecución → narración” para auditoría continua.'
        ]
    },
    {
        icon: <CurrencyDollarIcon className="h-8 w-8 text-emerald-600" />,
        title: 'Transformación del presupuesto y reclasificaciones',
        description: [
            'Consultoría en reconducción programático-presupuestal: dictámenes y reasignaciones.',
            'Desarrollo de plantillas y agentes que propongan ajustes a indicadores y recursos.',
            'Integración de archivos oraclexe/oradata con flujos .BAT/PowerShell para reportes.'
        ]
    },
    {
        icon: <VideoCameraIcon className="h-8 w-8 text-red-600" />,
        title: 'Real-time streaming y participación ciudadana',
        description: [
            'Módulos WebRTC/RTMP para transmisiones de sesiones de cabildo, comités y asambleas.',
            'Dashboards con player embebido y control de accesos para Ayuntamientos.',
            'Vinculación de streaming con agentes narrativos (chatbots, subtítulos, actas).'
        ]
    },
    {
        icon: <UserGroupIcon className="h-8 w-8 text-violet-600" />,
        title: 'Inclusión y accesibilidad digital',
        description: [
            'Auditoría de interfaces y contenidos con recomendaciones de WCAG.',
            'Asesoría para sistemas de atención a personas con discapacidad.',
            'Capacitación a servidores públicos en metodologías ágiles y diseño centrado en usuario.'
        ]
    },
    {
        icon: <BrainCircuitIcon className="h-8 w-8 text-blue-600" />,
        title: 'Agentes auto-mejorables y documentación viva',
        description: [
            'Diseño de arquitecturas multi-agente que monitoricen, diagnostiquen y propongan mejoras.',
            'Creación de memoria persistente narrada: cada cambio deja un legado digital.',
            'Frameworks de “living docs” que combinen YAML, JSON Schema y visualizaciones.'
        ]
    }
];

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string[] }> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out border border-slate-200 flex flex-col">
        <div className="flex items-center mb-4">
            <div className="bg-slate-100 p-3 rounded-full">
                {icon}
            </div>
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-3">{title}</h3>
        <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside flex-grow">
            {description.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
);


const Portfolio: React.FC = () => {
    return (
        <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">Portafolio de Servicios de Consultoría</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">Proyectos llave en mano que modernizan la gestión municipal y dejan un legado narrativo y auditable.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceAreas.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;