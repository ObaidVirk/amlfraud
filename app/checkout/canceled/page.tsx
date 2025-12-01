import Link from 'next/link';

export default function CheckoutCanceledPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-6">
            <div className="max-w-md w-full">
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                    {/* Cancel Icon */}
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>

                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Payment Canceled
                    </h1>

                    <p className="text-gray-600 mb-8">
                        Your payment was canceled. No charges have been made to your account.
                    </p>

                    <div className="space-y-3">
                        <Link
                            href="/products-list"
                            className="block w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
                        >
                            Continue Shopping
                        </Link>
                        <Link
                            href="/"
                            className="block w-full px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-all"
                        >
                            Return to Homepage
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
