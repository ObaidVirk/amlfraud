export default function RequestDemoPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Request a demo
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600">
                        See how amlFraud can help your organization combat crypto crime
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
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
                                Work email *
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
                                Company *
                            </label>
                            <input
                                type="text"
                                id="company"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                                Role *
                            </label>
                            <select
                                id="role"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="">Select your role</option>
                                <option value="law-enforcement">Law Enforcement</option>
                                <option value="compliance">Compliance Officer</option>
                                <option value="risk">Risk Manager</option>
                                <option value="executive">Executive</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Tell us about your use case..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                        >
                            Submit request
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
