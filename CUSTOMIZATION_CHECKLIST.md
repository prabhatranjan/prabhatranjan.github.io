# Website Customization Checklist

Use this checklist to personalize your website with your information.

## 🎯 Priority 1: Essential Updates (Do First!)

### Contact Information
- [ ] **Email**: 
  - Files: All HTML files (footer sections)
  - Command: Replace with "your@email.com"

- [ ] **Phone**: 
  - Files: All HTML files (footer and contact page)
  - Format: Include country code (e.g., +1-555-1234)

- [ ] **LinkedIn**: Update LinkedIn URL
  - Files: All HTML files (footer)
  - Find: `https://linkedin.com/in/prabhatsngp`
  - Replace: `https://linkedin.com/in/your-profile`

- [ ] **Location**: Update "Singapore" to your location
  - Files: All HTML files (footer sections)

### Home Page (index.html)
- [ ] Update hero statistics:
  - Years Experience
  - Budget Managed
  - Any specific metrics

- [ ] Customize "About Me" section:
  - Update professional summary
  - Modify areas of excellence
  - Add your unique value proposition

### Resume Download
- [ ] Add your resume PDF to the website folder
- [ ] Update download link in index.html:
  ```html
  <a href="your-resume-name.pdf" class="btn btn-secondary-large" download>
  ```

---

## 🎨 Priority 2: Content Updates

### Experience Page (experience.html)
- [ ] Update KeyReply role (or replace with current role):
  - Duration
  - Achievements
  - Metrics

- [ ] Add/remove timeline items:
  - Each company you've worked for
  - Role titles
  - Key accomplishments
  - Quantified results

- [ ] Update certifications:
  - Add your certifications
  - Update dates
  - Add certification links

### Projects Page (projects.html)
- [ ] Update featured project or replace with your main project
- [ ] Customize project cards:
  - Add your projects
  - Update metrics
  - Add relevant icons/emojis
  - Describe impact

- [ ] Add new project cards if needed:
  ```html
  <div class="project-card">
    <div class="project-header">
      <div class="project-icon">🎯</div>
      <h3>Project Name</h3>
      <p>Brief Description</p>
    </div>
    <div class="project-content">
      <p>Detailed description...</p>
      <div class="project-metrics">
        <div class="metric">
          <div class="metric-value">100%</div>
          <div class="metric-label">Success</div>
        </div>
      </div>
    </div>
  </div>
  ```

### Skills Page (skills.html)
- [ ] Update AI & ML skills
  - Add technologies you use
  - Remove ones you don't

- [ ] Update programming languages
  - List your proficient languages
  - Order by expertise

- [ ] Update cloud platforms
  - Keep relevant platforms
  - Add any you use

- [ ] Customize other categories:
  - Databases
  - DevOps tools
  - Frameworks
  - Certifications

### Blog Page (blog.html)
- [ ] Update sample blog posts or remove them
- [ ] Add your actual blog posts:
  - Choose relevant categories
  - Add engaging titles
  - Write compelling descriptions
  - Add publication dates

- [ ] Create individual blog post pages (optional):
  - Create blog-post-1.html, etc.
  - Link from blog cards

### Contact Page (contact.html)
- [ ] Verify contact form fields match your needs
- [ ] Update availability section
  - List what opportunities you're seeking
  - Customize the four pillars

- [ ] Update FAQ section:
  - Add questions you commonly get
  - Customize answers
  - Make it relevant to your services

---

## 🎨 Priority 3: Visual Customization

### Colors (styles.css)
- [ ] Update primary color scheme:
  ```css
  :root {
      --primary-color: #2563eb;    /* Your brand color */
      --secondary-color: #7c3aed;   /* Accent color */
      --accent-color: #10b981;      /* Highlight color */
  }
  ```

### Photos/Images (Optional)
- [ ] Add profile photo:
  - Optimize image (under 200KB)
  - Add to website folder
  - Update HTML to include image

- [ ] Add project screenshots:
  - Optimize images
  - Add to project cards

### Fonts (Optional)
- [ ] Keep default Inter font or change:
  - Visit https://fonts.google.com
  - Choose your fonts
  - Update in styles.css

---

## 🚀 Priority 4: Advanced Features

### Contact Form
- [ ] Set up form handling:
  - **Option 1**: Formspree
    - Sign up at formspree.io
    - Get form ID
    - Update form action in contact.html
  
  - **Option 2**: Netlify Forms (if using Netlify)
    - Add `data-netlify="true"` to form tag
  
  - **Option 3**: EmailJS
    - Sign up at emailjs.com
    - Configure email template
    - Update script.js

### Analytics
- [ ] Add Google Analytics:
  1. Create account at analytics.google.com
  2. Get tracking ID
  3. Add tracking code before `</head>` in all HTML files

### SEO
- [ ] Update meta descriptions in all pages
- [ ] Add Open Graph tags for social sharing
- [ ] Create sitemap.xml
- [ ] Create robots.txt

### Custom Domain
- [ ] Buy domain (optional)
  - Recommended: Namecheap, Google Domains, GoDaddy
  
- [ ] Configure DNS:
  - Add CNAME record
  - Point to your hosting (GitHub Pages / Netlify)
  
- [ ] Enable HTTPS in hosting settings

---

## ✅ Final Checks

### Before Going Live
- [ ] Test all navigation links
- [ ] Verify all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Test on different browsers:
  - Chrome
  - Firefox
  - Safari
  - Edge

- [ ] Proofread all content
  - No typos
  - Grammar check
  - Professional tone

- [ ] Verify all external links work:
  - LinkedIn
  - Email links
  - Phone links

### After Going Live
- [ ] Test live site on mobile device
- [ ] Share URL with friend for feedback
- [ ] Test contact form works
- [ ] Check page load speed
  - Use PageSpeed Insights
  - Should load under 3 seconds

- [ ] Submit to search engines:
  - Google Search Console
  - Bing Webmaster Tools

---

## 📝 Content Writing Tips

### Writing Achievements
**Bad**: "Worked on AI projects"
**Good**: "Led development of multi-agent AI platform serving 100+ enterprise clients, reducing customer service costs by 40%"

### Writing Experience
- Use action verbs: Led, Architected, Implemented, Achieved
- Include metrics: percentages, dollar amounts, time saved
- Show impact: business outcomes, not just activities

### Writing Projects
- Start with the problem
- Describe your solution
- Show quantified results
- Keep it scannable (bullet points)

---

## 🎯 Ongoing Maintenance

### Weekly
- [ ] Check for any broken links
- [ ] Monitor analytics (if set up)

### Monthly
- [ ] Add new blog post
- [ ] Update with recent achievements
- [ ] Review and update metrics

### Quarterly
- [ ] Add new projects
- [ ] Update skills section
- [ ] Refresh experience section
- [ ] Check for outdated content

---

## 💡 Pro Tips

1. **Be Specific**: Numbers and metrics are more impressive than vague descriptions
2. **Show Progress**: Demonstrate growth and continuous learning
3. **Stay Current**: Regular updates show you're active
4. **Tell Stories**: People remember stories better than facts
5. **Mobile First**: 60%+ of visitors will be on mobile

---

## 🆘 Need Help?

- Can't find where to update something?
  - Use your text editor's "Find in Files" feature
  - Search for the text you want to replace

- Not sure how to phrase something?
  - Look at successful portfolio websites for inspiration
  - Ask colleagues for feedback

- Technical issues?
  - Check README.md for detailed guides
  - Google the specific error message
  - Check browser console (F12)

---

## ✨ You're Ready!

Once you've completed Priority 1 and Priority 2, your site is ready to launch!

The remaining priorities can be done after your site is live. Don't let perfection delay your launch.

**Remember**: A live website that you improve over time is better than a perfect website that never launches!

---

## 🎉 Congratulations!

Your professional portfolio is an investment in your career. Keep it updated, and it will serve you well for years to come.

Good luck! 🚀
