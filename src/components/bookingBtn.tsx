'use client';
import { useState } from "react";

interface Amenity {
    icon: string;
    label: string;
}

interface BookingButtonProps {
    roomName: string;
    roomType: string;
    size: number;
    price: string;
    priceNum: number;
    usd: string;
    amenities: Amenity[];
    maxGuests: number;
}

export default function BookingButton({ roomName, roomType, size, price, priceNum, amenities, maxGuests }: BookingButtonProps) {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [form, setForm] = useState({
        checkIn: '',
        checkOut: '',
        guests: '1',
        name: '',
        email: '',
        phone: '',
        requests: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const nights = (() => {
        if (!form.checkIn || !form.checkOut) return 0;
        const diff = new Date(form.checkOut).getTime() - new Date(form.checkIn).getTime();
        return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
    })();

    const totalMNT = (priceNum * nights).toLocaleString();
    const totalUSD = Math.round((priceNum / 3500) * nights);
    const today = new Date().toISOString().split('T')[0];

    const validate = (): boolean => {
        const errs: Record<string, string> = {};
        if (step === 1) {
            if (!form.checkIn) errs.checkIn = 'Check-in date required';
            if (!form.checkOut) errs.checkOut = 'Check-out date required';
            if (form.checkIn && form.checkOut && nights <= 0) errs.checkOut = 'Check-out must be after check-in';
        }
        if (step === 2) {
            if (!form.name.trim()) errs.name = 'Full name is required';
            if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email is required';
            if (!form.phone.trim()) errs.phone = 'Phone number is required';
        }
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleNext = () => {
        if (!validate()) return;
        if (step === 1) setStep(2);
        else if (step === 2) setStep(3);
    };

    const handleClose = () => {
        setOpen(false);
        setTimeout(() => {
            setStep(1);
            setForm({ checkIn: '', checkOut: '', guests: '1', name: '', email: '', phone: '', requests: '' });
            setErrors({});
        }, 300);
    };

    const update = (field: string, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
    };

    const formatDate = (d: string) => {
        if (!d) return '';
        return new Date(d + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(true)}
                className="mt-5 w-full py-3 text-sm tracking-[0.2em] uppercase border border-gold text-gold rounded-md hover:bg-gold hover:text-forest-black transition-all duration-300"
            >
                Book Room
            </button>

            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4"
                    onClick={e => e.target === e.currentTarget && handleClose()}
                >
                    <div className="booking-modal relative w-full sm:max-w-lg bg-abyss border border-gold/20 sm:rounded-2xl rounded-t-2xl shadow-[0_0_80px_rgba(200,174,122,0.1)] max-h-[94vh] flex flex-col [animation:modalIn_0.3s_ease_forwards]">

                        {/* Header */}
                        <div className="px-6 pt-6 pb-4 border-b border-white/5 flex-shrink-0">
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-neutral-500 hover:text-gold transition text-base"
                                aria-label="Close"
                            >✕</button>

                            <span className="text-[10px] tracking-[0.35em] uppercase text-gold">Reserve · Marush Resort</span>
                            <h2 className="font-serif text-xl text-white mt-1">{roomName}</h2>

                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="text-[10px] tracking-widest uppercase text-neutral-500 border border-gold/15 px-2 py-0.5 rounded">{roomType}</span>
                                <span className="text-[10px] tracking-widest uppercase text-neutral-500 border border-gold/15 px-2 py-0.5 rounded">{size} m²</span>
                            </div>

                            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3">
                                {amenities.map(a => (
                                    <span key={a.label} className="text-[10px] text-gold/60 flex items-center gap-1.5">
                                        <span>{a.icon}</span>{a.label}
                                    </span>
                                ))}
                            </div>

                            {step < 3 && (
                                <div className="flex gap-1.5 mt-4">
                                    {([1, 2] as const).map(s => (
                                        <div key={s} className={`h-0.5 flex-1 rounded-full transition-all duration-500 ${step >= s ? 'bg-gold' : 'bg-white/10'}`} />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Scrollable Body */}
                        <div className="overflow-y-auto flex-1 px-6 py-5 space-y-4">

                            {/* STEP 1 — Dates */}
                            {step === 1 && (
                                <>
                                    <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-500">Step 1 — Select Dates & Guests</p>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="text-[10px] tracking-wider uppercase text-neutral-500 block mb-1.5">Check-in</label>
                                            <input
                                                type="date"
                                                min={today}
                                                value={form.checkIn}
                                                onChange={e => {
                                                    update('checkIn', e.target.value);
                                                    if (form.checkOut && e.target.value >= form.checkOut) update('checkOut', '');
                                                }}
                                                className={errors.checkIn ? 'input-error' : ''}
                                            />
                                            {errors.checkIn && <p className="text-red-400 text-[10px] mt-1">{errors.checkIn}</p>}
                                        </div>
                                        <div>
                                            <label className="text-[10px] tracking-wider uppercase text-neutral-500 block mb-1.5">Check-out</label>
                                            <input
                                                type="date"
                                                min={form.checkIn || today}
                                                value={form.checkOut}
                                                onChange={e => update('checkOut', e.target.value)}
                                                className={errors.checkOut ? 'input-error' : ''}
                                            />
                                            {errors.checkOut && <p className="text-red-400 text-[10px] mt-1">{errors.checkOut}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[10px] tracking-wider uppercase text-neutral-500 block mb-1.5">Guests</label>
                                        <select value={form.guests} onChange={e => update('guests', e.target.value)}>
                                            {Array.from({ length: maxGuests }, (_, i) => i + 1).map(n => (
                                                <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {nights > 0 && (
                                        <div className="bg-gold/5 border border-gold/15 rounded-xl p-4">
                                            <div className="flex justify-between items-center">
                                                <span className="text-xs text-neutral-400">{price} × {nights} {nights === 1 ? 'night' : 'nights'}</span>
                                                <span className="font-serif text-lg text-gold">₮{totalMNT}</span>
                                            </div>
                                            <div className="text-right text-[10px] text-neutral-600 mt-0.5">≈ USD {totalUSD}</div>
                                            <div className="border-t border-white/5 mt-3 pt-3 flex items-center gap-2 text-[10px] text-gold/60">
                                                <span>✓</span>
                                                <span>Breakfast included · {nights} {nights === 1 ? 'night' : 'nights'}</span>
                                            </div>
                                        </div>
                                    )}

                                    <button
                                        onClick={handleNext}
                                        className="w-full py-3 bg-gold text-forest-black text-xs tracking-[0.25em] uppercase font-medium rounded-lg hover:bg-champagne transition-all"
                                    >
                                        Continue →
                                    </button>
                                </>
                            )}

                            {/* STEP 2 — Personal Details */}
                            {step === 2 && (
                                <>
                                    <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-500">Step 2 — Your Details</p>

                                    <div className="flex justify-between items-center text-xs bg-white/3 rounded-lg px-4 py-3 border border-white/5">
                                        <span className="text-neutral-500">{roomName} · {nights} {nights === 1 ? 'night' : 'nights'} · {form.guests} {parseInt(form.guests) === 1 ? 'guest' : 'guests'}</span>
                                        <span className="text-gold font-serif">₮{totalMNT}</span>
                                    </div>

                                    <div>
                                        <label className="text-[10px] tracking-wider uppercase text-neutral-500 block mb-1.5">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your full name"
                                            value={form.name}
                                            onChange={e => update('name', e.target.value)}
                                            className={errors.name ? 'input-error' : ''}
                                        />
                                        {errors.name && <p className="text-red-400 text-[10px] mt-1">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <label className="text-[10px] tracking-wider uppercase text-neutral-500 block mb-1.5">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            value={form.email}
                                            onChange={e => update('email', e.target.value)}
                                            className={errors.email ? 'input-error' : ''}
                                        />
                                        {errors.email && <p className="text-red-400 text-[10px] mt-1">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <label className="text-[10px] tracking-wider uppercase text-neutral-500 block mb-1.5">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="+976 9100 0000"
                                            value={form.phone}
                                            onChange={e => update('phone', e.target.value)}
                                            className={errors.phone ? 'input-error' : ''}
                                        />
                                        {errors.phone && <p className="text-red-400 text-[10px] mt-1">{errors.phone}</p>}
                                    </div>

                                    <div>
                                        <label className="text-[10px] tracking-wider uppercase text-neutral-500 block mb-1.5">
                                            Special Requests <span className="text-neutral-700 normal-case">(optional)</span>
                                        </label>
                                        <textarea
                                            placeholder="Dietary needs, arrival time, special occasions..."
                                            value={form.requests}
                                            onChange={e => update('requests', e.target.value)}
                                            rows={3}
                                        />
                                    </div>

                                    <p className="text-[10px] text-neutral-600 leading-relaxed">
                                        Our team will contact you within 24 hours to confirm your reservation.
                                    </p>

                                    <div className="flex gap-3 pt-1">
                                        <button
                                            onClick={() => setStep(1)}
                                            className="flex-1 py-3 border border-white/10 text-neutral-500 text-xs tracking-widest uppercase rounded-lg hover:border-gold/30 hover:text-neutral-300 transition-all"
                                        >← Back</button>
                                        <button
                                            onClick={handleNext}
                                            className="flex-[2] py-3 bg-gold text-forest-black text-xs tracking-[0.2em] uppercase font-medium rounded-lg hover:bg-champagne transition-all"
                                        >Confirm Reservation</button>
                                    </div>
                                </>
                            )}

                            {/* STEP 3 — Success */}
                            {step === 3 && (
                                <div className="text-center py-6 space-y-5">
                                    <div className="w-16 h-16 rounded-full border border-gold/30 bg-gold/8 flex items-center justify-center mx-auto">
                                        <span className="text-gold text-2xl">✓</span>
                                    </div>

                                    <div>
                                        <h3 className="font-serif text-2xl text-gold mb-3">Reservation Sent</h3>
                                        <p className="text-xs text-neutral-500 leading-relaxed max-w-xs mx-auto">
                                            Thank you, <strong className="text-white">{form.name}</strong>. Your request for{' '}
                                            <strong className="text-white">{roomName}</strong> from{' '}
                                            <strong className="text-white">{formatDate(form.checkIn)}</strong> to{' '}
                                            <strong className="text-white">{formatDate(form.checkOut)}</strong> ({nights} {nights === 1 ? 'night' : 'nights'}) has been received.
                                        </p>
                                    </div>

                                    <div className="bg-gold/5 border border-gold/15 rounded-xl p-4 text-left space-y-2.5 max-w-xs mx-auto w-full">
                                        <div className="flex justify-between text-xs">
                                            <span className="text-neutral-500">Total</span>
                                            <span className="text-gold font-serif">₮{totalMNT}</span>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-neutral-500">Guests</span>
                                            <span className="text-white">{form.guests}</span>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-neutral-500">Confirmation to</span>
                                            <span className="text-white truncate max-w-[55%] text-right">{form.email}</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleClose}
                                        className="px-10 py-3 border border-gold/50 text-gold text-xs tracking-widest uppercase rounded-full hover:bg-gold hover:text-black transition-all"
                                    >
                                        Done
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
