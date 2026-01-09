"use client";
import React, { useState } from 'react';
import portfolioData from '@/data/portfolioData';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-blue-200 transition-colors duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
            >
                <span className="text-lg font-semibold text-gray-800 pr-8">{question}</span>
                <span className={`transform transition-transform duration-300 text-blue-600 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div
                className={`bg-gray-50 text-gray-600 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 p-6 pt-0 border-t border-gray-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
            >
                <p className="leading-relaxed">{answer}</p>
            </div>
        </div>
    );
};

const FAQSection = () => {
    const faqs = portfolioData.faqs || [];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600">
                        Common questions about working with me.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
