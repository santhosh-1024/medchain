import React from 'react';

const RecalledProductAlert = () => {
    return (
        <div className="min-h-screen bg-background-soft font-body text-text-main flex flex-col">
            {/* Top Navigation Bar */}
            <header className="h-20 bg-white border-b border-slate-100 px-8 flex items-center justify-between shadow-sm sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-2xl font-bold">shield_health</span>
                    </div>
                    <h2 className="text-text-main text-xl font-black tracking-tight">MedChain Intelligence</h2>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 px-4 py-1.5 bg-green-50 rounded-full border border-green-100">
                        <div className="size-1.5 rounded-full bg-green-500"></div>
                        <span className="text-[10px] font-black text-green-700 uppercase tracking-widest">Global Sentry Active</span>
                    </div>
                    <div className="size-10 rounded-full bg-slate-100 border-2 border-primary/20 overflow-hidden">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVhju25iD6yZSa7IR83vYFcH65TwSUoex03KFcbGUVbFWOJqzGQh55ahAQHldK37ZUlWBkLqQCv-kfc-NGB9Ey7GFkf3mtbF6P-0nl0n-bzEDUHhisAaDQ3KotFMyygL0P69bWk1K3S9hn2vwEQww6lh7SgSdvGuxSP6CKcbzHHjUS6coW8qgYmpk9AeXV-O8vdmY779g6Cp6Vbp3qBxmfnZqmHg3uY1Mf-N0W4wqjBg33rYUPwwGZXqHZiR68sXgB_6KW1vfIlY_H" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>
            </header>

            <main className="flex-1 flex flex-col items-center justify-center p-8 md:p-16 lg:p-24 fade-up">
                <div className="max-w-[840px] w-full space-y-10">
                    <div className="text-center space-y-3">
                        <h1 className="text-4xl font-black text-text-main tracking-tighter uppercase mb-4">Integrity Breach Identified</h1>
                        <p className="text-lg text-text-muted font-medium">This product has been flagged by the MedChain Global Surveillance Network.</p>
                    </div>

                    <div className="medical-card p-0 overflow-hidden border-amber-200 border-2 shadow-xl shadow-amber-500/5">
                        <div className="bg-amber-500 px-8 py-5 flex items-center gap-4 border-b border-amber-600/10">
                            <span className="material-symbols-outlined text-white text-[36px] font-bold">report_problem</span>
                            <h3 className="text-white text-xl font-black uppercase tracking-tight">Warning: Product Recall / Expiry Anomaly</h3>
                        </div>

                        <div className="p-10 space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-6">
                                    <div className="space-y-1">
                                        <p className="text-[11px] font-black text-text-muted uppercase tracking-[0.15em]">Registered Batch ID</p>
                                        <p className="text-2xl font-mono font-black text-text-main tracking-tight">B-88291-MC</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[11px] font-black text-text-muted uppercase tracking-[0.15em]">Issuing Entity</p>
                                        <p className="text-xl font-bold text-text-main">BioPharma Corp International</p>
                                    </div>
                                </div>

                                <div className="bg-amber-50/50 p-6 rounded-[24px] border border-amber-100 flex items-center gap-6">
                                    <div className="size-16 rounded-2xl bg-white border border-amber-200 flex items-center justify-center text-amber-500 shadow-sm">
                                        <span className="material-symbols-outlined text-[36px]">event_busy</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-amber-700 uppercase tracking-widest mb-1.5">Ledger Expiry Status</p>
                                        <p className="text-2xl font-black text-text-main tracking-tight">Oct 24, 2023</p>
                                        <p className="text-[12px] font-black text-amber-600 uppercase tracking-tighter mt-1">STATUS: CRITICAL EXPIRED</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-[20px] border border-slate-100 flex gap-6 mt-4">
                                <div className="size-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-text-muted shrink-0 shadow-sm">
                                    <span className="material-symbols-outlined text-[28px]">biotech</span>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[14px] font-black text-text-main uppercase tracking-widest">Anomaly Signature: Temperature Variance</p>
                                    <p className="text-[13px] text-text-muted leading-relaxed font-medium">
                                        Cryptographic sensors detected a thermal breach during transit. Storage parameters exceeded
                                        <span className="text-amber-700 font-bold mx-1">8°C for 14.2 consecutive hours</span>.
                                        Potency integrity cannot be verified. <span className="text-red-600 font-black">DO NOT DISPENSE.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl border border-primary/10">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl">verified_user</span>
                                    <code className="text-[10px] font-bold font-mono text-primary uppercase tracking-widest">SHA-256 Ledger: 0x4f2...a981 (COMPROMISED)</code>
                                </div>
                                <button className="text-[10px] font-black text-primary hover:underline uppercase tracking-widest">Audit Ledger</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <button className="btn-primary flex-1 py-4 text-sm font-black shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                            FIND AUTHORIZED CLINIC
                        </button>
                        <button className="btn-secondary flex-1 py-4 text-sm font-black border border-slate-200 hover:bg-white hover:border-primary transition-all">
                            REPORT INCIDENT
                        </button>
                    </div>
                </div>
            </main>

            <footer className="py-12 px-8 border-t border-slate-100 text-center space-y-4">
                <p className="text-[11px] font-bold text-text-muted uppercase tracking-[0.2em]">© 2024 MedChain Global Surveillance Network • Layer-2 Integrity Protcol</p>
                <div className="flex justify-center gap-8 text-[10px] font-black text-slate-400">
                    <a className="hover:text-primary transition-colors" href="#">Standard Registry</a>
                    <a className="hover:text-primary transition-colors" href="#">Privacy Accord</a>
                    <a className="hover:text-primary transition-colors" href="#">Technical Monitoring</a>
                </div>
            </footer>
        </div>
    );
};

export default RecalledProductAlert;
