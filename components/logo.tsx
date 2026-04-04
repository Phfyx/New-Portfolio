export const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1"/>
        <stop offset="100%" stopColor="#ec4899"/>
      </linearGradient>
    </defs>
    <path d="M15 60 L15 20 L40 42 L65 20 L65 60" fill="none" stroke="url(#g)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="40" cy="68" r="4" fill="url(#g)"/>
  </svg>
)