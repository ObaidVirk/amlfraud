export default function TrustedBySection() {
    const organizations = [
        'Government Agencies',
        'Financial Institutions',
        'Crypto Exchanges',
        'Law Enforcement',
        'Regulatory Bodies',
        'Fintech Companies'
    ];

    return (
        <section className="py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <h2 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-12">
                    Trusted globally by leading organizations
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {organizations.map((org, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all"
                        >
                            <span className="text-sm font-medium text-gray-600 text-center">
                                {org}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
