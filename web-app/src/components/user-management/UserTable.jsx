import React from 'react';

const UserTable = () => {
    const users = [
        { name: 'BioGen Global Lab', wallet: '0x71C...4e21', role: 'Manufacturer', roleColor: 'bg-blue-50 text-blue-700 border-blue-100', status: 'Active', statusColor: 'bg-emerald-500', lastActivity: '2 mins ago', activityType: 'Inventory Update' },
        { name: 'SwiftLogix Distro', wallet: '0xA3B...F891', role: 'Distributor', roleColor: 'bg-amber-50 text-amber-700 border-amber-100', status: 'Active', statusColor: 'bg-emerald-500', lastActivity: '14 hours ago', activityType: 'Batch Transit Start' },
        { name: 'City Central Health', wallet: '0x9D2...77C0', role: 'Pharmacy', roleColor: 'bg-purple-50 text-purple-700 border-purple-100', status: 'Suspended', statusColor: 'bg-slate-300', lastActivity: '3 days ago', activityType: 'Login Attempt', actionRequired: true },
        { name: 'Apex Pharma Retail', wallet: '0x5E8...2A11', role: 'Pharmacy', roleColor: 'bg-purple-50 text-purple-700 border-purple-100', status: 'Active', statusColor: 'bg-emerald-500', lastActivity: 'Just now', activityType: 'Signature Applied' },
    ];

    return (
        <div className="medical-card p-0 overflow-hidden flex flex-col bg-white">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
                <div>
                    <h3 className="font-bold text-lg text-text-main">System Participants</h3>
                    <p className="text-xs text-text-muted">Verified medical entities and their network activity</p>
                </div>
                <div className="flex gap-2">
                    <button className="btn-secondary px-4 py-2 text-xs flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">person_add</span>
                        Invite Entity
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto flex-1">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50/50 border-b border-slate-100 text-[12px] font-bold text-text-muted uppercase tracking-widest">
                            <th className="px-6 py-4">Participant Identity</th>
                            <th className="px-6 py-4">Authorized Role</th>
                            <th className="px-6 py-4">Security</th>
                            <th className="px-6 py-4">Last Event</th>
                            <th className="px-6 py-4">Ledger Status</th>
                            <th className="px-6 py-4 text-right">Operations</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                        {users.map((user, index) => (
                            <tr key={index} className="hover:bg-slate-50/50 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-11 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden bg-white shadow-sm">
                                            <span className="material-symbols-outlined text-slate-400">domain</span>
                                        </div>
                                        <div>
                                            <p className="text-[14px] font-bold text-text-main">{user.name}</p>
                                            <div className="flex items-center gap-1.5 mt-0.5">
                                                <code className="text-[11px] font-mono text-text-muted bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">{user.wallet}</code>
                                                <button className="text-slate-300 hover:text-primary transition-colors">
                                                    <span className="material-symbols-outlined text-[15px]">content_copy</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold border ${user.roleColor.replace('bg-blue-50', 'bg-blue-50/50').replace('bg-amber-50', 'bg-amber-50/50').replace('bg-purple-50', 'bg-purple-50/50')}`}>
                                        <span className="material-symbols-outlined text-[14px] mr-1.5">
                                            {user.role === 'Manufacturer' ? 'factory' : user.role === 'Distributor' ? 'local_shipping' : 'medication'}
                                        </span>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className={`size-2.5 rounded-full ${user.status === 'Active' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)] animate-pulse' : 'bg-slate-300'}`}></div>
                                        <span className={`text-xs font-semibold ${user.status === 'Suspended' ? 'text-slate-400 italic' : 'text-text-main'}`}>{user.status}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-xs text-text-main font-semibold tracking-tight">{user.lastActivity}</p>
                                    <p className="text-[10px] text-text-muted uppercase font-bold tracking-tighter mt-0.5">{user.activityType}</p>
                                </td>
                                <td className="px-6 py-4">
                                    {user.actionRequired ? (
                                        <div className="flex items-center gap-1.5 text-amber-600">
                                            <span className="material-symbols-outlined text-lg">error</span>
                                            <span className="text-[10px] font-bold uppercase tracking-tight">Audit Required</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-1.5 text-primary">
                                            <span className="material-symbols-outlined text-lg font-bold">verified_user</span>
                                            <span className="text-[10px] font-bold uppercase tracking-tight">Verified</span>
                                        </div>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-2.5 hover:bg-white hover:shadow-md rounded-xl text-slate-400 hover:text-text-main transition-all border border-transparent hover:border-slate-100">
                                            <span className="material-symbols-outlined text-[20px]">tune</span>
                                        </button>
                                        {user.actionRequired ? (
                                            <button className="btn-primary py-1.5 text-[11px] px-4">
                                                Grant Access
                                            </button>
                                        ) : (
                                            <button className="btn-secondary py-1.5 text-[11px] px-4 font-bold border border-slate-200">
                                                Manage
                                            </button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                <p className="text-xs font-semibold text-text-muted">Particpants Record: <span className="text-text-main">1-4</span> of <span className="text-text-main">142</span> entities identified</p>
                <div className="flex items-center gap-3">
                    <button className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-400 hover:text-text-main transition-all disabled:opacity-30" disabled>
                        <span className="material-symbols-outlined text-xl leading-none">keyboard_arrow_left</span>
                    </button>
                    <div className="flex items-center gap-1.5">
                        <button className="size-8 rounded-lg bg-primary text-white text-[11px] font-bold flex items-center justify-center shadow-md shadow-primary/20">1</button>
                        <button className="size-8 rounded-lg bg-white border border-slate-200 text-text-muted text-[11px] font-bold flex items-center justify-center hover:bg-slate-50 transition-colors">2</button>
                        <button className="size-8 rounded-lg bg-white border border-slate-200 text-text-muted text-[11px] font-bold flex items-center justify-center hover:bg-slate-50 transition-colors">3</button>
                        <span className="text-slate-300 mx-1">...</span>
                        <button className="size-8 rounded-lg bg-white border border-slate-200 text-text-muted text-[11px] font-bold flex items-center justify-center hover:bg-slate-50 transition-colors">12</button>
                    </div>
                    <button className="p-1.5 rounded-lg border border-slate-200 bg-white text-text-muted hover:text-text-main transition-all shadow-sm">
                        <span className="material-symbols-outlined text-xl leading-none">keyboard_arrow_right</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserTable;
