/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*{.jsx,.tsx}'
  ],
  variants:{
    extend:{
      textColor:[],
      fontSize:['hover']
    }
  },
  theme: {
    extend: {
      screens:{
        'mobile':{
          'min':'128px', 'max':'768px'
        },
        'portrait':{
          'raw':'orientation:portrait'
        }
      },
      colors:{
        'red':'rgb(255,0,0)',
        'brand-color':'rgb(167,89,35)'
      },
      animation:{
        pumping:'pumping 2s infinite'
      },
      keyframes:{
        pumping:{
          '0%, 100%':{
            transform:'scale(1)'
          },
          '50%':{
            transform:'scale(0.5)'
          }
        }
      }
    },
  },
  plugins: [],
}

