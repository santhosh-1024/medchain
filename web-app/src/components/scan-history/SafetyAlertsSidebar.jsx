import React from 'react';

const SafetyAlertsSidebar = () => {
    const alerts = [
        {
            type: 'CRITICAL',
            icon: 'warning',
            title: 'Recall: Amoxicillin Batch #992',
            desc: 'PharmaCorp has issued a global recall due to contamination risks. Check your batch ID immediately.',
            time: '2h ago',
            color: 'bg-red-50 text-red-600 border-red-100',
        },
        {
            type: 'SECURITY',
            icon: 'gpp_maybe',
            title: 'Counterfeit Hotspot NYC',
            desc: 'Elevated counterfeit reports for Insulin in Manhattan area. Purchase only from verified pharmacies.',
            time: '5h ago',
            color: 'bg-amber-50 text-amber-600 border-amber-100',
        },
        {
            type: 'ADVISORY',
            icon: 'info',
            title: 'Pfizer Storage Alert',
            desc: 'New humidity storage guidelines for Pfizer-X units. Ensure storage below 25°C at all times.',
            time: '1d ago',
            color: 'bg-slate-50 text-slate-600 border-slate-200',
        }
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between mb-2">
                <h4 className="text-[12px] font-black text-text-main uppercase tracking-[0.2em] flex items-center gap-2">
                    <span className="material-symbols-outlined text-red-500 text-[20px] animate-pulse">notifications_active</span>
                    Safety Alerts
                </h4>
                <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">Settings</button>
            </div>

            <div className="space-y-4">
                {alerts.map((alert, index) => (
                    <div key={index} className="medical-card p-6 border-none shadow-medical bg-white relative overflow-hidden group hover:scale-[1.02] transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <span className={`text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest border shadow-sm ${alert.color}`}>
                                {alert.type}
                            </span>
                            <span className="text-[10px] text-text-muted font-bold tracking-tight">{alert.time}</span>
                        </div>

                        <h5 className="text-[15px] font-black text-text-main leading-tight mb-2 tracking-tight">{alert.title}</h5>
                        <p className="text-[12px] text-text-muted leading-relaxed font-medium mb-4">{alert.desc}</p>

                        <button className="text-[10px] font-black text-primary uppercase tracking-[0.2em] flex items-center gap-1 group-hover:gap-2 transition-all">
                            LEARN MORE
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                ))}
            </div>

            <div className="medical-card p-8 bg-slate-900 text-white border-none shadow-xl shadow-slate-900/10 mt-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="size-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                        <span className="material-symbols-outlined text-emerald-400">help</span>
                    </div>
                    <div>
                        <h4 className="text-[14px] font-black tracking-tight">Need Assistance?</h4>
                        <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest">24/7 Global Support</p>
                    </div>
                </div>
                <div className="space-y-3">
                    <button className="w-full py-3 bg-white text-slate-900 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-lg">medical_services</span>
                        PHARMACY FINDER
                    </button>
                    <button className="w-full py-3 bg-white/10 text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10">
                        CONTACT HELPLINE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SafetyAlertsSidebar;
