/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Upewnij się, że ścieżki są poprawne dla Twojego projektu
  ],
  darkMode: 'class', // Zakładam, że nadal używasz strategii 'class' dla trybu ciemnego
  theme: {
    extend: {
      colors: {
        // Tutaj mapujemy nazwy kolorów Tailwind na Twoje zmienne CSS
        // Tailwind automatycznie doda prefiks 'var(' i sufiks ')'
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        card: 'var(--color-card)',
      },
    },
  },
  plugins: [],
}