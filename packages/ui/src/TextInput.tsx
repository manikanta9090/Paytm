"use client"

import { motion } from "framer-motion";

export const TextInput = ({
    placeholder,
    onChange,
    label,
    type = "text"
}: {
    placeholder: string;
    onChange: (value: string) => void;
    label: string;
    type?: string;
}) => {
    return (
        <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-800">{label}</label>
            <motion.input
                onChange={(e) => onChange(e.target.value)}
                type={type}
                className="w-full px-4 py-4 text-lg bg-white border-2 border-slate-200 rounded-2xl focus:border-paytm-blue-500 focus:ring-4 focus:ring-paytm-blue-200/50 shadow-sm transition-all duration-200 text-gray-900 placeholder-gray-400"
                placeholder={placeholder}
                whileFocus={{ scale: 1.02 }}
            />
        </div>
    );
}
