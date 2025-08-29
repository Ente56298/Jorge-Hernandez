
import React, { useState, useMemo, Fragment } from 'react';
import { reconduccionDataCsv } from '../data';
import { generateReconduccionSuggestion } from '../services/geminiService';
import { ArrowPathIcon, LightBulbIcon, ExclamationTriangleIcon, BrainCircuitIcon, ChartBarIcon } from './IconComponents';

interface ReconduccionData {
    clave: string;
    is_esperado: string;
    is_real: string;
    am_meta: string;
    am_avance: string;
    diff_is: string;
    diff_am: string;
    consistente: string;
    semaforo: string;
    [key: string]: string;
}

const parseCsv = (csvString: string): ReconduccionData[] => {
    const lines = csvString.trim().split('\n');
    if (lines.length < 2) return [];
    const header = lines[0].split(',').map(h => h.trim());
    return lines.slice(1).map(line => {
        const values = line.split(',');
        return header.reduce((obj, key, index) => {
            const value = values[index] ? values[index].trim().replace(/"/g, '') : '';
            (obj as any)[key] = value;
            return obj;
        }, {} as ReconduccionData);
    }).filter(row => row.clave); // Filter out empty rows
};


const TrafficLight: React.FC<{ color: string }> = ({ color }) => {
    const colorMap: { [key: string]: string } = {
        'ROJO': 'bg-red-500',
        'AMARILLO': 'bg-yellow-500',
        'VERDE': 'bg-green-500',
    };
    return <span className={`inline-block w-4 h-4 rounded-full ${colorMap[color.toUpperCase()] || 'bg-slate-400'}`} title={color}></span>;
};

const ReconduccionRow: React.FC<{ rowData: ReconduccionData, index: number }> = ({ rowData, index }) => {
    const [suggestion, setSuggestion] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleAnalyze = async () => {
        setIsLoading(true);
        setError(null);
        setSuggestion(null);
        try {
            const result = await generateReconduccionSuggestion(rowData);
            setSuggestion(result);
        } catch (e) {
            if (e instanceof Error) {
                setError(`Error de IA: ${e.message}`);
            } else {
                setError("Ocurrió un error desconocido.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const isConsistent = rowData.consistente.toUpperCase() === 'SI';
    const rowBg = isConsistent ? 'bg-white' : 'bg-amber-50';

    return (
        <Fragment>
            <tr className={rowBg}>
                <td className="px-3 py-3 text-xs text-slate-600 w-1/4"><div className="truncate" title={rowData.clave}>{rowData.clave}</div></td>
                <td className="px-3 py-3 text-xs text-slate-500 text-center">{rowData.is_esperado}</td>
                <td className="px-3 py-3 text-xs text-slate-500 text-center">{rowData.is_real}</td>
                <td className="px-3 py-3 text-xs text-slate-500 text-center">{rowData.am_meta}</td>
                <td className="px-3 py-3 text-xs text-slate-500 text-center">{rowData.am_avance}</td>
                <td className="px-3 py-3 text-center">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${isConsistent ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {isConsistent ? 'Sí' : 'No'}
                    </span>
                </td>
                <td className="px-3 py-3 text-center flex justify-center items-center">
                    <TrafficLight color={rowData.semaforo} />
                </td>
                <td className="px-3 py-3 text-center">
                    {!isConsistent && (
                        <button 
                            onClick={handleAnalyze}
                            disabled={isLoading}
                            className="flex items-center justify-center px-3 py-1 bg-indigo-500 text-white text-xs font-semibold rounded-md shadow-sm hover:bg-indigo-600 disabled:bg-slate-300 transition-all duration-200"
                        >
                            {isLoading ? (
                                <>
                                 <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Analizando
                                </>
                            ) : (
                                 <>
                                 <ArrowPathIcon className="h-4 w-4 mr-1"/>
                                 Analizar Reconducción
                                 </>
                            )}
                        </button>
                    )}
                </td>
            </tr>
            {(suggestion || error) && !isConsistent && (
                 <tr className={rowBg}>
                    <td colSpan={8} className="p-0">
                        <div className="px-4 py-3 m-2 rounded-lg border bg-slate-50">
                            {suggestion && (
                                <div className="flex items-start">
                                    <LightBulbIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-sm text-slate-800">Sugerencia de Reconducción:</h4>
                                        <p className="text-xs text-slate-600">{suggestion}</p>
                                    </div>
                                </div>
                            )}
                            {error && (
                                <div className="flex items-start">
                                    <ExclamationTriangleIcon className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <h4 className="font-semibold text-sm text-red-800">Error</h4>
                                      <p className="text-xs text-red-700">{error}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </td>
                </tr>
            )}
        </Fragment>
    );
};

const ReconduccionPanel: React.FC = () => {
    const data = useMemo(() => parseCsv(reconduccionDataCsv), []);
    const inconsistentCount = useMemo(() => data.filter(row => row.consistente.toUpperCase() === 'NO').length, [data]);

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
             <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                <div>
                    <h2 className="text-xl font-semibold text-slate-700 flex items-center">
                        <ChartBarIcon className="h-6 w-6 mr-2 text-indigo-600" />
                        Análisis y Propuestas de Reconducción
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">Se han detectado <span className={`font-bold ${inconsistentCount > 0 ? 'text-red-600' : 'text-green-600'}`}>{inconsistentCount} inconsistencias</span> que requieren atención.</p>
                </div>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-lg">
                <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-100">
                        <tr>
                            <th className="px-3 py-2 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Clave / Descripción</th>
                            <th className="px-3 py-2 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider">Plan Ficha</th>
                            <th className="px-3 py-2 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider">Real Calendarizado</th>
                            <th className="px-3 py-2 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider">Meta Anual</th>
                            <th className="px-3 py-2 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider">Avance Real</th>
                            <th className="px-3 py-2 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider">Consistente</th>
                            <th className="px-3 py-2 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider">Semáforo</th>
                            <th className="px-3 py-2 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider">Acción IA</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                        {data.map((row, index) => (
                            <ReconduccionRow key={index} rowData={row} index={index} />
                        ))}
                    </tbody>
                </table>
            </div>
             {inconsistentCount === 0 && (
                <div className="text-center py-8 text-slate-500">
                    <p className="font-semibold">¡Excelente!</p>
                    <p>No se encontraron inconsistencias en los datos analizados.</p>
                </div>
            )}
        </div>
    );
};

export default ReconduccionPanel;