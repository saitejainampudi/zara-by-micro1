
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// New Zara design system colors
				zara: {
					primary: '#3E51FF', // Indigo Blue - Primary Accent
					secondary: {
						from: '#7B61FF', // Violet-Purple Gradient start
						to: '#58C0FF', // Violet-Purple Gradient end
					},
					background: '#F6F8FE', // Light Lavender - Soft Background
					panel: '#FFFFFF', // Soft White - UI Elements/Panels
					text: {
						primary: '#2E2E2E', // Charcoal - Typography
						muted: '#8C8C8C', // Grey - Muted Text
					},
					success: '#34C759', // Success Green
					alert: '#FF3B30', // Alert Red
					timeBadge: '#D2E6FF', // Light Blue - Time Badge
					purple: {
						light: '#E5DEFF',
						DEFAULT: '#3E51FF', // Updated to match Indigo Blue
						dark: '#3545E6', // Slightly darker shade for hover states
						darkest: '#1A1F2C',
					},
					gray: {
						lightest: '#F6F8FE', // Updated to match Light Lavender
						light: '#F6F6F7', 
						DEFAULT: '#8C8C8C', // Updated to match Muted Text Grey
						dark: '#2E2E2E', // Updated to match Charcoal
					}
				}
			},
			fontFamily: {
				sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
				inter: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'pulse-ring': {
					'0%': { transform: 'scale(0.8)', opacity: '0.8' },
					'50%': { transform: 'scale(1)', opacity: '0.5' },
					'100%': { transform: 'scale(0.8)', opacity: '0.8' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-up': 'slide-up 0.5s ease-out',
				'pulse-ring': 'pulse-ring 2s infinite'
			},
			backgroundImage: {
				'gradient-accent': 'linear-gradient(to right, #7B61FF, #58C0FF)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
