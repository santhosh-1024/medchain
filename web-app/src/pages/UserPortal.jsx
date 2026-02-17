import React, { useState } from 'react';
import QRScanner from '../components/user/QRScanner';
import SafetyAlertsSidebar from '../components/scan-history/SafetyAlertsSidebar';

const UserPortal = () => {
    const [scanResult, setScanResult] = useState(null);

    return (
        <div className="flex flex-col gap-0 w-full animate-in fade-in slide-in-from-bottom-4 duration-700 -m-8">
            <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 flex items-center justify-between shadow-sm sticky top-0 z-30 w-full">
                <div className="flex items-center gap-3">
                    <div className="size-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                        <span className="material-symbols-outlined font-bold text-2xl">health_and_safety</span>
                    </div>
                    <div>
                        <h2 className="text-text-main text-lg font-black leading-tight tracking-tight">Safety Hub</h2>
                        <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Consumer Verification Portal</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="btn-secondary py-2 px-4 text-[10px] font-black tracking-widest border border-slate-100 uppercase">Find Pharmacy</button>
                    <button className="btn-primary py-2 px-6 text-[10px] font-black tracking-widest shadow-lg shadow-primary/20 uppercase">Emergency Map</button>
                </div>
            </header>

            <main className="max-w-[1500px] mx-auto w-full px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* QR Verification Area */}
                <div className="lg:col-span-8 space-y-10">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-black text-text-main tracking-tighter">Medicine Verification</h1>
                        <p className="text-text-muted text-lg font-medium max-w-2xl">Instantly verify the authenticity, expiry, and safety status of your medication through our global blockchain ledger.</p>
                    </div>

                    <div className="medical-card p-10 bg-white border-none shadow-medical overflow-hidden">
                        <QRScanner onResult={setScanResult} />
                    </div>

                    {scanResult && (
                        <div className="medical-card p-8 bg-emerald-50/50 border-emerald-100 border-2 shadow-none animate-in zoom-in duration-300">
                            <div className="flex items-center gap-5 justify-between">
                                <div className="flex items-center gap-5">
                                    <div className="size-16 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-lg">
                                        <span className="material-symbols-outlined text-[40px]">verified</span>
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-1">Authenticity Guaranteed</p>
                                        <h3 className="text-2xl font-black text-text-main tracking-tight">Genuine Medication Detected</h3>
                                        <p className="text-text-muted font-medium text-sm mt-1">Batch ID: <span className="font-mono font-bold text-text-main">{scanResult.id}</span> • Manufacturer: PharmaCorp Global</p>
                                    </div>
                                </div>
                                <button className="btn-primary py-3 px-8 text-[11px] font-black tracking-widest whitespace-nowrap">VIEW FULL REPORT</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Safety Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="medical-card p-6 bg-primary text-white border-none shadow-xl shadow-primary/20">
                        <h4 className="text-[12px] font-black uppercase tracking-widest opacity-80 mb-4">Patient Advisory</h4>
                        <p className="text-[16px] font-bold leading-snug">Always check the QR code before consumption. If the seal is broken or the scan fails, report it immediately.</p>
                        <button className="mt-6 w-full py-3 bg-white/20 hover:bg-white/30 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all">REPORT A SUSPICION</button>
                    </div>
                    <SafetyAlertsSidebar />
                </div>
            </main>
        </div>
    );
};

export default UserPortal;
