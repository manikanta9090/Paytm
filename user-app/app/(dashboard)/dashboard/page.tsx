"use client"
import { BalanceCard } from "../../../components/BalanceCard";
import { MarketWidget } from "../../../components/MarketWidget";
import { Button } from "@repo/ui/button";
import Link from 'next/link';
import { FiSend, FiPlus, FiUsers } from 'react-icons/fi';

export default function DashboardPage() {
    return (
        <div className="p-8 md:p-12 space-y-8 animate-fadeIn">
            <div className="text-center mb-12 animate-slideDown">
                <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-paytm-blue-600 to-blue-600 bg-clip-text text-transparent mb-4 drop-shadow-lg">
                    Welcome to Paytm
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Manage your wallet, send money to friends, and track all your transactions securely.
                </p>
            </div>

            {/* Wallet Balance */}
            <section className="text-center animate-slideUp">
                <BalanceCard amount={0} locked={0} />
            </section>

            {/* Market Widget */}
            <section className="text-center animate-slideUp delay-100">
                <MarketWidget />
            </section>

            {/* Quick Actions */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slideUp delay-200">
                <Link href="/transfer" className="group">
                    <Button 
                        variant="primary" 
                        size="lg" 
                        className="w-full h-28 text-xl shadow-2xl group-hover:shadow-3xl group-hover:-translate-y-3 transition-all duration-500 transform"
                    >
                        <FiPlus className="w-10 h-10 mr-4" />
                        Add Money
                    </Button>
                </Link>
                <Link href="/p2p" className="group">
                    <Button 
                        variant="primary" 
                        size="lg" 
                        className="w-full h-28 text-xl shadow-2xl group-hover:shadow-3xl group-hover:-translate-y-3 transition-all duration-500 transform"
                    >
                        <FiSend className="w-10 h-10 mr-4" />
                        Send Money
                    </Button>
                </Link>
                <div className="group">
                    <Button 
                        variant="secondary" 
                        size="lg" 
                        className="w-full h-28 text-xl shadow-2xl group-hover:shadow-3xl group-hover:-translate-y-3 transition-all duration-500 transform border-2"
                    >
                        <FiUsers className="w-10 h-10 mr-4" />
                        Users
                    </Button>
                </div>
            </section>

            {/* Recent Activity Preview */}
            <section className="animate-slideUp delay-400">
                <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-slate-100/50">
                    <h2 className="text-4xl font-black text-gray-900 mb-12 text-center drop-shadow-lg">Quick Stats</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div className="group hover:scale-105 transition-transform duration-300">
                            <div className="text-4xl font-black text-green-600 mb-3 drop-shadow-lg">₹0</div>
                            <div className="text-lg text-gray-600 font-semibold uppercase tracking-wider">Today's Income</div>
                        </div>
                        <div className="group hover:scale-105 transition-transform duration-300">
                            <div className="text-4xl font-black text-red-600 mb-3 drop-shadow-lg">₹0</div>
                            <div className="text-lg text-gray-600 font-semibold uppercase tracking-wider">Today's Expense</div>
                        </div>
                        <div className="group hover:scale-105 transition-transform duration-300">
                            <div className="text-4xl font-black text-paytm-blue-600 mb-3 drop-shadow-lg">0</div>
                            <div className="text-lg text-gray-600 font-semibold uppercase tracking-wider">Transactions</div>
                        </div>
                        <div className="group hover:scale-105 transition-transform duration-300">
                            <div className="text-4xl font-black text-purple-600 mb-3 drop-shadow-lg">0</div>
                            <div className="text-lg text-gray-600 font-semibold uppercase tracking-wider">Friends</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

