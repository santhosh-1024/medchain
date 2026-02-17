import React from 'react';

const BatchForm = () => {
    return (
        <div className="medical-card p-0 overflow-hidden flex flex-col h-full bg-white">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
                <div>
                    <h3 className="font-bold text-lg flex items-center gap-2 text-text-main">
                        <span className="material-symbols-outlined text-primary text-2xl">add_circle</span>
                        Register New Batch
                    </h3>
                    <p className="text-xs text-text-muted">Enter production details for blockchain registration</p>
                </div>
                <span className="text-[10px] font-bold px-3 py-1 bg-slate-100 rounded-full uppercase tracking-widest text-text-muted border border-slate-200">System ID: B-092</span>
            </div>

            <div className="p-8 space-y-7 flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="flex flex-col gap-2.5">
                        <span className="text-[13px] font-semibold text-text-main uppercase tracking-wide">Medicine Name</span>
                        <input className="input-field" placeholder="e.g. Amoxicillin 500mg" type="text" />
                    </label>
                    <label className="flex flex-col gap-2.5">
                        <span className="text-[13px] font-semibold text-text-main uppercase tracking-wide">Batch Serial Number (SKU)</span>
                        <input className="input-field" placeholder="BCH-992-ALPHA" type="text" />
                    </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <label className="flex flex-col gap-2.5">
                        <span className="text-[13px] font-semibold text-text-main uppercase tracking-wide">Manufacturing Date</span>
                        <input className="input-field" type="date" />
                    </label>
                    <label className="flex flex-col gap-2.5">
                        <span className="text-[13px] font-semibold text-text-main uppercase tracking-wide">Expiration Date</span>
                        <input className="input-field" type="date" />
                    </label>
                    <label className="flex flex-col gap-2.5">
                        <span className="text-[13px] font-semibold text-text-main uppercase tracking-wide">Storage Conditions</span>
                        <select className="input-field appearance-none bg-no-repeat bg-[right_1rem_center]">
                            <option>Room Temp (20-25°C)</option>
                            <option>Refrigerated (2-8°C)</option>
                            <option>Frozen (-20°C)</option>
                            <option>Ultra-Low (-80°C)</option>
                        </select>
                    </label>
                </div>

                <div className="flex flex-col gap-2.5">
                    <span className="text-[13px] font-semibold text-text-main uppercase tracking-wide">Compliance Documentation (PDF/IPFS)</span>
                    <div className="border-2 border-dashed border-slate-200 rounded-[12px] p-10 flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-50 hover:border-primary/40 transition-all cursor-pointer group">
                        <div className="size-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform border border-slate-100">
                            <span className="material-symbols-outlined text-2xl text-primary">cloud_upload</span>
                        </div>
                        <p className="text-sm font-semibold text-text-main">Click to upload or drag and drop</p>
                        <p className="text-[11px] text-text-muted mt-1 uppercase font-medium tracking-tight">Required: Lab Analysis Report (Max 10MB)</p>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-4">
                    <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
                        <span className="material-symbols-outlined text-slate-400 text-lg">database</span>
                        <span className="text-[11px] font-mono text-slate-500 truncate max-w-[200px]">Node: Mainnet-Node-0x112</span>
                    </div>
                    <button className="btn-primary flex items-center gap-2 px-8">
                        <span className="material-symbols-outlined text-xl">assured_workload</span>
                        Initialize Batch Ledger
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BatchForm;
