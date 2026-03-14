"use client"
import { usePathname, useRouter } from "next/navigation";
import { FiChevronRight } from 'react-icons/fi';

export const SidebarItem = ({ href, title, icon }: { href: string; title: string; icon: React.ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname()
    const selected = pathname === href

    return (
        <div 
            className={`flex items-center cursor-pointer p-4 pl-6 rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-x-1 ${
                selected 
                    ? "bg-gradient-to-r from-paytm-blue-500 to-blue-600 text-white shadow-lg" 
                    : "text-slate-700 hover:bg-slate-100 hover:text-paytm-blue-600 bg-white/50"
            }`}
            onClick={() => {
                router.push(href);
            }}
        >
            <div className="w-10 h-10 bg-white/30 rounded-xl flex items-center justify-center mr-4 shadow-sm backdrop-blur-sm">
                {icon}
            </div>
            <div className="font-semibold flex-1 text-lg">{title}</div>
            <FiChevronRight className={`w-5 h-5 transition-transform ${selected ? 'rotate-90 text-white/80' : 'text-slate-400'}`} />
        </div>
    );
};

