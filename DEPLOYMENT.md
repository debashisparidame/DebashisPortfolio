# Debashis Portfolio

A modern, responsive portfolio website built with **Next.js 16**, **React 19**, **TailwindCSS 4**, and **Framer Motion**.

## 🌟 Features

- ✅ **Next.js 16** - Latest version with optimized performance
- ✅ **React 19** - Latest React version with improvements
- ✅ **TailwindCSS 4** - Modern styling with latest features
- ✅ **Framer Motion** - Smooth animations and transitions
- ✅ **Dark Mode** - Full dark mode support with smooth transitions
- ✅ **Responsive Design** - Mobile-first, fully responsive
- ✅ **SEO Optimized** - Metadata, structured data, and performance
- ✅ **Production Ready** - Security headers, image optimization, caching
- ✅ **Web3Forms Integration** - Contact form with email notifications
- ✅ **Type-safe** - JavaScript with path aliases

## 📋 Prerequisites

- **Node.js** >= 18.18.0
- **npm** >= 9.0.0
- **Web3Forms API Key** (for contact form)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

Then update the `.env.local` file with your Web3Forms API key:

```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_api_key_here
NEXT_PUBLIC_APP_NAME=Debashis Portfolio
NEXT_PUBLIC_APP_DESCRIPTION=Code With Deb
```

### 3. Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

### 4. Build for Production

```bash
npm run build
npm start
```

## 📦 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |

## 🏗️ Project Structure

```
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── layout.js       # Root layout
│   │   ├── page.js         # Home page
│   │   └── globals.css     # Global styles
│   ├── components/          # React components
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Work.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   └── assets/              # Static assets
├── public/                  # Static files
├── tailwind.config.mjs      # Tailwind configuration
├── next.config.mjs          # Next.js configuration
├── vercel.json              # Vercel deployment config
├── package.json             # Dependencies
└── jsconfig.json            # Path aliases
```

## 🎨 Key Components

### Header
- Typing animation for role titles
- Smooth scroll navigation
- Responsive design

### Navbar
- Animated logo switching
- Dark mode toggle
- Mobile-friendly menu
- Scroll-based styling

### About
- Interactive sections with animations
- Skills and education showcase
- Image with border effects

### Services
- Grid layout of services
- Hover animations
- Dark mode support

### Work
- Portfolio project showcase
- Image backgrounds
- Hover effects

### Contact
- Web3Forms integration
- Form validation
- Real-time feedback

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Set environment variables in Vercel dashboard

3. **Deploy**:
   - Vercel will automatically build and deploy on push

### Environment Variables on Vercel

Add these in Vercel Project Settings → Environment Variables:

```
NEXT_PUBLIC_WEB3FORMS_KEY=your_api_key
NEXT_PUBLIC_APP_NAME=Debashis Portfolio
NEXT_PUBLIC_APP_DESCRIPTION=Code With Deb
```

## 🔒 Security

- ✅ Security headers configured (CSP, X-Frame-Options, XSS Protection)
- ✅ Environment variables for sensitive data
- ✅ No hardcoded API keys
- ✅ Powered-by header removed
- ✅ Source maps disabled in production
- ✅ CSRF protection ready

## ⚡ Performance

- ✅ Image optimization with Next.js Image component
- ✅ CSS minification via Tailwind
- ✅ JavaScript minification via SWC
- ✅ Strategic caching headers
- ✅ Optimized fonts from Google Fonts
- ✅ Code splitting and lazy loading

## 🧪 Code Quality

- ✅ ESLint configured
- ✅ Next.js core web vitals rules
- ✅ Prettier configured for consistent formatting

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Contact Form Not Working

1. Verify `NEXT_PUBLIC_WEB3FORMS_KEY` is set in `.env.local`
2. Check Web3Forms dashboard for quota
3. Check browser console for errors
4. Verify form submission in Web3Forms dashboard

### Dark Mode Issues

Clear browser cache and localStorage:
```javascript
localStorage.removeItem('theme');
```

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Support

For issues or questions:
1. Check the troubleshooting section
2. Review your environment variables
3. Check browser console for errors
4. Create an issue on GitHub

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Web3Forms Documentation](https://web3forms.com/documentation)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

**Built with ❤️ using Next.js and modern web technologies**
