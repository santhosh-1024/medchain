import React from 'react';

const QRPreview = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center text-center shadow-sm">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest">Digital Passport Preview</h3>
                <div className="p-4 bg-white rounded-xl border border-slate-200 mb-6 shadow-inner">
                    <div
                        className="size-48 bg-slate-50 flex items-center justify-center border border-slate-100 relative overflow-hidden bg-cover bg-center"
                        data-alt="Auto-generated QR code preview for medicine batch"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBV2LUduKkMN83ihayRvGfNi8RV5VMNriZEpjT9AwMMQpVarliUlTBYCPfLgaLxdLvn5R-m1-aGSUrgVHSSWj1hxPm02650A0TkrBDpT0c_DMalDISyjkcy8OJKPw_7vzb7phuiIch4OX_B1o6tl2IJBR4Nwim_cvzk3lZizY4c5RSjy80mmHww-2caKkoaITSDmzmDQ95m2e1A94ydlrKRFjuuB_m-8xo2HRJLv0xpEBNh1g6npaszo8240ixD1Jzeuw2L4kjU7Tl2')" }}
                    >
                        {/* Abstract QR representation */}
                    </div>
                </div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">BATCH-ID: BCH-992-ALPHA</p>
                <p className="text-[10px] text-slate-500 mt-1">Scan to verify provenance on Polygon Network</p>
            </div>
            <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
                <div className="flex gap-3">
                    <span className="material-symbols-outlined text-primary">info</span>
                    <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase mb-1">On-Chain Privacy</h4>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">Sensitive manufacturer data is hashed before being committed. Only authorized regulatory bodies can decrypt original PII.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QRPreview;
