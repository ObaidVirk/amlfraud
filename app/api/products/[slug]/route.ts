import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
    request: Request,
    context: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await context.params;

        console.log('Fetching product with slug:', slug);

        const product = await prisma.product.findUnique({
            where: { slug: slug }
        });

        console.log('Product found:', product);

        if (!product) {
            console.log('Product not found for slug:', slug);
            return NextResponse.json(
                { error: 'Product not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        return NextResponse.json(
            { error: 'Failed to fetch product', details: String(error) },
            { status: 500 }
        );
    }
}
