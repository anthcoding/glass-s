/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1551px',
		},
		colors: {
			white: '#ffffff',
			secondaryWhite: '#ffffffe6',
			secondaryLightWhite: '#ffffff66',
			tertiaryWhite: '#FAFAFA',
			cream: '#FDFDF7',
			blue: '#0096f7',
			dark: '#000000',
			secondaryDark: '#00000066',
			tertiaryDark: '#000000cc',
			lightDark: '#00000014',
			secondaryLightDark: '#00000038',
			tertiaryLightDark: '#00000005',
			tertiaryLighertDark: '#0000001a',
			red: '#A73121',
			whatsapp: '#25D366',
		},
		fontSize: {
			sm: '15px',
			medium: '22px',
			base: '30px',
			lg: '42px',
			xl: '48px',
			xxl: ' 6.67vw',
			smMobile: '8px',
			mediumMobile: '15px',
			baseMobile: '20px',
			lgMobile: '24px',
			xlMobile: '35px',
			xxlMobile: '80px',
		},
		extend: {
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};
