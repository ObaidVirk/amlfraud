import Link from 'next/link';

export default function ResourcesDropdown() {
    return (
        <div className="absolute top-full left-0 mt-2 w-screen max-w-3xl bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-gray-200/50 p-8 animate-fade-in">
            <div className="grid grid-cols-2 gap-8">
                {/* Learning Column */}
                <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Learning</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/academy" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                TRM Academy
                            </Link>
                        </li>
                        <li>
                            <Link href="/crypto-fundamentals" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Crypto Fundamentals
                            </Link>
                        </li>
                        <li>
                            <Link href="/certified-investigator" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Certified Investigator
                            </Link>
                        </li>
                        <li>
                            <Link href="/advanced-investigator" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Advanced Crypto Investigator
                            </Link>
                        </li>
                        <li>
                            <Link href="/compliance-specialist" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Crypto Compliance Specialist
                            </Link>
                        </li>
                        <li>
                            <Link href="/digital-forensics" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Digital Forensics and Cryptocurrencies
                            </Link>
                        </li>
                        <li>
                            <Link href="/seizure-specialist" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Crypto Seizure Specialist
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Content Column */}
                <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Content</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/resources" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                All Resources
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/reports" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Reports and White Papers
                            </Link>
                        </li>
                        <li>
                            <Link href="/webinars" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Webinars
                            </Link>
                        </li>
                        <li>
                            <Link href="/guides" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Guides
                            </Link>
                        </li>
                        <li>
                            <Link href="/trm-talks" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                TRM Talks
                            </Link>
                        </li>
                        <li>
                            <Link href="/events" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link href="/glossary" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Glossary
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
