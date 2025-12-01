import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('Starting database seed...');

    // Admin credentials - EXACT as specified
    const adminEmail = 'admin@amlfraud.com';
    const adminPassword = '@Abc123456';
    const adminName = 'Admin User';

    // Check if admin user already exists
    const existingAdmin = await prisma.user.findUnique({
        where: { email: adminEmail }
    });

    if (!existingAdmin) {
        // Hash the admin password with bcrypt
        const passwordHash = await bcrypt.hash(adminPassword, 10);

        // Create admin user with isAdmin = true
        const admin = await prisma.user.create({
            data: {
                name: adminName,
                email: adminEmail,
                passwordHash,
                isAdmin: true
            }
        });

        console.log(`✅ Admin user created successfully!`);
        console.log(`Email: ${admin.email}`);
        console.log(`Password: ${adminPassword}`);
        console.log(`isAdmin: ${admin.isAdmin}`);
    } else {
        // Update existing user to ensure they're admin with correct password
        const passwordHash = await bcrypt.hash(adminPassword, 10);

        await prisma.user.update({
            where: { email: adminEmail },
            data: {
                passwordHash,
                isAdmin: true
            }
        });

        console.log(`Admin user already exists: ${adminEmail}`);
        console.log(`Updated password and ensured isAdmin = true`);
    }

    // Seed Products
    console.log('\nSeeding products...');

    const products = [
        {
            name: 'Forensics Pro',
            slug: 'forensics-pro',
            description: 'Advanced blockchain investigation platform for tracing crypto linked to crime',
            price: 99900, // $999.00
            category: 'product',
            features: JSON.stringify([
                'Universal cross-chain tracing',
                'Behavioral pattern detection',
                'Threat intelligence',
                'Custom graph elements',
                'Asset identification'
            ])
        },
        {
            name: 'Transaction Monitoring',
            slug: 'transaction-monitoring',
            description: 'Real-time transaction monitoring and risk detection',
            price: 79900, // $799.00
            category: 'product',
            features: JSON.stringify([
                'Real-time monitoring',
                'Risk scoring',
                'Compliance automation',
                'Instant alerts'
            ])
        },
        {
            name: 'Wallet Screening',
            slug: 'wallet-screening',
            description: 'Pre-screen wallets for risk exposure before transactions',
            price: 59900, // $599.00
            category: 'product',
            features: JSON.stringify([
                'Pre-transaction screening',
                'Risk exposure analysis',
                'Instant results',
                'Historical analysis'
            ])
        },
        {
            name: 'Triage',
            slug: 'triage',
            description: 'Streamline crypto investigations with intelligent case management',
            price: 49900, // $499.00
            category: 'product',
            features: JSON.stringify([
                'Rapid assessment',
                'Case management',
                'Priority scoring',
                'Team collaboration'
            ])
        },
        {
            name: 'Law Enforcement Package',
            slug: 'law-enforcement',
            description: 'Complete solution for law enforcement agencies',
            price: 149900, // $1,499.00
            category: 'solution',
            features: JSON.stringify([
                'All product features',
                'Investigative support',
                'Training sessions',
                'Priority support'
            ])
        },
        {
            name: 'Banking Compliance Suite',
            slug: 'banking-compliance',
            description: 'Comprehensive compliance solution for financial institutions',
            price: 129900, // $1,299.00
            category: 'solution',
            features: JSON.stringify([
                'Regulatory compliance',
                'Real-time monitoring',
                'Risk assessment',
                'Audit trails'
            ])
        }
    ];

    for (const product of products) {
        const existing = await prisma.product.findUnique({
            where: { slug: product.slug }
        });

        if (!existing) {
            await prisma.product.create({ data: product });
            console.log(`✅ Created product: ${product.name}`);
        } else {
            console.log(`Product already exists: ${product.name}`);
        }
    }

    console.log('\n✅ Database seeding completed!');
    console.log('\n=== ADMIN CREDENTIALS ===');
    console.log(`Email: ${adminEmail}`);
    console.log(`Password: ${adminPassword}`);
    console.log('=========================\n');
}

main()
    .catch((e) => {
        console.error('Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
