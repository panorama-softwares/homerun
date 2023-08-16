/**@type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      
      
      
        },
      },

    //     colors: {
    //       transparent:"transparent",
    //       current: "currentColor",
    //       purple: "#f3e8ff",
    //       blue:"#2B6CB0",
    //       white:"#FFFFFF",
    //       orange:"#F6AD55",
    //       gray:"#111827"
        
        
        
        
    // },
  },
  plugins: [],
}


