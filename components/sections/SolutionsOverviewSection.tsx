import Link from 'next/link';

export default function SolutionsOverviewSection() {
    const solutions = [
        {
            title: 'Government and Public Sector',
            description: 'Empower law enforcement and regulatory agencies with advanced blockchain intelligence',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            link: '/law-enforcement'
        },
        {
            title: 'Financial Institutions',
            description: 'Comprehensive compliance and risk management for banks and financial services',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            link: '/banking'
        },
        {
            title: 'Crypto Businesses',
            description: 'Built-in compliance tools for exchanges, wallets, and crypto-native companies',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            link: '/crypto-business'
        }
    ];

    return (
        <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        How can we help you?
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600">
                        Tailored solutions for every industry
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <Link
                            key={index}
                            href={solution.link}
                            className="group p-8 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-xl transition-all"
                        >
                            <div className="text-blue-600 mb-6">
                                {solution.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                {solution.title}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {solution.description}
                            </p>
                            <div className="flex items-center text-blue-600 font-medium">
                                Learn more
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
