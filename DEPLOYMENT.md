# Deployment Guide

This guide will help you deploy the DeGolyer Dads Club website to various hosting platforms.

## Prerequisites

- Node.js 18.17 or later installed
- Git repository set up
- All dependencies installed (`npm install`)

## Option 1: Deploy to Vercel (Recommended)

Vercel is the platform created by the creators of Next.js and offers the best integration.

### Steps:

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project
   - Click "Deploy"

3. **Automatic Deployments**:
   - Every push to your main branch will trigger a new deployment
   - Preview deployments are created for pull requests

### Environment Variables (if needed):
- Add any environment variables in the Vercel dashboard
- For this project, no environment variables are required

## Option 2: Deploy to Netlify

### Steps:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Drag and drop the `.next` folder from your build
   - Or connect your GitHub repository for automatic deployments

3. **Build settings** (if using Git integration):
   - Build command: `npm run build`
   - Publish directory: `.next`

## Option 3: Deploy to GitHub Pages

### Steps:

1. **Update next.config.ts**:
   ```typescript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   module.exports = nextConfig
   ```

2. **Build and export**:
   ```bash
   npm run export
   ```

3. **Deploy the `out` folder** to GitHub Pages

## Option 4: Deploy to Traditional Hosting

### Steps:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload files**:
   - Upload the entire project folder to your hosting provider
   - Ensure Node.js is supported

3. **Start the server**:
   ```bash
   npm start
   ```

## Custom Domain Setup

### For Vercel:
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update your DNS records as instructed

### For Netlify:
1. Go to your site settings in Netlify
2. Navigate to "Domain management"
3. Add your custom domain
4. Update your DNS records as instructed

## SSL Certificate

- **Vercel**: Automatically provided
- **Netlify**: Automatically provided
- **GitHub Pages**: Automatically provided
- **Traditional hosting**: May need to purchase/configure separately

## Performance Optimization

The website is already optimized with:
- Next.js automatic optimization
- Tailwind CSS for efficient styling
- Responsive images and components
- SEO-friendly metadata

## Monitoring

After deployment, monitor:
- Page load times
- Mobile responsiveness
- SEO performance
- User engagement

## Troubleshooting

### Common Issues:

1. **Build fails**: Check for TypeScript errors with `npm run lint`
2. **Styling issues**: Ensure Tailwind CSS is properly configured
3. **404 errors**: Check routing configuration
4. **Performance issues**: Use `npm run analyze` to identify bottlenecks

### Support:

- Check the [Next.js documentation](https://nextjs.org/docs)
- Review the [Tailwind CSS documentation](https://tailwindcss.com/docs)
- Contact the development team for specific issues

## Maintenance

### Regular Updates:
- Keep dependencies updated: `npm update`
- Monitor for security vulnerabilities: `npm audit`
- Test the website after major updates

### Backup:
- Keep your source code in version control
- Backup any custom content or configurations
- Document any customizations made to the deployment 