import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      className="w-8 h-8 bg-offwhite-1 rounded-xl flex items-center justify-center hover:ring-2 ring-catred-500 transition-all duration-300 focus:outline-none"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? (
        <FaMoon className="text-blue-700 w-6 h-6" />
      ) : (
        <FaSun className="text-orange-400 w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggler;