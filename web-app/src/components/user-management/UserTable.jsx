import React, { useState } from 'react';

const UserTable = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'BioGen Global Lab',
            wallet: '0x71C...4e21',
            role: 'Manufacturer',
            kyc: 'Verified',
            status: 'Active',
            lastActivity: '2 mins ago',
            activityType: 'Inventory Update',
            isPending: false
        },
        {
            id: 2,
            name: 'SwiftLogix Distro',
            wallet: '0xA3B...F891',
            role: 'Distributor',
            kyc: 'Verified',
            status: 'Active',
            lastActivity: '14 hours ago',
            activityType: 'Batch Transit Start',
            isPending: false
        },
        {
            id: 3,
            name: 'City Central Health',
            wallet: '0x9D2...77C0',
            role: 'Pharmacy',
            kyc: 'Rejected',
            status: 'Suspended',
            lastActivity: '3 days ago',
            activityType: 'Login Attempt',
            isPending: false
        },
        {
            id: 4,
            name: 'MedSource Inc.',
            wallet: '0xBD2...88A1',
            role: 'Manufacturer',
            kyc: 'Pending',
            status: 'Pending Approval',
            lastActivity: 'Just now',
            activityType: 'Registration Request',
            isPending: true
        },
    ]);

    const handleApprove = (id) => {
        setUsers(users.map(u => u.id === id ? { ...u, isPending: false, status: 'Active', kyc: 'Verified' } : u));
    };

    const handleReject = (id) => {
        setUsers(users.map(u => u.id === id ? { ...u, isPending: false, status: 'Suspended', kyc: 'Rejected' } : u));
    };

    return (
        <div className="medical-card p-0 overflow-hidden flex flex-col bg-white border-none shadow-none">
            <div className="overflow-x-auto flex-1">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50/50 border-b border-slate-100 text-[11px] font-bold text-text-muted uppercase tracking-[0.2em]">
                            <th className="px-6 py-5">Participant & Wallet</th>
                            <th className="px-6 py-5">Role</th>
                            <th className="px-6 py-5 text-center">KYC Status</th>
                            <th className="px-6 py-5 text-center">Network Status</th>
                            <th className="px-6 py-5 text-right">Governance Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-slate-50/50 transition-colors group">
                                <td className="px-6 py-5">
                                    <div className="flex items-center gap-4">
                                        <div className={`size-10 rounded-xl flex items-center justify-center border-2 ${user.isPending ? 'bg-amber-50 border-amber-100 text-amber-500' : 'bg-slate-50 border-slate-100 text-slate-400'} group-hover:scale-110 transition-transform`}>
                                            <span className="material-symbols-outlined text-[20px]">
                                                {user.role === 'Manufacturer' ? 'factory' : user.role === 'Distributor' ? 'local_shipping' : 'medication'}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-[14px] font-black text-text-main leading-tight">{user.name}</p>
                                            <div className="flex items-center gap-1.5 mt-1 opacity-60 group-hover:opacity-100 transition-opacity">
                                                <code className="text-[10px] font-black font-mono text-text-muted bg-slate-100 px-1.5 py-0.5 rounded tracking-tighter">{user.wallet}</code>
                                                <span className="material-symbols-outlined text-[12px] cursor-pointer hover:text-primary">content_copy</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-5 text-[11px] font-black text-text-muted uppercase tracking-widest">
                                    {user.role}
                                </td>
                                <td className="px-6 py-5 text-center">
                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${user.kyc === 'Verified' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                            user.kyc === 'Rejected' ? 'bg-red-50 text-red-600 border-red-100' :
                                                'bg-amber-50 text-amber-600 border-amber-100'
                                        }`}>
                                        <span className={`size-1.5 rounded-full ${user.kyc === 'Verified' ? 'bg-emerald-500' : user.kyc === 'Rejected' ? 'bg-red-500' : 'bg-amber-500 animate-pulse'}`}></span>
                                        {user.kyc}
                                    </span>
                                </td>
                                <td className="px-6 py-5 text-center">
                                    <span className={`text-[11px] font-black ${user.status === 'Active' ? 'text-primary' :
                                            user.status === 'Suspended' ? 'text-slate-300' :
                                                'text-amber-500'
                                        } uppercase tracking-widest`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-5 text-right">
                                    {user.isPending ? (
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleReject(user.id)}
                                                className="size-9 rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center border border-red-100"
                                                title="Reject Application"
                                            >
                                                <span className="material-symbols-outlined text-[20px]">close</span>
                                            </button>
                                            <button
                                                onClick={() => handleApprove(user.id)}
                                                className="h-9 px-4 rounded-xl bg-emerald-500 text-white font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-emerald-500/20"
                                            >
                                                Approve
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="size-9 rounded-xl bg-slate-50 text-text-muted hover:text-primary hover:bg-white hover:shadow-md transition-all flex items-center justify-center border border-slate-100">
                                                <span className="material-symbols-outlined text-[20px]">manage_accounts</span>
                                            </button>
                                            <button className="size-9 rounded-xl bg-slate-50 text-text-muted hover:text-red-500 hover:bg-red-50 transition-all flex items-center justify-center border border-slate-100">
                                                <span className="material-symbols-outlined text-[20px]">block</span>
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserTable;
