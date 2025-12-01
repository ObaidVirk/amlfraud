import Link from 'next/link';

interface PageHeroProps {
    title: string;
    description: string;
    ctaText?: string;
    ctaLink?: string;
    gradient?: boolean;
}

export default function PageHero({ title, description, ctaText, ctaLink, gradient = true }: PageHeroProps) {
    return (
        <section className={`relative overflow-hidden ${gradient ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900' : 'bg-gray-900'}`}>
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        {title}
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
                        {description}
                    </p>
                    {ctaText && ctaLink && (
                        <Link
                            href={ctaLink}
                            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-base font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                        >
                            {ctaText}
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    )}
                </div>
            </div>

            {gradient && (
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                </div>
            )}
        </section>
    );
}
