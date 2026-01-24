import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Show loading for 2 seconds then fade out
        const timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 500); // Wait for fade out animation
        }, 2000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-[60] flex items-center justify-center bg-background transition-opacity duration-500 ${isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
        >
            <div className="flex flex-col items-center gap-4 animate-pulse">
                <div className="w-24 h-24 rounded-2xl bg-white shadow-lg flex items-center justify-center p-4">
                    <img src="/jms.png" alt="Loading..." className="w-full h-full object-contain" />
                </div>
                <p className="text-primary font-medium tracking-widest text-sm uppercase">Loading</p>
            </div>
        </div>
    );
};

export default LoadingScreen;
