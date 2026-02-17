import React from 'react';

const NetworkMap = () => {
    return (
        <div className="flex-[3] relative rounded-[20px] overflow-hidden bg-[#0F172A] shadow-2xl border border-slate-800 group min-h-[480px]">
            {/* Map Background and Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="absolute inset-0 bg-[#0F172A]/90"></div>

            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    alt="Network Map"
                    className="w-full h-full object-cover opacity-30 mix-blend-screen scale-110 grayscale hover:scale-100 transition-all duration-1000"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXlFknnuRY7owafQmN1sBfRrHtJo-omKHh3SKsUbE2ZUwd2X9XQpQFZEdmerfP8m2w_lwJkDFung-J-wtt9C0x5Xwe5qIrqS_6RIVeInmuGzeOPGti_ZmPJSedRfeSxCRoZunbgl6ak_313WtBvaMeNO9WCZr3eEMy3pmDcN1HLphA-yxQZfv95oT90jyGHIX96LczZlWdzW_3DtaN-YngndA54vgUGgEXb4tvmAvoRE03lFNegred_zkZicKJw7vKp-qHuv6PO9sU"
                />
            </div>

            {/* Title Overlay */}
            <div className="absolute top-8 left-8 z-20">
                <div className="flex flex-col gap-1">
                    <h3 className="text-white font-black text-2xl tracking-tight flex items-center gap-3">
                        <div className="size-3 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(37,99,235,0.8)]"></div>
                        Global Intelligence Node Status
                    </h3>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] ml-6">Real-time Cross-Chain Monitoring</p>
                </div>
            </div>

            {/* Overlay Controls */}
            <div className="absolute top-8 right-8 z-20 flex flex-col gap-2">
                <button className="size-11 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 text-white flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all shadow-lg">
                    <span className="material-symbols-outlined text-xl">add</span>
                </button>
                <button className="size-11 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 text-white flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all shadow-lg">
                    <span className="material-symbols-outlined text-xl">remove</span>
                </button>
            </div>

            <div className="absolute bottom-8 left-8 z-20">
                <div className="bg-[#0F172A]/80 backdrop-blur-2xl px-6 py-4 rounded-2xl border border-white/5 text-white flex items-center gap-8 shadow-2xl">
                    <div className="flex items-center gap-3">
                        <div className="size-3 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)]"></div>
                        <span className="text-[11px] font-black uppercase tracking-widest text-slate-300">Operational</span>
                    </div>
                    <div className="flex items-center gap-3 border-l border-white/10 pl-8">
                        <div className="size-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_12px_rgba(239,68,68,0.6)]"></div>
                        <span className="text-[11px] font-black uppercase tracking-widest text-slate-300">Anomaly Detected</span>
                    </div>
                </div>
            </div>

            {/* Hotspot Markers */}
            <div className="absolute top-[35%] left-[28%] z-10 group/marker cursor-pointer">
                <div className="size-24 bg-red-500/10 rounded-full flex items-center justify-center animate-ping absolute inset-0"></div>
                <div className="size-24 bg-red-500/20 rounded-full flex items-center justify-center relative backdrop-blur-sm">
                    <div className="size-5 bg-red-500 rounded-full border-4 border-white shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-transform group-hover/marker:scale-125"></div>
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-52 bg-[#0F172A] border border-red-500/40 p-5 rounded-2xl scale-0 group-hover/marker:scale-100 transition-all duration-300 origin-bottom z-30 shadow-2xl">
                    <div className="flex justify-between items-start mb-3">
                        <p className="text-[11px] text-white font-black uppercase tracking-widest">Node: US-EAST-INTL</p>
                        <span className="px-1.5 py-0.5 bg-red-500 text-white text-[9px] font-black rounded">CRITICAL</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full mb-3 overflow-hidden">
                        <div className="w-[92%] h-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                    </div>
                    <p className="text-[11px] text-red-400 font-mono font-bold">Threat Anomaly: 92.4%</p>
                </div>
            </div>

            <div className="absolute top-[30%] left-[52%] z-10 group/marker cursor-pointer">
                <div className="size-20 bg-amber-500/10 rounded-full flex items-center justify-center animate-ping absolute inset-0 animation-delay-700"></div>
                <div className="size-20 bg-amber-500/20 rounded-full flex items-center justify-center relative backdrop-blur-sm">
                    <div className="size-4 bg-amber-500 rounded-full border-2 border-white shadow-[0_0_20px_rgba(245,158,11,0.6)]"></div>
                </div>
            </div>

            <div className="absolute top-[65%] left-[75%] z-10">
                <div className="size-4 bg-primary rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)] border-2 border-white/50"></div>
            </div>
            <div className="absolute top-[58%] left-[18%] z-10">
                <div className="size-3 bg-primary rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)] border border-white/30 opacity-60"></div>
            </div>
        </div>
    );
};

export default NetworkMap;
