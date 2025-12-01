# amlFraud - Blockchain Intelligence Platform

A complete, production-ready Next.js application for blockchain intelligence and crypto compliance with full authentication system and Stripe payment integration.

## Features

- ✅ **Complete Authentication System** - Login, Signup, Sign Out with NextAuth
- ✅ **Stripe Payment Integration** - Secure checkout with Stripe
- ✅ **Product Management** - Products and solutions with pricing
- ✅ **Order Tracking** - Database-backed order management
- ✅ **Webhook Handling** - Automatic order status updates
- ✅ **Secure Password Hashing** - bcrypt for password security
- ✅ **SQLite Database** - Prisma ORM with SQLite
- ✅ **Session Management** - JWT-based sessions with NextAuth
- ✅ **Protected Routes** - Server-side session checks
- ✅ **Responsive Design** - Mobile-first, professional UI
- ✅ **20+ Pages** - Complete website with products, solutions, resources, and company pages

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Database**: SQLite with Prisma ORM
- **Authentication**: NextAuth.js with Credentials Provider
- **Payments**: Stripe Checkout
- **Password Hashing**: bcryptjs

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Stripe account (for payments)

## Installation & Setup

### 1. Clone and Install Dependencies

```bash
cd "d:/1. Websites Project Files/amlfraud"
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-key-change-this-in-production-min-32-chars"

# Admin credentials (for seeding)
ADMIN_EMAIL="admin@amlfraud.com"
ADMIN_PASSWORD="Admin@123"
ADMIN_NAME="Admin User"

# Stripe Keys (Test Mode)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_your_publishable_key_here"
STRIPE_SECRET_KEY="sk_test_your_secret_key_here"
STRIPE_WEBHOOK_SECRET="whsec_your_webhook_secret_here"
```

**Important**: 
- Change `NEXTAUTH_SECRET` to a random string (minimum 32 characters) in production
- The Stripe keys provided are test keys for development
- Get your webhook secret from Stripe Dashboard after setting up webhooks

### 3. Initialize Database

Run Prisma migrations to create the database:

```bash
npx prisma migrate dev --name init
```

### 4. Seed Database

Create admin user and sample products:

```bash
npx tsx prisma/seed.ts
```

This will create:
- **Admin user**: admin@amlfraud.com / Admin@123
- **6 sample products** with pricing

### 5. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Usage

### Authentication

#### Login
1. Navigate to [http://localhost:3000/login](http://localhost:3000/login)
2. Use admin credentials: admin@amlfraud.com / Admin@123

#### Create Account
1. Navigate to [http://localhost:3000/signup](http://localhost:3000/signup)
2. Fill in your details and create an account

#### Sign Out
Click "Sign out" in the navigation bar

### Purchasing Products

#### Browse Products
1. Navigate to [http://localhost:3000/products-list](http://localhost:3000/products-list)
2. View all available products and solutions with pricing

#### Buy a Product
1. Click "Buy Now" on any product
2. You'll be redirected to Stripe Checkout
3. Use Stripe test card: `4242 4242 4242 4242`
4. Any future expiry date and any 3-digit CVC
5. Complete the purchase

#### Order Status
- Orders are automatically created in the database when checkout starts
- Status updates to "paid" when payment completes (via webhook)
- Status updates to "canceled" if checkout expires

## Project Structure

```
amlfraud/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── [...nextauth]/route.ts  # NextAuth handler
│   │   │   └── signup/route.ts         # Signup API
│   │   ├── checkout/
│   │   │   └── session/route.ts        # Create Stripe session
│   │   └── stripe/
│   │       └── webhook/route.ts        # Stripe webhook handler
│   ├── checkout/
│   │   ├── success/page.tsx            # Payment success page
│   │   └── canceled/page.tsx           # Payment canceled page
│   ├── products-list/page.tsx          # Products listing
│   ├── login/page.tsx                  # Login page
│   ├── signup/page.tsx                 # Signup page
│   └── ...                             # Other pages
├── components/
│   ├── ProductCard.tsx                 # Product card with Buy Now
│   ├── Navbar.tsx                      # Navigation with auth
│   └── ...                             # Other components
├── lib/
│   ├── prisma.ts                       # Prisma client
│   ├── auth.ts                         # NextAuth configuration
│   └── stripe.ts                       # Stripe configuration
├── prisma/
│   ├── schema.prisma                   # Database schema
│   └── seed.ts                         # Database seeding
└── .env                                # Environment variables
```

## Database Schema

### User Model
```prisma
model User {
  id           String    @id @default(cuid())
  name         String
  email        String    @unique
  passwordHash String
  isAdmin      Boolean   @default(false)
  orders       Order[]
}
```

### Product Model
```prisma
model Product {
  id          String   @id @default(cuid())
  name        String
  description String
  price       Int      // Price in cents (USD)
  category    String   // 'product' or 'solution'
  slug        String   @unique
  features    String?  // JSON string
}
```

### Order Model
```prisma
model Order {
  id              String   @id @default(cuid())
  userId          String?  // Nullable for guest purchases
  productId       String
  amount          Int      // Amount in cents
  currency        String   @default("usd")
  stripeSessionId String   @unique
  status          String   @default("created") // 'created', 'paid', 'canceled'
}
```

## API Endpoints

### Authentication
- **POST** `/api/auth/signup` - Create new user account
- **POST** `/api/auth/signin` - Sign in (handled by NextAuth)

### Payments
- **POST** `/api/checkout/session` - Create Stripe checkout session
- **POST** `/api/stripe/webhook` - Handle Stripe webhooks

## Stripe Integration

### Test Mode
The application uses Stripe test keys for development:
- Test card: `4242 4242 4242 4242`
- Any future expiry date
- Any 3-digit CVC
- Any ZIP code

### Webhook Setup (Optional for Development)

To test webhooks locally:

1. Install Stripe CLI:
   ```bash
   stripe login
   ```

2. Forward webhooks to local server:
   ```bash
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   ```

3. Copy the webhook signing secret and add to `.env`:
   ```env
   STRIPE_WEBHOOK_SECRET="whsec_..."
   ```

### Production Deployment

For production:
1. Use live Stripe keys (not test keys)
2. Set up webhook endpoint in Stripe Dashboard
3. Point webhook to: `https://yourdomain.com/api/stripe/webhook`
4. Listen for events: `checkout.session.completed`, `checkout.session.expired`

## Security Features

- ✅ Password hashing with bcrypt (10 rounds)
- ✅ Prepared statements (Prisma handles SQL injection prevention)
- ✅ Client and server-side validation
- ✅ JWT session tokens
- ✅ Secure session management
- ✅ Environment variable secrets
- ✅ Server-only Stripe secret key
- ✅ Webhook signature verification
- ✅ CSRF protection (NextAuth built-in)

## Available Scripts

```bash
# Development
npm run dev              # Start development server

# Database
npx prisma migrate dev   # Run database migrations
npx prisma studio        # Open Prisma Studio (database GUI)
npx tsx prisma/seed.ts   # Seed admin user and products

# Production
npm run build            # Build for production
npm start                # Start production server
```

## Troubleshooting

### Database Issues

Reset database:
```bash
rm prisma/dev.db
npx prisma migrate dev --name init
npx tsx prisma/seed.ts
```

### Stripe Checkout Not Working

1. Verify Stripe keys in `.env`
2. Check browser console for errors
3. Ensure `NEXTAUTH_URL` matches your domain
4. For webhooks, ensure `STRIPE_WEBHOOK_SECRET` is set

### Port Already in Use

```bash
npm run dev -- -p 3001
```

## Sample Products

After seeding, you'll have these products:

1. **Forensics Pro** - $999.00
2. **Transaction Monitoring** - $799.00
3. **Wallet Screening** - $599.00
4. **Triage** - $499.00
5. **Law Enforcement Package** - $1,499.00
6. **Banking Compliance Suite** - $1,299.00

## License

Private - amlFraud

## Support

For issues or questions, contact: support@amlfraud.com
