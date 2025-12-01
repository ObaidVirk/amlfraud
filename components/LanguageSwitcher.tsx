'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const languages = [
    // Fully translated languages first
    { code: 'en', name: 'English', countryCode: 'gb' },
    { code: 'ur', name: 'اردو', countryCode: 'pk' },
    { code: 'ar', name: 'العربية', countryCode: 'sa' },

    // Other languages
    { code: 'zh', name: '中文', countryCode: 'cn' },
    { code: 'es', name: 'Español', countryCode: 'es' },
    { code: 'fr', name: 'Français', countryCode: 'fr' },
    { code: 'de', name: 'Deutsch', countryCode: 'de' },
    { code: 'ja', name: '日本語', countryCode: 'jp' },
    { code: 'ko', name: '한국어', countryCode: 'kr' },
    { code: 'tr', name: 'Türkçe', countryCode: 'tr' },
    { code: 'ru', name: 'Русский', countryCode: 'ru' },
    { code: 'pt', name: 'Português', countryCode: 'pt' },
    { code: 'hi', name: 'हिन्दी', countryCode: 'in' },
    { code: 'bn', name: 'বাংলা', countryCode: 'bd' },
    { code: 'id', name: 'Indonesia', countryCode: 'id' },
    { code: 'ms', name: 'Melayu', countryCode: 'my' },
    { code: 'it', name: 'Italiano', countryCode: 'it' },
    { code: 'nl', name: 'Nederlands', countryCode: 'nl' },
    { code: 'pl', name: 'Polski', countryCode: 'pl' },
    { code: 'fa', name: 'فارسی', countryCode: 'ir' },
];

export default function LanguageSwitcher() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [currentLocale, setCurrentLocale] = useState('en');

    // Get current locale from cookie on mount
    useEffect(() => {
        const cookies = document.cookie.split(';');
        const localeCookie = cookies.find(c => c.trim().startsWith('NEXT_LOCALE='));
        if (localeCookie) {
            const locale = localeCookie.split('=')[1];
            setCurrentLocale(locale);
        }
    }, []);

    const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

    const handleLanguageChange = (newLocale: string) => {
        // Set cookie for persistence
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

        // Update state
        setCurrentLocale(newLocale);

        // Reload page to apply new locale
        window.location.reload();

        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.language-switcher')) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }
    }, [isOpen]);

    return (
        <div className="relative language-switcher">
            {/* Current Language Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Change language"
            >
                <img
                    src={`https://flagcdn.com/w40/${currentLanguage.countryCode}.png`}
                    srcSet={`https://flagcdn.com/w80/${currentLanguage.countryCode}.png 2x`}
                    width="20"
                    height="15"
                    alt={currentLanguage.name}
                    className="object-cover rounded-sm"
                />
                <span className="hidden sm:inline">{currentLanguage.name}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 max-h-96 overflow-y-auto">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                        Select Language
                    </div>
                    <div className="grid grid-cols-1 gap-0.5">
                        {languages.map((language) => (
                            <button
                                key={language.code}
                                onClick={() => handleLanguageChange(language.code)}
                                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-blue-50 transition-colors ${language.code === currentLocale ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                                    }`}
                            >
                                <img
                                    src={`https://flagcdn.com/w40/${language.countryCode}.png`}
                                    srcSet={`https://flagcdn.com/w80/${language.countryCode}.png 2x`}
                                    width="24"
                                    height="18"
                                    alt={language.name}
                                    className="object-cover rounded-sm shadow-sm"
                                />
                                <span className="flex-1 text-left">{language.name}</span>
                                {language.code === currentLocale && (
                                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
