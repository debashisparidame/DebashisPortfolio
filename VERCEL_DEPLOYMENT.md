# Vercel Deployment Guide - Step by Step

## 📋 Prerequisites

- GitHub account (free at github.com)
- Vercel account (free at vercel.com)
- Your Web3Forms API key (for contact form)

## 🚀 Step 1: Prepare Your Repository

### 1.1 Initialize Git (if not already done)
```bash
cd c:\Users\DEBASHIS PARIDA\Downloads\DebashisPortfolio
git init
git add .
git commit -m "Production ready Next.js portfolio"
```

### 1.2 Create GitHub Repository
1. Go to https://github.com/new
2. Name it: `debashis-portfolio`
3. Add description: "A modern portfolio website built with Next.js"
4. Choose: Public or Private
5. Click "Create repository"

### 1.3 Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/debashis-portfolio.git
git branch -M main
git push -u origin main
```

## 🔗 Step 2: Connect to Vercel

### 2.1 Sign Up/Login to Vercel
1. Go to https://vercel.com
2. Sign up with GitHub (recommended)
3. Authorize Vercel to access your GitHub account

### 2.2 Import Your Project
1. Click "Add New Project"
2. Select "Import Git Repository"
3. Find and select `debashis-portfolio`
4. Click "Import"

## ⚙️ Step 3: Configure Environment Variables

### 3.1 In Vercel Dashboard
1. Go to your project settings
2. Click on "Environment Variables"
3. Add the following variables:

#### Production Variables:
```
NEXT_PUBLIC_WEB3FORMS_KEY = your_actual_api_key_here
NEXT_PUBLIC_APP_NAME = Debashis Portfolio
NEXT_PUBLIC_APP_DESCRIPTION = Code With Deb
```

#### (Optional) Preview/Development Variables:
You can add the same variables for preview deployments

### 3.2 Web3Forms Setup
1. Go to https://web3forms.com
2. Sign in or create account
3. Create a new form or find your API key
4. Copy your Access Key
5. Paste it in Vercel environment variable `NEXT_PUBLIC_WEB3FORMS_KEY`

## 🏗️ Step 4: Build Settings (Verify)

In Vercel, your build settings should be:
- **Framework**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

(These should be auto-detected - verify they're correct)

## 🚀 Step 5: Deploy

### 5.1 Automatic Deployment
1. Click "Deploy"
2. Wait for build to complete (usually 2-3 minutes)
3. Once complete, you'll see: "Congratulations! Your site is live"

### 5.2 Monitor Deployment
- Check deployment progress in "Deployments" tab
- View build logs if any issues occur
- Each push to `main` branch will trigger auto-deploy

## ✅ Step 6: Verify Deployment

### 6.1 Test Your Live Site
1. Click the "Visit" button to see your live portfolio
2. Test all sections:
   - Dark mode toggle
   - Navbar scrolling effects
   - Animations
   - Contact form

### 6.2 Test Contact Form
1. Fill out the contact form
2. Submit
3. Check Web3Forms dashboard for submitted form
4. Verify you receive email notification

## 🌐 Step 7: Custom Domain (Optional)

### 7.1 Add Custom Domain
1. In Vercel project, go to "Domains"
2. Click "Add"
3. Enter your domain: `example.com`
4. Follow DNS instructions for your domain registrar

### 7.2 Common Domain Registrars
- Namecheap
- GoDaddy
- Google Domains
- Hostinger

## 📊 Step 8: Monitor Performance

### 8.1 Vercel Analytics
1. Go to Analytics tab
2. Monitor:
   - Page views
   - Deployment times
   - Error rates
   - Real-time traffic

### 8.2 Web Vitals
1. Check "Speed Insights"
2. Monitor Core Web Vitals
3. Optimize if scores are below:
   - LCP (Largest Contentful Paint): < 2.5s
   - FID (First Input Delay): < 100ms
   - CLS (Cumulative Layout Shift): < 0.1

## 🔒 Security Checklist

- ✅ Environment variables secured (not in code)
- ✅ Contact form API key protected
- ✅ HTTPS enabled (automatic on Vercel)
- ✅ Security headers configured
- ✅ No sensitive data in repository

## 🐛 Troubleshooting

### Build Fails
```
Solution: Check build logs in Vercel dashboard
1. Click the failed deployment
2. View "Build Logs"
3. Look for error messages
4. Fix locally and push again
```

### Contact Form Not Working
1. Verify `NEXT_PUBLIC_WEB3FORMS_KEY` in Vercel dashboard
2. Check Web3Forms dashboard for quota
3. Verify form submission data in browser console
4. Check Vercel logs for API errors

### Domain Not Working
1. Verify DNS records are set correctly
2. Wait for DNS propagation (up to 48 hours)
3. Clear browser cache
4. Try different browser/device

### Slow Performance
1. Check Vercel Analytics
2. Optimize images (already done)
3. Reduce JavaScript bundle
4. Enable caching (already configured)

## 📈 After Deployment

### Maintenance Tasks
- [ ] Monitor Vercel logs regularly
- [ ] Check Web Vitals monthly
- [ ] Update dependencies quarterly
- [ ] Review Web3Forms submissions
- [ ] Test contact form monthly

### Optimization Tips
- Monitor Lighthouse scores
- Use Vercel Edge Functions for API routes (advanced)
- Enable Vercel Image Optimization
- Set up email notifications in Vercel

## 🔗 Useful Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Your Project URL**: https://YOUR_PROJECT_NAME.vercel.app
- **Web3Forms**: https://web3forms.com
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs

## ❓ Quick FAQ

**Q: How long does deployment take?**
A: Usually 2-3 minutes, sometimes under 1 minute.

**Q: Will my site go down during deployment?**
A: No, Vercel blue-green deploys prevent downtime.

**Q: Can I rollback to previous deployment?**
A: Yes, go to Deployments tab and click "Rollback".

**Q: How much does Vercel cost?**
A: Free plan is generous. Pay-as-you-go after exceeding limits.

**Q: Can I use my own domain?**
A: Yes, follow Step 7. DNS setup is straightforward.

**Q: How do I update my site after deployment?**
A: Make changes locally, push to GitHub, Vercel auto-deploys.

---

**Your portfolio is ready to go live! 🎉**

Push your changes and watch your site deploy automatically to the world.
