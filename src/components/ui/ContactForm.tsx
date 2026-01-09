"use client";
import React, { useState } from 'react';

const ContactForm = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate submission
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    return (
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            {status === 'success' ? (
                <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">I'll get back to you within 24 hours.</p>
                    <button onClick={() => setStatus('idle')} className="mt-6 text-blue-600 font-bold hover:underline">Send another message</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                            <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none" placeholder="Your Name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                            <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none" placeholder="john@company.com" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="type" className="block text-sm font-bold text-gray-700 mb-2">Project Type</label>
                        <select id="type" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-600">
                            <option>Select a project type...</option>
                            <option>AI / Agentic Systems</option>
                            <option>Data Engineering / Pipelines</option>
                            <option>Consulting / Strategy</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                        <textarea id="message" required rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none" placeholder="Tell me about your project challenges and goals..."></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className={`w-full py-4 rounded-lg font-bold text-white text-lg transition-all transform hover:-translate-y-1 shadow-lg ${status === 'submitting' ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/30'}`}
                    >
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>

                    <p className="text-center text-xs text-gray-500 mt-4">
                        Typically responds within 24 hours. Your data is kept confidential.
                    </p>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
