# 🧠 How My Portfolio Site Works — A Learning Guide

> Read this like a story. Every section explains one piece of the site, what it does in plain English, and what the code concept behind it is. By the end you should be able to explain — and rebuild — this entire site from scratch.

---

## 🗺️ The Big Picture — How Everything Connects

```
Browser
  └── index.tsx          ← Entry point. Boots the whole app.
        └── App.tsx      ← The shell. Holds Navbar + Footer + all pages.
              ├── Navbar.tsx          ← Top bar on every page
              ├── Footer.tsx          ← Bottom bar on every page
              ├── Home.tsx            ← "/" route
              ├── ResumePage.tsx      ← "/resume"
              ├── BooksPage.tsx       ← "/books"
              ├── ContactPage.tsx     ← "/contact"
              ├── ETFArticle.tsx      ← "/articles/etf-investing"
              └── ProfilePage.tsx     ← "/profile" (protected — login required)

Supporting pieces:
  ├── AuthContext.tsx     ← Manages login state across the whole app
  ├── authApi.ts          ← Talks to the backend server (HTTP calls)
  └── ProtectedRoute.tsx  ← Guards pages that need login
```

Think of it like a building:
- `index.tsx` is the foundation
- `App.tsx` is the frame/walls
- `Navbar` and `Footer` are permanent fixtures
- Each page is a room
- `AuthContext` is the electricity — invisible but powers everything

---

## 1. `index.tsx` — The Starting Point

**What it does:** This is the very first file React runs. It finds the `<div id="root">` in your `public/index.html` and injects the entire app into it.

```tsx
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="...">
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
```

**Concepts to know:**

- **ReactDOM.createRoot** — React 18's way of mounting the app. The old way was `ReactDOM.render()`.
- **React.StrictMode** — A dev tool that runs your components twice to catch bugs. Does nothing in production.
- **Wrapping with Providers** — Notice how `App` is wrapped in 3 layers. This is the "Provider pattern". Each wrapper gives the whole app access to something:
  - `GoogleOAuthProvider` → Google login capability
  - `AuthProvider` → your own login state (token, user)
  - `BrowserRouter` → URL routing (so `/resume` shows the Resume page)
- **Order matters** — `BrowserRouter` must wrap `App` because `App` uses `<Routes>`. `AuthProvider` must wrap everything because even `Navbar` needs to know if you're logged in.

**Interview answer:** *"index.tsx is the entry point. It mounts the React app into the HTML root div and wraps everything in providers so that routing, auth, and Google login are available globally."*

---

## 2. `App.tsx` — The Router / Shell

**What it does:** Defines the layout (Navbar on top, Footer on bottom) and maps URLs to pages.

```tsx
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/articles/etf-investing" element={<ETFArticle />} />
          <Route path="/profile" element={
            <ProtectedRoute><ProfilePage /></ProtectedRoute>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
```

**Concepts to know:**

- **`<Routes>` and `<Route>`** — React Router's way of saying "when the URL is X, show component Y". No page reload happens — it's all JavaScript swapping components in and out. This is called a **Single Page Application (SPA)**.
- **`flex flex-col min-h-screen`** — Tailwind CSS. Makes the page a vertical flex column that's at least the full screen height. This is how the footer always sticks to the bottom.
- **`flex-grow` on `<main>`** — Makes the content area expand to fill all available space between Navbar and Footer.
- **`JSX.Element` return type** — TypeScript. It tells the compiler "this function returns React UI". Without TypeScript it would just be a plain function.
- **`ProtectedRoute` wrapping `ProfilePage`** — Only logged-in users can see `/profile`. If not logged in, they get redirected to `/`.

**Interview answer:** *"App.tsx is the shell. It renders Navbar and Footer on every page, and uses React Router's Routes to decide which page component to show based on the current URL."*

---

## 3. `Navbar.tsx` — The Top Bar

**What it does:** Shows the logo, nav links, and a Login/Logout button. Becomes slightly frosted/blurred when you scroll down.

**Key concepts:**

### State
```tsx
const [scrolled, setScrolled] = useState(false);
```
`useState` is React's way of remembering a value between renders. When `scrolled` changes, the component re-renders and the navbar style updates.

### Side Effects
```tsx
useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 10);
  window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener('scroll', onScroll);
}, []);
```
`useEffect` runs code *after* the component appears on screen. The empty `[]` means "run once on mount". The `return` function is a **cleanup** — it removes the scroll listener when the component unmounts (leaves the screen), preventing memory leaks.

### Reading Auth State
```tsx
const { token, logout } = useAuth();
```
This pulls `token` and `logout` from `AuthContext`. If `token` exists → user is logged in → show "Logout". If not → show "Login" button.

### Framer Motion
```tsx
<motion.nav initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
```
The navbar slides down and fades in when the page loads. `initial` is the starting state, `animate` is the end state. Framer Motion handles the animation between them.

### Dialogs (Modals)
```tsx
const [showLogin, setShowLogin] = useState(false);
// ...
{showLogin && <LoginDialog onClose={() => setShowLogin(false)} />}
```
Modals are just components that are conditionally rendered. A boolean in state controls whether they appear.

**Interview answer:** *"Navbar uses useState to track scroll position and modal visibility, useEffect to attach/detach a scroll listener, and reads auth state from context to conditionally show Login or Logout."*

---

## 4. `AuthContext.tsx` — The Login Brain

**What it does:** Stores whether the user is logged in and provides `login`, `logout`, and `loginWithGoogle` functions to any component in the app.

This is the most important architectural piece to understand.

### Creating Context
```tsx
const AuthContext = createContext<AuthContextType | undefined>(undefined);
```
Context is like a global variable for React. Instead of passing `token` as a prop through every component, you put it in context and any component can grab it directly.

### The Provider
```tsx
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [user, setUser]   = useState(() => localStorage.getItem('user'));
  // ...
  return (
    <AuthContext.Provider value={{ user, token, login, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
```
- `AuthProvider` wraps the whole app (in `index.tsx`), so every component is a "child".
- `localStorage.getItem('token')` — on page refresh, it reads the saved token so you stay logged in.
- The `value` prop is what gets shared — any component can access `user`, `token`, `login`, `logout`.

### The Login Function
```tsx
const login = async (email, password) => {
  const { data } = await api.login(email, password);  // HTTP POST to backend
  setToken(data.token);
  setUser(data.email);
  localStorage.setItem('token', data.token);  // persist across refresh
  localStorage.setItem('user', data.email);
};
```
1. Calls the backend API
2. Gets back a JWT token
3. Saves it in React state (for current session)
4. Saves it in localStorage (so it survives page refresh)

### The Custom Hook
```tsx
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
};
```
Instead of writing `useContext(AuthContext)` everywhere, you call `useAuth()`. The error check is a safety net — if you accidentally use it outside the provider, you get a clear error message.

### Token Refresh
```tsx
useEffect(() => {
  if (!token) return;
  const id = setInterval(api.refresh, 10 * 60 * 1000); // every 10 minutes
  return () => clearInterval(id);
}, [token]);
```
JWT tokens expire. This automatically calls the refresh endpoint every 10 minutes to keep the session alive.

**Interview answer:** *"AuthContext uses React Context to share login state globally. The Provider stores token and user in both state and localStorage. Any component calls useAuth() to get the token or trigger login/logout."*

---

## 5. `authApi.ts` — Talking to the Backend

**What it does:** All HTTP calls to your Spring Boot backend live here. Clean separation — no component directly calls `fetch` or `axios`.

```tsx
const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL ?? 'http://localhost:8080',
});

export const login    = (email, password) => http.post('/api/auth/login', { email, password });
export const register = (payload)         => http.post('/api/auth/register', payload);
export const forgot   = (email)           => http.post('/api/auth/forgot-password', { email });
```

**Concepts to know:**

- **axios** — A library for HTTP requests. Cleaner than the built-in `fetch`.
- **`axios.create`** — Creates a reusable instance with a base URL. So every call automatically goes to your backend URL.
- **`process.env.REACT_APP_*`** — Environment variables. The actual URL is stored in a `.env` file, not hardcoded. This is how the same code works locally (`localhost:8080`) and on Netlify (your real API URL).
- **`??` (nullish coalescing)** — "If the left side is null or undefined, use the right side." So if the env variable isn't set, fall back to localhost.
- **Separation of concerns** — Components don't know *how* HTTP works. They just call `api.login()` and get a result back.

**Interview answer:** *"authApi.ts is a service layer. It creates an axios instance with the backend base URL from environment variables and exports clean functions for each API endpoint."*

---

## 6. `ProtectedRoute.tsx` — The Gatekeeper

**What it does:** Wraps a page. If you're logged in, you see the page. If not, you get sent back to `/`.

```tsx
export default function ProtectedRoute({ children }) {
  const { token } = useAuth();
  return token ? children : <Navigate to="/" replace />;
}
```

**Concepts to know:**

- **Ternary operator** — `condition ? valueIfTrue : valueIfFalse`. The whole component is one line.
- **`<Navigate>`** — React Router's way of redirecting. `replace` means it replaces the history entry so the back button doesn't take you back to the protected page.
- **`children` prop** — Whatever you put *inside* `<ProtectedRoute>` becomes `children`. In `App.tsx` that's `<ProfilePage />`.

**Interview answer:** *"ProtectedRoute reads the token from AuthContext. If it exists, it renders the children (the actual page). If not, it redirects to home using React Router's Navigate component."*

---

## 7. `Home.tsx` — The Hero Page

**What it does:** The landing page. Has your photo, bio, animated typewriter, social links, stats counter, skills, and "currently" section.

This file has the most concepts packed in. Let's go piece by piece.

### Typewriter Effect
```tsx
const [displayed, setDisplayed] = useState('');
const [deleting, setDeleting]   = useState(false);
const [index, setIndex]         = useState(0);

useEffect(() => {
  const word = ROLES[index];
  if (!deleting && displayed.length < word.length)
    t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
  // ...
}, [displayed, deleting, index]);
```
- Three pieces of state work together to type, pause, delete, and move to the next word.
- `setTimeout` adds one character every 80ms.
- `word.slice(0, n)` cuts the string to `n` characters — that's how typing is simulated.
- The `useEffect` dependency array `[displayed, deleting, index]` means "re-run this effect whenever any of these change" — which creates the loop.

### Animated Counter
```tsx
const mv = useMotionValue(0);
const spring = useSpring(mv, { stiffness: 60, damping: 20 });
useEffect(() => { if (inView) mv.set(to); }, [inView]);
useEffect(() => spring.on('change', v => setVal(Math.round(v))), [spring]);
```
- `useMotionValue` is a Framer Motion value that doesn't cause re-renders on its own.
- `useSpring` wraps it with a spring physics animation.
- When the counter scrolls into view (`inView`), it sets the target value and the spring animates toward it.
- `spring.on('change', ...)` listens to every frame of the animation and updates the displayed number.

### useInView
```tsx
const ref = useRef(null);
const inView = useInView(ref, { once: true, margin: '-60px' });
```
- `useRef` creates a reference to a DOM element.
- `useInView` watches that element and returns `true` when it enters the viewport.
- `once: true` means it only triggers once — the counter won't reset if you scroll back up.

### Social Buttons
```tsx
const [copied, setCopied] = useState(false);
navigator.clipboard.writeText(href).then(() => {
  setCopied(true);
  setTimeout(() => setCopied(false), 1800);
});
```
- `navigator.clipboard` is a browser API for copying text.
- `.then()` runs after the async copy succeeds.
- The button text changes to "✓ Copied!" for 1.8 seconds then resets.

### useCallback
```tsx
const copy = useCallback((e) => { ... }, [href]);
```
`useCallback` memoizes a function — it only recreates it when `href` changes. This is a performance optimization to avoid unnecessary re-renders.

**Interview answer:** *"Home.tsx combines useState for local UI state, useEffect for side effects like the typewriter loop, useRef + useInView for scroll-triggered animations, and Framer Motion for smooth transitions."*

---

## 8. `ContactPage.tsx` — The Contact Form

**What it does:** A smart contact form with intent selection (hire/learn/chat), rate limiting, Google login, and EmailJS integration.

### Rate Limiting with localStorage
```tsx
const GUEST_LIMIT = 2;
const USER_LIMIT  = 5;
const getCount = (key) => parseInt(localStorage.getItem(key) ?? '0', 10);
const bump     = (key) => localStorage.setItem(key, String(getCount(key) + 1));
```
- Guests can send 2 messages, logged-in users can send 5.
- The count is stored in `localStorage` so it persists across page refreshes.
- This is client-side rate limiting — not bulletproof but good enough for a personal site.

### Sending Email with EmailJS
```tsx
await emailjs.send(serviceId, templateId, {
  from_name:  name,
  from_email: email,
  intent:     'Hire me',
  message:    message,
}, publicKey);
```
- EmailJS lets you send emails directly from the browser — no backend needed.
- The credentials (`serviceId`, `templateId`, `publicKey`) come from environment variables.
- `await` pauses execution until the email is sent, then continues.

### Conditional Rendering
```tsx
if (status === 'sent') return <SuccessMessage />;
if (limitReached)      return <LimitMessage />;
return <TheForm />;
```
Early returns are a clean pattern. The component shows different UI based on state without deeply nested ternaries.

### AnimatePresence
```tsx
<AnimatePresence>
  {intent && (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
      ...form fields...
    </motion.div>
  )}
</AnimatePresence>
```
`AnimatePresence` allows components to animate *out* when they're removed from the DOM. Without it, Framer Motion can only animate things in, not out.

**Interview answer:** *"ContactPage uses localStorage for client-side rate limiting, EmailJS to send emails without a backend, and AnimatePresence to animate the form fields in and out based on intent selection."*

---

## 9. `ResumePage.tsx` — The Resume

**What it does:** Displays your work history, skills, and education. Mostly static data rendered with reusable components.

### Reusable Components in the Same File
```tsx
function Section({ title, children }) { ... }
function Job({ role, company, period, points }) { ... }
function Chip({ label }) { ... }
```
These are small components defined in the same file. They're not exported because nothing else needs them. This keeps the file self-contained and the JSX clean.

### Rendering Arrays
```tsx
{points.map((p, i) => (
  <li key={i}>
    <span>›</span> {p}
  </li>
))}
```
`.map()` transforms an array of strings into an array of JSX elements. The `key` prop is required — React uses it to track which items changed, added, or removed.

### whileInView Animation
```tsx
<motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-40px' }}
>
```
Each section fades in as you scroll to it. `whileInView` is Framer Motion's shorthand for scroll-triggered animations — cleaner than manually using `useInView`.

**Interview answer:** *"ResumePage defines small reusable components locally — Section, Job, Chip — and uses .map() to render arrays of data. Framer Motion's whileInView animates each section as it scrolls into view."*

---

## 10. `ETFArticle.tsx` — The Article with Charts

**What it does:** A long-form article about ETF investing with interactive Recharts bar charts, pie charts, and area charts.

### Recharts
```tsx
<ResponsiveContainer width="100%" height={260}>
  <BarChart data={withholdingData}>
    <XAxis dataKey="label" />
    <YAxis tickFormatter={v => `${v}%`} />
    <Tooltip formatter={(v) => `${Number(v)}%`} />
    <Bar dataKey="rate">
      {withholdingData.map((d, i) => <Cell key={i} fill={d.fill} />)}
    </Bar>
  </BarChart>
</ResponsiveContainer>
```
- `ResponsiveContainer` makes the chart fill its parent width automatically.
- `data` is an array of objects — each object is one bar.
- `dataKey` tells Recharts which property of each object to use for the value.
- `tickFormatter` formats the axis labels (adds `%`).
- `formatter` on `Tooltip` formats the hover popup value.
- The TypeScript fix: `(v) => \`${Number(v)}%\`` — `v` can be `undefined` so we wrap it in `Number()` to safely convert it.

### Data as Constants
```tsx
const withholdingData = [
  { label: 'Ireland → UAE', rate: 0,  fill: '#22c55e' },
  { label: 'US → UAE',      rate: 30, fill: '#ef4444' },
];
```
Chart data is just an array of plain objects defined at the top of the file. The chart components read from it declaratively.

**Interview answer:** *"ETFArticle uses Recharts for data visualisation. Data is defined as plain arrays of objects. ResponsiveContainer handles sizing, and each chart component like BarChart or PieChart reads from the data array via dataKey."*

---

## 11. `Footer.tsx` — The Bottom Bar

**What it does:** Shows contact info, a "back to top" button, and the copyright year.

### Dynamic Year
```tsx
&copy; {new Date().getFullYear()} Zeeshan Shaikh
```
`new Date().getFullYear()` returns the current year as a number. This means the copyright year updates automatically every year — no manual change needed.

### Programmatic Scroll
```tsx
onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
```
`window.scrollTo` is a browser API. `behavior: 'smooth'` makes it animate instead of jumping.

### Gmail Compose Link
The email link in the footer is a long URL that pre-fills a Gmail compose window with a subject, body, and recipient. It's just a carefully constructed `mailto`-style URL for Gmail's web interface.

---

## 🔗 How It All Connects — The Data Flow

```
User visits proteinshaikh.com
  → index.tsx boots React
  → AuthProvider reads localStorage (are they logged in?)
  → BrowserRouter reads the URL
  → App.tsx renders Navbar + the matching page + Footer

User clicks Login
  → Navbar sets showLogin = true
  → LoginDialog appears
  → User submits form
  → authApi.ts sends POST /api/auth/login to Spring Boot backend
  → Backend returns JWT token
  → AuthContext saves token to state + localStorage
  → Navbar re-renders: shows "Logout" instead of "Login"

User visits /profile
  → ProtectedRoute checks: does token exist?
  → Yes → renders ProfilePage
  → No  → redirects to /

User scrolls Home page
  → useInView detects Counter entering viewport
  → useSpring animates number from 0 to target
  → Typewriter useEffect loops through ROLES array
```

---

## 📦 Libraries Used and Why

| Library | What it does | Why we use it |
|---|---|---|
| **React** | UI framework | Components, state, reactivity |
| **TypeScript** | Typed JavaScript | Catches bugs at compile time |
| **React Router** | URL routing | Maps URLs to page components |
| **Framer Motion** | Animations | Smooth, physics-based transitions |
| **TailwindCSS** | Styling | Utility classes, no separate CSS files |
| **Axios** | HTTP client | Cleaner than fetch, easy base URL config |
| **EmailJS** | Send emails from browser | No backend needed for contact form |
| **Recharts** | Charts | Declarative, React-native chart library |
| **React Helmet** | Document `<title>` | Sets the browser tab title per page |
| **React OAuth Google** | Google login | Handles Google's OAuth flow |

---

## 🎯 If Asked to Rebuild This in an Interview

Here's the order to build it:

1. `npx create-react-app my-site --template typescript`
2. Install: `react-router-dom framer-motion axios`
3. Create `index.tsx` → wrap with `BrowserRouter`
4. Create `App.tsx` → add `Routes` with basic pages
5. Create `Navbar.tsx` → `Link` components + `useState` for scroll
6. Create `AuthContext.tsx` → `createContext` + `useState` for token
7. Create `authApi.ts` → `axios.create` + export functions
8. Create `ProtectedRoute.tsx` → check token, redirect if missing
9. Build pages one by one → `Home`, `Resume`, `Contact`
10. Add animations with Framer Motion last

---

## 💡 Key Concepts Cheat Sheet

| Concept | One-line explanation |
|---|---|
| `useState` | Remember a value. When it changes, re-render. |
| `useEffect` | Run code after render. Clean up when done. |
| `useRef` | Point to a DOM element without causing re-renders. |
| `useContext` | Read from a global store without prop drilling. |
| `useCallback` | Memoize a function so it doesn't get recreated every render. |
| `createContext` | Create a global store. |
| `Provider` | Wrap components to give them access to context. |
| `JSX` | HTML-like syntax that compiles to JavaScript. |
| `.map()` | Transform an array into JSX elements. |
| `key` prop | Helps React track list items efficiently. |
| `props` | Data passed into a component from its parent. |
| `children` | Whatever is nested inside a component tag. |
| `async/await` | Handle promises without `.then()` chains. |
| `localStorage` | Browser storage that survives page refresh. |
| Environment variables | Config values kept outside the code (`.env` file). |
