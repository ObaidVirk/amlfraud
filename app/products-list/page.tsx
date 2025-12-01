import { prisma } from '@/lib/prisma';
import ProductCard from '@/components/ProductCard';
import PageHero from '@/components/PageHero';

export default async function ProductsListPage() {
    const products = await prisma.product.findMany({
        orderBy: { createdAt: 'asc' }
    });

    const productsByCategory = products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {} as Record<string, typeof products>);

    return (
        <div>
            <PageHero
                title="Our Products & Solutions"
                description="Choose the perfect blockchain intelligence solution for your organization"
                gradient={false}
            />

            {/* Products */}
            {productsByCategory.product && productsByCategory.product.length > 0 && (
                <section className="py-16 md:py-20 lg:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Products
                            </h2>
                            <p className="text-lg text-gray-600">
                                Individual tools for specific use cases
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {productsByCategory.product.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    description={product.description}
                                    price={product.price}
                                    category="Product"
                                    features={product.features ? JSON.parse(product.features) : []}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Solutions */}
            {productsByCategory.solution && productsByCategory.solution.length > 0 && (
                <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Complete Solutions
                            </h2>
                            <p className="text-lg text-gray-600">
                                Comprehensive packages for organizations
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {productsByCategory.solution.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    description={product.description}
                                    price={product.price}
                                    category="Solution"
                                    features={product.features ? JSON.parse(product.features) : []}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
