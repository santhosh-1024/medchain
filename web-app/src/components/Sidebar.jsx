import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { userRole, logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Failed to log out', error);
        }
    };

    const adminLinks = [
        { path: '/ai-suspicious-activity', name: 'System Sentry', icon: 'monitoring' },
        { path: '/user-management', name: 'Identity Gov', icon: 'shield_person' },
        { path: '/admin/audit-logs', name: 'Compliance Audit', icon: 'history_edu' },
        { path: '/admin/settings', name: 'Network Config', icon: 'settings' },
    ];

    const manufacturerLinks = [
        { path: '/manufacturer', name: 'Batch Center', icon: 'factory' },
        { path: '/supply-chain', name: 'Custodian Transfer', icon: 'local_shipping' },
        // { path: '/manufacturer/analytics', name: 'Yield Analytics', icon: 'analytics' },
    ];

    const userLinks = [
        { path: '/user/portal', name: 'Safety Hub', icon: 'health_and_safety' },
        { path: '/scan-history', name: 'My History', icon: 'manage_search' },
    ];

    const getLinks = () => {
        switch (userRole) {
            case 'admin': return adminLinks;
            case 'manufacturer': return manufacturerLinks;
            case 'user': return userLinks;
            default: return userLinks;
        }
    };

    const links = getLinks();

    return (
        <aside className="w-64 h-screen fixed left-0 top-0 z-40 flex flex-col bg-white border-r border-slate-100 shadow-sm">
            <div className="p-8 pb-6 flex items-center gap-3">
                <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary border border-primary/20 shadow-sm">
                    <span className="material-symbols-outlined text-[24px] font-bold">shield_health</span>
                </div>
                <div>
                    <h1 className="text-xl font-black text-text-main tracking-tighter leading-none">MedChain</h1>
                    <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mt-1">Stitch Protocol</p>
                </div>
            </div>

            <nav className="flex-1 px-4 space-y-1.5 mt-4 overflow-y-auto custom-scrollbar">
                <div className="px-4 mb-2">
                    <p className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em]">{userRole} Portal</p>
                </div>
                {links.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${isActive
                                ? 'bg-primary/5 text-primary border-r-4 border-primary shadow-sm'
                                : 'text-text-muted hover:bg-slate-50 hover:text-text-main'
                                }`}
                        >
                            <span className={`material-symbols-outlined text-[20px] transition-transform group-hover:scale-110 ${isActive ? 'font-bold' : ''}`}>
                                {link.icon}
                            </span>
                            <span className={`text-[13px] tracking-tight ${isActive ? 'font-black' : 'font-semibold'}`}>
                                {link.name}
                            </span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-50 bg-slate-50/30">
                <div className="medical-card p-4 bg-white shadow-none border-slate-100 mb-2">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full border-2 border-primary/10 p-0.5 overflow-hidden">
                            <img className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiPvdIt_4FVRL5KbwM8N-wvvUaKrFhcEAOkI-_riqCXZjBnROK_eKVkiuwQ1VydmpLaO9rtv4Twa-2C_-_Fo7GWrj-KA648iz6tSr18oN6CZz0Ya8SQdM9MSVGxl-gjRgvN7UK5pkDbR99yJ76MYIibtAJofnuf1q6uCbnEfM3ob5d0tppH6Ik0flzT8n03KD54DX57xuyOqEJoz5bpUvJtgNpC4EcWeWvlJLYj1ciMeFkqNeoMJS7BNHFezSeSQDc5gl14gPiUpL0" alt="Profile" />
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-[12px] font-black text-text-main leading-tight truncate">Dr. S. Rivera</p>
                            <p className="text-[10px] text-text-muted uppercase tracking-widest font-black mt-0.5 truncate">{userRole || 'Unauthorized'}</p>
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-text-muted hover:bg-red-50 hover:text-red-600 transition-all group"
                >
                    <span className="material-symbols-outlined text-[20px] group-hover:rotate-12 transition-transform">logout</span>
                    <span className="text-[13px] font-bold tracking-tight">Terminate Session</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
