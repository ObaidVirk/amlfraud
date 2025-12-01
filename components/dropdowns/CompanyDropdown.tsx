import Link from 'next/link';

export default function CompanyDropdown() {
    return (
        <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-gray-200/50 p-6 animate-fade-in">
            <ul className="space-y-2">
                <li>
                    <Link href="/about" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                        Our Story
                    </Link>
                </li>
                <li>
                    <Link href="/careers" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                        Careers
                    </Link>
                </li>
                <li>
                    <Link href="/press-center" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                        Press Center
                    </Link>
                </li>
                <li>
                    <Link href="/company-news" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                        Company News
                    </Link>
                </li>
                <li>
                    <Link href="/partners" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                        Partners
                    </Link>
                </li>
                <li>
                    <Link href="/compliance-center" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                        Compliance Center
                    </Link>
                </li>
                <li>
                    <Link href="/contact-us" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </div>
    );
}
