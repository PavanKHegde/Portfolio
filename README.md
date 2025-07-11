# Pavan Hegde - Portfolio Website

A modern, responsive portfolio website built with Next.js 13+ App Router and CSS modules. This portfolio showcases my skills, projects, and professional experience as a Full Stack Developer.

## 🚀 Features

- **Modern Design**: Clean, professional, and responsive design
- **Next.js 13+ App Router**: Latest Next.js features with App Router
- **CSS Modules**: Scoped styling for better maintainability
- **Responsive Layout**: Works perfectly on all devices
- **Interactive Animations**: Smooth scroll animations and hover effects
- **Contact Form**: Functional contact form with validation
- **Resume Download**: Direct resume download functionality
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Optimized**: Fast loading and smooth interactions

## 🛠️ Technologies Used

- **Frontend**: Next.js 13+, React 18, CSS3
- **Styling**: CSS Modules, Responsive Design
- **Animations**: Custom CSS animations and JavaScript
- **Icons**: SVG icons for social media and technologies
- **Deployment**: Vercel (ready for deployment)

## 📦 Project Structure

```
pavanhegd/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   ├── page.js            # Homepage
│   └── api/contact/       # Contact form API
├── components/            # React components
│   ├── Layout/           # Layout components
│   ├── sections/         # Page sections
│   ├── UI/              # Reusable UI components
│   └── Forms/           # Form components
├── styles/               # CSS modules
├── public/              # Static assets
│   ├── images/         # Images and photos
│   ├── icons/          # SVG icons
│   └── files/          # Resume PDF
├── utils/               # Utility functions
├── hooks/               # Custom React hooks
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pavanhegd/portfolio.git
cd pavanhegd
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 📱 Sections

### 1. Hero Section
- Professional introduction
- Call-to-action buttons
- Social media links

### 2. About Section
- Personal background
- Professional summary
- Key highlights

### 3. Skills Section
- Technical skills with proficiency levels
- Categorized by Frontend, Backend, and Tools
- Interactive skill bars

### 4. Projects Section
- Featured projects with descriptions
- Technology stack for each project
- Live demo and GitHub links

### 5. Resume Section
- Professional experience timeline
- Education background
- Resume download functionality

### 6. Contact Section
- Contact form with validation
- Contact information
- Social media links

## 🎨 Customization

### Personal Information
Update your information in `utils/constants.js`:
- Personal details
- Social media links
- Skills and proficiency levels
- Project information

### Styling
Modify the CSS modules in the `styles/` directory:
- `globals.css` - Global styles and CSS variables
- Individual module files for each component

### Images
Replace images in the `public/` directory:
- Profile photo
- Project screenshots
- Technology icons
- Resume PDF

### Content
Update content in the component files:
- About section text
- Project descriptions
- Professional experience

## 📧 Contact Form

The contact form includes:
- Client-side validation
- API route for form submission
- Success/error feedback
- Email integration ready

To enable email functionality, integrate with services like:
- EmailJS
- Nodemailer
- SendGrid
- Mailgun

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment variables:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

### Next.js Configuration
Modify `next.config.js` for:
- Image optimization settings
- Custom webpack configurations
- Environment-specific settings

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- GitHub Pages
- Railway
- Heroku

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags optimization
- Open Graph tags
- Twitter Card tags
- Structured data
- Sitemap ready

## 📊 Performance

- Optimized images
- Code splitting
- Lazy loading
- Minimal bundle size
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Pavan Hegde**
- Website: [https://pavanhegd.vercel.app](https://pavanhegd.vercel.app)
- GitHub: [@pavanhegd](https://github.com/pavanhegd)
- LinkedIn: [Pavan Hegde](https://linkedin.com/in/pavanhegd)
- Email: pavanhegd@gmail.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- React community for the excellent ecosystem
- Design inspiration from modern portfolio trends
- Icons from various open-source projects

## 📝 Changelog

### v1.0.0
- Initial release
- All core features implemented
- Responsive design completed
- Contact form functionality
- Resume download feature

---

⭐ If you like this project, please give it a star on GitHub!