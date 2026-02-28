import React, { useState, useRef, useEffect } from 'react';
import { X, Clover, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

type Message = {
    id: string;
    sender: 'bot' | 'user';
    type: 'initial' | 'opt1' | 'opt2' | 'opt3' | 'opt4' | 'userMsg';
    userMsgKey?: string;
    options?: { key: string, labelKey: string }[];
};

const WA_NUMBER = "628132001258";

const INITIAL_OPTIONS = [
    { key: "opt1", labelKey: "chat.opt.1" },
    { key: "opt2", labelKey: "chat.opt.2" },
    { key: "opt3", labelKey: "chat.opt.3" },
    { key: "opt4", labelKey: "chat.opt.4" },
    { key: "opt5", labelKey: "chat.opt.5" }
];

const INITIAL_MESSAGE: Message = {
    id: 'msg-1',
    sender: 'bot',
    type: 'initial',
    options: INITIAL_OPTIONS
};

const MessageContent = ({ msg }: { msg: Message }) => {
    const { t } = useLanguage();

    if (msg.type === 'userMsg' && msg.userMsgKey) return <>{t(msg.userMsgKey)}</>;
    if (msg.type === 'initial') return <>{t('chat.init')}</>;

    if (msg.type === 'opt1') return (
        <div className="space-y-2">
            <p>{t('chat.resp.1.desc')}</p>
            <ol className="list-decimal pl-4 space-y-2">
                <li><strong>Gorden PVC (Blackout & Non-Blackout):</strong> {t('chat.resp.1.pvc')}</li>
                <li><strong>Gorden Polyester:</strong> {t('chat.resp.1.poly')}</li>
                <li><strong>Gorden Minimalis:</strong> {t('chat.resp.1.min')}</li>
            </ol>
            <p className="mt-2">{t('chat.resp.1.acc')}</p>
        </div>
    );

    if (msg.type === 'opt2') return (
        <div className="space-y-2">
            <p>{t('chat.resp.2.desc')}</p>
            <ul className="list-disc pl-4">
                <li><strong>Warna Solid (PVC & Polyester):</strong> {t('chat.resp.2.solid')}</li>
            </ul>
            <p className="text-sm italic text-muted-foreground">{t('chat.resp.2.note')}</p>
            <p className="mt-2 font-medium">{t('chat.resp.2.cta')}</p>
        </div>
    );

    if (msg.type === 'opt3') return (
        <div className="space-y-2">
            <p>{t('chat.resp.3.desc')}</p>
            <ul className="space-y-1 mt-2">
                <li>🏥 RSUD Welas Asih</li>
                <li>🏥 RSU Bina Sehat</li>
                <li>🏥 RS Sartika Asih</li>
                <li>🏥 RSUD Sumedang</li>
                <li>🏥 RS Maranatha</li>
                <li>🏥 RS Izza Karawang</li>
                <li>🏥 RS Edelweiss Cianjur</li>
                <li>🏥 RS Humana Prima</li>
                <li>🏥 RS Hamori Subang</li>
            </ul>
        </div>
    );

    if (msg.type === 'opt4') return (
        <div className="space-y-2">
            <p>{t('chat.resp.4.desc')}</p>
            <ul className="space-y-1 mt-2 text-sm">
                <li>📍 <strong>Alamat:</strong> {t('chat.resp.4.addr')}</li>
                <li>📞 <strong>Telepon:</strong> 022-4572-0408</li>
                <li>📱 <strong>WhatsApp:</strong> 0813-2001-258</li>
                <li>✉️ <strong>Email:</strong> jayatamedikasentosa03@gmail.com</li>
                <li>📷 <strong>Instagram:</strong> @jayatamedikaofficial</li>
            </ul>
            <p className="mt-2 text-sm font-medium">{t('chat.resp.4.hours')}</p>
        </div>
    );

    return null;
};

export default function SmartChatWidget() {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleOptionClick = (opt: { key: string, labelKey: string }) => {
        if (opt.key === "opt5") {
            window.open(`https://wa.me/${WA_NUMBER}`, '_blank');
            return;
        }

        // Add User Message
        const userMsg: Message = {
            id: Date.now().toString() + '-user',
            sender: 'user',
            type: 'userMsg',
            userMsgKey: opt.labelKey
        };

        setMessages(prev => [...prev, userMsg]);

        // Simulate Bot typing delay
        setTimeout(() => {
            const botMsg: Message = {
                id: Date.now().toString() + '-bot',
                sender: 'bot',
                type: opt.key as Message['type'],
                options: INITIAL_OPTIONS // Provide options again for easy navigation
            };

            setMessages(prev => [...prev, botMsg]);
        }, 600);
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-green-600 text-white shadow-xl hover:bg-green-700 hover:scale-105 active:scale-95 transition-all duration-300 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
                aria-label={t('chat.toggle')}
            >
                <MessageCircle className="w-8 h-8" />
            </button>

            {/* Chatbot Widget Container */}
            <div
                className={`fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[550px] max-h-[calc(100vh-4rem)] bg-[#F8F9FA] dark:bg-zinc-900 border border-border shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col transition-all duration-300 ease-in-out origin-bottom-right ${isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none'}`}
                style={{ borderRadius: '12px' }}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 bg-green-600 text-white" style={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                            <Clover className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-[15px] leading-tight flex items-center gap-1">
                                {t('chat.title')}
                            </h3>
                            <p className="text-[11px] text-green-100 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse inline-block" />
                                {t('chat.status')}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Chat Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, index) => (
                        <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>

                            <div
                                className={`max-w-[85%] p-3 text-sm leading-relaxed shadow-sm ${msg.sender === 'user'
                                    ? 'bg-green-600 text-white rounded-[16px_16px_4px_16px]'
                                    : 'bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-[16px_16px_16px_4px] border border-zinc-100 dark:border-zinc-700'
                                    }`}
                            >
                                <MessageContent msg={msg} />
                            </div>

                            {/* Action Buttons for Bot Messages */}
                            {msg.options && index === messages.length - 1 && (
                                <div className="mt-3 flex flex-col gap-2 w-full max-w-[90%] fade-in-up">
                                    {msg.options.map((opt, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleOptionClick(opt)}
                                            className={`text-left px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 border ${opt.key === 'opt5'
                                                ? 'bg-green-50 dark:bg-green-500/10 border-green-200 dark:border-green-500/30 text-green-700 dark:text-green-400 hover:bg-green-100 flex items-center justify-between group'
                                                : 'bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-green-400 hover:text-green-600 dark:hover:text-green-400'
                                                }`}
                                            style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}
                                        >
                                            <span>{t(opt.labelKey)}</span>
                                            {opt.key === 'opt5' && <Send className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-1 transition-transform" />}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Footer info */}
                <div className="p-3 text-center text-[10px] text-zinc-400 border-t border-border bg-white dark:bg-zinc-900 rounded-b-[12px]">
                    {t('chat.footer')}
                </div>
            </div>
        </>
    );
}
