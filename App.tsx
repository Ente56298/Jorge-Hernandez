
import React from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import ReconduccionPanel from './components/ReconduccionPanel';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Header />
            <main>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                   <div className="space-y-8">
                        <Portfolio />
                        <ReconduccionPanel />
                   </div>
                </div>
            </main>
             <footer className="bg-white mt-8 py-4 border-t border-slate-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Portafolio de Consultoría y Dashboard de Gestión. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;