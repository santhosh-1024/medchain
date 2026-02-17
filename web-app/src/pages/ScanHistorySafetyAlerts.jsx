import React, { useState } from 'react';
import ScanItem from '../components/scan-history/ScanItem';
import ScanDetailView from '../components/scan-history/ScanDetailView';
import SafetyAlertsSidebar from '../components/scan-history/SafetyAlertsSidebar';

const ScanHistorySafetyAlerts = () => {
    const scans = [
        { id: 1, name: 'Lipitor (Atorvastatin)', batchId: 'MC-99281', date: 'Jan 14, 2024 • 10:45 AM', fullDate: 'Jan 14, 2024 • 10:45 AM', location: 'New York, NY', status: 'Safe', icon: 'medication' },
        { id: 2, name: 'Amoxicillin 500mg', batchId: 'AMX-8821', date: 'Dec 22, 2023', fullDate: 'Dec 22, 2023 • 02:15 PM', location: 'Chicago, IL', status: 'Expired', icon: 'pill' },
        { id: 3, name: 'Metformin HCL', batchId: 'MTF-0019', date: 'Nov 15, 2023', fullDate: 'Nov 15, 2023 • 09:30 AM', location: 'Houston, TX', status: 'Safe', icon: 'vaccines' },
        { id: 4, name: 'Zolpidem 10mg', batchId: 'UNKNOWN', date: 'Oct 30, 2023', fullDate: 'Oct 30, 2023 • 06:45 PM', location: 'Miami, FL', status: 'Counterfeit', icon: 'warning' },
    ];

    const [selectedScanId, setSelectedScanId] = useState(1);
    const selectedScan = scans.find(s => s.id === selectedScanId);

    return (
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-10 fade-up">
            {/* Header & Title Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="space-y-2">
                    <div className="flex items-center gap-4">
                        <h2 className="text-3xl font-black text-text-main tracking-tight">Intelligence Ledger</h2>
                        <div className="px-3 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-black tracking-[0.15em] uppercase border border-primary/20 flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
                            Verified Protocol
                        </div>
                    </div>
                    <p className="text-text-muted text-lg font-medium">Review cryptographic verification history and regional safety signals.</p>
                </div>
                <div>
                    <button className="btn-primary px-8 py-3.5 flex items-center gap-3 text-sm font-black shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                        <span className="material-symbols-outlined font-bold">qr_code_scanner</span>
                        INITIATE NEW SCAN
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left: Scan History List */}
                <div className="lg:col-span-8 space-y-10">
                    {/* Active Item / Detailed View */}
                    <div className="shadow-medical rounded-[24px]">
                        <ScanDetailView scan={selectedScan} />
                    </div>

                    {/* History List Items */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between px-2">
                            <h4 className="text-[11px] font-black text-text-muted uppercase tracking-[0.2em]">Transaction Registry</h4>
                            <button className="text-[10px] font-black text-primary hover:bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/10 transition-all uppercase tracking-widest">View Archives</button>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {scans.filter(s => s.id !== selectedScanId).map((scan) => (
                                <ScanItem
                                    key={scan.id}
                                    scan={scan}
                                    isActive={false}
                                    onClick={() => setSelectedScanId(scan.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Safety Alerts Sidebar */}
                <div className="lg:col-span-4">
                    <div className="sticky top-24">
                        <SafetyAlertsSidebar />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-20 pt-10 border-t border-slate-100 pb-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3 text-primary opacity-80">
                        <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined text-2xl font-bold">shield_health</span>
                        </div>
                        <span className="font-black text-xl tracking-tight text-text-main">MedChain</span>
                    </div>
                    <p className="text-[11px] text-text-muted font-bold text-center md:text-left max-w-md leading-relaxed uppercase tracking-widest">
                        Distributed Intelligence Tier & Integrity Chain Interface. <br />
                        All transactions are finalized on MedChain Mainnet-04 Layer-2.
                    </p>
                    <div className="flex gap-8">
                        <a className="text-[11px] font-black text-text-muted hover:text-primary uppercase tracking-widest transition-colors" href="#">Legal Privacy</a>
                        <a className="text-[11px] font-black text-text-muted hover:text-primary uppercase tracking-widest transition-colors" href="#">Standard Protocol</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ScanHistorySafetyAlerts;
