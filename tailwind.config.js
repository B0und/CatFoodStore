const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				main: '#FFE44D',
				main_darker: '#FFAA0D',
				main_lighter: '#FFF5C0',
				primary_text: '#1A1A1A',
				secondary_text: '#7B8E98',
				outline_bg: '#CFD8DC',
				form_bg: '#ECEFF1',
				custom_red: '#F44336',
				custom_blue: '#03A9F4',
				custom_green: '#01A54E',
			},
			fontFamily: {
				nunito: ['Nunito', ...defaultTheme.fontFamily.sans],
			},
			borderRadius: {
				'01': '0.5rem', // 8
				'02': '0.75rem', // 12
				'03': '1.25rem', // 20
			},
			boxShadow: {
				elevation04: '0px 8px 16px 0px rgba(96, 97, 112, 0.16), 0px 2px 4px 0px rgba(40, 41, 61, 0.04)',
			},
			gridTemplateColumns: {
				'product-sm': 'repeat(auto-fill, minmax(168px, 1fr))',
				'product-md': 'repeat(auto-fill, minmax(236px, 1fr))',
			},
			spacing: {
				'page-size': '992px',
			},
		},
	},
	plugins: [],
};
