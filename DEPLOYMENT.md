# 🚀 Vercel Deployment Guide

Complete step-by-step guide to deploy your enhanced portfolio on Vercel.

## Method 1: GitHub Integration (Recommended - Automatic Deployments)

### Step 1: Push to GitHub

Make sure your code is pushed to your GitHub repository:

```bash
# If you haven't initialized git yet
git init
git add .
git commit -m "Enhanced portfolio with modern design"
git branch -M main
git remote add origin https://github.com/MounishS-hue/portfolio.git
git push -u origin main
```

### Step 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New"** → **"Project"**
3. Select **"Import Git Repository"**
4. Search for and select your `portfolio` repository
5. Vercel will auto-detect your project settings:
   - **Framework**: None (Static)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **"Deploy"**

Your site will be live in 30-60 seconds! 🎉

### Step 3: Custom Domain (Optional)

1. Go to your project settings
2. Click **"Domains"**
3. Click **"Add"**
4. Enter your custom domain
5. Follow DNS instructions
6. DNS changes propagate in 24-48 hours

## Method 2: Vercel CLI (For Advanced Users)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
# or
yarn global add vercel
```

### Step 2: Deploy

```bash
# Navigate to your project
cd "c:\Users\MOUNISH\OneDrive - Amrita university\Pictures\My site"

# Deploy
vercel
```

### Step 3: Follow Prompts

- **Set up and deploy?** → `y`
- **Which scope?** → Select your account
- **Link to existing project?** → `n` (unless deploying an update)
- **Project name** → `portfolio` (or your choice)
- **Directory to deploy** → `./` (or let it auto-detect)

Your live URL will be displayed! ✨

## Method 3: GitHub Actions (CI/CD)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] All links are working (email, GitHub, LinkedIn)
- [ ] Animations load smoothly
- [ ] Mobile responsiveness is correct
- [ ] Custom domain points to Vercel (if applicable)
- [ ] SEO meta tags are visible in page source
- [ ] Share portfolio on LinkedIn

## Environment Variables (if needed)

Add environment variables via Vercel Dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add variables like:
   - `VITE_API_URL=https://api.example.com`
   - `VITE_GA_ID=your-analytics-id`
3. Redeploy for changes to take effect

## Troubleshooting

### Build Fails
```bash
# Check build locally first
npm run build

# Check for errors
npm run build --verbose
```

### Blank Page
- Check browser console for errors (F12)
- Verify `vercel.json` configuration
- Check that `dist` folder is generated

### Slow Loading
- Run `vercel analytics` to check performance
- Optimize images if added
- Enable compression in Vercel settings

### Domain Issues
- Wait for DNS propagation (can take 24-48 hours)
- Verify DNS records in your domain provider
- Use DNS propagation checker tools

## Updating Your Portfolio

After deployment, updating your portfolio is simple:

1. **Edit files locally**
   ```bash
   # Make changes to portfolio.ts, add new projects, etc.
   ```

2. **Test locally**
   ```bash
   npm run dev
   ```

3. **Commit and push**
   ```bash
   git add .
   git commit -m "Updated portfolio with new projects"
   git push
   ```

4. **Automatic deployment**
   - Vercel automatically deploys on every push to main
   - Check deployment status on Vercel dashboard
   - New version live in seconds!

## Monitor Your Deployment

### View Logs
```bash
vercel logs
```

### Check Performance
- Vercel Dashboard → **Analytics**
- Check Core Web Vitals
- Monitor error rates

### Preview Deployments
- Vercel creates preview deployments for pull requests
- Test changes before merging to main
- Perfect for collaborations

## Share Your Portfolio

Once deployed, share it:

- **LinkedIn**: Post your portfolio link
- **GitHub**: Add to README
- **Resume**: Include the URL
- **Email**: Send to contacts
- **Social Media**: Tweet your achievement

## Security

Your portfolio is secure by default:
- HTTPS enabled automatically
- DDoS protection
- Continuous monitoring
- Auto-renewal of SSL certificates

## Analytics

Enable analytics to track visitors:
1. Go to Vercel project settings
2. Enable **Analytics**
3. View visitor data and performance metrics

---

## Quick Reference

| Task | Command |
|------|---------|
| Local dev | `npm run dev` |
| Build locally | `npm run build` |
| Deploy with CLI | `vercel` |
| View logs | `vercel logs` |
| Set custom domain | Vercel Dashboard |
| Update portfolio | Push to GitHub |

## Support

If you encounter issues:
1. Check [Vercel Docs](https://vercel.com/docs)
2. Review deployment logs
3. Visit [Vercel Support](https://vercel.com/support)

---

**Your portfolio is production-ready! 🚀 Deploy now and showcase your skills to the world!**
