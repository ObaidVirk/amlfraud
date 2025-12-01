import FeatureGrid from '@/components/FeatureGrid';
import CTABanner from '@/components/CTABanner';
import BuyNowButton from '@/components/BuyNowButton';

export default function WalletScreeningPage() {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            title: 'Pre-transaction screening',
            description: 'Screen wallets before engaging in transactions to identify potential risks'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Risk exposure analysis',
            description: 'Understand the full risk exposure of any wallet with comprehensive analysis'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Instant results',
            description: 'Get instant screening results to make informed decisions quickly'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: 'Historical analysis',
            description: 'Review historical transaction patterns to identify long-term risk indicators'
        }
    ];

    return (
        <div>
            {/* Hero Section with Buy Now Button */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Pre-Screen Wallets for Risk Exposure
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
                            Assess wallet risk before transacting with comprehensive screening and analysis tools.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <BuyNowButton productSlug="wallet-screening" productName="Wallet Screening" />
                            <a
                                href="/request-demo"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all"
                            >
                                Request a demo
                            </a>
                        </div>
                        <p className="mt-6 text-blue-200 text-sm">
                            Starting at $599.00 USD
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
                title="Comprehensive wallet screening"
                description="Protect your organization with proactive wallet risk assessment"
            />

            <CTABanner
                title="Ready to screen with confidence?"
                description="Discover how amlFraud can help you assess wallet risk"
                primaryCTA={{ text: 'Request a demo', link: '/request-demo' }}
                secondaryCTA={{ text: 'Contact sales', link: '/company/contact-us' }}
            />
        </div>
    );
}
