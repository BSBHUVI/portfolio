# 🚀 Deploy Bhuvan's Portfolio to Vercel

## Method 1: Web Deployment (Recommended)

### Step 1: Prepare Your Project
✅ Your project is already build-ready! 

### Step 2: Push to GitHub
1. **Initialize Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   ```

2. **Create GitHub repository:**
   - Go to [GitHub.com](https://github.com)
   - Click "New repository"
   - Name it `bhuvan-portfolio` or similar
   - Don't initialize with README (since we already have files)

3. **Push to GitHub:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/bhuvan-portfolio.git
   git push -u origin main
   ```

### Step 3: Deploy on Vercel
1. **Go to [Vercel.com](https://vercel.com)**
2. **Sign up/Login** (preferably with GitHub for easier integration)
3. **Click "New Project"**
4. **Import your GitHub repository:**
   - Select `bhuvan-portfolio` repository
   - Vercel will auto-detect it's a Vite project
5. **Configure deployment settings:**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. **Click "Deploy"**

### Step 4: Custom Domain (Optional)
- After deployment, you can add a custom domain in Vercel dashboard
- Or use the provided `.vercel.app` domain

---

## Method 2: Manual File Upload

If GitHub isn't available:

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **Upload `dist` folder:**
   - Go to [Vercel.com](https://vercel.com) 
   - Click "New Project"
   - Choose "Browse" and upload your `dist` folder
   - Vercel will deploy the static files

---

## ⚙️ Configuration Files Created

✅ **vercel.json** - Deployment configuration  
✅ **package.json** - Updated with vercel-build script  
✅ **Ready for deployment!**

## 🌐 Expected Result

Your portfolio will be live at:
- `https://your-project-name.vercel.app`
- Custom domain if configured

## 🔧 Vercel Configuration

The `vercel.json` file configures:
- **Static build** for Vite projects
- **SPA routing** for React Router
- **Optimized deployment** settings

## 📱 Features After Deployment

- ⚡ **Fast loading** with global CDN
- 📱 **Responsive design** works on all devices
- 🎨 **Smooth animations** with Framer Motion
- 🔍 **SEO optimized** for search engines
- 🚀 **Production ready** with optimized assets

---

**Next Steps:** Follow the web deployment method above to get your portfolio live! 🎉