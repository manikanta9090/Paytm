"use client"

import { SendCard } from "../../../components/SendCard";
import { Card } from "@repo/ui/card";
import { motion } from "framer-motion";
import { FiUsers } from "react-icons/fi";

export default function P2PPage() {
    return (
        <div className="p-8 md:p-12 space-y-8 min-h-screen">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center space-x-4 mb-12"
            >
                <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <FiUsers className="w-7 h-7 text-white" />
                </div>
                <div>
                    <h1 className="text-4xl font-black text-gray-900 mb-1">Send Money</h1>
                    <p className="text-xl text-gray-600">Transfer money to friends & family instantly</p>
                </div>
            </motion.div>

            <div className="max-w-2xl mx-auto">
                <SendCard />
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <Card title="Recent Recipients" className="text-center">
                    <div className="text-gray-500 text-lg py-12">
                        No recent transfers. Send money to someone!
                    </div>
                </Card>
            </motion.div>
        </div>
    );
}