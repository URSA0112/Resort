'use client';
import { useState } from 'react';

interface ApplicationFormProps {
    positions: string[];
}

interface FormState {
    name: string;
    email: string;
    phone: string;
    position: string;
    coverLetter: string;
    cvFile: File | null;
}

export default function ApplicationForm({ positions }: ApplicationFormProps) {
    const [form, setForm] = useState<FormState>({
        name: '',
        email: '',
        phone: '',
        position: '',
        coverLetter: '',
        cvFile: null,
    });
    const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
    const [submitted, setSubmitted] = useState(false);

    const update = (field: keyof FormState, value: string | File | null) => {
        setForm(prev => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
    };

    const validate = (): boolean => {
        const errs: Partial<Record<keyof FormState, string>> = {};
        if (!form.name.trim()) errs.name = 'Full name is required';
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email is required';
        if (!form.phone.trim()) errs.phone = 'Phone number is required';
        if (!form.position) errs.position = 'Please select a position';
        if (!form.cvFile) errs.cvFile = 'CV / Resume is required';
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="text-center py-20 px-6 space-y-6">
                <div className="w-20 h-20 rounded-full border border-gold/30 bg-gold/8 flex items-center justify-center mx-auto">
                    <span className="text-gold text-3xl">✓</span>
                </div>
                <h3 className="font-serif text-3xl text-gold">Application Submitted</h3>
                <p className="text-sm text-neutral-400 leading-relaxed max-w-sm mx-auto">
                    Thank you, <strong className="text-white">{form.name}</strong>. We've received your application for{' '}
                    <strong className="text-white">{form.position}</strong>.<br /><br />
                    Our team will review your profile and reach out at <strong className="text-white">{form.email}</strong> within 5–7 business days.
                </p>
                <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', position: '', coverLetter: '', cvFile: null }); }}
                    className="mt-4 px-8 py-3 border border-gold/50 text-gold text-xs tracking-widest uppercase hover:bg-gold hover:text-forest-black transition-all"
                >
                    Submit Another
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="resort-form max-w-2xl mx-auto space-y-5" noValidate>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={e => update('name', e.target.value)}
                        className={errors.name ? 'input-error' : ''}
                    />
                    {errors.name && <p className="form-error">{errors.name}</p>}
                </div>
                <div>
                    <label className="form-label">Email Address</label>
                    <input
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => update('email', e.target.value)}
                        className={errors.email ? 'input-error' : ''}
                    />
                    {errors.email && <p className="form-error">{errors.email}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="form-label">Phone Number</label>
                    <input
                        type="tel"
                        placeholder="+976 9100 0000"
                        value={form.phone}
                        onChange={e => update('phone', e.target.value)}
                        className={errors.phone ? 'input-error' : ''}
                    />
                    {errors.phone && <p className="form-error">{errors.phone}</p>}
                </div>
                <div>
                    <label className="form-label">Position Applying For</label>
                    <select
                        value={form.position}
                        onChange={e => update('position', e.target.value)}
                        className={errors.position ? 'input-error' : ''}
                    >
                        <option value="">Select a position</option>
                        {positions.map(p => (
                            <option key={p} value={p}>{p}</option>
                        ))}
                    </select>
                    {errors.position && <p className="form-error">{errors.position}</p>}
                </div>
            </div>

            <div>
                <label className="form-label">CV / Resume <span className="text-neutral-600 normal-case text-[10px]">PDF, DOC, DOCX — max 5MB</span></label>
                <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={e => update('cvFile', e.target.files?.[0] ?? null)}
                    className={errors.cvFile ? 'input-error' : ''}
                />
                {errors.cvFile && <p className="form-error">{errors.cvFile}</p>}
            </div>

            <div>
                <label className="form-label">
                    Cover Letter <span className="text-neutral-600 normal-case text-[10px]">(optional)</span>
                </label>
                <textarea
                    placeholder="Tell us why you'd love to work at Marush Resort..."
                    value={form.coverLetter}
                    onChange={e => update('coverLetter', e.target.value)}
                    rows={5}
                />
            </div>

            <button
                type="submit"
                className="w-full py-4 bg-gold text-forest-black text-xs tracking-[0.3em] uppercase font-medium hover:bg-champagne transition-all duration-300"
            >
                Submit Application
            </button>

            <p className="text-[10px] text-neutral-600 text-center leading-relaxed">
                By submitting, you agree to our privacy policy. Your data will only be used for recruitment purposes.
            </p>
        </form>
    );
}
