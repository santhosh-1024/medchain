import React from 'react';

const BatchForm = () => {
    return (
        <div className="medical-card p-0 overflow-hidden flex flex-col h-full bg-white border-none shadow-medical">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white">
                <div>
                    <h3 className="font-black text-xl flex items-center gap-3 text-text-main tracking-tighter">
                        <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary border border-primary/20 shadow-sm">
                            <span className="material-symbols-outlined font-bold text-2xl">add_box</span>
                        </div>
                        GXP Batch Serialization
                    </h3>
                    <p className="text-[11px] text-text-muted font-bold uppercase tracking-[0.1em] mt-2">Immutable Product Onboarding Framework</p>
                </div>
                <div className="text-right">
                    <span className="text-[10px] font-black px-3 py-1.5 bg-slate-100 rounded-lg uppercase tracking-widest text-text-muted border border-slate-200">Protocol Node: BCH-MAIN-04</span>
                </div>
            </div>

            <div className="p-8 space-y-8 flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-[11px] font-black text-text-muted uppercase tracking-widest ml-1">Pharmaceutical Designation</label>
                        <input className="input-field w-full py-3.5 px-5 bg-slate-50 border-slate-100 font-bold text-text-main" placeholder="e.g. Amoxicillin 500mg" type="text" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[11px] font-black text-text-muted uppercase tracking-widest ml-1">Global Batch Identity (Serial ID)</label>
                        <input className="input-field w-full py-3.5 px-5 bg-slate-50 border-slate-100 font-bold text-primary tracking-tight" placeholder="BCH-992-ALPHA" type="text" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-2">
                        <label className="text-[11px] font-black text-text-muted uppercase tracking-widest ml-1">Manufacture Date</label>
                        <input className="input-field w-full py-3.5 px-5 bg-slate-50 border-slate-100 font-bold" type="date" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[11px] font-black text-text-muted uppercase tracking-widest ml-1">Expiration Sequence</label>
                        <input className="input-field w-full py-3.5 px-5 bg-slate-50 border-slate-100 font-bold" type="date" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[11px] font-black text-text-muted uppercase tracking-widest ml-1">Storage Protocol</label>
                        <select className="input-field w-full py-3.5 px-5 bg-slate-50 border-slate-100 font-bold appearance-none cursor-pointer">
                            <option>Room Temp (20-25°C)</option>
                            <option>Cold Chain (2-8°C)</option>
                            <option>Deep Freeze (-20°C)</option>
                            <option>Cryogenic (-80°C)</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-3">
                    <label className="text-[11px] font-black text-text-muted uppercase tracking-widest ml-1">Quality Control Documentation (IPFS Payload)</label>
                    <div className="border-2 border-dashed border-slate-100 rounded-2xl p-12 flex flex-col items-center justify-center bg-slate-50/30 hover:bg-white hover:border-primary/30 transition-all cursor-pointer group shadow-sm">
                        <div className="size-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-slate-100 text-primary">
                            <span className="material-symbols-outlined text-[32px] font-bold">upload_file</span>
                        </div>
                        <p className="text-[14px] font-black text-text-main tracking-tight">Upload Production Certificate</p>
                        <p className="text-[10px] text-text-muted mt-1.5 uppercase font-bold tracking-[0.1em] opacity-60">PDF, IPFS Hash, or Laboratory Analysis Report</p>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3 bg-emerald-50 px-4 py-2.5 rounded-xl border border-emerald-100">
                        <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest leading-none">Mainnet Ready • L2 Compatible</span>
                    </div>
                    <button className="btn-primary py-4 px-10 rounded-2xl text-[11px] font-black tracking-[0.1em] shadow-2xl shadow-primary/30 flex items-center gap-3">
                        <span className="material-symbols-outlined font-black">token</span>
                        INITIALIZE BLOCKCHAIN BATCH
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BatchForm;
