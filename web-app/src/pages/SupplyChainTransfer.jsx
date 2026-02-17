import React, { useState } from 'react';
import TimelineStepper from '../components/supply-chain/TimelineStepper';
import AssignedBatchesTable from '../components/supply-chain/AssignedBatchesTable';
import TransferActionPanel from '../components/supply-chain/TransferActionPanel';
import TransferModal from '../components/supply-chain/TransferModal';

const SupplyChainTransfer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col gap-0 w-full animate-in fade-in slide-in-from-bottom-4 duration-700 -m-8">
            {/* Standardized Page Header */}
            <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 flex items-center justify-between shadow-sm sticky top-0 z-30 w-full">
                <div className="flex items-center gap-3">
                    <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-sm border border-primary/20">
                        <span className="material-symbols-outlined font-bold">swap_horiz</span>
                    </div>
                    <div>
                        <h2 className="text-text-main text-lg font-black leading-tight tracking-tight">Custody Operations</h2>
                        <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Ownership Authorization Protocol</p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 px-4 py-1.5 bg-green-50 rounded-full border border-green-100">
                        <div className="size-1.5 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[10px] font-black text-green-700 uppercase tracking-widest">Network Integrated</span>
                    </div>
                    <button className="btn-primary px-6 py-2.5 text-[11px] font-black shadow-lg shadow-primary/20">
                        AUTHORIZE ALL
                    </button>
                    <div className="size-10 rounded-full bg-slate-100 border border-slate-200 p-0.5">
                        <img className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiPvdIt_4FVRL5KbwM8N-wvvUaKrFhcEAOkI-_riqCXZjBnROK_eKVkiuwQ1VydmpLaO9rtv4Twa-2C_-_Fo7GWrj-KA648iz6tSr18oN6CZz0Ya8SQdM9MSVGxl-gjRgvN7UK5pkDbR99yJ76MYIibtAJofnuf1q6uCbnEfM3ob5d0tppH6Ik0flzT8n03KD54DX57xuyOqEJoz5bpUvJtgNpC4EcWeWvlJLYj1ciMeFkqNeoMJS7BNHFezSeSQDc5gl14gPiUpL0" alt="Profile" />
                    </div>
                </div>
            </header>

            <div className="p-8 md:p-10 max-w-[1500px] w-full mx-auto grid grid-cols-12 gap-10">
                {/* Header Section */}
                <div className="col-span-12">
                    <h1 className="text-3xl font-black text-text-main tracking-tighter">Batch Transfer Management</h1>
                    <p className="text-text-muted mt-2 font-medium text-lg">Select pharmaceutical batches to authorize individual ownership transfer on the MedChain ledger.</p>
                </div>

                {/* Horizontal Timeline Stepper */}
                <div className="col-span-12">
                    <TimelineStepper />
                </div>

                {/* Main Content Area: List and Action Panel */}
                <div className="col-span-12 lg:col-span-8">
                    <AssignedBatchesTable />
                </div>

                {/* Sidebar Action Panel */}
                <div className="col-span-12 lg:col-span-4 space-y-4">
                    <div onClick={() => setIsModalOpen(true)} className="cursor-pointer">
                        <TransferActionPanel />
                    </div>

                    <div className="medical-card bg-slate-50 border-none p-6 space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-xl">info</span>
                            <p className="text-[11px] font-black text-text-main uppercase tracking-widest">Authorization Guide</p>
                        </div>
                        <p className="text-[12px] text-text-muted leading-relaxed font-medium italic">
                            All transfers require a cryptographic gas fee and are finalized after 12 verification blocks.
                            Unauthorized attempts are logged for system audit.
                        </p>
                    </div>
                </div>

                <TransferModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

                {/* Footer */}
                <footer className="col-span-12 border-t border-slate-100 mt-20 pt-10 pb-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="flex items-center gap-3">
                            <div className="size-8 bg-primary/5 rounded flex items-center justify-center border border-primary/20">
                                <span className="material-symbols-outlined text-[16px] text-primary font-bold">hub</span>
                            </div>
                            <span className="text-[11px] font-black tracking-widest text-text-muted uppercase">MedChain Operational Node v2.4.1</span>
                        </div>
                        <div className="flex gap-10 text-[10px] font-black text-text-muted uppercase tracking-[0.2em]">
                            <a className="hover:text-primary transition-colors" href="#">Privacy</a>
                            <a className="hover:text-primary transition-colors" href="#">Standard</a>
                            <a className="hover:text-primary transition-colors" href="#">Registry</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default SupplyChainTransfer;
