import PageHero from '@/components/PageHero';
import FeatureGrid from '@/components/FeatureGrid';
import CTABanner from '@/components/CTABanner';

export default function FintechPage() {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Modern API',
            description: 'RESTful API designed for modern fintech infrastructure'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Embedded compliance',
            description: 'Embed crypto compliance directly into your fintech platform'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Real-time decisions',
            description: 'Make instant compliance decisions without slowing down user experience'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
            ),
            title: 'Flexible deployment',
            description: 'Cloud, on-premise, or hybrid deployment options'
        }
    ];

    return (
        <div>
            <PageHero
                title="Crypto Compliance for Modern Fintech"
                description="Enable crypto services with confidence using amlFraud's fintech-focused compliance solutions."
                ctaText="Request a demo"
                ctaLink="/request-demo"
            />

            <FeatureGrid
                features={features}
                columns={2}
                title="Built for fintech innovation"
                description="Compliance that keeps pace with your innovation"
            />

            <CTABanner
                title="Ready to enable crypto services?"
                description="See how amlFraud can help your fintech platform"
                primaryCTA={{ text: 'Request a demo', link: '/request-demo' }}
                secondaryCTA={{ text: 'Contact sales', link: '/company/contact-us' }}
            />
        </div>
    );
}
