'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { format } from 'date-fns';

interface Order {
    id: string;
    userId: string | null;
    productId: string;
    amount: number;
    currency: string;
    stripeSessionId: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    user: {
        name: string;
        email: string;
    } | null;
    product: {
        name: string;
        price: number;
    };
}

interface User {
    id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    createdAt: Date;
    _count: {
        orders: number;
    };
}

interface Stats {
    status: string;
    _count: number;
    _sum: {
        amount: number | null;
    };
}

interface AdminDashboardProps {
    orders: Order[];
    users: User[];
    stats: Stats[];
}

export default function AdminDashboard({ orders, users, stats }: AdminDashboardProps) {
    const [activeTab, setActiveTab] = useState<'overview' | 'orders' | 'users'>('overview');
    const [orderFilter, setOrderFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    // Filter orders
    const filteredOrders = useMemo(() => {
        return orders.filter(order => {
            const matchesStatus = orderFilter === 'all' || order.status === orderFilter;
            const matchesSearch = !searchTerm ||
                order.user?.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                order.stripeSessionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                order.product.name.toLowerCase().includes(searchTerm.toLowerCase());

            return matchesStatus && matchesSearch;
        });
    }, [orders, orderFilter, searchTerm]);

    // Calculate stats
    const totalRevenue = stats.reduce((sum, stat) => sum + (stat._sum.amount || 0), 0);
    const paidOrders = stats.find(s => s.status === 'paid')?._count || 0;
    const totalOrders = stats.reduce((sum, stat) => sum + stat._count, 0);

    // Export to CSV
    const exportToCSV = () => {
        const headers = ['Order ID', 'Customer Email', 'Product', 'Amount', 'Status', 'Date', 'Stripe Session ID'];
        const rows = filteredOrders.map(order => [
            order.id,
            order.user?.email || 'Guest',
            order.product.name,
            `$${(order.amount / 100).toFixed(2)}`,
            order.status,
            format(new Date(order.createdAt), 'yyyy-MM-dd HH:mm:ss'),
            order.stripeSessionId
        ]);

        const csvContent = [
            headers.join(','),
            ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `transactions-${format(new Date(), 'yyyy-MM-dd')}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="mb-4">
                        <Image
                            src="/dashboard/adminpanel.png"
                            alt="Admin Panel"
                            width={150}
                            height={50}
                            className="h-12 w-auto"
                        />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                    <p className="text-gray-600 mt-2">Manage orders, users, and transactions</p>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-200 mb-6">
                    <nav className="flex space-x-8">
                        <button
                            onClick={() => setActiveTab('overview')}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'overview'
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => setActiveTab('orders')}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'orders'
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                        >
                            Orders ({totalOrders})
                        </button>
                        <button
                            onClick={() => setActiveTab('users')}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'users'
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                        >
                            Users ({users.length})
                        </button>
                    </nav>
                </div>

                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <div className="space-y-6">
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-lg shadow p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600">Total Revenue</p>
                                        <p className="text-3xl font-bold text-gray-900 mt-2">
                                            ${(totalRevenue / 100).toFixed(2)}
                                        </p>
                                    </div>
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600">Paid Orders</p>
                                        <p className="text-3xl font-bold text-gray-900 mt-2">{paidOrders}</p>
                                    </div>
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600">Total Users</p>
                                        <p className="text-3xl font-bold text-gray-900 mt-2">{users.length}</p>
                                    </div>
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Orders */}
                        <div className="bg-white rounded-lg shadow">
                            <div className="p-6 border-b border-gray-200">
                                <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {orders.slice(0, 5).map((order) => (
                                            <tr key={order.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {order.user?.email || 'Guest'}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {order.product.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    ${(order.amount / 100).toFixed(2)}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === 'paid' ? 'bg-green-100 text-green-800' :
                                                        order.status === 'canceled' ? 'bg-red-100 text-red-800' :
                                                            'bg-yellow-100 text-yellow-800'
                                                        }`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {format(new Date(order.createdAt), 'MMM dd, yyyy')}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* Orders Tab */}
                {activeTab === 'orders' && (
                    <div className="space-y-6">
                        {/* Filters and Search */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Status Filter</label>
                                    <select
                                        value={orderFilter}
                                        onChange={(e) => setOrderFilter(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="all">All Status</option>
                                        <option value="created">Created</option>
                                        <option value="paid">Paid</option>
                                        <option value="canceled">Canceled</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Email, Session ID, or Product..."
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div className="flex items-end">
                                    <button
                                        onClick={exportToCSV}
                                        className="w-full px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                                    >
                                        Export CSV
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Orders Table */}
                        <div className="bg-white rounded-lg shadow overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {filteredOrders.map((order) => (
                                            <tr key={order.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">
                                                    {order.id.substring(0, 8)}...
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {order.user?.email || 'Guest'}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {order.product.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    ${(order.amount / 100).toFixed(2)}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === 'paid' ? 'bg-green-100 text-green-800' :
                                                        order.status === 'canceled' ? 'bg-red-100 text-red-800' :
                                                            'bg-yellow-100 text-yellow-800'
                                                        }`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {format(new Date(order.createdAt), 'MMM dd, yyyy HH:mm')}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    <button
                                                        onClick={() => setSelectedOrder(order)}
                                                        className="text-blue-600 hover:text-blue-900 font-medium"
                                                    >
                                                        View Details
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* Users Tab */}
                {activeTab === 'users' && (
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Admin</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {users.map((user) => (
                                        <tr key={user.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {user.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {user.email}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {user.isAdmin ? (
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                                        Admin
                                                    </span>
                                                ) : (
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                                        User
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {user._count.orders}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {format(new Date(user.createdAt), 'MMM dd, yyyy')}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Order Details Modal */}
                {selectedOrder && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-semibold text-gray-900">Order Details</h2>
                                    <button
                                        onClick={() => setSelectedOrder(null)}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="p-6 space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Order ID</label>
                                    <p className="text-gray-900 font-mono">{selectedOrder.id}</p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-500">Stripe Session ID</label>
                                    <p className="text-gray-900 font-mono text-sm break-all">{selectedOrder.stripeSessionId}</p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-500">Customer</label>
                                    <p className="text-gray-900">{selectedOrder.user?.name || 'Guest'}</p>
                                    <p className="text-gray-600 text-sm">{selectedOrder.user?.email || 'N/A'}</p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-500">Product</label>
                                    <p className="text-gray-900">{selectedOrder.product.name}</p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-500">Amount</label>
                                    <p className="text-gray-900 text-2xl font-bold">${(selectedOrder.amount / 100).toFixed(2)}</p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-500">Status</label>
                                    <p>
                                        <span className={`px-3 py-1 inline-flex text-sm font-semibold rounded-full ${selectedOrder.status === 'paid' ? 'bg-green-100 text-green-800' :
                                            selectedOrder.status === 'canceled' ? 'bg-red-100 text-red-800' :
                                                'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {selectedOrder.status}
                                        </span>
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-500">Created</label>
                                    <p className="text-gray-900">{format(new Date(selectedOrder.createdAt), 'PPpp')}</p>
                                </div>

                                <div className="pt-4 border-t border-gray-200">
                                    <button
                                        onClick={() => alert('Refund functionality (UI only)')}
                                        className="w-full px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
                                    >
                                        Mark for Refund (UI Only)
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
