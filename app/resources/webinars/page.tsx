import PageHero from '@/components/PageHero';

export default function WebinarsPage() {
    const upcomingWebinars = [
        {
            title: 'Advanced Blockchain Forensics Techniques',
            date: 'February 15, 2025',
            time: '2:00 PM EST',
            description: 'Learn advanced techniques for tracing cryptocurrency across multiple blockchains',
            speakers: 'Dr. Sarah Chen, Lead Investigator'
        },
        {
            title: 'Crypto Compliance for Financial Institutions',
            date: 'February 22, 2025',
            time: '1:00 PM EST',
            description: 'Best practices for implementing crypto compliance programs',
            speakers: 'Michael Rodriguez, Compliance Expert'
        }
    ];

    const pastWebinars = [
        {
            title: 'The Future of Crypto Crime Investigation',
            date: 'January 18, 2025',
            description: 'Insights into emerging trends and technologies in crypto crime investigation',
            recording: true
        },
        {
            title: 'DeFi Risk Management Strategies',
            date: 'January 11, 2025',
            description: 'Comprehensive guide to managing risks in decentralized finance',
            recording: true
        },
        {
            title: 'Regulatory Landscape 2025',
            date: 'December 14, 2024',
            description: 'Overview of global crypto regulations and compliance requirements',
            recording: true
        }
    ];

    return (
        <div>
            <PageHero
                title="Webinars & Events"
                description="Join our experts for live discussions on blockchain intelligence and crypto compliance"
                gradient={false}
            />

            {/* Upcoming Webinars */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Upcoming webinars
                        </h2>
                        <p className="text-lg text-gray-600">
                            Register now to secure your spot
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {upcomingWebinars.map((webinar, index) => (
                            <div key={index} className="p-8 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-xl transition-all">
                                <div className="flex items-center space-x-2 text-sm font-semibold text-blue-600 mb-4">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>{webinar.date} • {webinar.time}</span>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                                    {webinar.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {webinar.description}
                                </p>
                                <p className="text-sm text-gray-500 mb-6">
                                    Speaker: {webinar.speakers}
                                </p>
                                <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">
                                    Register now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Webinars */}
            <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            On-demand webinars
                        </h2>
                        <p className="text-lg text-gray-600">
                            Watch recordings of our past webinars
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pastWebinars.map((webinar, index) => (
                            <div key={index} className="p-8 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-xl transition-all">
                                <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg mb-6 flex items-center justify-center">
                                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <div className="text-sm text-gray-500 mb-3">{webinar.date}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {webinar.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {webinar.description}
                                </p>
                                <button className="w-full px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                                    Watch recording
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
