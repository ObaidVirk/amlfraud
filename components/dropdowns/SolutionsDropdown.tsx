import Link from 'next/link';

export default function SolutionsDropdown() {
    return (
        <div className="absolute top-full left-0 mt-2 w-screen max-w-4xl bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-gray-200/50 p-8 animate-fade-in">
            <div className="grid grid-cols-3 gap-8">
                {/* Products Column */}
                <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Products</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/blockchain-intelligence" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Blockchain Intelligence Platform
                            </Link>
                        </li>
                        <li>
                            <Link href="/forensics" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Forensics
                            </Link>
                        </li>
                        <li>
                            <Link href="/triage" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Triage
                            </Link>
                        </li>
                        <li>
                            <Link href="/blockint-api" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                BLOCKINT API
                            </Link>
                        </li>
                        <li>
                            <Link href="/deconflict" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Deconflict
                            </Link>
                        </li>
                        <li>
                            <Link href="/transaction-monitoring" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Transaction Monitoring
                            </Link>
                        </li>
                        <li>
                            <Link href="/wallet-screening" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Wallet Screening
                            </Link>
                        </li>
                        <li>
                            <Link href="/entity-due-diligence" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Entity Due Diligence
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Solutions by Industry Column */}
                <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Solutions by Industry</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/law-enforcement" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Law Enforcement
                            </Link>
                        </li>
                        <li>
                            <Link href="/national-security" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                National Security
                            </Link>
                        </li>
                        <li>
                            <Link href="/prosecutors" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Prosecutors
                            </Link>
                        </li>
                        <li>
                            <Link href="/regulator" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Regulator
                            </Link>
                        </li>
                        <li>
                            <Link href="/banking" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Banking
                            </Link>
                        </li>
                        <li>
                            <Link href="/crypto-business" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Crypto Business
                            </Link>
                        </li>
                        <li>
                            <Link href="/fintech" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Fintech
                            </Link>
                        </li>
                        <li>
                            <Link href="/tax-authority" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Tax Authority
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Use Cases Column */}
                <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Use Cases</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/incident-response" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Incident Response
                            </Link>
                        </li>
                        <li>
                            <Link href="/entity-screening" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Entity Screening
                            </Link>
                        </li>
                        <li>
                            <Link href="/stablecoin-risk" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Stablecoin Risk Management
                            </Link>
                        </li>
                        <li>
                            <Link href="/sanctions-compliance" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Sanctions Compliance
                            </Link>
                        </li>
                        <li>
                            <Link href="/fraud-prevention" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                Fraud Prevention
                            </Link>
                        </li>
                        <li>
                            <Link href="/defi-due-diligence" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                DeFi Due Diligence
                            </Link>
                        </li>
                        <li>
                            <Link href="/nft-risk" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                NFT Risk Assessments
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
