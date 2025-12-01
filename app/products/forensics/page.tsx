import PageHero from '@/components/PageHero';
import FeatureGrid from '@/components/FeatureGrid';
import CTABanner from '@/components/CTABanner';
import ContentCard from '@/components/ContentCard';
import BuyNowButton from '@/components/BuyNowButton';

export default function ForensicsPage() {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Universal tracing',
            description: 'Move investigations forward with comprehensive cross-chain tracing capabilities across 100+ blockchains'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Behavioral patterns',
            description: 'Uncover suspicious behavioral patterns with Signatures® technology for advanced threat detection'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: 'Reliable threat intelligence',
            description: 'Make defensible decisions with the most accurate and up-to-date threat intelligence'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: 'Custom graph elements',
            description: 'Expand your analysis beyond the blockchain with custom graph elements for comprehensive investigations'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            title: 'Asset identification',
            description: 'Confidently identify and seize assets linked to a seed phrase with advanced forensic tools'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Next-generation analysis',
            description: 'Unlock next-generation blockchain analysis with cutting-edge technology and methodologies'
        }
    ];

    return (
        <div>
            {/* Hero Section with Buy Now Button */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Trace and Act on Crypto Linked to Crime
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
                            TRM Forensics enables investigators to easily trace multi-chain paths, visualize the flow of crypto, and enhance collaboration securely.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <BuyNowButton productSlug="forensics-pro" productName="Forensics Pro" />
                            <a
                                href="/request-demo"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all"
                            >
                                Request a demo
                            </a>
                        </div>
                        <p className="mt-6 text-blue-200 text-sm">
                            Starting at $999.00 USD
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
                title="Why leading agencies and organizations trust amlFraud"
                description="Comprehensive blockchain investigation tools designed for law enforcement and financial institutions"
            />

            {/* Related Resources */}
            <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Related resources
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ContentCard
                            title="Tackling Crypto Crime: 2025 Survey of Law Enforcement"
                            description="Insights from law enforcement agencies worldwide on the evolving landscape of crypto crime"
                            category="Report"
                            date="January 2025"
                            link="/resources/reports"
                        />
                        <ContentCard
                            title="Digital Asset Use Cases and Controls for Financial Institutions"
                            description="Comprehensive guide for financial institutions on managing digital asset risks"
                            category="White Paper"
                            date="December 2024"
                            link="/resources/reports"
                        />
                    </div>
                </div>
            </section>

            <CTABanner
                title="Ready to see the platform?"
                description="Join leading organizations using amlFraud to investigate crypto crime"
                primaryCTA={{ text: 'Request a demo', link: '/request-demo' }}
                secondaryCTA={{ text: 'Contact sales', link: '/company/contact-us' }}
            />
        </div>
    );
}
