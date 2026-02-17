import React from 'react';
import UserTable from '../components/user-management/UserTable';
import UserStats from '../components/user-management/UserStats';

const UserRoleManagement = () => {
    return (
        <div className="flex flex-col gap-0 w-full animate-in fade-in slide-in-from-bottom-4 duration-700 -m-8">
            {/* Standardized Page Header */}
            <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 flex items-center justify-between shadow-sm sticky top-0 z-30 w-full">
                <div className="flex items-center gap-3">
                    <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined font-bold text-2xl">shield</span>
                    </div>
                    <div>
                        <h2 className="text-text-main text-lg font-black leading-tight tracking-tight">Identity Governance</h2>
                        <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Blockchain Access Control</p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="relative group">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                        <input className="input-field pl-10 pr-4 py-2 text-xs w-64 h-10 border-slate-100" placeholder="Search accounts..." type="text" />
                    </div>
                    <button className="relative size-10 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 hover:text-primary transition-all flex items-center justify-center">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                    <div className="h-8 w-px bg-slate-200"></div>
                    <div className="flex items-center gap-3">
                        <div className="text-right hidden md:block">
                            <p className="text-[12px] font-black text-text-main leading-none">Alex Rivera</p>
                            <p className="text-[10px] text-text-muted uppercase tracking-widest font-black mt-1">SUPER ADMIN</p>
                        </div>
                        <div className="size-10 rounded-full border-2 border-primary/20 p-0.5 overflow-hidden">
                            <img className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiPvdIt_4FVRL5KbwM8N-wvvUaKrFhcEAOkI-_riqCXZjBnROK_eKVkiuwQ1VydmpLaO9rtv4Twa-2C_-_Fo7GWrj-KA648iz6tSr18oN6CZz0Ya8SQdM9MSVGxl-gjRgvN7UK5pkDbR99yJ76MYIibtAJofnuf1q6uCbnEfM3ob5d0tppH6Ik0flzT8n03KD54DX57xuyOqEJoz5bpUvJtgNpC4EcWeWvlJLYj1ciMeFkqNeoMJS7BNHFezSeSQDc5gl14gPiUpL0" alt="Admin profile" />
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-[1500px] mx-auto w-full px-8 py-10">
                {/* Title Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-black text-text-main tracking-tighter">Participant Registry</h1>
                        <p className="text-text-muted text-lg font-medium max-w-2xl">Provision and audit cryptographic identities for verified medical participants across the global supply chain.</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="btn-secondary px-6 py-3 flex items-center gap-2.5 text-[11px] font-black border border-slate-200">
                            <span className="material-symbols-outlined text-lg">download</span>
                            EXPORT REGISTRY
                        </button>
                        <button className="btn-primary px-8 py-3 flex items-center gap-2.5 text-[11px] font-black shadow-xl shadow-primary/20">
                            <span className="material-symbols-outlined text-lg">person_add</span>
                            ONBOARD USER
                        </button>
                    </div>
                </div>

                {/* Dashboard Stats */}
                <div className="mb-10">
                    <UserStats />
                </div>

                {/* User Table Card */}
                <div className="medical-card p-0 overflow-hidden bg-white shadow-xl border-none">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">groups</span>
                            <h3 className="font-black text-[12px] text-text-main uppercase tracking-widest">Verified Entities</h3>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-3 py-1.5 rounded-lg bg-slate-50 text-[10px] font-black text-text-muted border border-slate-100 uppercase tracking-widest hover:bg-slate-100 transition-all">Filter: All Roles</button>
                            <button className="px-3 py-1.5 rounded-lg bg-slate-50 text-[10px] font-black text-text-muted border border-slate-100 uppercase tracking-widest hover:bg-slate-100 transition-all">Status: Active</button>
                        </div>
                    </div>
                    <UserTable />
                </div>
            </main>

            <footer className="mt-20 px-8 py-8 text-center border-t border-slate-100">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">MedChain Identity Governance v4.2.0 • Secured by Ethereum Node Architecture</p>
            </footer>
        </div>
    );
};

export default UserRoleManagement;
