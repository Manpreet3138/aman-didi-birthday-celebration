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
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'dancing': ['Dancing Script', 'cursive'],
			},
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
				}
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
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)' 
					},
					'50%': { 
						transform: 'translateY(-20px) rotate(5deg)' 
					}
				},
				'bounce-in': {
					'0%': {
						transform: 'scale(0.3) translateY(100px)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.05) translateY(-10px)',
						opacity: '0.8'
					},
					'100%': {
						transform: 'scale(1) translateY(0px)',
						opacity: '1'
					}
				},
				'fly-balloon': {
					'0%': {
						transform: 'translateY(100vh) translateX(-50px) scale(0.8)',
						opacity: '0.7'
					},
					'50%': {
						transform: 'translateY(50vh) translateX(25px) scale(1)',
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(-50px) translateX(0px) scale(0.9)',
						opacity: '0.8'
					}
				},
				'tada': {
					'0%': {
						transform: 'scale3d(1, 1, 1)'
					},
					'10%, 20%': {
						transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)'
					},
					'30%, 50%, 70%, 90%': {
						transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)'
					},
					'40%, 60%, 80%': {
						transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)'
					},
					'100%': {
						transform: 'scale3d(1, 1, 1)'
					}
				},
				'slide-up': {
					'0%': {
						transform: 'translateY(100px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'slice-0': {
					'0%': { transform: 'translate(-50%, -50%) scale(1) rotate(0deg)' },
					'100%': { transform: 'translate(-150%, -150%) scale(0.7) rotate(-45deg)', opacity: '0.8' }
				},
				'slice-1': {
					'0%': { transform: 'translate(-50%, -50%) scale(1) rotate(0deg)' },
					'100%': { transform: 'translate(150%, -150%) scale(0.7) rotate(45deg)', opacity: '0.8' }
				},
				'slice-2': {
					'0%': { transform: 'translate(-50%, -50%) scale(1) rotate(0deg)' },
					'100%': { transform: 'translate(-150%, 150%) scale(0.7) rotate(-45deg)', opacity: '0.8' }
				},
				'slice-3': {
					'0%': { transform: 'translate(-50%, -50%) scale(1) rotate(0deg)' },
					'100%': { transform: 'translate(150%, 150%) scale(0.7) rotate(45deg)', opacity: '0.8' }
				},
				'joyful-pulse': {
					'0%, 100%': { 
						transform: 'scale(1)',
						filter: 'hue-rotate(0deg) saturate(1)'
					},
					'50%': { 
						transform: 'scale(1.05)',
						filter: 'hue-rotate(30deg) saturate(1.3)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'bounce-in': 'bounce-in 1s ease-out',
				'fly-balloon': 'fly-balloon 8s ease-in-out infinite',
				'tada': 'tada 2s ease-in-out',
				'slide-up': 'slide-up 0.8s ease-out',
				'slice': 'slice-0 1.5s ease-out forwards',
				'joyful-pulse': 'joyful-pulse 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
