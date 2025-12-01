import { prisma } from '@/lib/prisma';

export default async function TestProductsPage() {
    const products = await prisma.product.findMany();

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">
                    Database Test - Products
                </h1>

                <div className="bg-white rounded-lg shadow p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">
                        Total Products: {products.length}
                    </h2>

                    {products.length === 0 ? (
                        <p className="text-red-600">No products found in database!</p>
                    ) : (
                        <div className="space-y-4">
                            {products.map((product) => (
                                <div key={product.id} className="border-b pb-4">
                                    <h3 className="font-semibold text-lg">{product.name}</h3>
                                    <p className="text-gray-600">{product.description}</p>
                                    <div className="mt-2 flex gap-4 text-sm">
                                        <span className="text-green-600 font-semibold">
                                            ${(product.price / 100).toFixed(2)}
                                        </span>
                                        <span className="text-gray-500">Slug: {product.slug}</span>
                                        <span className="text-gray-500">Category: {product.category}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 text-blue-900">
                        Test API Endpoints
                    </h2>
                    <div className="space-y-2 text-sm">
                        <p className="text-gray-700">Try these URLs in your browser:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li><a href="/api/products/forensics-pro" className="text-blue-600 hover:underline">/api/products/forensics-pro</a></li>
                            <li><a href="/api/products/transaction-monitoring" className="text-blue-600 hover:underline">/api/products/transaction-monitoring</a></li>
                            <li><a href="/api/products/wallet-screening" className="text-blue-600 hover:underline">/api/products/wallet-screening</a></li>
                            <li><a href="/api/products/triage" className="text-blue-600 hover:underline">/api/products/triage</a></li>
                            <li><a href="/api/products/law-enforcement" className="text-blue-600 hover:underline">/api/products/law-enforcement</a></li>
                            <li><a href="/api/products/banking-compliance" className="text-blue-600 hover:underline">/api/products/banking-compliance</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
