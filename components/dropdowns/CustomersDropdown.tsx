import Link from 'next/link';

export default function CustomersDropdown() {
    return (
        <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-gray-200/50 p-6 animate-fade-in">
            <ul className="space-y-2">
                <li>
                    <Link href="/case-studies" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                        Case Studies
                    </Link>
                </li>
                <li>
                    <Link href="/customer-success" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                        Customer Support
                    </Link>
                </li>
                <li>
                    <Link href="/team-spotlight" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                        Team Spotlight
                    </Link>
                </li>
            </ul>
        </div>
    );
}
