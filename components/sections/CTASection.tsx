import Link from 'next/link';

export default function CTASection() {
    return (
        <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to get started?
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
                    Join leading organizations in the fight against crypto crime
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/request-demo"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                    >
                        Request a demo
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all"
                    >
                        Contact sales
                    </Link>
                </div>
            </div>

            {/* Decorative background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
}
