import React from 'react';

const ScanItem = ({ scan, isActive, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`medical-card p-4 flex items-center justify-between group cursor-pointer transition-all border-none shadow-sm h-[88px] ${isActive ? 'bg-primary/5 ring-2 ring-primary border-transparent' : 'bg-white hover:bg-slate-50'}`}
        >
            <div className="flex items-center gap-4">
                <div className={`size-12 rounded-xl flex items-center justify-center transition-all ${isActive ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' : 'bg-slate-100 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary'}`}>
                    <span className="material-symbols-outlined text-[24px]">{scan.icon}</span>
                </div>
                <div>
                    <p className={`text-[14px] font-bold transition-colors ${isActive ? 'text-primary' : 'text-text-main group-hover:text-primary'}`}>{scan.name}</p>
                    <p className="text-[10px] text-text-muted font-black uppercase tracking-widest mt-0.5">ID: {scan.batchId}</p>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <div className="hidden lg:block text-right">
                    <p className="text-[11px] font-bold text-text-main">{scan.date}</p>
                    <p className="text-[10px] text-text-muted font-medium uppercase tracking-tight">{scan.location}</p>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${scan.status === 'Safe' ? 'bg-green-100/50 text-green-700 border-green-200' : 'bg-amber-100/50 text-amber-700 border-amber-200'}`}>
                    {scan.status}
                </span>
            </div>
        </div>
    );
};

export default ScanItem;
