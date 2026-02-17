import React from 'react';

const AlertsPane = () => {
    const alerts = [
        {
            risk: 'CRITICAL',
            riskColor: 'bg-red-50 text-red-600 border-red-100',
            time: 'Just now',
            title: 'Anomalous Scan Pattern Detected',
            subtitle: 'Multiple validation attempts observed from geographic clusters NYC & LON within 4 minutes.',
            details: [
                { label: 'Network Entity', value: '8821-XQ' },
                { label: 'Primary Cluster', value: 'NYC-CENTRAL' },
                { label: 'Time Delta', value: '4.2 min' }
            ],
            actions: [
                { label: 'Investigate Node', type: 'primary' },
                { label: 'Flag Entry', type: 'secondary' }
            ]
        },
        {
            risk: 'ADVISORY',
            riskColor: 'bg-amber-50 text-amber-600 border-amber-100',
            time: '12m ago',
            title: 'High Latency Deviation',
            subtitle: 'Distribution ledger requests for node EU-WEST-2 are exceeding baseline by 450%.',
            details: [
                { label: 'System Load', value: '1.2k req/sec' },
                { label: 'Peak Variance', value: '+450%' }
            ],
            actions: [
                { label: 'Analyze Traffic', type: 'primary' },
                { label: 'Acknowledge', type: 'secondary' }
            ]
        },
        {
            risk: 'VERIFIED',
            riskColor: 'bg-slate-50 text-slate-400 border-slate-100',
            time: '45m ago',
            title: 'Blocked Access Violation',
            subtitle: 'Automated defense protocols suspended access for unassigned node origin.',
            details: [
                { label: 'Access Point', value: '192.168.1.42' }
            ],
            actions: [
                { label: 'Resolved', type: 'disabled' }
            ]
        }
    ];

    return (
        <div className="flex-1 flex flex-col gap-6 overflow-y-auto pr-2 custom-scrollbar">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-text-main font-black text-[11px] uppercase tracking-[0.2em] flex items-center gap-2">
                    <span className="material-symbols-outlined text-red-500 text-[20px] animate-pulse">monitoring</span>
                    Network Anomalies
                </h3>
                <span className="text-[10px] font-black text-text-muted uppercase tracking-widest bg-slate-50 px-2 py-1 rounded border border-slate-100">Live Stream</span>
            </div>

            <div className="space-y-4">
                {alerts.map((alert, index) => (
                    <div key={index} className="medical-card p-6 border-l-[6px] border-l-primary/10 hover:border-l-primary transition-all bg-white relative overflow-hidden">
                        <div className="flex justify-between items-start mb-4">
                            <span className={`text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest border shadow-sm ${alert.riskColor}`}>{alert.risk}</span>
                            <span className="text-[10px] text-text-muted font-bold tracking-tight">{alert.time}</span>
                        </div>

                        <h4 className="text-[15px] font-bold text-text-main leading-tight mb-2 tracking-tight">{alert.title}</h4>
                        <p className="text-[12px] text-text-muted leading-relaxed font-medium mb-5">{alert.subtitle}</p>

                        <div className="space-y-2 bg-slate-50/50 p-4 rounded-xl border border-slate-100/50 mb-5">
                            {alert.details.map((detail, i) => (
                                <div key={i} className="flex justify-between items-center text-[11px]">
                                    <span className="text-text-muted font-bold uppercase tracking-tighter opacity-70">{detail.label}</span>
                                    <span className="font-mono font-black text-text-main tracking-tight">{detail.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            {alert.actions.map((action, i) => (
                                <button
                                    key={i}
                                    className={`
                                        flex-1 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all
                                        ${action.type === 'primary' ? 'bg-primary text-white shadow-md shadow-primary/20 hover:scale-[1.02] active:scale-95' : ''}
                                        ${action.type === 'secondary' ? 'bg-white border border-slate-200 text-text-main hover:bg-slate-50 hover:border-slate-300' : ''}
                                        ${action.type === 'disabled' ? 'bg-slate-50 text-slate-300 cursor-not-allowed border border-slate-100 font-bold italic' : ''}
                                    `}
                                >
                                    {action.label}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlertsPane;
