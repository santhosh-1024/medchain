import React, { useState } from 'react';

const AssignedBatchesTable = () => {
    const [batches] = useState([
        {
            id: 'BCH-88291-MED',
            name: 'Amoxicillin 500mg',
            type: 'Antibiotic',
            owner: 'Global Logistics Ltd.',
            status: 'Ready',
            txHash: '0x3a4...e92',
            history: [
                { entity: 'PharmaCorp Global', action: 'Manufactured', time: 'Jan 10, 2024' },
                { entity: 'Global Logistics Ltd.', action: 'In Transit', time: 'Jan 15, 2024' }
            ]
        },
        {
            id: 'BCH-77402-MED',
            name: 'Lisinopril 10mg',
            type: 'Hypertension',
            owner: 'Global Logistics Ltd.',
            status: 'In Warehouse',
            txHash: '0xfd4...a12',
            history: [
                { entity: 'BioGen Lab', action: 'Manufactured', time: 'Feb 05, 2024' },
                { entity: 'Global Logistics Ltd.', action: 'Received', time: 'Feb 12, 2024' }
            ]
        },
        {
            id: 'BCH-99123-MED',
            name: 'Metformin 850mg',
            type: 'Diabetes',
            owner: 'Global Logistics Ltd.',
            status: 'On Hold',
            txHash: '0x12a...b78',
            history: [
                { entity: 'PharmaCorp Global', action: 'Manufactured', time: 'Mar 01, 2024' }
            ]
        },
    ]);

    const [selectedBatch, setSelectedBatch] = useState(null);

    return (
        <div className="flex flex-col gap-6">
            <div className="medical-card p-0 overflow-hidden flex flex-col bg-white border-none shadow-medical">
                <div className="p-6 border-b border-slate-100 bg-white flex items-center justify-between">
                    <div>
                        <h3 className="font-black text-[12px] text-text-main uppercase tracking-widest">Inventory Custody</h3>
                        <p className="text-[11px] text-text-muted font-bold mt-1 uppercase tracking-tight">Active Ownership Authorization Pool</p>
                    </div>
                    <div className="relative group">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-primary transition-colors">search</span>
                        <input
                            className="input-field pl-10 pr-4 py-2 text-xs w-72 h-10 border-slate-100"
                            placeholder="Filter by Batch ID..."
                            type="text"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto flex-1">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100 text-[11px] font-black text-text-muted uppercase tracking-[0.2em]">
                                <th className="px-6 py-5 w-12 text-center">
                                    <div className="flex items-center justify-center">
                                        <input className="rounded-[4px] border-slate-300 text-primary focus:ring-primary/20 scale-110 cursor-pointer" type="checkbox" />
                                    </div>
                                </th>
                                <th className="px-6 py-5">Global Batch ID</th>
                                <th className="px-6 py-5">Product Details</th>
                                <th className="px-6 py-5">Current Custodian</th>
                                <th className="px-6 py-5 text-center">Status</th>
                                <th className="px-4 py-5 text-right">Ledger Data</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm">
                            {batches.map((batch, index) => (
                                <tr key={batch.id} className="hover:bg-slate-50/50 transition-colors group cursor-pointer" onClick={() => setSelectedBatch(batch)}>
                                    <td className="px-6 py-5 text-center">
                                        <div className="flex items-center justify-center">
                                            <input className="rounded-[4px] border-slate-300 text-primary focus:ring-primary/20 scale-110 cursor-pointer" type="checkbox" />
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="font-mono text-[10px] font-black text-primary bg-primary/5 px-2.5 py-1 rounded-lg border border-primary/10 tracking-tighter">
                                            {batch.id}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <p className="font-black text-text-main text-[14px] leading-tight">{batch.name}</p>
                                        <p className="text-[10px] text-text-muted uppercase font-bold tracking-widest mt-1">{batch.type}</p>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2.5 text-text-main font-bold">
                                            <div className="size-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                                                <span className="material-symbols-outlined text-lg">corporate_fare</span>
                                            </div>
                                            <span className="text-[13px]">{batch.owner}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <span className={`px-3 py-1 text-[10px] font-black rounded-full uppercase tracking-widest border ${batch.status === 'Ready' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                                batch.status === 'In Warehouse' ? 'bg-amber-50 text-amber-700 border-amber-100' :
                                                    'bg-slate-100 text-slate-500 border-slate-200'
                                            }`}>
                                            {batch.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-5 text-right">
                                        <button className="h-9 w-9 bg-white border border-slate-200 rounded-xl text-slate-400 group-hover:text-primary group-hover:border-primary transition-all flex items-center justify-center shadow-sm">
                                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {selectedBatch && (
                <div className="medical-card p-0 overflow-hidden bg-white border-none shadow-medical animate-in slide-in-from-right-4 duration-500">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">history</span>
                            <h3 className="font-black text-[12px] text-text-main uppercase tracking-widest">Ownership Heritage: {selectedBatch.id}</h3>
                        </div>
                        <button onClick={() => setSelectedBatch(null)} className="text-slate-400 hover:text-text-main">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                    <div className="p-8">
                        <div className="relative space-y-8">
                            {selectedBatch.history.map((step, i) => (
                                <div key={i} className="flex gap-6 relative">
                                    {i !== selectedBatch.history.length - 1 && (
                                        <div className="absolute left-[19px] top-[40px] bottom-[-20px] w-0.5 bg-slate-100"></div>
                                    )}
                                    <div className="size-10 rounded-full bg-slate-50 border-2 border-slate-100 flex items-center justify-center shrink-0 z-10">
                                        <span className="material-symbols-outlined text-slate-400 text-lg">check_circle</span>
                                    </div>
                                    <div className="flex-1 pb-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="font-black text-text-main text-[14px] leading-tight">{step.entity}</p>
                                                <p className="text-[11px] font-bold text-text-muted uppercase tracking-[0.1em] mt-1">{step.action}</p>
                                            </div>
                                            <span className="text-[11px] font-bold text-slate-400">{step.time}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="pt-6 border-t border-slate-50">
                                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest block mb-2 underline">Ledger Authenticity Code (TX Hash)</label>
                                <code className="text-[11px] font-mono font-black text-primary bg-primary/5 px-3 py-2 rounded-xl border border-primary/10 block break-all">
                                    {selectedBatch.txHash}
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AssignedBatchesTable;
