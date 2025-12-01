'use client';

import { useState } from 'react';

interface BuyNowButtonProps {
    productSlug: string;
    productName: string;
    className?: string;
}

export default function BuyNowButton({ productSlug, productName, className = '' }: BuyNowButtonProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleBuyNow = async () => {
        setLoading(true);
        setError('');

        try {
            // First, fetch the product by slug to get the ID
            const productResponse = await fetch(`/api/products/${productSlug}`);

            if (!productResponse.ok) {
                throw new Error('Product not found');
            }

            const product = await productResponse.json();

            // Create checkout session
            const response = await fetch('/api/checkout/session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId: product.id }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to create checkout session');
            }

            // Redirect to Stripe Checkout
            if (data.url) {
                window.location.href = data.url;
            }
        } catch (error: any) {
            console.error('Checkout error:', error);
            setError(error.message || 'Failed to start checkout. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div>
            <button
                onClick={handleBuyNow}
                disabled={loading}
                className={`px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl ${className}`}
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
                    <>
                        Buy {productName}
                        <svg className="ml-2 w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </>
                )}
            </button>
            {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
}
