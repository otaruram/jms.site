import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const { pathname } = useLocation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0);

        // Trigger animation
        setIsVisible(false);
        const timeout = setTimeout(() => setIsVisible(true), 50);

        return () => clearTimeout(timeout);
    }, [pathname]);

    return (
        <div
            className={`transition-all duration-700 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
        >
            {children}
        </div>
    );
};

export default PageTransition;
