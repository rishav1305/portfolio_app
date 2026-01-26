
"use client";

import React, { useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { TextStreamChatTransport, UIMessage } from 'ai';
import { MessageCircle, X, Send, User, Bot, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AIChatWidget = () => {
    const { messages, status, sendMessage } = useChat<UIMessage>({
        transport: new TextStreamChatTransport({ api: '/api/chat' }),
        messages: [
            {
                id: 'welcome',
                role: 'assistant',
                parts: [{ type: 'text', text: "Hi! I'm Rishav's Digital Twin. Ask me about his experience with building Agentic AI systems or his leadership style." }]
            }
        ]
    });

    const [input, setInput] = React.useState('');
    const isLoading = status === 'submitted' || status === 'streaming';

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        const userMessage = input;
        setInput(''); // Clear input immediately
        await sendMessage({ text: userMessage });
    };

    const [isOpen, setIsOpen] = React.useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSuggestionClick = (text: string) => {
        sendMessage({ text });
    };

    const suggestions = [
        "What is Rishav's experience with Kafka?",
        "Tell me about the GOAT project.",
        "Is he available for freelance work?",
        "What is his tech stack?"
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-[350px] md:w-[400px] mb-4 overflow-hidden flex flex-col h-[550px]"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white flex justify-between items-center shadow-md">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30">
                                    <Bot className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-base">Rishav's Digital Twin</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></span>
                                        <span className="text-xs text-blue-100 font-medium">Powered by Gemini</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1.5 transition-colors"
                                aria-label="Close Chat"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
                            {messages.map((m) => (
                                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] rounded-2xl p-3.5 text-sm leading-relaxed shadow-sm ${m.role === 'user'
                                        ? 'bg-blue-600 text-white rounded-br-none'
                                        : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                                        }`}>
                                        {m.role === 'assistant' && (
                                            <div className="flex items-center gap-1.5 mb-1 opacity-50 text-[10px] uppercase tracking-wider font-bold">
                                                <Sparkles className="w-3 h-3" /> AI Assistant
                                            </div>
                                        )}
                                        <div className="max-w-none [&>p]:mb-1 [&>p:last-child]:mb-0">
                                            {m.parts
                                                .filter(part => part.type === 'text')
                                                .map((part, i) => (
                                                    <p key={i}>{part.text}</p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none p-4 shadow-sm flex items-center gap-1.5">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggestions */}
                        {messages.length === 1 && (
                            <div className="px-4 pb-2 bg-gray-50">
                                <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wider px-1">Suggested Questions</p>
                                <div className="flex flex-wrap gap-2">
                                    {suggestions.map((q, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleSuggestionClick(q)}
                                            className="text-left text-xs bg-white hover:bg-blue-50 text-gray-600 hover:text-blue-600 border border-gray-200 hover:border-blue-200 rounded-lg px-3 py-2 transition-all shadow-sm"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-gray-100">
                            <form onSubmit={handleSubmit} className="flex gap-2 relative">
                                <input
                                    value={input}
                                    onChange={handleInputChange}
                                    placeholder="Type your question..."
                                    className="flex-1 bg-gray-100 text-gray-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-gray-400"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl p-3 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                            <div className="text-center mt-2">
                                <span className="text-[10px] text-gray-400">AI can make mistakes. Please verify important info.</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 z-50 ${isOpen
                    ? 'bg-gray-800 text-white rotate-90'
                    : 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white hover:shadow-blue-500/30'
                    }`}
                aria-label="Toggle AI Chat"
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <MessageCircle className="w-7 h-7" />
                )}
            </motion.button>
        </div>
    );
};

export default AIChatWidget;
