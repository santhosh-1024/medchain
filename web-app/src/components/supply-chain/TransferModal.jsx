import React from 'react';

const TransferModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100] flex items-center justify-center p-6 animate-fade-in">
            <div className="bg-white rounded-[20px] w-full max-w-md shadow-2xl overflow-hidden border border-slate-100 animate-scale-up">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-text-main">Blockchain Confirmation</h3>
                        <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mt-0.5">Authorizing Custody Transfer</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full text-slate-400 hover:text-text-main transition-colors">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <div className="p-8 space-y-7">
                    <div className="flex items-center gap-5 p-5 bg-slate-50/80 rounded-[14px] border border-slate-100 shadow-inner">
                        <div className="size-14 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/20 scale-110">
                            <span className="material-symbols-outlined text-2xl font-bold">account_balance_wallet</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-[10px] font-bold uppercase text-text-muted tracking-widest mb-1.5">Gas Allocation</p>
                            <div className="flex items-baseline gap-2">
                                <p className="text-2xl font-bold text-text-main tracking-tight">0.00042 ETH</p>
                                <p className="text-[11px] text-slate-400 font-bold uppercase">≈ $1.24</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center px-2">
                            <span className="text-xs font-bold text-text-muted tracking-wide">TOTAL BATCHES</span>
                            <span className="text-[13px] font-black text-primary bg-primary/5 px-3 py-1 rounded-full">2 UNITS</span>
                        </div>
                        <div className="flex justify-between items-center px-2">
                            <span className="text-xs font-bold text-text-muted tracking-wide">HANDOVER DESTINATION</span>
                            <span className="text-[13px] font-bold text-text-main">City Pharmacy Hub</span>
                        </div>
                        <div className="flex justify-between items-center px-2">
                            <span className="text-xs font-bold text-text-muted tracking-wide">LEDGER VELOCITY</span>
                            <span className="flex items-center gap-1 text-green-600 font-black text-[11px]">
                                <span className="material-symbols-outlined text-sm font-bold">bolt</span>
                                FAST (12 SEC)
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                        <button className="btn-secondary w-full py-3.5 border border-slate-200" onClick={onClose}>
                            Cancel
                        </button>
                        <button className="btn-primary w-full py-3.5 shadow-lg shadow-primary/20">
                            Commit Ledger
                        </button>
                    </div>
                </div>

                <div className="px-8 pb-8 flex items-center justify-center gap-2.5">
                    <div className="size-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Connected: Network Mainnet-04</span>
                </div>
            </div>
        </div>
    );
};

export default TransferModal;
