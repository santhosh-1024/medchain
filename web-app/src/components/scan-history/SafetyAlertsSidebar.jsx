import React from 'react';

const SafetyAlertsSidebar = () => {
    const alerts = [
        { id: 1, type: 'Security Protocol', time: '2h ago', title: 'Batch #AX-201 Recall', description: 'Immediate quarantine required. Contamination suspected in regional distribution chain.', severity: 'high', color: 'red' },
        { id: 2, type: 'Market Surveillance', time: '1d ago', title: 'Counterfeit Anomaly', description: 'Suspected non-verified items identified in regional node clusters.', severity: 'medium', color: 'orange' },
    ];

    return (
        <div className="space-y-6">
            <div className="medical-card p-0 overflow-hidden bg-white shadow-md border-none">
                <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-white">
                    <h3 className="font-bold text-text-main flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-primary text-[22px]">health_metrics</span>
                        Medical Safety
                    </h3>
                    <div className="relative">
                        <span className="absolute -top-1 -right-1 size-2.5 bg-red-500 rounded-full animate-ping"></span>
                        <span className="px-2.5 py-1 bg-red-50 text-red-600 text-[10px] font-black rounded-full border border-red-100 uppercase tracking-widest">Live</span>
                    </div>
                </div>
                <div className="p-5 space-y-4">
                    {alerts.map((alert) => (
                        <div key={alert.id} className={`p-4 rounded-2xl border transition-all hover:shadow-sm ${alert.color === 'red' ? 'bg-red-50/30 border-red-100' : 'bg-amber-50/30 border-amber-100'}`}>
                            <div className="flex justify-between items-start mb-2">
                                <p className={`text-[10px] font-black uppercase tracking-[0.1em] ${alert.color === 'red' ? 'text-red-600' : 'text-amber-700'}`}>{alert.type}</p>
                                <span className="text-[10px] text-text-muted font-bold">{alert.time}</span>
                            </div>
                            <p className="text-[14px] font-bold text-text-main leading-tight">{alert.title}</p>
                            <p className="text-[12px] text-text-muted mt-2 leading-relaxed">{alert.description}</p>
                            {alert.severity === 'high' && (
                                <button className="mt-3 text-[11px] font-black text-red-600 uppercase tracking-widest flex items-center gap-1.5 group">
                                    Full Protocol
                                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            )}
                        </div>
                    ))}
                    <button className="w-full py-2.5 text-center text-[11px] font-black text-text-muted hover:text-primary transition-all uppercase tracking-[0.15em] border-t border-slate-50 mt-2">Audit History</button>
                </div>
            </div>

            <div className="medical-card bg-primary/5 border-none p-6 space-y-5">
                <h4 className="font-bold text-text-main flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-xl">verified</span>
                    Compliance Protocol
                </h4>
                <div className="space-y-4">
                    {[
                        'Verify tamper-evident seal integrity.',
                        'Cryptographic QR validation required.',
                        'Cross-reference ledger batch ID.'
                    ].map((tip, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <span className="size-5 rounded-full bg-white flex items-center justify-center border border-primary/20 shrink-0 mt-0.5">
                                <span className="material-symbols-outlined text-primary text-[12px] font-bold">check</span>
                            </span>
                            <p className="text-[12px] text-text-muted leading-relaxed font-medium">{tip}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-3">
                <button className="btn-secondary w-full py-3.5 flex items-center justify-center gap-2.5 font-bold shadow-sm border border-slate-100">
                    <span className="material-symbols-outlined text-primary">local_hospital</span>
                    Network Directory
                </button>
                <button className="btn-secondary w-full py-3.5 flex items-center justify-center gap-2.5 font-bold shadow-sm border border-slate-100">
                    <span className="material-symbols-outlined text-primary">contact_support</span>
                    System Support
                </button>
            </div>
        </div>
    );
};

export default SafetyAlertsSidebar;
