# DEVCODEWEB - Professional Web Development Agency

A modern, high-performance website for DEVCODEWEB, a leading web development agency based in Jaipur, Rajasthan. Built with Next.js 14, TypeScript, and cutting-edge web technologies.

## 🚀 Features

### Core Functionality
- **Responsive Design** - Mobile-first approach with seamless desktop experience
- **Contact Management** - Advanced contact form with MongoDB integration
- **Newsletter System** - Email subscription management with Resend integration
- **Blog System** - Dynamic blog with rich content and SEO optimization
- **Portfolio Showcase** - Interactive project gallery and case studies
- **Team Profiles** - Detailed founder and team member pages

### Technical Excellence
- **Next.js 14** - App Router with Server Components and Server Actions
- **TypeScript** - Full type safety and enhanced developer experience
- **Tailwind CSS v4** - Modern styling with custom design system
- **MongoDB** - Robust database with schema validation
- **Resend** - Professional email delivery service
- **Vercel Analytics** - Performance monitoring and user insights

### Security & Performance
- **Rate Limiting** - API protection against abuse
- **Input Sanitization** - XSS and injection attack prevention
- **Security Headers** - CSRF, XSS, and clickjacking protection
- **Image Optimization** - WebP/AVIF formats with lazy loading
- **SEO Optimization** - Structured data, meta tags, and sitemap
- **Performance Monitoring** - Core Web Vitals tracking

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: MongoDB
- **Email**: Resend
- **UI Components**: Radix UI + Custom Components
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd devcodeweb-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   Fill in your environment variables (see Environment Variables section)

4. **Set up the database**
   \`\`\`bash
   node scripts/setup-database.js
   \`\`\`

5. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

\`\`\`env
# MongoDB Configuration
MONGODB_URI=mongodb+srv://vivekkumawat184563_db_user:Vivek@6363..@devcodeweb.ncn5xhk.mongodb.net/?retryWrites=true&w=majority&appName=devcodeweb

# Email Configuration (Resend)
RESEND_API_KEY=re_your_resend_api_key_here

# Optional: Development URLs
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000
\`\`\`

### Required Environment Variables
- `MONGODB_URI` - MongoDB connection string
- `RESEND_API_KEY` - Resend API key for email functionality

## 🗄️ Database Setup

The application uses MongoDB with three main collections:

### Collections
1. **contacts** - Contact form submissions
2. **newsletter_subscriptions** - Email newsletter subscribers
3. **project_inquiries** - Detailed project inquiry tracking

### Setup Script
Run the database setup script to create collections with proper validation:

\`\`\`bash
node scripts/setup-database.js
\`\`\`

This script will:
- Create collections with JSON schema validation
- Set up indexes for optimal performance
- Configure unique constraints where needed

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Manual Deployment
\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   ├── about/             # About pages
│   └── ...                # Other pages
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── ui/                # UI components
│   └── ...
├── lib/                   # Utility functions
│   ├── models/            # Data models
│   ├── mongodb.ts         # Database connection
│   ├── email.tsx          # Email templates
│   └── security.ts        # Security utilities
├── scripts/               # Database and utility scripts
├── public/                # Static assets
└── ...
\`\`\`

## 🔒 Security Features

### Implemented Security Measures
- **Rate Limiting** - Prevents API abuse
- **Input Sanitization** - XSS protection with DOMPurify
- **Security Headers** - CSRF, XSS, clickjacking protection
- **Request Validation** - Size limits and format validation
- **Error Handling** - Secure error messages
- **Environment Validation** - Required variable checks

### Security Headers
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Strict-Transport-Security (HTTPS only)

## 📊 Performance

### Optimization Features
- **Image Optimization** - Next.js Image component with WebP/AVIF
- **Code Splitting** - Automatic route-based splitting
- **Bundle Optimization** - Tree shaking and minification
- **Caching** - Static generation and API caching
- **Performance Monitoring** - Core Web Vitals tracking

### Performance Targets
- **LCP** < 2.5s (Largest Contentful Paint)
- **FID** < 100ms (First Input Delay)
- **CLS** < 0.1 (Cumulative Layout Shift)

## 🎨 Design System

### Colors
- **Primary**: Custom brand colors
- **Neutrals**: Grays and whites
- **Accents**: Supporting colors

### Typography
- **Headings**: Geist Sans
- **Body**: Geist Sans
- **Code**: Geist Mono

### Components
- Consistent spacing scale
- Responsive breakpoints
- Accessible color contrasts
- Modern animations and transitions

## 🧪 Testing

\`\`\`bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
\`\`\`

## 📈 Analytics

The application includes Vercel Analytics for:
- Page views and user sessions
- Performance metrics
- User behavior insights
- Core Web Vitals monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by DEVCODEWEB.

## 👥 Team

- **Nikhil Kumawat** - CEO & Co-Founder
- **Vivek Kumawat** - CTO & Co-Founder

## 📞 Contact

- **Website**: [https://devcodeweb.com](https://devcodeweb.com)
- **Email**: contact@devcodeweb.com
- **Location**: Jaipur, Rajasthan, India

---

Built with ❤️ by DEVCODEWEB Team
