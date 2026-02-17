import React, { useState } from 'react';
import ScanItem from '../components/scan-history/ScanItem';
import ScanDetailView from '../components/scan-history/ScanDetailView';
import SafetyAlertsSidebar from '../components/scan-history/SafetyAlertsSidebar';

const ScanHistorySafetyAlerts = () => {
    const scans = [
        {
            id: 'TX-882194',
            name: 'Lipitor (Atorvastatin)',
            batchId: 'BCH-882194',
            date: 'Jan 14, 2024 • 10:45 AM',
            fullDate: 'Jan 14, 2024 • 10:45 AM',
            location: 'New York, NY',
            status: 'Genuine',
            mfd: '2023-11-01',
            expiry: '2025-11-01',
            txHash: '0x3a4...e92',
            icon: 'medication'
        },
        {
            id: 'TX-771821',
            name: 'Amoxicillin 500mg',
            batchId: 'BCH-771821',
            date: 'Dec 22, 2023',
            fullDate: 'Dec 22, 2023 • 02:15 PM',
            location: 'Chicago, IL',
            status: 'Expired',
            mfd: '2022-06-01',
            expiry: '2023-10-01',
            txHash: '0x992...c44',
            icon: 'pill'
        },
        {
            id: 'TX-104992',
            name: 'Lisinopril 10mg',
            batchId: 'BCH-104992',
            date: 'Nov 15, 2023',
            fullDate: 'Nov 15, 2023 • 09:30 AM',
            location: 'Houston, TX',
            status: 'Recalled',
            mfd: '2023-01-15',
            expiry: '2026-05-20',
            txHash: '0x12a...b78',
            icon: 'vaccines'
        },
        {
            id: 'TX-000000',
            name: 'Illegal Distribution Unit',
            batchId: 'UNKNOWN',
            date: 'Oct 30, 2023',
            fullDate: 'Oct 30, 2023 • 06:45 PM',
            location: 'Miami, FL',
            status: 'Counterfeit',
            mfd: 'N/A',
            expiry: 'N/A',
            txHash: 'VOID_SIGNATURE',
            icon: 'warning'
        },
    ];

    const [selectedScanId, setSelectedScanId] = useState('TX-882194');
    const selectedScan = scans.find(s => s.id === selectedScanId);

    return (
        <div className="flex flex-col gap-0 w-full animate-in fade-in slide-in-from-bottom-4 duration-700 -m-8">
            <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 flex items-center justify-between shadow-sm sticky top-0 z-30 w-full">
                <div className="flex items-center gap-3">
                    <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-sm border border-primary/20">
                        <span className="material-symbols-outlined font-bold">history</span>
                    </div>
                    <div>
                        <h2 className="text-text-main text-lg font-black leading-tight tracking-tight">Intelligence Ledger</h2>
                        <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Personal Scan History & Safety Feed</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-emerald-50 rounded-full border border-emerald-100">
                        <div className="size-1.5 rounded-full bg-emerald-500"></div>
                        <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">Global Protocol Synchronized</span>
                    </div>
                </div>
            </header>

            <main className="max-w-[1500px] mx-auto w-full px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* History List */}
                <div className="lg:col-span-8 space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-black text-text-main tracking-tighter">Your Verification Records</h1>
                        <p className="text-text-muted font-medium text-[15px]">Review your past medication scans and cryptographic validity reports.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {scans.map((scan) => (
                            <ScanItem
                                key={scan.id}
                                scan={scan}
                                isActive={selectedScanId === scan.id}
                                onClick={() => setSelectedScanId(scan.id)}
                            />
                        ))}
                    </div>

                    {selectedScan && (
                        <div className="mt-10 animate-in slide-in-from-bottom-8 duration-500">
                            <ScanDetailView scan={selectedScan} />
                        </div>
                    )}
                </div>

                {/* Safety Sidebar */}
                <div className="lg:col-span-4 lg:border-l lg:border-slate-100 lg:pl-10 space-y-10">
                    <SafetyAlertsSidebar />
                </div>
            </main>
        </div>
    );
};

export default ScanHistorySafetyAlerts;
