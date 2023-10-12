/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100":"#539AED",
        "primary-200":"#3c96fc",
        "primary-300":"#4A82C2",
        "primary-400":"#434F8D",
        "secondary-100": "#fff",
        "secondary-200": "#f5f7fa",
        
        "tertiary-100": "#012855",
        "tertiary-200": "#021326",
        "tertiary-300": "#000",
      
        
    
      
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to right, #3c96fc, #3c96fc 50%, #021326 50%)',
       
   
        
      },
      fontFamily: {
        "poppins": [ 'Poppins', "sans-seri" ],
         "inter":[ 'Inter', "sans-serif"]
      },
    
    },
  },
  plugins: [],
}

