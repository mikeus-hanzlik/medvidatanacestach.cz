# Medvíďata na cestách - Travel Blog

A modern React travel blog application showcasing travel adventures with beautiful photo galleries and detailed trip reports.

## 🚀 Features

- **Modern React Architecture**: Built with React 19 and functional components using hooks
- **Fast Development**: Powered by Vite for lightning-fast development and builds
- **Dynamic Content Loading**: Lazy-loaded articles and content for optimal performance
- **Responsive Design**: Mobile-first approach with CSS Modules for styling
- **Photo Galleries**: Beautiful lightbox integration for travel photography
- **Multi-language Support**: Content available in Czech
- **Dynamic Routing**: Nested routes for articles and detailed trip reports

## 🛠️ Technology Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 6
- **Routing**: React Router v7
- **Testing**: Vitest with React Testing Library
- **Styling**: CSS Modules with BEM methodology
- **Photo Gallery**: yet-another-react-lightbox
- **Development**: Modern ES6+ JavaScript with functional components

## 📦 Installation & Setup

1. **Clone the repository**
   ```powershell
   git clone <repository-url>
   cd medvidatanacestach.cz
   ```

2. **Install dependencies**
   ```powershell
   npm install
   ```

3. **Start development server**
   ```powershell
   npm run dev
   ```
   The application will be available at `http://localhost:3000`

## 🏗️ Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run test`** - Run tests with Vitest
- **`npm run test:ui`** - Run tests with Vitest UI
- **`npm run lint`** - Run ESLint for code quality

## 📁 Project Structure

```
src/
├── components/
│   ├── about/           # About us pages
│   ├── articles/        # Article components
│   │   ├── Article.js   # Main article router
│   │   ├── Detail.js    # Article detail view
│   │   ├── Overview.js  # Article overview
│   │   └── ContentManager.js # Dynamic content loader
│   ├── content/         # Article content files
│   │   ├── nepal/       # Nepal trip content
│   │   └── ...          # Other trips
│   ├── infrastructure/  # Utility components
│   ├── menu/           # Navigation components
│   └── ...
├── api/                # API utilities
├── App.js              # Main application component
└── index.js            # Application entry point
```

## 🧪 Testing

The project uses Vitest and React Testing Library for testing:

```powershell
# Run all tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests in watch mode
npm run test:watch
```

## 🔧 Recent Migration

This project was recently migrated from Create React App to Vite and modernized:

### ✅ Completed Migrations
- **Build System**: Migrated from Create React App to Vite
- **React Components**: Converted all class components to functional components with hooks
- **React Router**: Updated from v5 to v7
- **Testing**: Migrated from Jest to Vitest
- **Dependencies**: Updated to latest versions (React 19, etc.)
- **Code Quality**: Modern ES6+ patterns and best practices

### 🎯 Key Improvements
- **Faster Development**: Vite provides instant hot reload
- **Modern React**: All components use hooks and modern patterns
- **Better Performance**: Optimized lazy loading and code splitting
- **Improved Testing**: Faster test execution with Vitest

## 🌍 Content Management

Articles are organized by trip/location in the `src/components/content/` directory. Each trip has:
- **Index.js**: Overview page with trip summary
- **Day files**: Individual day reports (e.g., Den1.js, Den2.js)
- **Photos**: Integrated photo galleries with lightbox

## 🚀 Deployment

1. **Build for production**
   ```powershell
   npm run build
   ```

2. **Preview build locally**
   ```powershell
   npm run preview
   ```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using React and Vite
