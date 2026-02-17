import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    const links = [
        { name: 'Manufacturer', path: '/manufacturer', icon: 'account_tree' },
        { name: 'Supply Chain', path: '/supply-chain', icon: 'hub' },
        { name: 'User Management', path: '/user-management', icon: 'group' },
        { name: 'Scan History', path: '/scan-history', icon: 'history' },
        { name: 'Recalled Item (Demo)', path: '/recalled', icon: 'report_problem' },
        { name: 'Counterfeit Item (Demo)', path: '/counterfeit', icon: 'gpp_bad' },
        { name: 'AI Suspicious Activity', path: '/ai-suspicious-activity', icon: 'warning' },
    ];

    return (
        <aside className="w-64 h-screen fixed left-0 top-0 z-40 flex flex-col bg-white border-r border-slate-200 shadow-sm">
            <div className="p-8">
                <div className="flex items-center gap-3">
                    <div className="bg-primary/10 size-10 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-2xl font-bold">shield_with_heart</span>
                    </div>
                    <div>
                        <h1 className="text-text-main text-xl font-bold leading-tight tracking-tight">MedChain</h1>
                        <p className="text-text-muted text-[10px] font-semibold tracking-wider uppercase">Health Systems</p>
                    </div>
                </div>
            </div>

            <nav className="flex-1 px-4 space-y-1.5 mt-2 overflow-y-auto custom-scrollbar">
                {links.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-[10px] transition-all duration-200 group ${isActive
                                ? 'bg-primary/5 text-primary border-r-4 border-primary'
                                : 'text-text-muted hover:bg-slate-50 hover:text-text-main'
                                }`}
                        >
                            <span
                                className={`material-symbols-outlined transition-colors duration-200 ${isActive ? 'text-primary' : 'text-slate-400 group-hover:text-slate-600'}`}
                                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                            >
                                {link.icon}
                            </span>
                            <span className={`text-sm ${isActive ? 'font-semibold' : 'font-medium'}`}>{link.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-6 border-t border-slate-100">
                <div className="flex items-center gap-3 p-2 rounded-xl border border-transparent hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div className="size-9 rounded-full overflow-hidden bg-slate-200">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3aQhWBStOC2gBVvgmVaaSdmNKOnv-nZggD4zzaMLOmF3GZX5M4gWNZM51DMkySXYH3t4WlEsSm2Pp0Uql810HrnXQUOn-snq1a45Kb9cwVsBvZoGiCkXC6oQhlTxtyLqjhaGZXu9XA1m1854ZfIZuwQWKcXAVS-zAp4f5AVB9-nqHRSPl2iKB_K_PvlZ4oDVyiyY49HcKbRla6REaHJrFtckpxFyCT1XCtb0Ly3b86VF5HVxrvSFgVwAt2CqZdFkqEZqce5E8hFU4" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <p className="text-text-main text-xs font-bold truncate">Dr. Aris Thorne</p>
                        <p className="text-text-muted text-[9px] font-medium truncate uppercase tracking-tighter">Security Administrator</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-300 text-lg">unfold_more</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
