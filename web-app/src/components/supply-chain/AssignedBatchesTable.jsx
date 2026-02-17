import React from 'react';

const AssignedBatchesTable = () => {
    const batches = [
        { id: 'BCH-88291-MED', name: 'Amoxicillin 500mg', type: 'Antibiotic', owner: 'Global Logistics Ltd.', status: 'Ready', statusBg: 'bg-primary/10', statusColor: 'text-primary' },
        { id: 'BCH-77402-MED', name: 'Lisinopril 10mg', type: 'Hypertension', owner: 'Global Logistics Ltd.', status: 'In Warehouse', statusBg: 'bg-amber-50 dark:bg-amber-900/20', statusColor: 'text-amber-500' },
        { id: 'BCH-99123-MED', name: 'Metformin 850mg', type: 'Diabetes', owner: 'Global Logistics Ltd.', status: 'On Hold', statusBg: 'bg-slate-100 dark:bg-slate-800', statusColor: 'text-slate-400' },
    ];

    return (
        <div className="medical-card p-0 overflow-hidden flex flex-col bg-white">
            <div className="p-6 border-b border-slate-100 bg-white flex items-center justify-between">
                <div>
                    <h3 className="font-bold text-lg text-text-main">Inventory Custody</h3>
                    <p className="text-xs text-text-muted">Select batches for cryptographic ownership transfer</p>
                </div>
                <div className="relative group">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-primary transition-colors">search</span>
                    <input
                        className="input-field pl-10 pr-4 py-2 text-sm w-72 h-10"
                        placeholder="Search by Batch ID or SKU..."
                        type="text"
                    />
                </div>
            </div>

            <div className="overflow-x-auto flex-1">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50/50 border-b border-slate-100 text-[12px] font-bold text-text-muted uppercase tracking-widest">
                            <th className="px-6 py-4 w-12 text-center">
                                <div className="flex items-center justify-center">
                                    <input className="rounded-[4px] border-slate-300 text-primary focus:ring-primary/20 scale-110 cursor-pointer" type="checkbox" />
                                </div>
                            </th>
                            <th className="px-6 py-4">Global Batch ID</th>
                            <th className="px-6 py-4">Product Inventory</th>
                            <th className="px-6 py-4">Current Entity</th>
                            <th className="px-6 py-4">Ledger Status</th>
                            <th className="px-4 py-4 text-center">Audit</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                        {batches.map((batch, index) => (
                            <tr key={index} className="hover:bg-slate-50/50 transition-colors group cursor-default">
                                <td className="px-6 py-4 text-center">
                                    <div className="flex items-center justify-center">
                                        <input className="rounded-[4px] border-slate-300 text-primary focus:ring-primary/20 scale-110 cursor-pointer" type="checkbox" defaultChecked={index < 2} />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-mono text-[12px] font-bold text-primary bg-primary/5 px-2.5 py-1 rounded-lg border border-primary/10 tracking-tight">
                                        {batch.id}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <p className="font-bold text-text-main text-[14px]">{batch.name}</p>
                                        <p className="text-[10px] text-text-muted uppercase font-bold tracking-tighter mt-0.5">{batch.type}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2.5 text-text-main font-semibold">
                                        <div className="size-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-slate-400 text-lg">corporate_fare</span>
                                        </div>
                                        <span className="text-[13px]">{batch.owner}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-widest border ${batch.status === 'Ready' ? 'bg-green-100/50 text-green-700 border-green-200' :
                                            batch.status === 'In Warehouse' ? 'bg-amber-100/50 text-amber-700 border-amber-200' :
                                                'bg-slate-100 text-slate-500 border-slate-200'
                                        }`}>
                                        {batch.status}
                                    </span>
                                </td>
                                <td className="px-4 py-4 text-center">
                                    <button className="p-2 hover:bg-white hover:shadow-md rounded-xl text-slate-400 hover:text-text-main transition-all border border-transparent hover:border-slate-100">
                                        <span className="material-symbols-outlined text-lg">wysiwyg</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AssignedBatchesTable;
