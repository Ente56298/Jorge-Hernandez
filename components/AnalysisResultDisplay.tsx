
import React from 'react';
import { AnalysisResult, MigrationStep } from '../types';
import { 
    LightBulbIcon, 
    CodeBracketIcon, 
    ExclamationTriangleIcon,
    BrainCircuitIcon,
    ScaleIcon,
    WrenchScrewdriverIcon,
    BoltIcon,
    ShareIcon,
    EyeIcon,
    RoadmapIcon
} from './IconComponents';

interface JustificationCardProps {
    title: string;
    icon: React.ReactNode;
    summary: string;
    comparison: string;
}

const JustificationCard: React.FC<JustificationCardProps> = ({ title, icon, summary, comparison }) => (
    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 h-full flex flex-col hover:shadow-md hover:border-blue-300 transition-all duration-200">
        <div className="flex items-center mb-3">
            {icon}
            <h4 className="ml-2 font-semibold text-slate-700">{title}</h4>
        </div>
        <div className="text-sm text-slate-600 space-y-3 flex-grow">
            <p><strong className="font-medium text-slate-800">Resumen:</strong> {summary}</p>
            <p><strong className="font-medium text-slate-800">Comparación:</strong> {comparison}</p>
        </div>
    </div>
);

const AnalysisResultDisplay: React.FC<{ result: AnalysisResult }> = ({ result }) => {
    const { clarification, recommendedLanguage, recommendationSummary, justification, migrationStrategy, formatComparison } = result;
    
    const justificationItems = [
        { key: 'interoperability', title: 'Interoperabilidad', icon: <ShareIcon className="w-5 h-5 text-sky-600" />, data: justification.interoperability },
        { key: 'maintainability', title: 'Mantenibilidad', icon: <WrenchScrewdriverIcon className="w-5 h-5 text-teal-600" />, data: justification.maintainability },
        { key: 'performance', title: 'Performance', icon: <BoltIcon className="w-5 h-5 text-amber-600" />, data: justification.performance },
        { key: 'normativity', title: 'Normatividad', icon: <ScaleIcon className="w-5 h-5 text-indigo-600" />, data: justification.normativity },
        { key: 'traceability', title: 'Trazabilidad', icon: <EyeIcon className="w-5 h-5 text-rose-600" />, data: justification.traceability },
    ];

    return (
        <div className="space-y-8 animate-fade-in" aria-live="polite" aria-atomic="true">
            <style>{`
                @keyframes fade-in {
                    0% { opacity: 0; transform: translateY(10px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
            `}</style>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 space-y-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-0 flex items-center">
                    <BrainCircuitIcon className="h-7 w-7 mr-3 text-blue-600" />
                    Análisis de Migración a Arquitectura Moderna
                </h2>

                {/* Clarification */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <div className="flex">
                        <div className="py-1"><ExclamationTriangleIcon className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0" /></div>
                        <div>
                            <p className="font-semibold text-yellow-800">Aclaración Importante</p>
                            <p className="text-sm text-yellow-700">{clarification}</p>
                        </div>
                    </div>
                </div>

                {/* Recommendation */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 col-span-1 flex flex-col justify-center items-center text-center">
                        <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Formato Recomendado</span>
                        <div className="flex items-center mt-2">
                             <CodeBracketIcon className="h-10 w-10 text-blue-500" />
                            <p className="text-4xl font-extrabold text-blue-800 ml-2">{recommendedLanguage}</p>
                        </div>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg border border-green-200 col-span-1 md:col-span-2">
                         <div className="flex items-start">
                            <LightBulbIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                            <div>
                               <h3 className="text-lg font-semibold text-green-800">Resumen de la Recomendación</h3>
                               <p className="text-sm text-green-700 mt-2">{recommendationSummary}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Justification */}
                <div>
                    <h3 className="text-xl font-semibold text-slate-700 mb-4">Justificación Detallada</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {justificationItems.map(item => (
                            <JustificationCard 
                                key={item.key}
                                title={item.title}
                                icon={item.icon}
                                summary={item.data.summary}
                                comparison={item.data.comparison}
                            />
                        ))}
                    </div>
                </div>
                
                {/* Format Comparison Table */}
                {formatComparison && formatComparison.length > 0 && (
                <div>
                    <h3 className="text-xl font-semibold text-slate-700 mb-4 flex items-center">
                        <ScaleIcon className="w-6 h-6 mr-3 text-gray-500"/>
                        Comparativa Detallada de Formatos
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse border border-slate-200">
                            <thead className="bg-slate-100">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider border border-slate-200">Criterio</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider border border-slate-200 bg-blue-100/50">
                                        <div className="flex items-center">
                                            <span>JSON</span>
                                            <span className="ml-2 px-2 py-0.5 text-xs font-bold text-blue-800 bg-blue-200 rounded-full">Recomendado</span>
                                        </div>
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider border border-slate-200">XML</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider border border-slate-200">YAML</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-200">
                                {formatComparison.map((row) => (
                                    <tr key={row.criterion}>
                                        <td className="px-4 py-3 align-top text-sm font-semibold text-slate-700 border border-slate-200 w-1/6">{row.criterion}</td>
                                        <td className="px-4 py-3 align-top text-sm text-slate-600 border border-slate-200 bg-blue-50/30">{row.json}</td>
                                        <td className="px-4 py-3 align-top text-sm text-slate-600 border border-slate-200">{row.xml}</td>
                                        <td className="px-4 py-3 align-top text-sm text-slate-600 border border-slate-200">{row.yaml}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            </div>

            {/* Migration Strategy */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-700 mb-6 flex items-center">
                    <RoadmapIcon className="w-6 h-6 mr-3 text-purple-600"/>
                    Estrategia de Migración Propuesta
                </h3>
                <ol className="relative border-l-2 border-slate-200 space-y-8">
                    {migrationStrategy.map((step: MigrationStep) => (
                        <li key={step.step} className="ml-8">
                            <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-4 ring-white">
                                <span className="font-bold text-lg text-blue-800">{step.step}</span>
                            </span>
                            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 ml-4">
                                <h4 className="mb-1 text-lg font-semibold text-slate-900">{step.title}</h4>
                                <p className="text-sm font-normal text-slate-600">{step.description}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default AnalysisResultDisplay;