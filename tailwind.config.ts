import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'input' :  'rgba(238, 238, 238, 1)',
        'input-text' : 'rgba(188, 188, 188, 1)',
        'task' : 'rgba(30, 179, 107, 1)',
        'header' : 'rgba(51, 51, 79, 1)',
      
        
      }
    },
  },
  plugins: [],
}
export default config
