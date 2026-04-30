"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "@repo/ui/appbar";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export function AppbarClient() {
  const session = useSession();
  const router = useRouter();
  const [showNavbar, setShowNavbar] = useState(true);
  const [hideTimer, setHideTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 50) {
        setShowNavbar(true);
        if (hideTimer) {
          clearTimeout(hideTimer);
        }
        // Hide after 2s inactivity
        const timer = setTimeout(() => {
          setShowNavbar(false);
        }, 2000);
        setHideTimer(timer);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, [hideTimer]);

  return (
    <div className={`transition-all duration-300 ease-in-out ${showNavbar ? 'pt-0' : 'pt-[3.5rem]'}`}>
      <Appbar 
        className={`transition-all duration-300 ease-in-out ${showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 invisible'}`} 
        onSignin={signIn} 
        onSignout={async () => {
          await signOut()
          router.push("/api/auth/signin")
        }} 
        user={session.data?.user} 
      />
    </div>
  );
}
