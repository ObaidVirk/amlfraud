import FeatureGrid from '@/components/FeatureGrid';
import CTABanner from '@/components/CTABanner';
import BuyNowButton from '@/components/BuyNowButton';

export default function BankingPage() {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Regulatory compliance',
            description: 'Meet regulatory requirements with comprehensive AML/CFT compliance tools'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Real-time monitoring',
            description: 'Monitor crypto transactions in real-time to detect suspicious activity'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: 'Risk assessment',
            description: 'Comprehensive risk scoring and assessment for all crypto transactions'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: 'Audit trails',
            description: 'Complete audit trails for regulatory reporting and compliance'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Automated workflows',
            description: 'Streamline compliance workflows with intelligent automation'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: 'Expert support',
            description: 'Dedicated support from compliance and blockchain experts'
        }
    ];

    return (
        <div>
            {/* Hero Section with Buy Now Button */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Comprehensive Compliance for Financial Institutions
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
                            Meet regulatory requirements and manage crypto risk with amlFraud's banking compliance solution.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <BuyNowButton productSlug="banking-compliance" productName="Banking Compliance Suite" />
                            <a
                                href="/request-demo"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all"
                            >
                                Request a demo
                            </a>
                        </div>
                        <p className="mt-6 text-blue-200 text-sm">
                            Starting at $1,299.00 USD
                        </p>
                    </div>
                </div>

                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                </div>
            </section>

            <FeatureGrid
                features={features}
                columns={3}
                title="Complete banking compliance solution"
                description="Everything you need to manage crypto risk and meet regulatory requirements"
            />

            <CTABanner
                title="Ready to enhance your compliance program?"
                description="Discover how amlFraud can help your institution manage crypto risk"
                primaryCTA={{ text: 'Request a demo', link: '/request-demo' }}
                secondaryCTA={{ text: 'Contact sales', link: '/company/contact-us' }}
            />
        </div>
    );
}
