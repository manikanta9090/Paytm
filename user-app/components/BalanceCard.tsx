"use client"

import { FiCreditCard } from 'react-icons/fi';

export const BalanceCard = ({amount, locked}: {
    amount: number;
    locked: number;
}) => {
    const unlocked = amount / 100;
    const totalLocked = locked / 100;
    const total = (amount + locked) / 100;

    return (
        <div className="w-full max-w-2xl mx-auto bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-0 rounded-3xl shadow-2xl relative overflow-hidden animate-pulse-slow">
            <div className="absolute inset-0 bg-gradient-to-r from-paytm-blue-400/20 via-blue-400/10 to-indigo-500/20"></div>
            <div className="relative z-10 p-8">
                <div className="flex items-center justify-center mb-8">
                    <div className="p-5 bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50">
                        <FiCreditCard className="w-10 h-10 text-paytm-blue-600 drop-shadow-lg" />
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-5xl font-black text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text drop-shadow-2xl">
                        ₹{total.toLocaleString('en-IN', {maximumFractionDigits: 0})}
                    </div>
                    <div className="text-xl text-gray-600 mb-10 font-semibold tracking-wide uppercase">Available Balance</div>
                    
                    <div className="grid grid-cols-2 gap-8 p-6">
                        <div className="group text-center p-8 bg-white/60 hover:bg-white backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white/50 cursor-default">
                            <div className="text-4xl font-black text-emerald-600 mb-3 drop-shadow-lg group-hover:scale-110 transition-transform">₹{unlocked.toLocaleString('en-IN', {maximumFractionDigits: 0})}</div>
                            <div className="text-lg text-gray-700 font-bold uppercase tracking-wider">Available</div>
                        </div>
                        <div className="group text-center p-8 bg-white/60 hover:bg-white backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white/50 cursor-default">
                            <div className="text-4xl font-black text-amber-600 mb-3 drop-shadow-lg group-hover:scale-110 transition-transform">₹{totalLocked.toLocaleString('en-IN', {maximumFractionDigits: 0})}</div>
                            <div className="text-lg text-gray-700 font-bold uppercase tracking-wider">Locked</div>
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/30">
                        <div className="text-sm text-gray-500">Balance updates in real-time</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

