import { ReactNode } from 'react';

interface Feature {
    icon: ReactNode;
    title: string;
    description: string;
}

interface FeatureGridProps {
    features: Feature[];
    columns?: 2 | 3 | 4;
    title?: string;
    description?: string;
}

export default function FeatureGrid({ features, columns = 3, title, description }: FeatureGridProps) {
    const gridCols = {
        2: 'lg:grid-cols-2',
        3: 'lg:grid-cols-3',
        4: 'lg:grid-cols-4'
    };

    return (
        <section className="py-16 md:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {(title || description) && (
                    <div className="text-center mb-16">
                        {title && (
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                {description}
                            </p>
                        )}
                    </div>
                )}

                <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols[columns]} gap-8`}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-8 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-xl transition-all"
                        >
                            <div className="text-blue-600 mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
