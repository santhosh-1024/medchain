import React from 'react';

const BatchTable = () => {
    const batches = [
        { id: 'BCH-882-X', name: 'Amoxicillin 250mg', status: 'Active', expiry: '2025-12-15', storage: '20-25°C', statusColor: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' },
        { id: 'BCH-771-Y', name: 'Insulin Glargine', status: 'Expired', expiry: '2023-10-01', storage: '2-8°C', statusColor: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' },
        { id: 'BCH-104-Z', name: 'Lisinopril 10mg', status: 'Recalled', expiry: '2026-05-20', storage: '20-25°C', statusColor: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400', rowClass: 'bg-rose-50/20 dark:bg-rose-900/10' },
        { id: 'BCH-552-K', name: 'Atorvastatin 40mg', status: 'Active', expiry: '2025-08-11', storage: '20-25°C', statusColor: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' },
    ];

    return (
        <div className="medical-card p-0 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
                <div>
                    <h3 className="font-bold text-lg text-text-main">Registered Batches</h3>
                    <p className="text-xs text-text-muted">Manage and monitor pharmaceutical production batches</p>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 hover:bg-slate-50 rounded-lg text-text-muted transition-colors border border-transparent hover:border-slate-200">
                        <span className="material-symbols-outlined text-xl">filter_list</span>
                    </button>
                    <button className="p-2 hover:bg-slate-50 rounded-lg text-text-muted transition-colors border border-transparent hover:border-slate-200">
                        <span className="material-symbols-outlined text-xl">download</span>
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-[12px] font-bold text-text-muted uppercase tracking-widest bg-slate-50/50">
                            <th className="px-6 py-4">Batch ID</th>
                            <th className="px-6 py-4">Medicine Name</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Expiry Date</th>
                            <th className="px-6 py-4">Storage Info</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                        {batches.map((batch) => (
                            <tr key={batch.id} className={`hover:bg-slate-50/50 transition-colors ${batch.rowClass || ''}`}>
                                <td className="px-6 py-4 font-mono text-[13px] text-primary font-bold cursor-pointer hover:underline">{batch.id}</td>
                                <td className="px-6 py-4">
                                    <div className="font-semibold text-text-main">{batch.name}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${batch.status === 'Active' ? 'bg-green-100 text-green-700' : batch.status === 'Recalled' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                                        {batch.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-text-muted">{batch.expiry}</td>
                                <td className="px-6 py-4 text-text-muted font-medium">{batch.storage}</td>
                                <td className="px-6 py-4 text-right">
                                    {batch.status === 'Recalled' ? (
                                        <button className="text-[11px] font-bold text-text-muted uppercase tracking-tight border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-all">View Report</button>
                                    ) : batch.status === 'Expired' ? (
                                        <button className="text-[11px] font-bold text-slate-300 cursor-not-allowed uppercase tracking-tight" disabled>Archived</button>
                                    ) : (
                                        <button className="text-[11px] font-bold text-red-600 hover:text-red-700 transition-all uppercase tracking-tight hover:bg-red-50 px-3 py-1.5 rounded-lg border border-transparent hover:border-red-100">Recall Batch</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="p-6 border-t border-slate-100 bg-slate-50/30 flex items-center justify-between">
                <p className="text-xs text-text-muted font-medium">Showing <span className="text-text-main">4</span> of <span className="text-text-main">1,284</span> production batches</p>
                <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-xs font-bold text-text-muted hover:bg-slate-50 hover:text-text-main transition-all">Previous</button>
                    <button className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-xs font-bold text-text-muted hover:bg-slate-50 hover:text-text-main transition-all">Next</button>
                </div>
            </div>
        </div>
    );
};

export default BatchTable;
