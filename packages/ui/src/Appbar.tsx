import { Button } from "./button";
import { FiUser, FiLogOut } from 'react-icons/fi';

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    onSignin: any,
    onSignout: any,
    className?: string
}

export const Appbar = ({
    user,
    onSignin,
    onSignout,
    className
}: AppbarProps) => {
    const defaultClass = "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-lg border-b border-slate-200 px-6 py-2 h-[3.5rem] flex items-center md:px-8";

    return (
        <div className={`${defaultClass} ${className || ''}`}>

            <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">P</span>
                </div>
                <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    Paytm
                </div>
            </div>
            <div className="flex items-center space-x-4">
                {user && (
                    <div className="flex items-center space-x-2 text-sm font-medium text-gray-700 hidden md:flex">
                        <FiUser className="w-5 h-5" />
                        <span>Hi, {user.name || 'User'}</span>
                    </div>
                )}
                <Button 
                    variant="primary"
                    size="md"
                    onClick={user ? onSignout : onSignin}
                    className={user ? "flex items-center space-x-2" : ""}
                >
                    {user ? (
                        <>
                            <FiLogOut className="w-4 h-4" />
                            <span>Logout</span>
                        </>
                    ) : (
                        <span>Login</span>
                    )}
                </Button>
            </div>
        </div>
    );
};
