import prisma from "@repo/db/client";
import { Card } from "@repo/ui/card";
import { OnRampTransactions } from "../../../components/OnRampTransactions";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

async function getTransactions() {
    const session = await getServerSession(authOptions);

    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });

    return txns.map(t => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }));
}

export default async function TransactionsPage() {

    const transactions = await getTransactions();

    return (
        <div className="p-8 md:p-12 space-y-8 min-h-screen">
            
            <div className="flex items-center space-x-4 mb-12">
                <div className="w-12 h-12 bg-gradient-to-r from-paytm-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                </div>

                <div>
                    <h1 className="text-4xl font-black text-gray-900">Transactions</h1>
                    <p className="text-gray-600">View your wallet transaction history</p>
                </div>
            </div>

            <div className="max-w-4xl">
                <Card title="Transaction History">
                    <OnRampTransactions transactions={transactions} />
                </Card>
            </div>

        </div>
    );
}