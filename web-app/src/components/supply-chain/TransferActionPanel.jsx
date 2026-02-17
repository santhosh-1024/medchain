import React, { useState } from 'react';

const TransferActionPanel = () => {
    const [selectedBatches, setSelectedBatches] = useState(['BCH-88291', 'BCH-77402']);

    const removeBatch = (batch) => {
        setSelectedBatches(selectedBatches.filter(b => b !== batch));
    };

    return (
        <div className="sticky top-24 medical-card p-0 overflow-hidden self-start bg-white">
            <div className="p-5 border-b border-slate-100 bg-white">
                <h3 className="font-bold text-text-main flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-xl">send_and_archive</span>
                    Handover Custody
                </h3>
                <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider mt-1">Smart Contract Operation</p>
            </div>
            <div className="p-6 space-y-7">
                <div>
                    <label className="block text-[11px] font-bold uppercase text-text-muted tracking-widest mb-3">Batches for Transfer</label>
                    <div className="flex flex-wrap gap-2">
                        {selectedBatches.map(batch => (
                            <span key={batch} className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg text-xs font-mono font-bold text-primary border border-slate-100 shadow-sm">
                                {batch}
                                <button onClick={() => removeBatch(batch)} className="text-slate-300 hover:text-error transition-colors flex items-center">
                                    <span className="material-symbols-outlined text-[16px]">cancel</span>
                                </button>
                            </span>
                        ))}
                        {selectedBatches.length === 0 && (
                            <p className="text-xs text-slate-400 italic">No batches selected</p>
                        )}
                    </div>
                </div>

                <div>
                    <label className="block text-[11px] font-bold uppercase text-text-muted tracking-widest mb-2" htmlFor="next-owner">Authorized Recipient</label>
                    <div className="relative">
                        <select className="input-field appearance-none py-3.5 pl-4 pr-10 text-[13px] font-semibold" id="next-owner" defaultValue="City Pharmacy - West Side Hub">
                            <option>Select Destination Entity...</option>
                            <option>City Pharmacy - West Side Hub</option>
                            <option>Green Cross Pharmacy</option>
                            <option>University Hospital Pharmacy</option>
                            <option>Healthline Retail 04</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-xl">expand_more</span>
                    </div>
                </div>

                <div className="pt-4 space-y-4">
                    <button className="btn-primary w-full py-4 flex items-center justify-center gap-3">
                        <span className="material-symbols-outlined font-bold text-xl">handshake</span>
                        Authorize Transfer
                    </button>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <div className="flex gap-3">
                            <span className="material-symbols-outlined text-slate-400 text-lg">info</span>
                            <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                                This cryptographic operation will permanently reassign ownership on the <span className="text-text-main font-bold">blockchain ledger</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransferActionPanel;
