import PageHero from '@/components/PageHero';
import ContentCard from '@/components/ContentCard';

export default function ReportsPage() {
    const reports = [
        {
            title: '2025 Crypto Crime Report',
            description: 'Comprehensive analysis of crypto crime trends, patterns, and predictions for the year ahead',
            category: 'Annual Report',
            date: 'January 2025',
            link: '#'
        },
        {
            title: 'The State of DeFi Security',
            description: 'In-depth analysis of security risks and best practices in decentralized finance',
            category: 'White Paper',
            date: 'December 2024',
            link: '#'
        },
        {
            title: 'Global Crypto Policy Review & Outlook 2024/25',
            description: 'Comprehensive review of regulatory developments worldwide',
            category: 'Policy Report',
            date: 'November 2024',
            link: '#'
        },
        {
            title: 'Blockchain Intelligence ROI for Law Enforcement',
            description: 'Quantifying the return on investment for government agencies',
            category: 'Case Study',
            date: 'October 2024',
            link: '#'
        },
        {
            title: 'Digital Asset Use Cases for Financial Institutions',
            description: 'Comprehensive guide for banks and financial services',
            category: 'White Paper',
            date: 'September 2024',
            link: '#'
        },
        {
            title: 'Tackling Crypto Crime: Law Enforcement Survey',
            description: 'Insights from law enforcement agencies worldwide',
            category: 'Survey Report',
            date: 'August 2024',
            link: '#'
        }
    ];

    return (
        <div>
            <PageHero
                title="Reports & White Papers"
                description="In-depth research and analysis on blockchain intelligence, crypto crime, and compliance"
                gradient={false}
            />

            {/* Featured Report */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 to-blue-800">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6">
                            Featured Report
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            2025 Crypto Crime Report
                        </h2>
                        <p className="text-lg sm:text-xl text-blue-100 mb-10 leading-relaxed">
                            Our most comprehensive analysis yet of cryptocurrency crime trends, patterns, and predictions for 2025
                        </p>
                        <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg">
                            Download report
                        </button>
                    </div>
                </div>
            </section>

            {/* All Reports */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            All reports
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reports.map((report, index) => (
                            <ContentCard
                                key={index}
                                title={report.title}
                                description={report.description}
                                category={report.category}
                                date={report.date}
                                link={report.link}
                                imageGradient={index % 3 === 0 ? 'from-blue-600 to-blue-800' : index % 3 === 1 ? 'from-purple-600 to-purple-800' : 'from-indigo-600 to-indigo-800'}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
