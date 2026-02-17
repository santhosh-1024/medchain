import React from 'react';

const StatCard = ({ icon, title, value, colorClass, iconBgClass }) => {
    return (
        <div className="medical-card medical-card-hover flex items-center gap-5 cursor-default group">
            <div className={`p-3.5 rounded-xl ${iconBgClass} ${colorClass} bg-opacity-10 transition-transform group-hover:scale-110`}>
                <span className="material-symbols-outlined text-[28px]">{icon}</span>
            </div>
            <div>
                <p className="text-[13px] text-text-muted font-semibold uppercase tracking-wider mb-0.5">{title}</p>
                <p className="text-2xl font-bold text-text-main tracking-tight">{value}</p>
            </div>
        </div>
    );
};

export default StatCard;
