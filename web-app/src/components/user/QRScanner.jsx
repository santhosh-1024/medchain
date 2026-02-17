import React, { useState } from 'react';

const QRScanner = ({ onResult }) => {
    const [scanning, setScanning] = useState(false);
    const [manualId, setManualId] = useState('');

    const simulateScan = () => {
        setScanning(true);
        setTimeout(() => {
            setScanning(false);
            onResult({ id: 'BCH-882194-A' });
        }, 2500);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Visual Scanner Area */}
            <div className="relative aspect-square max-w-[400px] w-full mx-auto">
                <div className="absolute inset-0 rounded-3xl border-4 border-slate-100 bg-slate-50/50 flex flex-col items-center justify-center overflow-hidden border-none shadow-inner">
                    {scanning ? (
                        <div className="relative flex flex-col items-center">
                            <div className="size-24 rounded-full border-4 border-primary border-t-transparent animate-spin mb-6"></div>
                            <p className="text-[11px] font-black text-primary uppercase tracking-[0.3em] animate-pulse">Scanning Ledger...</p>
                            <div className="absolute top-[-50px] left-[-100px] right-[-100px] h-0.5 bg-primary/40 blur-[1px] animate-scan-line"></div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center p-8 text-center">
                            <div className="size-20 rounded-3xl bg-white shadow-xl flex items-center justify-center text-slate-300 mb-6 group cursor-pointer hover:scale-110 hover:text-primary transition-all duration-300" onClick={simulateScan}>
                                <span className="material-symbols-outlined text-[48px]">qr_code_scanner</span>
                            </div>
                            <h4 className="text-[14px] font-black text-text-main tracking-tight">Camera Ready</h4>
                            <p className="text-[11px] text-text-muted font-bold uppercase tracking-widest mt-2 px-10">Point your camera at the MedChain QR code</p>
                            <button onClick={simulateScan} className="mt-8 btn-primary px-8 py-3 text-[10px] uppercase font-black tracking-widest shadow-lg shadow-primary/20">INITIALIZE CAMERA</button>
                        </div>
                    )}
                </div>
                {/* Frame Corners */}
                <div className="absolute top-0 left-0 size-8 border-t-4 border-l-4 border-primary rounded-tl-3xl"></div>
                <div className="absolute top-0 right-0 size-8 border-t-4 border-r-4 border-primary rounded-tr-3xl"></div>
                <div className="absolute bottom-0 left-0 size-8 border-b-4 border-l-4 border-primary rounded-bl-3xl"></div>
                <div className="absolute bottom-0 right-0 size-8 border-b-4 border-r-4 border-primary rounded-br-3xl"></div>
            </div>

            {/* Manual Entry Area */}
            <div className="space-y-8">
                <div className="space-y-4">
                    <h3 className="text-xl font-black text-text-main tracking-tighter">Manual Entry</h3>
                    <p className="text-text-muted text-sm font-medium">If your camera is unavailable, type the batch identification sequence printed below the QR code.</p>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em] ml-1">Protocol Identification String</label>
                        <input
                            value={manualId}
                            onChange={(e) => setManualId(e.target.value)}
                            className="input-field w-full py-4 px-6 bg-slate-50 border-slate-100 font-black font-mono text-[14px] tracking-widest text-primary focus:bg-white"
                            placeholder="e.g. BCH-882-991-X"
                            type="text"
                        />
                    </div>
                    <button
                        onClick={() => manualId && onResult({ id: manualId })}
                        className="w-full btn-secondary py-4 px-8 text-[11px] font-black tracking-widest border border-slate-200 hover:bg-slate-50 transition-all uppercase"
                    >
                        MANUAL VERIFICATION
                    </button>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                    <span className="material-symbols-outlined text-text-muted">info_i</span>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-tight leading-snug">The manual entry code is usually 12-14 characters long and contains the region prefix.</p>
                </div>
            </div>
        </div>
    );
};

export default QRScanner;
