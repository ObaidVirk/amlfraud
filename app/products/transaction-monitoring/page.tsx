import FeatureGrid from '@/components/FeatureGrid';
import CTABanner from '@/components/CTABanner';
import BuyNowButton from '@/components/BuyNowButton';

export default function TransactionMonitoringPage() {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Real-time monitoring',
            description: 'Flag risky transactions in real-time with automated monitoring across all supported blockchains'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            ),
            title: 'Risk scoring',
            description: 'Comprehensive risk scoring based on 150+ risk categories and behavioral patterns'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Compliance automation',
            description: 'Automate compliance workflows and reduce false positives with intelligent filtering'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Instant alerts',
            description: 'Receive instant alerts for high-risk transactions with customizable notification rules'
        }
    ];

    return (
        <div>
            {/* Hero Section with Buy Now Button */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Flag Risky Transactions in Real-Time
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
                            Monitor crypto transactions as they happen and automatically flag suspicious activity with amlFraud's transaction monitoring solution.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <BuyNowButton productSlug="transaction-monitoring" productName="Transaction Monitoring" />
                            <a
                                href="/request-demo"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all"
                            >
                                Request a demo
                            </a>
                        </div>
                        <p className="mt-6 text-blue-200 text-sm">
                            Starting at $799.00 USD
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
                columns={2}
                title="Comprehensive transaction monitoring"
                description="Stay ahead of crypto crime with real-time monitoring and intelligent risk detection"
            />

            <CTABanner
                title="Ready to enhance your compliance?"
                description="Discover how amlFraud can streamline your transaction monitoring"
                primaryCTA={{ text: 'Request a demo', link: '/request-demo' }}
                secondaryCTA={{ text: 'Contact sales', link: '/company/contact-us' }}
            />
        </div>
    );
}
