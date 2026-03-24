# Saathvi's Bliss Boutique Storefront

A premium, high-fidelity e-commerce web application meticulously designed for **Saathvi's Bliss**. Built with modern web technologies, this responsive storefront delivers a highly curated shopping experience tailored for newborn essentials, hospital wear, casual tees, and school uniforms. 

The application is engineered with a focus on an ultra-compact, premium "boutique" aesthetic—featuring a "Warm Antique White" and "Charcoal/Brass" color palette, cinematic storytelling components, and pixel-perfect responsive layouts that feel "small and neat."

---

## 📸 Key Features

- **High-Fidelity UI/UX**: Cinematic hero sections, soft scroll animations (Framer Motion), and sophisticated grayscale-to-color hover reveals.
- **Compact Product Modals**: Zero-scroll mobile product viewing with side-by-side action buttons for maximum screen efficiency.
- **Direct Sales Integrations**: One-click purchasing funnels mapping out to **Flipkart** or direct conversational commerce via **WhatsApp**.
- **Responsive Architecture**: Gracefully transitions from full-bleed desktop architectural frames to "ultra-petite" mobile interfaces.
- **Bespoke Contact & Maps**: Custom-framed, color-corrected Google Maps integration built specifically to match the boutique brand identity.
- **Optimized Performance**: Bundled with Vite for lightning-fast loads and high Lighthouse scores.

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev) + [Vite](https://vitejs.dev/)
- **Routing**: React Router DOM (v7)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: Lucide React
- **Hosting/Deployment**: (Ready for Vercel / Netlify / Hostinger)

---

## 📂 Project Structure

```text
├── public/                 # Static assets (images, icons)
│   └── assets/             # Categorized by page (Home, About, Newborn, etc.)
├── src/
│   ├── components/         # Reusable UI (Navbar, Footer, ProductModal, ProductCard, Hero)
│   ├── data/               # Local JSON-like data stores (products.js)
│   ├── pages/              # Primary Route Views
│   │   ├── Home/           
│   │   ├── About/          
│   │   ├── Contact/        
│   │   ├── Newborn/        # Nested categories (Essentials, BathAndCare, Moms)
│   │   ├── HospitalWear/   
│   │   └── TShirts/        
│   ├── App.css             # Global stylistic overrides
│   ├── index.css           # Tailwind base and theme variables
│   ├── main.jsx            # Application entry and strict-mode routing
│   └── Theme.jsx           # Design system tokens and shared configuration
└── package.json            # Project manifest and scripts
```

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/rohithviswa77/minimelts_website.git
   ```
2. Navigate into the directory
   ```sh
   cd minimelts_website
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the local development server
   ```sh
   npm run dev
   ```
5. View the application
   Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Building for Production

To create a highly optimized production build:

```sh
npm run build
```

This will output the static assets to the `dist/` folder, ready to be deployed to any static host. You can preview the finalized build locally using:

```sh
npm run preview
```

---

## 🎨 Design Philosophy

The aesthetic of Saathvi's Bliss revolves around themes of warmth, quality, and meticulous attention to detail. 
- **Warmth**: Utilizing hex `#FAF9F6` (Antique White) to establish a soft canvas.
- **Contrast**: Using `#1A1C20` (Brand Charcoal) and `#C5A267` (Warm Brass) for sharp, elegant typography and framing.
- **Minimalism**: Removing redundant container borders and optimizing whitespace so products are the heroes.

---

## 🤝 Contributing

This project is a bespoke build. If you are a collaborator:
1. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
2. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to the Branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

---

*Designed and developed specifically for Saathvi's Bliss.*
