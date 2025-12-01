import Link from 'next/link';

interface ContentCardProps {
    title: string;
    description: string;
    category: string;
    date?: string;
    link: string;
    imageGradient?: string;
}

export default function ContentCard({
    title,
    description,
    category,
    date,
    link,
    imageGradient = 'from-blue-600 to-blue-800'
}: ContentCardProps) {
    return (
        <Link
            href={link}
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all"
        >
            <div className={`h-48 bg-gradient-to-br ${imageGradient}`}></div>
            <div className="p-6">
                <div className="flex items-center space-x-2 text-xs font-semibold text-blue-600 mb-3">
                    <span>{category}</span>
                    {date && (
                        <>
                            <span className="text-gray-300">•</span>
                            <span className="text-gray-500">{date}</span>
                        </>
                    )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    {description}
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                    Read more
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </div>
            </div>
        </Link>
    );
}
