import React from 'react';

const ScanDetailView = ({ scan }) => {
    if (!scan) return null;

    return (
        <div className="medical-card p-0 overflow-hidden flex flex-col bg-white border-none shadow-medical">
            <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row justify-between items-start bg-white gap-6">
                <div className="flex gap-6">
                    <div className="size-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20 shadow-sm shadow-primary/5 scale-105 shrink-0">
                        <span className="material-symbols-outlined text-[40px]">{scan.icon}</span>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${scan.status === 'Genuine' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                    scan.status === 'Counterfeit' ? 'bg-red-50 text-red-600 border-red-100' :
                                        'bg-amber-50 text-amber-600 border-amber-100'
                                }`}>
                                {scan.status} UNIT
                            </span>
                            <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest bg-slate-100 px-2 py-1 rounded-lg">VERIFICATION #{scan.id}</span>
                        </div>
                        <h3 className="text-3xl font-black text-text-main tracking-tighter leading-none">{scan.name}</h3>
                        <div className="flex items-center gap-4 mt-4">
                            <div className="flex flex-col">
                                <span className="text-[10px] text-text-muted font-black uppercase tracking-widest mb-1">Batch Code</span>
                                <code className="text-[12px] font-mono font-black text-primary bg-primary/5 px-2.5 py-1 rounded border border-primary/10 tracking-tighter">{scan.batchId}</code>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-text-muted font-black uppercase tracking-widest mb-1">Mfd Date</span>
                                <span className="text-[13px] font-bold text-text-main">{scan.mfd}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-text-muted font-black uppercase tracking-widest mb-1">Exp Date</span>
                                <span className="text-[13px] font-bold text-text-main">{scan.expiry}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-3 w-full md:w-auto">
                    <div className="text-right">
                        <p className="text-[11px] font-black text-text-main uppercase tracking-widest">{scan.fullDate}</p>
                        <p className="text-[10px] text-text-muted font-bold flex items-center justify-end gap-1 mt-1">
                            <span className="material-symbols-outlined text-xs">location_on</span>
                            {scan.location}
                        </p>
                    </div>
                    <button className="btn-primary w-full md:w-auto py-3 px-8 text-[11px] font-black tracking-widest shadow-xl shadow-primary/20 uppercase">Download Audit PDF</button>
                </div>
            </div>

            <div className="p-10 space-y-10 flex-1 bg-slate-50/20">
                <div>
                    <h4 className="text-[11px] font-black text-text-muted uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">hub</span>
                        Smart Contract Custody Sequence
                    </h4>

                    <div className="flex flex-col md:flex-row justify-between relative gap-10">
                        <div className="absolute top-[22px] left-[10%] right-[10%] h-0.5 bg-slate-100 z-0 hidden md:block"></div>

                        {[
                            { label: 'Manufactured', entity: 'PharmaCorp', icon: 'factory', date: scan.mfd },
                            { label: 'Distributed', entity: 'Logistics NV', icon: 'local_shipping', date: 'Jan 02, 2024' },
                            { label: 'Dispensed', entity: 'Health Pharmacy', icon: 'medical_services', date: 'Jan 10, 2024' },
                            { label: 'Verified', entity: 'You (Consumer)', icon: 'person', date: scan.date.split(' • ')[0] }
                        ].map((step, i) => (
                            <div key={i} className="flex flex-row md:flex-col items-center gap-4 text-center relative z-10 flex-1">
                                <div className={`size-11 rounded-xl flex items-center justify-center text-white shadow-md border-4 border-white ${scan.status === 'Genuine' ? 'bg-emerald-500' : 'bg-slate-300'}`}>
                                    <span className="material-symbols-outlined text-[18px] font-bold">{step.icon}</span>
                                </div>
                                <div className="text-left md:text-center pt-1 md:pt-0">
                                    <p className="text-[13px] font-black text-text-main tracking-tight leading-none">{step.label}</p>
                                    <p className="text-[10px] text-text-muted font-bold uppercase tracking-tighter mt-1">{step.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mt-8 border-none shadow-medical">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="size-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-sm">enhanced_encryption</span>
                            </div>
                            <span className="text-[11px] font-black text-text-main uppercase tracking-widest">Protocol Intelligence Signature</span>
                        </div>
                        <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full border border-emerald-100">Validated by AI</span>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="text-[9px] font-black text-text-muted uppercase tracking-widest block mb-1.5 ml-1">Blockchain Transaction ID</label>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between gap-4">
                                <code className="text-[12px] text-text-muted break-all font-mono font-bold tracking-tighter">{scan.txHash}</code>
                                <button className="p-2 hover:bg-white rounded-lg text-slate-300 hover:text-primary transition-all">
                                    <span className="material-symbols-outlined text-lg">content_copy</span>
                                </button>
                            </div>
                        </div>
                        <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100/50">
                            <p className="text-[11px] text-emerald-700 font-bold leading-relaxed italic border-l-2 border-emerald-300 pl-3">
                                This medicine has been successfully verified on the blockchain. No suspicious scan patterns or batch duplications were detected at the time of verification.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScanDetailView;
