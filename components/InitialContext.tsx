
import React, { useMemo } from 'react';
import { csvData } from '../data';
import { BrainCircuitIcon } from './IconComponents';

const CsvPreview: React.FC = () => {
    const { rows } = useMemo(() => {
        const lines = csvData.trim().split('\n');
        const dataLines = lines.slice(3);

        const parsedRows = dataLines.map(line => line.split(',').slice(0, 12)); // Take first 12 cols for preview
        
        return { rows: parsedRows };
    }, []);
    
    // Simplified header for display purposes
    const displayHeaders = [
        "ID 1", "ID 2", "Código", "Descripción", "Col 5", "Col 6", "Col 7", 
        "Estrategia", "Col 9", "U. Medida", "Cantidad", "Col 12"
    ];

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 border border-slate-200 rounded-md text-xs">
                <thead className="bg-slate-50">
                    <tr>
                        {displayHeaders.map((header, index) => (
                            <th key={index} className="px-2 py-2 text-left font-medium text-slate-500 uppercase tracking-wider">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} title={cell} className="px-2 py-2 whitespace-nowrap overflow-hidden text-ellipsis" style={{maxWidth: cellIndex === 3 ? '200px' : '100px'}}>
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

interface InitialContextProps {
    onAnalyze: () => void;
    isLoading: boolean;
}

const InitialContext: React.FC<InitialContextProps> = ({ onAnalyze, isLoading }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
                <h2 className="text-xl font-semibold text-slate-700">Contexto de Datos (Legacy CSV)</h2>
                <button
                    onClick={onAnalyze}
                    disabled={isLoading}
                    className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all duration-200 ease-in-out"
                    aria-label="Analizar migración con Inteligencia Artificial"
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Analizando...</span>
                        </>
                    ) : (
                        <>
                            <BrainCircuitIcon className="h-5 w-5 mr-2" />
                            <span>Analizar Migración con IA</span>
                        </>
                    )}
                </button>
            </div>
            <div className="space-y-4 text-sm text-slate-600">
                <p>
                    A continuación se muestra una vista previa de los datos del sistema gubernamental (SyConGob) que se deben migrar. El sistema actual se basa en este formato CSV para el seguimiento de metas y actividades.
                </p>
                <CsvPreview />
            </div>
        </div>
    );
};

export default InitialContext;
