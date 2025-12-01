import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Products */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Products</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/forensics" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Forensics
                                </Link>
                            </li>
                            <li>
                                <Link href="/triage" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Triage
                                </Link>
                            </li>
                            <li>
                                <Link href="/transaction-monitoring" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Transaction Monitoring
                                </Link>
                            </li>
                            <li>
                                <Link href="/wallet-screening" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Wallet Screening
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Solutions</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/law-enforcement" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Law Enforcement
                                </Link>
                            </li>
                            <li>
                                <Link href="/banking" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Banking
                                </Link>
                            </li>
                            <li>
                                <Link href="/crypto-business" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Crypto Business
                                </Link>
                            </li>
                            <li>
                                <Link href="/fintech" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Fintech
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/reports" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Reports
                                </Link>
                            </li>
                            <li>
                                <Link href="/webinars" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Webinars
                                </Link>
                            </li>
                            <li>
                                <Link href="/academy" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    TRM Academy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/press-center" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Press Center
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-us" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Stay Updated</h3>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            Get the latest insights on blockchain intelligence
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium transition-all"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex flex-col items-center md:items-start space-y-3">
                            <Image
                                src="/logo/amlfraud.png"
                                alt="amlFraud"
                                width={100}
                                height={33}
                                className="h-8 w-auto"
                            />
                            <div className="text-gray-400 text-sm">
                                © 2025 amlFraud. All rights reserved.
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Cookie Policy
                            </Link>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
