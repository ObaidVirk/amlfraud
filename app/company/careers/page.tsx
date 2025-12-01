import PageHero from '@/components/PageHero';

export default function CareersPage() {
    const positions = [
        {
            title: 'Senior Blockchain Investigator',
            department: 'Product',
            location: 'Remote',
            type: 'Full-time'
        },
        {
            title: 'Compliance Solutions Engineer',
            department: 'Engineering',
            location: 'New York, NY',
            type: 'Full-time'
        },
        {
            title: 'Customer Success Manager',
            department: 'Customer Success',
            location: 'Remote',
            type: 'Full-time'
        },
        {
            title: 'Senior Frontend Engineer',
            department: 'Engineering',
            location: 'San Francisco, CA',
            type: 'Full-time'
        },
        {
            title: 'Data Scientist - Crypto Analytics',
            department: 'Data Science',
            location: 'Remote',
            type: 'Full-time'
        },
        {
            title: 'Sales Development Representative',
            department: 'Sales',
            location: 'London, UK',
            type: 'Full-time'
        }
    ];

    const benefits = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Competitive salary',
            description: 'Industry-leading compensation packages'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            title: 'Remote work',
            description: 'Work from anywhere in the world'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: 'Learning & development',
            description: 'Continuous learning opportunities'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: 'Health & wellness',
            description: 'Comprehensive health benefits'
        }
    ];

    return (
        <div>
            <PageHero
                title="Join Our Team"
                description="Help us build the future of blockchain intelligence and combat crypto crime"
                gradient={false}
            />

            {/* Benefits */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Why work at amlFraud?
                        </h2>
                        <p className="text-lg text-gray-600">
                            We offer a great environment for talented individuals to thrive
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="p-8 bg-gray-50 rounded-2xl">
                                <div className="text-blue-600 mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Open positions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Find your next opportunity
                        </p>
                    </div>

                    <div className="space-y-4">
                        {positions.map((position, index) => (
                            <div key={index} className="p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div className="mb-4 md:mb-0">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {position.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                            <span className="flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                {position.department}
                                            </span>
                                            <span className="flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {position.location}
                                            </span>
                                            <span className="flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                {position.type}
                                            </span>
                                        </div>
                                    </div>
                                    <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">
                                        Apply now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
