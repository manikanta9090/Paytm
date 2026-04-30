"use client"

import { FiArrowDownCircle, FiClock } from "react-icons/fi";

export const OnRampTransactions = ({
    transactions
}: {
    transactions: {
        time: Date;
        amount: number;
        status: string;
        provider: string;
    }[];
}) => {

    if (!transactions.length) {
        return (
            <div className="text-center py-10 text-gray-500">
                No transactions yet
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {transactions.map((t, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white rounded-xl shadow hover:shadow-md transition"
                >
                    
                    <div className="flex items-center space-x-4">
                        
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100">
                            <FiArrowDownCircle className="text-green-600 w-6 h-6" />
                        </div>

                        <div>
                            <div className="font-semibold text-gray-900">
                                Added from {t.provider}
                            </div>

                            <div className="text-sm text-gray-500 flex items-center space-x-1">
                                <FiClock className="w-3 h-3"/>
                                <span>
                                    {new Date(t.time).toLocaleDateString("en-IN")}
                                </span>
                            </div>
                        </div>

                    </div>

                    <div className="text-right">
                        <div className="font-bold text-green-600">
                            + ₹{t.amount / 100}
                        </div>

                        <div className="text-xs text-gray-500">
                            {t.status}
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
};