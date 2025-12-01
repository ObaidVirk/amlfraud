import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { stripe } from '@/lib/stripe';

export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions);
        const { productId } = await request.json();

        if (!productId) {
            return NextResponse.json(
                { error: 'Product ID is required' },
                { status: 400 }
            );
        }

        // Fetch product from database
        const product = await prisma.product.findUnique({
            where: { id: productId }
        });

        if (!product) {
            return NextResponse.json(
                { error: 'Product not found' },
                { status: 404 }
            );
        }

        // Create Stripe Checkout Session
        const checkoutSession = await stripe.checkout.sessions.create({
            mode: 'payment',
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: product.name,
                            description: product.description,
                        },
                        unit_amount: product.price, // Price in cents
                    },
                    quantity: 1,
                },
            ],
            success_url: `${process.env.NEXTAUTH_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXTAUTH_URL}/checkout/canceled`,
            metadata: {
                productId: product.id,
                userId: session?.user ? (session.user as any).id : 'guest',
            },
        });

        // Create order in database
        await prisma.order.create({
            data: {
                userId: session?.user ? (session.user as any).id : null,
                productId: product.id,
                amount: product.price,
                currency: 'usd',
                stripeSessionId: checkoutSession.id,
                status: 'created',
            },
        });

        return NextResponse.json({ url: checkoutSession.url });
    } catch (error) {
        console.error('Checkout session error:', error);
        return NextResponse.json(
            { error: 'Failed to create checkout session' },
            { status: 500 }
        );
    }
}
