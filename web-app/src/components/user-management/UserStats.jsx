import React from 'react';

const UserStats = () => {
    const stats = [
        { label: 'Total Active', value: '128', icon: 'group', bg: 'bg-emerald-50 dark:bg-emerald-900/20', color: 'text-emerald-600 dark:text-emerald-400' },
        { label: 'Blockchain Verified', value: '94%', icon: 'verified', bg: 'bg-purple-50 dark:bg-purple-900/20', color: 'text-purple-600 dark:text-purple-400' },
        { label: 'Pending Audit', value: '14', icon: 'pending', bg: 'bg-amber-50 dark:bg-amber-900/20', color: 'text-amber-600 dark:text-amber-400' },
        { label: 'System Integrity', value: 'Secure', icon: 'security_update_good', bg: 'bg-blue-50 dark:bg-blue-900/20', color: 'text-blue-600 dark:text-blue-400' },
    ];

    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex items-center gap-4">
                    <div className={`size-10 rounded-full flex items-center justify-center ${stat.bg} ${stat.color}`}>
                        <span className="material-symbols-outlined">{stat.icon}</span>
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">{stat.label}</p>
                        <p className="text-xl font-bold text-slate-900 dark:text-white leading-none">{stat.value}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserStats;
