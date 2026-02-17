import React from 'react';

const TimelineStepper = () => {
    // Array of steps for the timeline reflecting the refined architecture
    const steps = [
        { id: 1, label: 'Production', entity: 'Manufacturer', status: 'COMPLETED', icon: 'factory' },
        { id: 2, label: 'Logistics', entity: 'Distributor', status: 'CURRENT', icon: 'local_shipping' },
        { id: 3, label: 'Dispensing', entity: 'Pharmacy', status: 'PENDING', icon: 'medication' },
        { id: 4, label: 'Verification', entity: 'Consumer', status: 'PENDING', icon: 'person' },
    ];

    return (
        <div className="medical-card p-10 relative overflow-hidden bg-white border-none shadow-medical">
            <div className="absolute top-[48px] left-[12%] right-[12%] h-0.5 bg-slate-100 z-0 hidden md:block"></div>

            <div className="relative flex flex-col md:flex-row justify-between z-10 w-full gap-8 md:gap-0">
                {steps.map((step, index) => {
                    const isCompleted = step.status === 'COMPLETED';
                    const isCurrent = step.status === 'CURRENT';

                    return (
                        <div key={step.id} className="flex flex-col items-center gap-4 group cursor-default relative flex-1">
                            {/* Step Indicator */}
                            <div className={`
                                size-12 rounded-xl flex items-center justify-center transition-all duration-500 relative
                                ${isCompleted ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 shadow-sm' : ''}
                                ${isCurrent ? 'bg-primary text-white scale-110 shadow-xl shadow-primary/25 border-4 border-white' : ''}
                                ${step.status === 'PENDING' ? 'bg-slate-50 text-slate-300 border border-slate-100' : ''}
                            `}>
                                {isCurrent && (
                                    <span className="absolute -inset-1.5 rounded-xl bg-primary/20 animate-pulse"></span>
                                )}
                                <span className="material-symbols-outlined text-[22px] relative z-10 font-bold">
                                    {isCompleted ? 'check_circle' : step.icon}
                                </span>
                            </div>

                            <div className="text-center group-hover:translate-y-[-2px] transition-transform duration-300">
                                <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-full border
                                    ${isCompleted ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                        isCurrent ? 'bg-primary/5 text-primary border-primary/20' :
                                            'bg-slate-50 text-slate-400 border-slate-100'}
                                `}>
                                    {step.label}
                                </span>
                                <p className={`text-[14px] font-black mt-2 tracking-tight
                                    ${isCurrent || isCompleted ? 'text-text-main' : 'text-slate-300'}
                                `}>{step.entity}</p>
                                <p className="text-[10px] text-text-muted font-bold uppercase tracking-tighter mt-0.5 opacity-60">Custody Phase 0{step.id}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TimelineStepper;
