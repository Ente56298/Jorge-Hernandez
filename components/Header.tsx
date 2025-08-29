
import React from 'react';
import { BrainCircuitIcon } from './IconComponents';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <BrainCircuitIcon className="h-8 w-8 text-blue-600" />
                        <h1 className="ml-3 text-2xl font-bold text-slate-800">Dashboard de Coherencia de Datos</h1>
                    </div>
                    <div className="flex items-center">
                       <span className="text-sm font-medium text-slate-500">Potenciado por Gemini</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;