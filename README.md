# Prabhat Ranjan - Personal Portfolio Website

A professional, modern portfolio website showcasing AI technology leadership experience, projects, and expertise.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Multiple Pages**: Home, Experience, Projects, Skills, Blog, Contact
- **Modern UI/UX**: Clean, professional design with smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized CSS and JavaScript
- **Blog Section**: Ready-to-use blog with category filtering
- **Contact Form**: Professional contact page with form validation

## 📁 Project Structure

```
website/
├── index.html          # Home page
├── experience.html     # Professional experience timeline
├── projects.html       # Case studies and achievements
├── skills.html         # Technical skills and expertise
├── blog.html          # Blog posts section
├── contact.html       # Contact form and information
├── styles.css         # All styling
├── script.js          # Interactive functionality
└── README.md          # This file
```

## 🚀 Free Hosting Options

### Option 1: GitHub Pages (Recommended)

**Advantages**: Free custom domain support, easy deployment, version control

**Steps**:

1. **Create a GitHub Account** (if you don't have one)
   - Go to https://github.com
   - Sign up for a free account

2. **Create a New Repository**
   - Click the "+" icon in the top right
   - Select "New repository"
   - Name it: `username.github.io` (replace `username` with your GitHub username)
   - Make it Public
   - Don't initialize with README
   - Click "Create repository"

3. **Upload Your Files**
   
   **Method A: Using Git (Recommended)**
   ```bash
   # Open terminal in your website folder
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/username.github.io.git
   git push -u origin main
   ```

   **Method B: Using GitHub Website**
   - On your repository page, click "uploading an existing file"
   - Drag and drop all your website files
   - Commit changes

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from branch
   - Branch: main
   - Folder: / (root)
   - Click Save

5. **Access Your Site**
   - Your site will be live at: `https://username.github.io`
   - Wait 2-5 minutes for initial deployment

6. **Add Custom Domain (Optional)**
   - Buy a domain from Namecheap, GoDaddy, etc.
   - In your domain provider:
     - Add CNAME record pointing to `username.github.io`
   - In GitHub Pages settings:
     - Enter your custom domain
     - Enable "Enforce HTTPS"

---

### Option 2: Netlify

**Advantages**: Drag-and-drop deployment, automatic HTTPS, form handling

**Steps**:

1. **Sign Up**
   - Go to https://netlify.com
   - Sign up with GitHub, GitLab, or email

2. **Deploy via Drag & Drop**
   - Click "Add new site" > "Deploy manually"
   - Drag your entire website folder
   - Site deploys immediately!

3. **Get Your URL**
   - You get a free URL: `random-name.netlify.app`
   - Can change to custom subdomain in Site Settings

4. **Add Custom Domain (Optional)**
   - Go to Domain settings
   - Add custom domain
   - Follow DNS configuration instructions

5. **Connect to Git (Optional but Recommended)**
   - Site settings > Build & deploy
   - Connect to your GitHub repository
   - Auto-deploys on every push!

---

### Option 3: Vercel

**Advantages**: Excellent performance, easy deployment, great for modern sites

**Steps**:

1. **Sign Up**
   - Go to https://vercel.com
   - Sign up with GitHub, GitLab, or email

2. **Import Project**
   - Click "Add New" > "Project"
   - Import your GitHub repository
   - Or click "Deploy" and drag folder

3. **Deploy**
   - Click "Deploy"
   - Site goes live in seconds!
   - URL: `project-name.vercel.app`

4. **Custom Domain**
   - Go to Project settings > Domains
   - Add your domain
   - Update DNS records as instructed

---

### Option 4: Cloudflare Pages

**Advantages**: Global CDN, excellent performance, unlimited bandwidth

**Steps**:

1. **Sign Up**
   - Go to https://pages.cloudflare.com
   - Create free account

2. **Create Project**
   - Click "Create a project"
   - Connect to GitHub
   - Select your repository

3. **Configure Build**
   - Framework preset: None
   - Build command: (leave empty)
   - Build output directory: /

4. **Deploy**
   - Click "Save and Deploy"
   - Site live at: `project.pages.dev`

5. **Custom Domain**
   - Add domain in project settings
   - Update nameservers to Cloudflare

---

### Option 5: Render

**Advantages**: Free static site hosting, custom domains, automatic SSL

**Steps**:

1. **Sign Up**
   - Go to https://render.com
   - Create account with GitHub

2. **New Static Site**
   - Click "New" > "Static Site"
   - Connect your repository
   - Or select "Deploy an existing site"

3. **Configure**
   - Name your site
   - Branch: main
   - Build Command: (leave empty)
   - Publish Directory: .

4. **Deploy**
   - Click "Create Static Site"
   - Live at: `site-name.onrender.com`

---

## 🎨 Customization Guide

### Update Personal Information

1. **Contact Details**
   - Edit footer in all HTML files
   - Update email, phone, LinkedIn URL
   - Search for "prs.nus@gmail.com" and replace

2. **About Section**
   - Edit `index.html` - About Me section
   - Update professional summary

3. **Experience**
   - Edit `experience.html`
   - Add/remove timeline items
   - Update job descriptions

4. **Projects**
   - Edit `projects.html`
   - Add new project cards
   - Update metrics and achievements

5. **Skills**
   - Edit `skills.html`
   - Add/remove skill tags
   - Update categories

### Add Blog Posts

Edit `blog.html` and add new blog cards:

```html
<article class="blog-card" data-category="CATEGORY">
    <div class="blog-image" style="background: GRADIENT;">EMOJI</div>
    <div class="blog-content">
        <div class="blog-meta">
            <span>📅 DATE</span>
            <span>🏷️ CATEGORY</span>
        </div>
        <h3>BLOG TITLE</h3>
        <p>BLOG DESCRIPTION</p>
        <a href="blog-post-url.html" class="read-more">Read More →</a>
    </div>
</article>
```

### Change Colors

Edit `styles.css` - CSS Variables:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #7c3aed;    /* Accent color */
    --accent-color: #10b981;       /* Success/highlight */
    --dark-bg: #0f172a;            /* Dark sections */
    /* ... more colors ... */
}
```

### Add Resume Download

1. Add your PDF resume to website folder
2. Update link in `index.html`:
   ```html
   <a href="your-resume.pdf" class="btn btn-secondary-large" download>
   ```

---

## 📱 Testing

### Test Locally

1. **Simple Method**
   - Open `index.html` in your browser
   - Test all page navigation

2. **Local Server (Better)**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if you have npx)
   npx http-server
   ```
   - Open: http://localhost:8000

### Test Responsiveness

- Use browser DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M)
- Test different screen sizes:
  - Mobile: 375px, 414px
  - Tablet: 768px, 1024px
  - Desktop: 1440px, 1920px

---

## 🔧 Advanced Setup

### Connect Contact Form

The contact form currently shows an alert. To make it functional:

**Option A: Formspree (Easiest)**
```html
<!-- In contact.html, update form tag -->
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option B: Netlify Forms (if hosted on Netlify)**
```html
<!-- Add to form tag -->
<form class="contact-form" name="contact" method="POST" data-netlify="true">
```

**Option C: EmailJS**
1. Sign up at https://www.emailjs.com
2. Get service ID and template ID
3. Update script.js with EmailJS code

### Add Analytics

**Google Analytics:**
```html
<!-- Add before </head> in all HTML files -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### SEO Optimization

1. **Create sitemap.xml**
2. **Add robots.txt**
3. **Optimize images** (if you add any)
4. **Add OpenGraph tags** for social sharing

---

## 🆘 Troubleshooting

### Site not loading?
- Clear browser cache (Ctrl+Shift+R)
- Check if all files uploaded
- Verify file names are lowercase
- Check browser console for errors (F12)

### Styles not working?
- Verify `styles.css` is in same folder as HTML files
- Check for typos in `<link>` tag
- Clear cache and hard reload

### Navigation broken?
- Ensure all HTML files are in root folder
- Check href links in navigation
- File names are case-sensitive on servers

### Mobile view issues?
- Verify viewport meta tag is present
- Test using actual mobile device
- Check Chrome DevTools mobile view

---

## 📈 Next Steps

After hosting your site:

1. **Share Your URL**
   - Add to LinkedIn profile
   - Include in email signature
   - Add to resume

2. **Keep Updated**
   - Add new projects regularly
   - Post blog content
   - Update experience section

3. **Monitor Performance**
   - Add Google Analytics
   - Check loading speed
   - Monitor on mobile devices

4. **Get Feedback**
   - Share with colleagues
   - Test with recruiters
   - Iterate based on feedback

---

## 💡 Tips for Success

1. **Content is King**
   - Keep information current
   - Use specific metrics and achievements
   - Tell stories, not just lists

2. **Regular Updates**
   - Add blog posts monthly
   - Update projects section
   - Keep skills current

3. **Professional Quality**
   - Proofread all content
   - Use professional photos (if added)
   - Test all links regularly

4. **Performance**
   - Optimize images before uploading
   - Minimize custom fonts
   - Keep page load under 3 seconds

5. **Accessibility**
   - Test with screen readers
   - Ensure good color contrast
   - Add alt text to images

---

## 🤝 Support

If you need help:
- Check hosting provider documentation
- Search Stack Overflow
- Watch YouTube tutorials on GitHub Pages/Netlify
- Ask in developer communities

---

## 📄 License

This website template is provided as-is for personal use.

---

## 🎯 Conclusion

You now have a professional portfolio website ready to deploy! Choose your preferred hosting option and follow the steps above. Your site will be live in minutes and ready to impress potential employers and clients.

**Recommended Path for Beginners:**
1. Start with GitHub Pages (free, reliable)
2. Upload via drag-and-drop if not comfortable with Git
3. Test thoroughly
4. Add custom domain later if desired

**Recommended Path for Developers:**
1. Use Git with GitHub Pages
2. Set up automatic deployment
3. Enable custom domain
4. Add analytics and contact form

Good luck with your portfolio! 🚀
