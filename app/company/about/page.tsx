import PageHero from '@/components/PageHero';

export default function AboutPage() {
    const values = [
        {
            title: 'Innovation',
            description: 'We continuously push the boundaries of blockchain intelligence technology'
        },
        {
            title: 'Integrity',
            description: 'We operate with the highest ethical standards in everything we do'
        },
        {
            title: 'Excellence',
            description: 'We strive for excellence in our products, services, and customer support'
        },
        {
            title: 'Collaboration',
            description: 'We work closely with our customers and partners to combat crypto crime'
        }
    ];

    const milestones = [
        { year: '2020', event: 'amlFraud founded with mission to combat crypto crime' },
        { year: '2021', event: 'Launched flagship Forensics platform' },
        { year: '2022', event: 'Expanded to serve 100+ organizations globally' },
        { year: '2023', event: 'Introduced AI-powered risk detection' },
        { year: '2024', event: 'Reached 150+ blockchain coverage' },
        { year: '2025', event: 'Leading blockchain intelligence platform worldwide' }
    ];

    return (
        <div>
            <PageHero
                title="Our Story"
                description="Building the world's most trusted blockchain intelligence platform to combat crypto crime"
                gradient={false}
            />

            {/* Mission */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                        Our Mission
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                        At amlFraud, we're dedicated to making the blockchain ecosystem safer for everyone. We provide law enforcement, financial institutions, and crypto businesses with the tools they need to detect, investigate, and prevent cryptocurrency-related crime. Our mission is to build trust in digital assets through transparency and accountability.
                    </p>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Our Values
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="p-8 bg-white border border-gray-200 rounded-2xl">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Our Journey
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="flex items-start space-x-6">
                                <div className="flex-shrink-0 w-24 text-2xl font-bold text-blue-600">
                                    {milestone.year}
                                </div>
                                <div className="flex-1 p-6 bg-gray-50 rounded-xl">
                                    <p className="text-lg text-gray-900">{milestone.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Join us in our mission
                    </h2>
                    <p className="text-lg sm:text-xl text-blue-100 mb-10">
                        We're always looking for talented individuals to join our team
                    </p>
                    <a
                        href="/company/careers"
                        className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg"
                    >
                        View open positions
                    </a>
                </div>
            </section>
        </div>
    );
}
