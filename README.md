# Social Stratix - Influencer Platform

A Next.js application built with TypeScript, Material UI, and Atomic Design principles for connecting brands with influencers.

## 🚀 Features Implemented

### ✅ Login Page (`/login`)
- Split-screen layout with testimonial sidebar and login form
- Pixel-perfect implementation matching Figma designs
- Email/password form with validation
- Social login with Google option
- Sign up flow integration
- Responsive design for desktop and mobile

### ✅ Onboarding Page (`/onboarding`)
- User type selection (Influencer vs Brand)
- Interactive selection cards with hover and selected states
- Continue button that enables based on selection
- Header with Social Stratix branding
- Smooth transitions and animations

### ✅ Design System Components

#### Atoms
- **ButtonPrimary**: Styled MUI button with brand colors
- **FormField**: Consistent form input styling
- **Logo**: Reusable brand logo component

#### Molecules
- **SelectionCard**: Interactive card for user type selection

## 🎨 Design Implementation

- **Typography**: Poppins font family with proper weights (400, 600, 700)
- **Color Palette**: Purple-based theme (#783C91, #3F214C, #1E002B)
- **Gradients**: Custom background gradients matching Figma
- **Responsive**: Mobile-first approach with proper breakpoints
- **Accessibility**: Proper ARIA labels and semantic HTML

## 🛠 Tech Stack

- **Framework**: Next.js 15.5.2
- **Language**: TypeScript
- **UI Library**: Material UI (MUI)
- **Styling**: Emotion (CSS-in-JS)
- **Architecture**: Atomic Design Pattern
- **Development**: Storybook (ready for setup)

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/
│   │   ├── ButtonPrimary/
│   │   ├── FormField/
│   │   └── Logo/
│   └── molecules/
│       └── SelectionCard/
├── pages/
│   ├── index.tsx      # Home page with navigation
│   ├── login.tsx      # Login page
│   └── onboarding.tsx # User type selection
├── theme/
│   └── theme.ts       # MUI theme configuration
└── createEmotionCache.ts
```

## 🚦 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Access Pages**
   - Home: http://localhost:3000
   - Login: http://localhost:3000/login
   - Onboarding: http://localhost:3000/onboarding

4. **Run Storybook** (when .storybook config is added)
   ```bash
   npm run storybook
   ```

## 🎯 Navigation Flow

1. **Home Page** → Login or Get Started buttons
2. **Login Page** → Login → Onboarding
3. **Login Page** → Sign Up → Onboarding
4. **Onboarding** → Select User Type → Continue (redirects to home)

## 📱 Responsive Design

- **Desktop**: Full split-screen layout
- **Tablet**: Stacked layout with proper spacing
- **Mobile**: Single column with optimized touch targets

## 🧩 Component Stories

Each component includes Storybook stories for:
- Default state
- Variants (sizes, colors, states)
- Interactive examples
- Accessibility testing

## 🎨 Figma Design Fidelity

The implementation achieves pixel-perfect accuracy with the provided Figma designs:
- Exact typography matching (font sizes, weights, colors)
- Precise spacing and padding values
- Accurate color values and gradients
- Consistent border radius and shadows
- Proper image handling and aspect ratios

## 🔄 Future Enhancements

- Dashboard pages for brands and influencers
- User profile management
- Campaign creation and management
- Messaging system
- Analytics and reporting
- Payment integration

---

Built with ❤️ using Next.js, TypeScript, and Material UI
