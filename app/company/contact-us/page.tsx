import PageHero from '@/components/PageHero';

export default function ContactUsPage() {
    return (
        <div>
            <PageHero
                title="Get in Touch"
                description="Have questions? We're here to help. Reach out to our team."
                gradient={false}
            />

            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Send us a message
                            </h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                            First name *
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Last name *
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={6}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                                >
                                    Send message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Contact information
                            </h2>

                            <div className="space-y-8">
                                {/* Sales */}
                                <div className="p-6 bg-gray-50 rounded-xl">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Sales inquiries
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Interested in our products? Get in touch with our sales team.
                                    </p>
                                    <a href="mailto:sales@amlfraud.com" className="text-blue-600 hover:text-blue-700 font-medium">
                                        sales@amlfraud.com
                                    </a>
                                </div>

                                {/* Support */}
                                <div className="p-6 bg-gray-50 rounded-xl">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Customer support
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Need help with our platform? Our support team is here for you.
                                    </p>
                                    <a href="mailto:support@amlfraud.com" className="text-blue-600 hover:text-blue-700 font-medium">
                                        support@amlfraud.com
                                    </a>
                                </div>

                                {/* General */}
                                <div className="p-6 bg-gray-50 rounded-xl">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        General inquiries
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        For all other questions and inquiries.
                                    </p>
                                    <a href="mailto:info@amlfraud.com" className="text-blue-600 hover:text-blue-700 font-medium">
                                        info@amlfraud.com
                                    </a>
                                </div>

                                {/* Office */}
                                <div className="p-6 bg-gray-50 rounded-xl">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Headquarters
                                    </h3>
                                    <p className="text-gray-600">
                                        123 Blockchain Street<br />
                                        San Francisco, CA 94102<br />
                                        United States
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
