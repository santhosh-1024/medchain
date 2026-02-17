import React, { useState } from 'react';

const BatchTable = () => {
    const [batches, setBatches] = useState([
        {
            id: 'BCH-882194',
            name: 'Amoxicillin 250mg',
            status: 'Active',
            mfd: '2024-01-10',
            expiry: '2025-12-15',
            storage: '20-25°C',
            scans: 42,
            alerts: 0,
            txHash: '0x3a4...e92'
        },
        {
            id: 'BCH-771821',
            name: 'Insulin Glargine',
            status: 'Warning',
            mfd: '2023-09-01',
            expiry: '2023-11-01',
            storage: '2-8°C',
            scans: 128,
            alerts: 2,
            txHash: '0x992...c44'
        },
        {
            id: 'BCH-104992',
            name: 'Lisinopril 10mg',
            status: 'Recalled',
            mfd: '2024-02-15',
            expiry: '2026-05-20',
            storage: '20-25°C',
            scans: 15,
            alerts: 1,
            txHash: '0x12a...b78'
        },
        {
            id: 'BCH-552711',
            name: 'Atorvastatin 40mg',
            status: 'Active',
            mfd: '2024-03-20',
            expiry: '2025-08-11',
            storage: '20-25°C',
            scans: 0,
            alerts: 0,
            txHash: '0xfd4...a12'
        },
    ]);

    const handleRecall = (id) => {
        setBatches(batches.map(b => b.id === id ? { ...b, status: 'Recalled' } : u));
    };

    return (
        <div className="medical-card p-0 overflow-hidden border-none shadow-none bg-white">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50/50 text-[11px] font-black text-text-muted uppercase tracking-[0.2em] border-b border-slate-100">
                            <th className="px-6 py-5">Batch & Product</th>
                            <th className="px-6 py-5">Status</th>
                            <th className="px-6 py-5">Mfd / Exp</th>
                            <th className="px-6 py-5 text-center">Analytics</th>
                            <th className="px-6 py-5 text-right">Ledger Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                        {batches.map((batch) => (
                            <tr key={batch.id} className="hover:bg-slate-50/50 transition-colors group">
                                <td className="px-6 py-5">
                                    <div className="flex items-center gap-4">
                                        <div className="size-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-[22px]">medication</span>
                                        </div>
                                        <div>
                                            <p className="text-[14px] font-black text-text-main leading-tight">{batch.name}</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">ID:</span>
                                                <code className="text-[10px] font-black font-mono text-primary bg-primary/5 px-1.5 py-0.5 rounded tracking-tighter">{batch.id}</code>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-5">
                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${batch.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                            batch.status === 'Recalled' ? 'bg-red-50 text-red-600 border-red-100' :
                                                'bg-amber-50 text-amber-600 border-amber-100'
                                        }`}>
                                        <span className={`size-1.5 rounded-full ${batch.status === 'Active' ? 'bg-emerald-500' : batch.status === 'Recalled' ? 'bg-red-500' : 'bg-amber-500 animate-pulse'}`}></span>
                                        {batch.status}
                                    </span>
                                </td>
                                <td className="px-6 py-5">
                                    <p className="text-[11px] font-black text-text-main">{batch.mfd}</p>
                                    <p className="text-[10px] font-bold text-text-muted mt-0.5 uppercase tracking-tighter">Exp: {batch.expiry}</p>
                                </td>
                                <td className="px-6 py-5">
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-sm text-text-muted">tab_unselected</span>
                                            <span className="text-[12px] font-black text-text-main">{batch.scans} Scans</span>
                                        </div>
                                        {batch.alerts > 0 && (
                                            <div className="flex items-center gap-1 text-red-500 text-[9px] font-black uppercase tracking-widest">
                                                <span className="material-symbols-outlined text-[12px]">warning</span>
                                                {batch.alerts} Anomalies
                                            </div>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-5 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="size-9 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-all flex items-center justify-center shadow-sm" title="Download QR Code">
                                            <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
                                        </button>
                                        <button className="size-9 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-all flex items-center justify-center shadow-sm" title="Transfer Ownership">
                                            <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                                        </button>
                                        {batch.status === 'Active' && (
                                            <button
                                                onClick={() => handleRecall(batch.id)}
                                                className="size-9 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-100 transition-all flex items-center justify-center shadow-sm"
                                                title="Recall Batch"
                                            >
                                                <span className="material-symbols-outlined text-[20px]">running_with_errors</span>
                                            </button>
                                        )}
                                        <button className="size-9 rounded-xl bg-slate-900 text-white hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-lg" title="View Ledger Transaction">
                                            <span className="material-symbols-outlined text-[20px]">link</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BatchTable;
