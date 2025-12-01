import PageHero from '@/components/PageHero';
import FeatureGrid from '@/components/FeatureGrid';
import CTABanner from '@/components/CTABanner';
import ContentCard from '@/components/ContentCard';
import BuyNowButton from '@/components/BuyNowButton';

export default function LawEnforcementPage() {
    const products = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            title: 'amlFraud Forensics',
            description: 'Comprehensive blockchain investigation platform for tracing crypto linked to crime'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            ),
            title: 'amlFraud Triage',
            description: 'Rapidly assess and prioritize crypto-related cases for efficient investigation'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            title: 'Seed Analysis',
            description: 'Identify and seize assets linked to seed phrases with advanced forensic tools'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: 'Investigative Support',
            description: 'Expert support from our team of blockchain investigators'
        }
    ];

    return (
        <div>
            {/* Hero Section with Buy Now Button */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Maximize Your Agency's Crypto Investigation Outcomes
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
                            Accelerate investigations and seize stolen or illicitly obtained assets with amlFraud's blockchain intelligence platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <BuyNowButton productSlug="law-enforcement" productName="Law Enforcement Package" />
                            <a
                                href="/request-demo"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all"
                            >
                                Request a demo
                            </a>
                        </div>
                        <p className="mt-6 text-blue-200 text-sm">
                            Starting at $1,499.00 USD
                        </p>
                    </div>
                </div>

                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                </div>
            </section>

            <FeatureGrid
                features={products}
                columns={2}
                title="Explore our products and services"
                description="Comprehensive tools designed specifically for law enforcement agencies"
            />

            {/* Related Resources */}
            <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Related resources
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ContentCard
                            title="2025 Crypto Crime Report"
                            description="Comprehensive analysis of crypto crime trends and patterns"
                            category="Report"
                            date="January 2025"
                            link="/resources/reports"
                        />
                        <ContentCard
                            title="Blockchain Intelligence and Border Security"
                            description="How blockchain intelligence enhances border security operations"
                            category="White Paper"
                            date="December 2024"
                            link="/resources/reports"
                        />
                        <ContentCard
                            title="Blockchain Intelligence: A 100x Return on Investment"
                            description="ROI analysis for government asset recovery programs"
                            category="Case Study"
                            date="November 2024"
                            link="/resources/reports"
                        />
                    </div>
                </div>
            </section>

            <CTABanner
                title="See the impact amlFraud could have on your agency"
                description="Join leading law enforcement agencies using amlFraud"
                primaryCTA={{ text: 'Request a demo', link: '/request-demo' }}
                secondaryCTA={{ text: 'Contact sales', link: '/company/contact-us' }}
            />
        </div>
    );
}
