import Link from 'next/link';

export default function NewsSection() {
    const articles = [
        {
            title: '2025 Crypto Crime Report',
            category: 'Report',
            description: 'Comprehensive analysis of crypto crime trends and patterns in 2025',
            link: '/resources/2025-crypto-crime-report',
            date: 'January 2025'
        },
        {
            title: 'The Rise of AI-Enabled Crime',
            category: 'White Paper',
            description: 'How artificial intelligence is changing the landscape of financial crime',
            link: '/resources/ai-enabled-crime',
            date: 'December 2024'
        },
        {
            title: 'Global Crypto Policy Review & Outlook 2024/25',
            category: 'Report',
            description: 'In-depth analysis of regulatory developments worldwide',
            link: '/resources/global-crypto-policy',
            date: 'November 2024'
        }
    ];

    return (
        <section className="py-16 md:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our latest news and insights
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600">
                        Stay informed with expert analysis and industry reports
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {articles.map((article, index) => (
                        <Link
                            key={index}
                            href={article.link}
                            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all"
                        >
                            <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800"></div>
                            <div className="p-6">
                                <div className="flex items-center space-x-2 text-xs font-semibold text-blue-600 mb-3">
                                    <span>{article.category}</span>
                                    <span className="text-gray-300">•</span>
                                    <span className="text-gray-500">{article.date}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {article.description}
                                </p>
                                <div className="flex items-center text-blue-600 font-medium">
                                    Read more
                                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/resources"
                        className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all shadow-sm hover:shadow-md"
                    >
                        View all resources
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
