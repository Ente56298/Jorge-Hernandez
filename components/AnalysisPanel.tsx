
import React, { useMemo } from 'react';
import { summaryDataCsv, goalCoherenceDataCsv, projectStatusDataCsv, kpiDataCsv } from '../data';
import { ExclamationTriangleIcon, TableCellsIcon } from './IconComponents';

// Helper to parse CSV, skipping the header line
const parseCsv = <T extends Record<string, any>>(csvString: string): T[] => {
    const lines = csvString.trim().split('\n');
    if (lines.length < 2) return [];
    const header = lines[0].split(',');
    const rows = lines.slice(1).map(line => {
        const values = line.split(',');
        return header.reduce((obj, nextKey, index) => {
            (obj as any)[nextKey.trim()] = values[index] ? values[index].trim() : '';
            return obj;
        }, {} as T);
    });
    return rows;
};

const TrafficLight = ({ color }: { color: string }) => {
    const colorMap: { [key: string]: string } = {
        'ROJO': 'bg-red-500',
        'AMARILLO': 'bg-yellow-500',
        'VERDE': 'bg-green-500',
    };
    return <span className={`inline-block w-3 h-3 rounded-full ${colorMap[color.toUpperCase()] || 'bg-slate-400'}`}></span>;
};


const Card: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 h-full">
        <div className="flex items-center mb-4">
            {icon}
            <h3 className="ml-3 text-lg font-semibold text-slate-700">{title}</h3>
        </div>
        {children}
    </div>
);


const DonutChart: React.FC<{ coherent: number, nonCoherent: number, size: number, strokeWidth: number }> = ({ coherent, nonCoherent, size, strokeWidth }) => {
    const total = coherent + nonCoherent;
    if (total === 0) return null;

    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const coherentPercentage = (coherent / total) * 100;
    const coherentStrokeDashoffset = circumference - (coherentPercentage / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="-rotate-90">
                <circle cx={size / 2} cy={size / 2} r={radius} fill="transparent" stroke="#fee2e2" strokeWidth={strokeWidth} />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="transparent"
                    stroke="#22c55e"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={coherentStrokeDashoffset}
                    strokeLinecap="round"
                />
            </svg>
            <div className="absolute flex flex-col items-center">
                <span className="text-2xl font-bold text-slate-700">{`${Math.round(coherentPercentage)}%`}</span>
                <span className="text-xs text-slate-500">Coherente</span>
            </div>
        </div>
    );
};


const SummaryCard = () => {
    const data = useMemo(() => parseCsv<{ MODULO: string; TOTAL_REGISTROS: string; PROBLEMAS: string }>(summaryDataCsv), []);
    
    return (
        <Card title="Resumen de Problemas por Módulo" icon={<ExclamationTriangleIcon className="h-6 w-6 text-amber-500" />}>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                {data.map(item => (
                    <div key={item.MODULO} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <h4 className="font-semibold text-slate-600">{item.MODULO}</h4>
                        <p className="text-3xl font-bold text-slate-800">{item.PROBLEMAS}</p>
                        <p className="text-sm text-slate-500">problemas de {item.TOTAL_REGISTROS} registros</p>
                    </div>
                ))}
            </div>
        </Card>
    );
};

const GoalCoherenceCard = () => {
    const data = useMemo(() => parseCsv<{ codigo: string; coherente: string }>(goalCoherenceDataCsv), []);
    const { coherent, nonCoherent } = useMemo(() => {
        return data.reduce((acc, row) => {
            if (row.coherente.toUpperCase() === 'SI') acc.coherent++;
            else acc.nonCoherent++;
            return acc;
        }, { coherent: 0, nonCoherent: 0 });
    }, [data]);

    return (
        <Card title="Coherencia de Metas" icon={<TableCellsIcon className="h-6 w-6 text-blue-500" />}>
            <div className="flex flex-col md:flex-row items-center gap-6">
                 <div className="flex-shrink-0">
                    <DonutChart coherent={coherent} nonCoherent={nonCoherent} size={140} strokeWidth={15} />
                </div>
                <div className="w-full">
                    <ul className="space-y-2 text-sm">
                        {data.map(row => (
                            <li key={row.codigo} className={`flex justify-between p-2 rounded-md ${row.coherente.toUpperCase() === 'SI' ? 'bg-green-50' : 'bg-red-50'}`}>
                                <span className="font-mono text-slate-700">{row.codigo}</span>
                                <span className={`font-semibold ${row.coherente.toUpperCase() === 'SI' ? 'text-green-700' : 'text-red-700'}`}>
                                    {row.coherente.toUpperCase()}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Card>
    );
};

const ProjectStatusCard = () => {
    const data = useMemo(() => parseCsv<{ codigo: string; proyecto: string; semaforo: string }>(projectStatusDataCsv), []);

    return (
        <Card title="Semáforo de Proyectos" icon={<TableCellsIcon className="h-6 w-6 text-violet-500" />}>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                        <tr>
                            <th className="px-4 py-2">Código</th>
                            <th className="px-4 py-2">Proyecto</th>
                            <th className="px-4 py-2 text-center">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(row => (
                            <tr key={row.codigo} className="border-b last:border-b-0">
                                <td className="px-4 py-2 font-mono text-slate-700">{row.codigo}</td>
                                <td className="px-4 py-2 text-slate-600">{row.proyecto}</td>
                                <td className="px-4 py-2 text-center">
                                    <TrafficLight color={row.semaforo} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

const KpiCard = () => {
    const data = useMemo(() => parseCsv<{ indicador_id: string; nombre: string; semaforo: string }>(kpiDataCsv), []);
    
    return (
        <Card title="Semáforo de Indicadores (KPIs)" icon={<TableCellsIcon className="h-6 w-6 text-emerald-500" />}>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                        <tr>
                            <th className="px-4 py-2">Indicador</th>
                            <th className="px-4 py-2">Nombre</th>
                            <th className="px-4 py-2 text-center">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(row => (
                            <tr key={row.indicador_id} className="border-b last:border-b-0">
                                <td className="px-4 py-2 font-mono text-slate-700">{row.indicador_id}</td>
                                <td className="px-4 py-2 text-slate-600">{row.nombre}</td>
                                <td className="px-4 py-2 text-center">
                                    <TrafficLight color={row.semaforo} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};


const Dashboard = () => {
    return (
        <div className="space-y-6">
            <SummaryCard />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <GoalCoherenceCard />
                <ProjectStatusCard />
            </div>
            <KpiCard />
        </div>
    );
};

export default Dashboard;
