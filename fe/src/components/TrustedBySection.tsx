import React from 'react';
import { Hospital, Activity, HeartPulse, Stethoscope, Microscope, Syringe, Ambulance, Cross } from 'lucide-react';

const clients = [
    { name: "RSUD Welas Asih", icon: Hospital },
    { name: "RSU Bina Sehat", icon: Cross },
    { name: "RS Sartika Asih", icon: HeartPulse },
    { name: "RSUD Sumedang", icon: Activity },
    { name: "RS Maranatha", icon: Stethoscope },
    { name: "RS Izza Karawang", icon: Microscope },
    { name: "RS Edelweiss Cianjur", icon: Syringe },
    { name: "RS Humana Prima", icon: Ambulance },
    { name: "RS Hamori Subang", icon: Hospital },
];

export default function TrustedBySection() {
    return (
        <section className="py-12 border-y border-border bg-white dark:bg-black overflow-hidden hide-scrollbar">
            <div className="container mx-auto px-4 mb-8">
                <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                    Dipercaya oleh puluhan fasilitas kesehatan B2B di Indonesia
                </p>
            </div>

            {/* Marquee Wrapper */}
            <div className="relative flex w-full overflow-hidden  isolate">
                {/* Left Gradient Fade */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
                {/* Right Gradient Fade */}
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

                {/* Marquee Track - We need to render the contents twice for a seamless infinite loop */}
                <div className="flex animate-marquee hover:[animation-play-state:paused] w-max whitespace-nowrap">
                    {/* Group 1 */}
                    <div className="flex items-center">
                        {clients.map((client, idx) => {
                            const Icon = client.icon;
                            return (
                                <div key={`group1-${idx}`} className="flex items-center justify-center min-w-[200px] md:min-w-[250px] px-8 cursor-default">
                                    <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-green-600 transition-colors duration-300">
                                        <Icon className="h-10 w-10 opacity-70" strokeWidth={1.5} />
                                        <span className="text-sm font-semibold tracking-tight">{client.name}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* Group 2 (Duplicate for Loop) */}
                    <div className="flex items-center">
                        {clients.map((client, idx) => {
                            const Icon = client.icon;
                            return (
                                <div key={`group2-${idx}`} className="flex items-center justify-center min-w-[200px] md:min-w-[250px] px-8 cursor-default">
                                    <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-green-600 transition-colors duration-300">
                                        <Icon className="h-10 w-10 opacity-70" strokeWidth={1.5} />
                                        <span className="text-sm font-semibold tracking-tight">{client.name}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
