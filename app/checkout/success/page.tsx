'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function CheckoutSuccessPage() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading state
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-6">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Processing your payment...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-6">
            <div className="max-w-md w-full">
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                    {/* Success Icon */}
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Payment Successful!
                    </h1>

                    <p className="text-gray-600 mb-6">
                        Thank you for your purchase. Your payment has been processed successfully.
                    </p>

                    {sessionId && (
                        <div className="bg-gray-50 rounded-lg p-4 mb-6">
                            <p className="text-sm text-gray-500 mb-1">Order ID</p>
                            <p className="text-sm font-mono text-gray-900 break-all">{sessionId}</p>
                        </div>
                    )}

                    <p className="text-sm text-gray-600 mb-8">
                        You will receive a confirmation email shortly with your order details.
                    </p>

                    <div className="space-y-3">
                        <Link
                            href="/"
                            className="block w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
                        >
                            Return to Homepage
                        </Link>
                        <Link
                            href="/products-list"
                            className="block w-full px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-all"
                        >
                            Browse More Products
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
