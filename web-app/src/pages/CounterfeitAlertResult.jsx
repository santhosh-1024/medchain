import React from 'react';
import { Link } from 'react-router-dom';

const CounterfeitAlertResult = () => {
    return (
        <div className="min-h-screen bg-background-soft font-body text-text-main flex flex-col">
            {/* Header */}
            <header className="h-20 bg-white border-b border-slate-100 px-8 flex items-center justify-between shadow-sm sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-2xl font-bold">shield_with_heart</span>
                    </div>
                    <h2 className="text-text-main text-xl font-black tracking-tight">MedChain Intelligence</h2>
                </div>
                <nav className="hidden md:flex flex-1 justify-center gap-12">
                    <Link to="/scan-history" className="text-[11px] font-black text-text-muted hover:text-primary uppercase tracking-[0.2em] transition-colors">Scanner</Link>
                    <Link to="/scan-history" className="text-[11px] font-black text-text-muted hover:text-primary uppercase tracking-[0.2em] transition-colors">History</Link>
                    <Link to="/scan-history" className="text-[11px] font-black text-text-muted hover:text-primary uppercase tracking-[0.2em] transition-colors">Advisories</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <button className="size-11 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 hover:text-primary transition-all flex items-center justify-center">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <div className="size-11 rounded-full bg-slate-200 border-2 border-primary/20 overflow-hidden">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVZChOaEdx8Zalh1regNdHmVASL7sRmRYx23O37wg2KhDDwNFbKhYapKsp3brlfSoWuJtmoUyKt6NFlbniaSLzRSh0afomTFXzT7rx9Y6YuHOlEvH6yKchljOckGpuI9tnEHup4hCCQbhdEJlaGwLWEj2aO2qbLLObLulc4J6n9iU6GWSuZDZJTeXH7duGoE5KlBHhcCp_VZXPk6SO5LVbgu_pQc6Wehp7I35rtnWBsrq5wGJ4oAgro_IpBXX6SnwLX1YO17AN8CSq" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-[1100px] mx-auto w-full px-6 py-12 md:py-20 fade-up">
                {/* Main Alert Card */}
                <div className="medical-card p-0 overflow-hidden border-rose-200 border-2 shadow-2xl shadow-rose-900/10 mb-12 relative">
                    <div className="absolute top-0 right-0 p-8">
                        <span className="text-[10px] font-black text-rose-600 uppercase tracking-[0.3em] bg-rose-50 px-4 py-2 rounded-full border border-rose-100">CRITICAL FAILURE</span>
                    </div>

                    <div className="p-10 md:p-16">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mb-12">
                            <div className="size-24 bg-rose-600 text-white rounded-[32px] flex items-center justify-center shadow-xl shadow-rose-600/30 scale-110">
                                <span className="material-symbols-outlined text-[56px] font-bold">dangerous</span>
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-4xl md:text-5xl font-black text-text-main tracking-tighter uppercase">Counterfeit Anomaly</h1>
                                <p className="text-xl font-bold text-rose-600">Verification Protocol: FAILED</p>
                                <div className="flex items-center gap-3 pt-2">
                                    <span className="text-[12px] font-black text-text-muted uppercase tracking-widest">Global Asset ID:</span>
                                    <code className="text-[12px] font-mono font-black text-rose-700 bg-rose-50 px-3 py-1 rounded">MC-8829-X92-FAIL</code>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            {[
                                { icon: 'block', title: 'Zero-Consumption', desc: 'Cease administration immediately. Product contains unverified organic synthesis.' },
                                { icon: 'policy', title: 'Local Authority', desc: 'Protocol requirements: Alert regional health departments for node site investigation.' },
                                { icon: 'inventory_2', title: 'Evidence Chain', desc: 'Retain physical assets and diagnostic receipts for forensic ledger audit.' }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm flex flex-col gap-4 group hover:border-rose-100 transition-all">
                                    <div className="size-14 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 transition-transform group-hover:scale-110">
                                        <span className="material-symbols-outlined text-[32px]">{item.icon}</span>
                                    </div>
                                    <h3 className="font-black text-lg text-text-main tracking-tight">{item.title}</h3>
                                    <p className="text-[13px] text-text-muted leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <button className="btn-primary flex-1 py-5 text-[13px] font-black shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                                REPORT BREACH TO MANUFACTURER
                            </button>
                            <Link to="/scan-history" className="btn-secondary flex-1 py-5 text-[13px] font-black border border-slate-200 hover:border-rose-600 text-center">
                                RETURN TO SCANNER
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Traceability Data */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="medical-card p-0 overflow-hidden bg-white shadow-lg border-none">
                        <div className="p-6 border-b border-slate-100 bg-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-xl">satellite_alt</span>
                                <h3 className="font-black text-[12px] text-text-main uppercase tracking-widest">Geospatial Forensic Context</h3>
                            </div>
                            <span className="text-[10px] font-bold text-text-muted uppercase italic">Signal Verified via LEO-Link</span>
                        </div>
                        <div className="h-72 bg-[#0F172A] relative overflow-hidden group">
                            <img className="w-full h-full object-cover opacity-40 mix-blend-screen scale-110 grayscale group-hover:scale-125 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLS9MaMLIudAsABX8jk3jlvr3HgbdrDIpk1_bgkcgWjwjgWG8QIL5NhF7vJxuEvZTiuBGVRDLe7COk-JDBGRBY2BfM09-BumcJQceIyJjWoIBeU-LOlYXUu6qvK7fdsQF84zpZ6Xz_u_eRqeu_vEGOjfRm0QwLE9lxAZPpsb6ns4ExmhStwiNzbroi6ZSSlbdQleRio0mzXWfv4lFWbgoGBE8TbZ7154F6r9YWhdT_tr1tvksP5B3rgpG8Sl16OZ6B9phi1EAGyXii" alt="Map Location" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    <div className="size-32 bg-rose-600/10 rounded-full animate-ping absolute inset-0 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"></div>
                                    <span className="material-symbols-outlined text-rose-600 text-[56px] drop-shadow-[0_0_20px_rgba(225,29,72,0.8)] relative z-10 font-bold">location_on</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 grid grid-cols-2 gap-10">
                            <div>
                                <p className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em] mb-1">Temporal Stamp</p>
                                <p className="font-black text-text-main text-[15px] tracking-tight">OCT 24, 2023 • 14:22:05</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em] mb-1">Grid Coordinates</p>
                                <p className="font-black text-text-main text-[15px] tracking-tight">52.5200° N • 13.4050° E</p>
                            </div>
                        </div>
                    </div>

                    <div className="medical-card p-10 bg-white border-none shadow-lg space-y-8">
                        <h3 className="font-black text-xl text-text-main uppercase tracking-tight flex items-center gap-3">
                            <span className="material-symbols-outlined text-rose-600 text-3xl">fact_check</span>
                            Critical Discrepancies
                        </h3>
                        <div className="space-y-6">
                            {[
                                { title: 'ID Replication', desc: 'Identical product cryptographic signature identified in 15 global clusters within 24hr window.' },
                                { title: 'Ledger Fracture', desc: 'No manufacturing authorization record exists for this specific ID in the MedChain Genesis Block.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5">
                                    <div className="size-8 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 shrink-0 mt-1">
                                        <span className="material-symbols-outlined text-sm font-bold">close</span>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[14px] font-black text-text-main">{item.title}</p>
                                        <p className="text-[13px] text-text-muted font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em]">Invalid Hash Protocol</span>
                                    <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest bg-rose-50 px-2 py-0.5 rounded">Checkstyle Error</span>
                                </div>
                                <code className="text-[11px] font-mono break-all text-text-muted font-bold opacity-60">0x4b7f92a1103c8d9e23f8b091a27c6543b9201f8e654210d32f91a... (MALFORMED SIGNATURE)</code>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-white border-t border-slate-100 py-16 px-8">
                <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-2xl font-bold">shield_with_heart</span>
                            <span className="font-black text-2xl text-text-main tracking-tighter">MedChain</span>
                        </div>
                        <p className="text-[13px] text-text-muted leading-relaxed font-medium">Global Pharmaceutical Integrity Network. Cryptographically protecting patient health via L2 ledger monitoring.</p>
                    </div>
                    {['Support', 'Regulatory', 'Network'].map((category, i) => (
                        <div key={i}>
                            <h4 className="font-black text-[12px] text-text-main uppercase tracking-[0.2em] mb-6">{category}</h4>
                            <ul className="space-y-4 text-[13px] font-bold text-text-muted">
                                <li><a className="hover:text-primary transition-colors" href="#">Standard Center</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Integrity Logs</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Protocol Docs</a></li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="max-w-[1100px] mx-auto pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">© 2024 MEDCHAIN INTELLIGENCE UNIT • ALL SCAN EVENTS FINALIZED</p>
                    <div className="flex gap-6">
                        <span className="material-symbols-outlined text-slate-300 text-xl">account_balance</span>
                        <span className="material-symbols-outlined text-slate-300 text-xl">hub</span>
                        <span className="material-symbols-outlined text-slate-300 text-xl">public</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CounterfeitAlertResult;
