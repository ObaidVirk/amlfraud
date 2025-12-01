'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    features?: string[];
}

export default function ProductCard({ id, name, description, price, category, features }: ProductCardProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleBuyNow = async () => {
        setLoading(true);

        try {
            const response = await fetch('/api/checkout/session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId: id }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to create checkout session');
            }

            // Redirect to Stripe Checkout
            if (data.url) {
                window.location.href = data.url;
            }
        } catch (error) {
            console.error('Checkout error:', error);
            alert('Failed to start checkout. Please try again.');
            setLoading(false);
        }
    };

    const formatPrice = (cents: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(cents / 100);
    };

    return (
        <div className="p-8 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-xl transition-all flex flex-col h-full">
            <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
                    {category}
                </span>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {name}
            </h3>

            <p className="text-gray-600 mb-6 flex-grow">
                {description}
            </p>

            {features && features.length > 0 && (
                <ul className="mb-6 space-y-2">
                    {features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>
            )}

            <div className="mt-auto pt-6 border-t border-gray-200">
                <div className="flex items-baseline justify-between mb-4">
                    <span className="text-3xl font-bold text-gray-900">
                        {formatPrice(price)}
                    </span>
                    <span className="text-sm text-gray-500">USD</span>
                </div>

                <button
                    onClick={handleBuyNow}
                    disabled={loading}
                    className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
                >
                    {loading ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                        </span>
                    ) : (
                        'Buy Now'
                    )}
                </button>
            </div>
        </div>
    );
}
