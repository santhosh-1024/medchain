import React from 'react';

const TimelineStepper = () => {
    // Array of steps for the timeline
    const steps = [
        { id: 1, label: 'Manufacturer', status: 'COMPLETED', statusText: 'COMPLETED', icon: 'factory', iconBg: 'bg-primary', iconColor: 'text-background-dark', borderColor: 'border-primary', ring: '' },
        { id: 2, label: 'Distributor', status: 'CURRENT', statusText: 'CURRENT STAGE', icon: 'local_shipping', iconBg: 'bg-primary', iconColor: 'text-background-dark', borderColor: 'border-primary', ring: 'ring-4 ring-primary/20' },
        { id: 3, label: 'Pharmacy', status: 'PENDING', statusText: 'PENDING', icon: 'medical_services', iconBg: 'bg-slate-50 dark:bg-slate-800', iconColor: 'text-slate-300 dark:text-slate-500', borderColor: 'border-slate-100 dark:border-slate-700', ring: '' },
        { id: 4, label: 'Consumer', status: 'PENDING', statusText: 'PENDING', icon: 'person', iconBg: 'bg-slate-50 dark:bg-slate-800', iconColor: 'text-slate-300 dark:text-slate-500', borderColor: 'border-slate-100 dark:border-slate-700', ring: '' },
    ];

    return (
        <div className="medical-card p-10 relative overflow-hidden bg-white">
            <div className="absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-slate-100 -translate-y-1/2 z-0 hidden md:block"></div>

            <div className="relative flex flex-col md:flex-row justify-between z-10 w-full gap-8 md:gap-0">
                {steps.map((step) => {
                    const isCompleted = step.id < 2;
                    const isCurrent = step.id === 2;

                    return (
                        <div key={step.id} className="flex flex-col items-center gap-4 group cursor-default relative">
                            {/* Step Indicator */}
                            <div className={`
                                size-14 rounded-2xl flex items-center justify-center transition-all duration-500 relative
                                ${isCompleted ? 'bg-primary/10 text-primary border-2 border-primary/20 shadow-sm' : ''}
                                ${isCurrent ? 'bg-primary text-white scale-110 shadow-xl shadow-primary/25 border-4 border-white' : ''}
                                ${step.id > 2 ? 'bg-slate-50 text-slate-300 border border-slate-100' : ''}
                            `}>
                                {isCurrent && (
                                    <span className="absolute -inset-1 rounded-2xl bg-primary/20 animate-pulse"></span>
                                )}
                                <span className="material-symbols-outlined text-2xl relative z-10 font-bold">
                                    {isCompleted ? 'verified' : step.icon}
                                </span>
                            </div>

                            <div className="text-center group-hover:translate-y-[-2px] transition-transform duration-300">
                                <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border
                                    ${isCompleted ? 'bg-green-50 text-green-600 border-green-100' :
                                        isCurrent ? 'bg-primary/10 text-primary border-primary/20' :
                                            'bg-slate-50 text-slate-400 border-slate-100'}
                                `}>
                                    {isCompleted ? 'Verified' : isCurrent ? 'Active' : 'Pending'}
                                </span>
                                <p className={`text-[14px] font-bold mt-2
                                    ${isCurrent || isCompleted ? 'text-text-main' : 'text-slate-400'}
                                `}>{step.label}</p>
                                <p className="text-[10px] text-text-muted font-bold uppercase tracking-tight mt-0.5">Stage 0{step.id}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TimelineStepper;
