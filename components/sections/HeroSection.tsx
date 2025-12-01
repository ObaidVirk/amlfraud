import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32 lg:py-40">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Blockchain Investigations & Risk Management
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
                        Investigate, monitor, and detect crypto and digital asset fraud and financial crime
                    </p>
                    <Link
                        href="/request-demo"
                        className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-base font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                    >
                        Request a demo
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Decorative background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
}
