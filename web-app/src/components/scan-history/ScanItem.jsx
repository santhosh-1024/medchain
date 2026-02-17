import React from 'react';

const ScanItem = ({ scan, isActive, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`medical-card p-6 flex items-center justify-between group cursor-pointer transition-all border-none shadow-medical relative overflow-hidden h-[100px] ${isActive ? 'bg-primary/5 ring-2 ring-primary border-transparent' : 'bg-white hover:bg-slate-50'}`}
        >
            <div className="flex items-center gap-5">
                <div className={`size-14 rounded-2xl flex items-center justify-center transition-all ${isActive ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' : 'bg-slate-100 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary'}`}>
                    <span className="material-symbols-outlined text-[28px]">{scan.icon}</span>
                </div>
                <div>
                    <h4 className={`text-[16px] font-black tracking-tight leading-tight transition-colors ${isActive ? 'text-primary' : 'text-text-main group-hover:text-primary'}`}>{scan.name}</h4>
                    <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-[10px] text-text-muted font-black uppercase tracking-widest opacity-60">ID Tag</span>
                        <code className="text-[10px] font-black font-mono text-primary bg-primary/5 px-2 py-0.5 rounded tracking-tighter">{scan.batchId}</code>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-8">
                <div className="hidden lg:block text-right">
                    <p className="text-[11px] font-black text-text-main uppercase tracking-tighter">{scan.date}</p>
                    <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-text-muted font-bold">
                        <span className="material-symbols-outlined text-[14px]">location_on</span>
                        {scan.location}
                    </div>
                </div>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border shadow-sm ${scan.status === 'Genuine' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                        scan.status === 'Counterfeit' ? 'bg-red-50 text-red-600 border-red-100' :
                            'bg-amber-50 text-amber-600 border-amber-100'
                    }`}>
                    <span className={`size-1.5 rounded-full ${scan.status === 'Genuine' ? 'bg-emerald-500' : scan.status === 'Counterfeit' ? 'bg-red-500' : 'bg-amber-500'}`}></span>
                    {scan.status}
                </span>
            </div>
        </div>
    );
};

export default ScanItem;
