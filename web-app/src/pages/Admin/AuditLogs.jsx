import React from 'react';

const AuditLogs = () => {
    const logs = [
        { id: 'TX-882194', event: 'Batch Creation', entity: 'BioGen Global', hash: '0x3a4...e92', time: '10:24 AM', status: 'Finalized' },
        { id: 'TX-882195', event: 'Ownership Transfer', entity: 'SwiftLogix', hash: '0xfd4...a12', time: '11:15 AM', status: 'Finalized' },
        { id: 'TX-882196', event: 'Identity Verification', entity: 'MedSource Inc.', hash: '0x12a...b78', time: '12:02 PM', status: 'Pending' },
        { id: 'TX-882197', event: 'Recall Initiation', entity: 'PharmaCorp', hash: '0x992...c44', time: '01:45 PM', status: 'Finalized' },
    ];

    return (
        <div className="flex flex-col gap-0 w-full animate-in fade-in slide-in-from-bottom-4 duration-700 -m-8">
            <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 flex items-center justify-between shadow-sm sticky top-0 z-30 w-full">
                <div className="flex items-center gap-3">
                    <div className="size-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-lg">
                        <span className="material-symbols-outlined font-bold text-2xl">history_edu</span>
                    </div>
                    <div>
                        <h2 className="text-text-main text-lg font-black leading-tight tracking-tight">Compliance Audit</h2>
                        <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Trustless Ledger Event Stream</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="btn-primary py-2.5 px-6 text-[11px] font-black shadow-lg shadow-primary/20 flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">download</span>
                        EXPORT PDF REPORT
                    </button>
                </div>
            </header>

            <main className="max-w-[1500px] mx-auto w-full px-8 py-10">
                <div className="medical-card p-0 overflow-hidden bg-white border-none shadow-medical">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                        <h3 className="font-black text-[12px] text-text-main uppercase tracking-widest">Immutable Transaction History</h3>
                        <span className="text-[10px] font-bold text-text-muted uppercase bg-slate-100 px-3 py-1 rounded-full">Blockchain Mainnet-04</span>
                    </div>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 text-[11px] font-black text-text-muted uppercase tracking-[0.2em] border-b border-slate-100">
                                <th className="px-6 py-4">Transaction ID</th>
                                <th className="px-6 py-4">Event Type</th>
                                <th className="px-6 py-4">Initiating Entity</th>
                                <th className="px-6 py-4 font-mono">Ledger Hash</th>
                                <th className="px-6 py-4">Timestamp</th>
                                <th className="px-6 py-4 text-center">Finality</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {logs.map((log) => (
                                <tr key={log.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-6 py-5 font-black text-text-main text-[13px]">{log.id}</td>
                                    <td className="px-6 py-5 font-bold text-text-muted text-[12px]">{log.event}</td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <div className="size-2 rounded-full bg-primary/20"></div>
                                            <span className="font-bold text-text-main text-[13px]">{log.entity}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <code className="text-[11px] font-mono text-primary bg-primary/5 px-2 py-1 rounded border border-primary/10 tracking-tighter">
                                            {log.hash}
                                        </code>
                                    </td>
                                    <td className="px-6 py-5 text-[12px] font-bold text-text-muted">{log.time}</td>
                                    <td className="px-6 py-5 text-center">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${log.status === 'Finalized' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'
                                            }`}>
                                            <span className={`size-1.5 rounded-full ${log.status === 'Finalized' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></span>
                                            {log.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default AuditLogs;
