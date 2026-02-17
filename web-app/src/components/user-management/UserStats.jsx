import React from 'react';

const UserStats = () => {
    const stats = [
        { label: 'Total Entities', value: '142', sub: '+12 this month', icon: 'groups', color: 'text-primary', bg: 'bg-primary' },
        { label: 'KYC Verified', value: '128', sub: '92.4% compliance', icon: 'verified_user', color: 'text-emerald-500', bg: 'bg-emerald-500' },
        { label: 'Pending Approval', value: '4', sub: 'Requires action', icon: 'pending_actions', color: 'text-amber-500', bg: 'bg-amber-500' },
        { label: 'Suspended', value: '3', sub: 'Security violations', icon: 'block', color: 'text-red-500', bg: 'bg-red-500' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <div key={index} className="medical-card border-none bg-white p-6 group hover:translate-y-[-4px] transition-all cursor-default">
                    <div className="flex items-center justify-between mb-4">
                        <div className={`size-12 rounded-2xl ${stat.bg}/10 ${stat.color} flex items-center justify-center shadow-sm border border-slate-100`}>
                            <span className="material-symbols-outlined text-[24px] font-bold group-hover:scale-110 transition-transform">{stat.icon}</span>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em]">{stat.label}</p>
                            <p className="text-2xl font-black text-text-main tracking-tighter mt-1">{stat.value}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className={`material-symbols-outlined text-[14px] ${stat.label === 'Suspended' ? 'text-red-500' : 'text-emerald-500'}`}>
                            {stat.label === 'Suspended' ? 'trending_up' : 'trending_up'}
                        </span>
                        <p className="text-[11px] font-bold text-text-muted">{stat.sub}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserStats;
