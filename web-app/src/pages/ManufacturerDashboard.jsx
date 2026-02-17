import React from 'react';
import StatCard from '../components/manufacturer/StatCard';
import BatchForm from '../components/manufacturer/BatchForm';
import QRPreview from '../components/manufacturer/QRPreview';
import BatchTable from '../components/manufacturer/BatchTable';

const ManufacturerDashboard = () => {
    return (
        <div className="flex flex-col gap-0 w-full animate-in fade-in slide-in-from-bottom-4 duration-700 -m-8">
            {/* Standardized Page Header */}
            <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 flex items-center justify-between shadow-sm sticky top-0 z-30 w-full">
                <div className="flex items-center gap-3">
                    <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-sm border border-primary/20">
                        <span className="material-symbols-outlined font-bold">account_tree</span>
                    </div>
                    <div>
                        <h2 className="text-text-main text-lg font-black leading-tight tracking-tight">PharmaCorp Global</h2>
                        <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Manufacturer Logistics Portal</p>
                    </div>
                </div>
                <div className="flex flex-1 justify-end gap-4 items-center">
                    <div className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-green-50 rounded-full border border-green-100">
                        <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[10px] font-black text-green-700 uppercase tracking-widest">POLYGON MAINNET: 0x123...abc</span>
                    </div>
                    <button className="btn-primary px-6 py-2.5 flex items-center gap-2 text-[11px] font-black shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-lg">account_balance_wallet</span>
                        CONNECTED
                    </button>
                    <div className="size-10 rounded-full border-2 border-primary/10 p-0.5 overflow-hidden shadow-sm">
                        <img className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpnCEaIJT4Uw45KcPTVK_8Rwn6VGzFqcmMET_JjFww8d6OgZ3Jw4CLjX-3_XtHUykiHzJrdXbuH90wKVpzueOgrw7el2tKaYGtsBIYY0uJkT_jzkViuHK6S0vvbuWONYn0Tk-WeeQGwuFcYTCb_sYVgYSuirB6fEMqCwVcxGNzNW7UlqBqiHWHhCDYik_jI7yJ_StjMJgFd6jima_DPO5bvQUk1lv92es5fqLoWkq3q-fgmJPZLfnEjj5fb93fowDRvzzsT_2Pbo7a" alt="User" />
                    </div>
                </div>
            </header>

            <div className="p-8 md:p-10 max-w-[1500px] w-full mx-auto flex flex-col gap-10">
                {/* Dashboard Stats & Title */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-2">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-black text-text-main tracking-tighter leading-none">Batch Management</h1>
                        <p className="text-text-muted text-lg font-medium">Tokenize and monitor pharmaceutical assets on the primary ledger.</p>
                    </div>
                    <div className="flex gap-5">
                        <StatCard
                            icon="inventory_2"
                            title="Total Batches"
                            value="1,284"
                            colorClass="text-primary"
                            iconBgClass="bg-primary"
                        />
                        <StatCard
                            icon="warning"
                            title="Pending Sync"
                            value="3"
                            colorClass="text-amber-500"
                            iconBgClass="bg-amber-500"
                        />
                    </div>
                </div>

                {/* Creation Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2">
                        <BatchForm />
                    </div>
                    <div>
                        <QRPreview />
                    </div>
                </div>

                {/* Batch Registry Table */}
                <div className="medical-card p-0 overflow-hidden bg-white shadow-xl border-none">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">registry_platform</span>
                            <h3 className="font-black text-[12px] text-text-main uppercase tracking-widest">Global Asset Registry</h3>
                        </div>
                        <button className="text-[10px] font-black text-primary hover:bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/10 transition-all uppercase tracking-widest">Sync Ledger</button>
                    </div>
                    <BatchTable />
                </div>

                {/* Footer */}
                <footer className="mt-10 py-10 border-t border-slate-100">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-xl">verified_user</span>
                            <span className="text-[11px] font-black text-text-muted uppercase tracking-[0.2em]">MedChain Global Compliance Engine • Protected Instance</span>
                        </div>
                        <div className="flex gap-10 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                            <a className="hover:text-primary transition-colors" href="#">Standard</a>
                            <a className="hover:text-primary transition-colors" href="#">L2 Status</a>
                            <a className="hover:text-primary transition-colors" href="#">API Keys</a>
                            <a className="hover:text-primary transition-colors" href="#">Support</a>
                        </div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">© 2024 MEDCHAIN • VERCEL/POLYGON INFRA</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default ManufacturerDashboard;
