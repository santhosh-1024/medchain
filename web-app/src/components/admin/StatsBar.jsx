import React from 'react';

const StatsBar = () => {
    return (
        <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="medical-card p-6 flex flex-col justify-between group hover:border-red-100 transition-all hover:shadow-lg">
                <div className="flex justify-between items-start">
                    <p className="text-text-muted text-[11px] font-black uppercase tracking-[0.1em]">Critical Alerts</p>
                    <div className="bg-red-50 p-2 rounded-xl border border-red-100 shadow-sm">
                        <span className="material-symbols-outlined text-red-600 text-xl font-bold">security</span>
                    </div>
                </div>
                <div className="flex items-baseline gap-3 mt-4">
                    <span className="text-4xl font-black text-text-main tracking-tighter">12</span>
                    <span className="text-[10px] font-black text-red-600 px-2.5 py-1 bg-red-100/50 rounded-full flex items-center gap-1 border border-red-200/50">
                        <span className="material-symbols-outlined text-[12px] font-black">warning</span>
                        HIGH RISK
                    </span>
                </div>
            </div>

            <div className="medical-card p-6 flex flex-col justify-between group hover:border-green-100 transition-all hover:shadow-lg">
                <div className="flex justify-between items-start">
                    <p className="text-text-muted text-[11px] font-black uppercase tracking-[0.1em]">Network Pulse</p>
                    <div className="bg-green-50 p-2 rounded-xl border border-green-100 shadow-sm">
                        <span className="material-symbols-outlined text-green-600 text-xl font-bold">health_and_safety</span>
                    </div>
                </div>
                <div className="flex items-baseline gap-3 mt-4">
                    <span className="text-4xl font-black text-green-600 tracking-tighter">98.4%</span>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">-0.1% GAP</p>
                </div>
            </div>

            <div className="medical-card p-6 flex flex-col justify-between group hover:border-primary/20 transition-all hover:shadow-lg">
                <div className="flex justify-between items-start">
                    <p className="text-text-muted text-[11px] font-black uppercase tracking-[0.1em]">Ledger Nodes</p>
                    <div className="bg-primary/5 p-2 rounded-xl border border-primary/20 shadow-sm">
                        <span className="material-symbols-outlined text-primary text-xl font-bold">hub</span>
                    </div>
                </div>
                <div className="flex items-baseline gap-3 mt-4">
                    <span className="text-4xl font-black text-text-main tracking-tighter">1,402</span>
                    <span className="text-[10px] font-black text-primary px-2.5 py-1 bg-primary/10 rounded-full border border-primary/20">
                        +15% WEEKLY
                    </span>
                </div>
            </div>

            <div className="medical-card p-6 flex flex-col justify-between group hover:border-primary/20 transition-all hover:shadow-lg">
                <div className="flex justify-between items-start">
                    <p className="text-text-muted text-[11px] font-black uppercase tracking-[0.1em]">Latent Speed</p>
                    <div className="bg-primary/5 p-2 rounded-xl border border-primary/20 shadow-sm">
                        <span className="material-symbols-outlined text-primary text-xl font-bold">speed</span>
                    </div>
                </div>
                <div className="flex items-baseline gap-3 mt-4">
                    <span className="text-4xl font-black text-text-main tracking-tighter">24ms</span>
                    <span className="text-[10px] font-black text-green-600 px-2.5 py-1 bg-green-50 rounded-full border border-green-100 uppercase tracking-widest">
                        OPTIMAL
                    </span>
                </div>
            </div>
        </section>
    );
};

export default StatsBar;
