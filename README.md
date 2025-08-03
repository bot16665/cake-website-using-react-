# Sweet Dreams - Cake Website

A beautiful, modern cake website built with Next.js, React, and Tailwind CSS. This website showcases a fictional bakery called "Sweet Dreams" with a complete e-commerce experience for ordering custom cakes.

## 🍰 Features

### Core Pages
- **Homepage** (`/`) - Hero section, featured cakes, services overview
- **Cakes Catalog** (`/cakes`) - Browse all cakes with filtering and sorting
- **Services** (`/services`) - Detailed service offerings and pricing
- **About** (`/about`) - Company story, team, and values
- **Contact** (`/contact`) - Contact form and business information
- **Order** (`/order`) - Comprehensive cake ordering system

### Key Features
- **Responsive Design** - Mobile-first approach with beautiful UI
- **Interactive Forms** - Contact and order forms with validation
- **Cake Filtering** - Filter by category and sort by price/name
- **Order System** - Complete cake customization with pricing calculator
- **Modern UI** - Clean, professional design with smooth animations
- **SEO Optimized** - Proper metadata and semantic HTML

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── layout.tsx            # Root layout with navigation
│   │   ├── cakes/
│   │   │   └── page.tsx          # Cakes catalog
│   │   ├── services/
│   │   │   └── page.tsx          # Services page
│   │   ├── about/
│   │   │   └── page.tsx          # About page
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page
│   │   └── order/
│   │       └── page.tsx          # Order page
│   ├── components/
│   │   ├── Navigation.tsx        # Header navigation
│   │   └── Footer.tsx            # Footer component
│   └── globals.css               # Global styles
├── public/                       # Static assets
└── package.json                  # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
- **Primary**: Pink (#EC4899) - Represents sweetness and celebration
- **Secondary**: Purple (#8B5CF6) - Adds elegance and sophistication
- **Neutral**: Gray scale for text and backgrounds
- **Accent**: White for clean, modern look

### Typography
- **Font**: Geist Sans (Google Fonts)
- **Headings**: Bold, large scale for impact
- **Body**: Clean, readable text

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Rounded with hover effects
- **Forms**: Clean inputs with focus states
- **Navigation**: Fixed header with mobile menu

## 🍰 Cake Categories

1. **Birthday Cakes** - Fun, colorful designs for all ages
2. **Wedding Cakes** - Elegant, sophisticated multi-tier designs
3. **Chocolate Cakes** - Rich, indulgent chocolate varieties
4. **Vanilla Cakes** - Classic, versatile vanilla options
5. **Specialty Cakes** - Unique flavors and designs
6. **Custom Cakes** - Personalized designs for special occasions

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with hooks and modern features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Code linting and formatting

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile** (320px - 768px)
- **Tablet** (768px - 1024px)
- **Desktop** (1024px+)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with one click

### Other Platforms
- **Netlify**: Build command: `npm run build`
- **Railway**: Supports Next.js out of the box
- **AWS Amplify**: Full-stack deployment

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📞 Contact Information

**Sweet Dreams Bakery**
- Phone: (555) 123-4567
- Email: hello@sweetdreams.com
- Address: 123 Baker Street, Sweet City, SC 12345

## 🎯 Future Enhancements

- [ ] User authentication and accounts
- [ ] Shopping cart functionality
- [ ] Payment integration (Stripe)
- [ ] Admin dashboard for order management
- [ ] Real-time order tracking
- [ ] Customer reviews and ratings
- [ ] Blog section for cake tips and recipes
- [ ] Email marketing integration
- [ ] Mobile app development

## 📄 License

This project is for demonstration purposes. Feel free to use and modify for your own cake business!

---

**Made with ❤️ and lots of 🍰**
