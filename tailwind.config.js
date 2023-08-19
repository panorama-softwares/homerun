/**@type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      
      
      
        },
      },

     colors: {
  
      transparent:"transparent",
           current: "currentColor",
           purple: "#f3e8ff",
         bluer:"#2B6CB0",
          white:"#FFFFFF",
         orange:"#F6AD55",
           gray:"#212529",
          blue:"#1d262d",
          
          white:"#fff"
        
        
        
        
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue:"#0027a7",
      white:"#FFFFFF",
      orange:"#fad390",
      gray:"#111827",
      green:"#4ade80",
    },
  },
  plugins: [],
}
  
  


