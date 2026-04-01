'use client';
import { use, useState } from "react";

export default function BookingButton() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            {/* Button */}
            <button
                onClick={() => setOpen(true)}
                className="
          mt-5 w-full py-3 text-sm tracking-[0.2em] uppercase
          border border-amber-400 text-amber-400 rounded-md
          hover:bg-amber-400 hover:text-black
          transition-all duration-300
        "
            >
                Book Room
            </button>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

                    {/* Card */}
                    <div className="
            relative max-w-md w-full mx-4 p-8
            rounded-2xl
            bg-linear-to-b from-neutral-900 to-black
            border border-amber-400/30
            shadow-[0_0_40px_rgba(251,191,36,0.15)]
            text-center
            animate-[fadeIn_0.4s_ease]
          ">

                        {/* Glow Accent */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-amber-400/20 blur-3xl rounded-full" />

                        {/* Title */}
                        <h2 className="text-2xl tracking-[0.3em] uppercase text-amber-400 mb-4">
                            Coming Soon
                        </h2>

                        {/* Divider */}
                        <div className="w-10 h-[1px] bg-amber-400 mx-auto mb-6 opacity-60" />

                        {/* Text */}
                        <p className="text-sm text-neutral-300 leading-relaxed mb-8">
                            We're almost ready for you. A beautiful resort experience is on its way — designed to make you feel truly at home. Opening July 2026. Stay tuned!"
                        </p>

                        {/* Button */}
                        <button
                            onClick={() => setOpen(false)}
                            className="
                px-6 py-2 text-xs tracking-widest uppercase
                border border-amber-400 text-amber-400 rounded-full
                hover:bg-amber-400 hover:text-black
                transition-all duration-300
              "
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}