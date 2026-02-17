import React from 'react';

const AdminSettings = () => {
    return (
        <div className="flex flex-col gap-0 w-full animate-in fade-in slide-in-from-bottom-4 duration-700 -m-8">
            <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 flex items-center justify-between shadow-sm sticky top-0 z-30 w-full">
                <div className="flex items-center gap-3">
                    <div className="size-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 border border-slate-200 shadow-sm">
                        <span className="material-symbols-outlined font-bold text-2xl">settings</span>
                    </div>
                    <div>
                        <h2 className="text-text-main text-lg font-black leading-tight tracking-tight">Network Configuration</h2>
                        <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Protocol & Alert Thresholds</p>
                    </div>
                </div>
            </header>

            <main className="max-w-[1500px] mx-auto w-full px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Protocol Settings */}
                <div className="medical-card p-8 bg-white border-none shadow-medical">
                    <h3 className="text-lg font-black text-text-main uppercase tracking-tighter mb-6 flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">lan</span>
                        Ledger Protocol Settings
                    </h3>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-text-muted uppercase tracking-widest ml-1">Primary Smart Contract Address</label>
                            <div className="relative group">
                                <input readOnly value="0x882194adF89e17b8C4c21D9bE492194adF89e17b8" className="input-field w-full font-mono bg-slate-50 border-slate-100 text-[13px] tracking-tighter pr-12" />
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-primary transition-colors cursor-pointer">lock</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-text-muted uppercase tracking-widest ml-1">Network Selection</label>
                            <select className="input-field w-full font-bold bg-white border-slate-200">
                                <option>Polygon POS Mainnet</option>
                                <option>MedChain Private Sidechain</option>
                                <option>Development Testnet (Mumbai)</option>
                            </select>
                        </div>

                        <div className="pt-4 border-t border-slate-100 flex justify-end">
                            <button className="btn-primary py-3 px-8 text-[11px] font-black">SAVE PROTOCOL SETTINGS</button>
                        </div>
                    </div>
                </div>

                {/* Alert Thresholds */}
                <div className="medical-card p-8 bg-white border-none shadow-medical">
                    <h3 className="text-lg font-black text-text-main uppercase tracking-tighter mb-6 flex items-center gap-3">
                        <span className="material-symbols-outlined text-red-500">notifications_active</span>
                        Security Alert Thresholds
                    </h3>
                    <div className="space-y-6">
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <div>
                                <p className="text-[13px] font-black text-text-main">Geographic Scan Multiplier</p>
                                <p className="text-[11px] text-text-muted font-medium mt-0.5">Alert if same batch scanned across 100km+ in 5min</p>
                            </div>
                            <div className="flex items-center gap-3 min-w-[80px] justify-end">
                                <span className="text-[13px] font-black text-text-main">100 KM</span>
                                <div className="size-4 rounded-full bg-primary flex items-center justify-center">
                                    <div className="size-1.5 bg-white rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <div>
                                <p className="text-[13px] font-black text-text-main">Duplicate ID Prevention</p>
                                <p className="text-[11px] text-text-muted font-medium mt-0.5">Auto-block attempts to register existing Ledger IDs</p>
                            </div>
                            <div className="relative inline-block w-10 h-6 align-middle select-none transition duration-200 ease-in">
                                <input type="checkbox" name="toggle" id="toggle" defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-primary" />
                                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-primary cursor-pointer"></label>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-slate-100 flex justify-end">
                            <button className="btn-secondary py-3 px-8 text-[11px] font-black border border-slate-200">RESET TO FACTORY DEFAULTS</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminSettings;
