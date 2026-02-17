import React from 'react';

const ScanDetailView = ({ scan }) => {
    if (!scan) return null;

    return (
        <div className="medical-card p-0 overflow-hidden flex flex-col bg-white h-full">
            <div className="p-8 border-b border-slate-100 flex justify-between items-start bg-white">
                <div className="flex gap-5">
                    <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20 shadow-sm shadow-primary/5 scale-110">
                        <span className="material-symbols-outlined text-[32px]">{scan.icon}</span>
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-text-main tracking-tight">{scan.name}</h3>
                        <div className="flex items-center gap-3 mt-1.5">
                            <code className="text-[11px] font-mono font-bold text-primary bg-primary/5 px-2 py-0.5 rounded border border-primary/10">BATCH #{scan.batchId}</code>
                            <div className="flex items-center gap-2 text-[11px] font-bold text-text-muted uppercase tracking-wider">
                                <span className="material-symbols-outlined text-sm">schedule</span>
                                {scan.fullDate}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                    <span className={`px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[0.1em] border shadow-sm ${scan.status === 'Safe' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>
                        {scan.status} IDENTIFIED
                    </span>
                    <div className="flex items-center gap-1 text-[10px] text-text-muted font-bold">
                        <span className="material-symbols-outlined text-xs">location_on</span>
                        {scan.location}
                    </div>
                </div>
            </div>

            <div className="p-8 space-y-8 flex-1 overflow-y-auto bg-slate-50/30">
                <div>
                    <p className="text-[11px] font-black text-text-muted uppercase tracking-[0.15em] mb-8 border-b border-slate-100 pb-2">Cryptographic Custody Timeline</p>
                    <div className="relative">
                        <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-slate-200/50 md:left-0 md:right-0 md:h-0.5 md:w-[90%] md:top-5 md:mx-auto"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                            {['Manufacturer', 'Distributor', 'Pharmacy', 'Consumer'].map((step, i) => (
                                <div key={step} className="flex flex-row md:flex-col items-start md:items-center gap-4 text-center">
                                    <div className={`z-10 size-10 rounded-xl flex items-center justify-center text-white ring-4 ring-white shadow-md ${i <= 3 ? 'bg-primary' : 'bg-slate-300'}`}>
                                        <span className="material-symbols-outlined text-[18px] font-bold">
                                            {i === 0 ? 'factory' : i === 1 ? 'local_shipping' : i === 2 ? 'medical_services' : 'person'}
                                        </span>
                                    </div>
                                    <div className="text-left md:text-center pt-1 md:pt-0">
                                        <p className="text-[13px] font-bold text-text-main">{step}</p>
                                        <p className="text-[10px] text-text-muted font-bold uppercase tracking-tighter mt-0.5 italic">Verified Jan {2 + i * 4}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-[16px] border border-slate-100 shadow-sm mt-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-xl">verified_user</span>
                            <span className="text-[11px] font-black text-text-main uppercase tracking-widest">Digital Audit Signature</span>
                        </div>
                        <button className="text-primary hover:text-primary-dark text-[10px] font-black uppercase tracking-widest bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/20 transition-all">VIEW EXPLORER</button>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between gap-4">
                        <code className="text-[12px] text-text-muted break-all font-mono font-bold">0x71C7656EC7ab88b098defB751B7401B5f6d8976F</code>
                        <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-primary transition-all shadow-sm">
                            <span className="material-symbols-outlined text-lg">content_copy</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScanDetailView;
