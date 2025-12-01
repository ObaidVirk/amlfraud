import PageHero from '@/components/PageHero';
import ContentCard from '@/components/ContentCard';

export default function BlogPage() {
    const articles = [
        {
            title: 'Understanding Cross-Chain Tracing in 2025',
            description: 'A comprehensive guide to tracing cryptocurrency across multiple blockchains',
            category: 'Technical',
            date: 'January 15, 2025',
            link: '#'
        },
        {
            title: 'The Evolution of Crypto Crime: 2024 Year in Review',
            description: 'Key trends and insights from the past year in cryptocurrency crime',
            category: 'Industry Insights',
            date: 'January 10, 2025',
            link: '#'
        },
        {
            title: 'Best Practices for Wallet Screening',
            description: 'How to effectively screen cryptocurrency wallets for risk',
            category: 'Best Practices',
            date: 'January 5, 2025',
            link: '#'
        },
        {
            title: 'Regulatory Updates: Global Crypto Compliance',
            description: 'Latest regulatory developments affecting crypto businesses worldwide',
            category: 'Compliance',
            date: 'December 28, 2024',
            link: '#'
        },
        {
            title: 'Case Study: Major Ransomware Investigation',
            description: 'How blockchain intelligence helped solve a major ransomware case',
            category: 'Case Study',
            date: 'December 20, 2024',
            link: '#'
        },
        {
            title: 'Introduction to DeFi Risk Management',
            description: 'Understanding and managing risks in decentralized finance',
            category: 'Education',
            date: 'December 15, 2024',
            link: '#'
        }
    ];

    return (
        <div>
            <PageHero
                title="amlFraud Blog"
                description="Insights, analysis, and best practices for blockchain intelligence and crypto compliance"
                gradient={false}
            />

            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                            <ContentCard
                                key={index}
                                title={article.title}
                                description={article.description}
                                category={article.category}
                                date={article.date}
                                link={article.link}
                                imageGradient={index % 3 === 0 ? 'from-blue-600 to-blue-800' : index % 3 === 1 ? 'from-purple-600 to-purple-800' : 'from-indigo-600 to-indigo-800'}
                            />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-16 flex justify-center">
                        <nav className="flex items-center space-x-2">
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                                Previous
                            </button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">2</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">3</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                                Next
                            </button>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Subscribe to our newsletter
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Get the latest insights delivered to your inbox
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button
                            type="submit"
                            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}
