import React from 'react';

const StatsBar = () => {
    return (
        <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="medical-card p-6 flex flex-col justify-between group hover:border-red-100 transition-all hover:shadow-lg bg-white border-none shadow-medical">
                <div className="flex justify-between items-start">
                    <p className="text-text-muted text-[11px] font-black uppercase tracking-[0.1em]">Counterfeit Alerts</p>
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

            <div className="medical-card p-6 flex flex-col justify-between group hover:border-amber-100 transition-all hover:shadow-lg bg-white border-none shadow-medical">
                <div className="flex justify-between items-start">
                    <p className="text-text-muted text-[11px] font-black uppercase tracking-[0.1em]">Active Recalls</p>
                    <div className="bg-amber-50 p-2 rounded-xl border border-amber-100 shadow-sm">
                        <span className="material-symbols-outlined text-amber-600 text-xl font-bold">running_with_errors</span>
                    </div>
                </div>
                <div className="flex items-baseline gap-3 mt-4">
                    <span className="text-4xl font-black text-amber-600 tracking-tighter">3</span>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">+1 PENDING</p>
                </div>
            </div>

            <div className="medical-card p-6 flex flex-col justify-between group hover:border-primary/20 transition-all hover:shadow-lg bg-white border-none shadow-medical">
                <div className="flex justify-between items-start">
                    <p className="text-text-muted text-[11px] font-black uppercase tracking-[0.1em]">Total Batches</p>
                    <div className="bg-primary/5 p-2 rounded-xl border border-primary/20 shadow-sm">
                        <span className="material-symbols-outlined text-primary text-xl font-bold">inventory_2</span>
                    </div>
                </div>
                <div className="flex items-baseline gap-3 mt-4">
                    <span className="text-4xl font-black text-text-main tracking-tighter">1,284</span>
                    <span className="text-[10px] font-black text-primary px-2.5 py-1 bg-primary/10 rounded-full border border-primary/20">
                        GLOBALLY
                    </span>
                </div>
            </div>

            <div className="medical-card p-6 flex flex-col justify-between group hover:border-emerald-100 transition-all hover:shadow-lg bg-white border-none shadow-medical">
                <div className="flex justify-between items-start">
                    <p className="text-text-muted text-[11px] font-black uppercase tracking-[0.1em]">Ledger Transfers</p>
                    <div className="bg-emerald-50 p-2 rounded-xl border border-emerald-100 shadow-sm">
                        <span className="material-symbols-outlined text-emerald-600 text-xl font-bold">swap_horiz</span>
                    </div>
                </div>
                <div className="flex items-baseline gap-3 mt-4">
                    <span className="text-4xl font-black text-text-main tracking-tighter">8,942</span>
                    <span className="text-[10px] font-black text-emerald-600 px-2.5 py-1 bg-emerald-50 rounded-full border border-emerald-100 uppercase tracking-widest">
                        SYNCED
                    </span>
                </div>
            </div>
        </section>
    );
};

export default StatsBar;
