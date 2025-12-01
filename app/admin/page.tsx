import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import AdminDashboard from '@/components/admin/AdminDashboard';

export default async function AdminPage() {
    // Server-side authentication check
    const session = await getServerSession(authOptions);

    // Check if user is logged in
    if (!session || !session.user) {
        redirect('/?error=unauthorized');
    }

    // Fetch user from database to verify admin status
    const user = await prisma.user.findUnique({
        where: { email: session.user.email! }
    });

    // Check if user exists, is admin, and has the exact admin email
    if (!user || !user.isAdmin || user.email !== 'admin@amlfraud.com') {
        redirect('/?error=forbidden');
    }

    // Fetch dashboard data
    const [orders, users, stats] = await Promise.all([
        prisma.order.findMany({
            include: {
                user: {
                    select: {
                        name: true,
                        email: true
                    }
                },
                product: {
                    select: {
                        name: true,
                        price: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        }),
        prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                isAdmin: true,
                createdAt: true,
                _count: {
                    select: {
                        orders: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        }),
        prisma.order.groupBy({
            by: ['status'],
            _count: true,
            _sum: {
                amount: true
            }
        })
    ]);

    return <AdminDashboard orders={orders} users={users} stats={stats} />;
}
