# 🎨 Multi-Theme Switcher App (React + TypeScript)

A fully responsive React application with **three switchable themes**, API data fetching, animations, and persistent theme storage using `localStorage`.

Built using **React, TypeScript, Styled-components, Context API, React Router, and Framer Motion**.

---

## 🚀 Features
✅ **Three distinct themes** (Minimalist, Dark mode with sidebar, Colorful card grid)  
✅ **Theme switcher with persistence (localStorage)**  
✅ **Framer Motion animations** for smooth transitions  
✅ **API integration** (`https://fakestoreapi.com/products`) with error handling  
✅ **Responsive design** for desktop and mobile  
✅ **Multiple pages** (Home, About, Contact) using `React Router v6`  
✅ **Error handling & loading states** for API fetches  
✅ **TypeScript typings** for strong typing and autocompletion  

---

## 🛠️ Tech Stack
- **React 18 + TypeScript**
- **Styled-components** (theming & styling)
- **Framer Motion** (animations)
- **React Router v6** (routing)
- **Context API** (theme state management)
- **Fetch API** (data fetching)

---

src/
├── components/ # UI components (Header, Cards)
├── context/ # ThemeContext (theme state & provider)
├── hooks/ # useFetch hook for API fetching
├── pages/ # Home, About, Contact pages
├── styles/ # Global styles & theme typings
├── themes/ # Theme files (theme1, theme2, theme3)
├── App.tsx # Main App with layout & routes
├── index.tsx # Entry point
└── README.md # Project documentation


## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/multi-theme-switcher.git
cd multi-theme-switcher

2️⃣ Install Dependencies
Ensure you have Node.js (>=14) installed.
npm install
# or
yarn install

3️⃣ Run the Development Server
npm start
# or
yarn start
The app will be available at http://localhost:3000.

4️⃣ Build for Production
npm run build

5️⃣ Run Tests (Optional)
npm test

## 📂 Folder Structure
