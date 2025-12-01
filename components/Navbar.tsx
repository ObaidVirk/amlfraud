'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('nav');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/amlfraud.png"
              alt="amlFraud"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center py-2">
                {t('products')}
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-64 bg-white shadow-xl rounded-xl border border-gray-200 p-4">
                  <Link href="/products/forensics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Forensics
                  </Link>
                  <Link href="/products/transaction-monitoring" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Transaction Monitoring
                  </Link>
                  <Link href="/products/wallet-screening" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Wallet Screening
                  </Link>
                  <Link href="/products/triage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Triage
                  </Link>
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center py-2">
                {t('solutions')}
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-64 bg-white shadow-xl rounded-xl border border-gray-200 p-4">
                  <Link href="/solutions/law-enforcement" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Law Enforcement
                  </Link>
                  <Link href="/solutions/banking" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Banking
                  </Link>
                  <Link href="/solutions/crypto-business" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Crypto Business
                  </Link>
                  <Link href="/solutions/fintech" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Fintech
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center py-2">
                {t('resources')}
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-64 bg-white shadow-xl rounded-xl border border-gray-200 p-4">
                  <Link href="/resources/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Blog
                  </Link>
                  <Link href="/resources/reports" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Reports
                  </Link>
                  <Link href="/resources/webinars" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Webinars
                  </Link>
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center py-2">
                {t('company')}
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-64 bg-white shadow-xl rounded-xl border border-gray-200 p-4">
                  <Link href="/company/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    About Us
                  </Link>
                  <Link href="/company/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Careers
                  </Link>
                  <Link href="/company/contact-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {session ? (
              <>
                <span className="text-sm text-gray-600">
                  {session.user?.name}
                </span>
                {(session.user as any)?.isAdmin && session.user?.email === 'admin@amlfraud.com' && (
                  <Link
                    href="/admin"
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {t('dashboard')}
                  </Link>
                )}
                <button
                  onClick={handleSignOut}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {t('signout')}
                </button>
              </>
            ) : (
              <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                {t('login')}
              </Link>
            )}

            <LanguageSwitcher />

            <Link
              href="/request-demo"
              className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('requestDemo')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-4">
            {/* Products */}
            <div>
              <div className="font-semibold text-gray-900 mb-2">{t('products')}</div>
              <div className="space-y-1 pl-4">
                <Link href="/products/forensics" className="block py-2 text-sm text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                  Forensics
                </Link>
                <Link href="/products/transaction-monitoring" className="block py-2 text-sm text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                  Transaction Monitoring
                </Link>
                <Link href="/products/wallet-screening" className="block py-2 text-sm text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                  Wallet Screening
                </Link>
                <Link href="/products/triage" className="block py-2 text-sm text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                  Triage
                </Link>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <div className="font-semibold text-gray-900 mb-2">{t('solutions')}</div>
              <div className="space-y-1 pl-4">
                <Link href="/solutions/law-enforcement" className="block py-2 text-sm text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                  Law Enforcement
                </Link>
                <Link href="/solutions/banking" className="block py-2 text-sm text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                  Banking
                </Link>
                <Link href="/solutions/crypto-business" className="block py-2 text-sm text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                  Crypto Business
                </Link>
                <Link href="/solutions/fintech" className="block py-2 text-sm text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                  Fintech
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div>
              <div className="font-semibold text-gray-900 mb-2">{t('resources')}</div>
              <div className="space-y-1 pl-4">
                <Link href="/resources/blog" className="block py-2 text-sm text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                  Blog
                </Link>
                <Link href="/resources/reports" className="block py-2 text-sm text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                  Reports
                </Link>
                <Link href="/resources/webinars" className="block py-2 text-sm text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                  Webinars
                </Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <div className="font-semibold text-gray-900 mb-2">{t('company')}</div>
              <div className="space-y-1 pl-4">
                <Link href="/company/about" className="block py-2 text-sm text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                  About Us
                </Link>
                <Link href="/company/careers" className="block py-2 text-sm text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                  Careers
                </Link>
                <Link href="/company/contact-us" className="block py-2 text-sm text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </div>
            </div>

            {session ? (
              <>
                <div className="py-2 text-sm text-gray-600">
                  {t('signedInAs')} {session.user?.name}
                </div>
                {(session.user as any)?.isAdmin && session.user?.email === 'admin@amlfraud.com' && (
                  <Link
                    href="/admin"
                    className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('dashboard')}
                  </Link>
                )}
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  {t('signout')}
                </button>
              </>
            ) : (
              <Link href="/login" className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                {t('login')}
              </Link>
            )}

            <div className="py-2">
              <LanguageSwitcher />
            </div>

            <Link
              href="/request-demo"
              className="block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('requestDemo')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
