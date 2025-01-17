/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			color1: '#8D8D8D',
  			color2: '#2CAF49',
  			color3: '#000000',
  			color4: '#F1F1F1',
  			color5: '#F44771',
  			color6: '#332A7C',
  			color7: '#FFFFFF',
			color8: '#EAD72A'
  		},
  		fontFamily: {
  			nunito: 'Nunito'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
		  skew: {
			'-12deg': '-12deg',
		  },
		  clipPath: {
			'trapezium': 'polygon(6% 0, 94% 0, 100% 100%, 0 100%)',
		  }
  	}
  },
  plugins: [require ("tailwindcss-animate")],
  
};

