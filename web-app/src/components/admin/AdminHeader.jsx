import React from 'react';

const AdminHeader = () => {
    return (
        <header className="h-20 bg-white border-b border-slate-100 px-8 flex items-center justify-between shadow-sm sticky top-0 z-30">
            <div className="flex items-center gap-4 relative group">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-primary transition-colors">manage_search</span>
                <input
                    className="input-field pl-11 pr-4 py-2.5 text-[13px] w-80 h-11 border-slate-100 focus:bg-white bg-slate-50/30"
                    placeholder="Search ledger nodes or scan IDs..."
                    type="text"
                />
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 px-4 py-2 bg-green-50 rounded-full border border-green-100 shadow-sm">
                    <div className="size-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                    <span className="text-[10px] font-black text-green-700 uppercase tracking-widest">Sentinel AI: Active</span>
                </div>

                <div className="flex items-center gap-2">
                    <button className="relative size-11 rounded-xl bg-white border border-slate-100 text-slate-400 hover:text-primary hover:bg-slate-50 hover:border-primary/20 transition-all shadow-sm flex items-center justify-center group">
                        <span className="material-symbols-outlined text-xl">notifications_active</span>
                        <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white ring-2 ring-red-100 animate-bounce"></span>
                    </button>

                    <div className="h-8 w-px bg-slate-200 mx-2"></div>

                    <button className="btn-primary px-6 py-2.5 flex items-center gap-2 text-[11px] font-black shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-lg">assessment</span>
                        ADMIN REPORT
                    </button>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
