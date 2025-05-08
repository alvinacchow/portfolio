import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Alvina Chow',
	description:
		'Welcome to my portfolio! I am an aspiring product manager. I believe in developing products that tackle customer problems.',
	keywords: [
		'Product Manager',
		'Project Manager',
		'Technical Product Manager',
		'Technical Project Manager',
		'Web Development',
		'User Experience',
		'Design Systems',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'Performance',
		'Accessibility',
		'Minimalist Portfolio',
		'Alvina Chow',
	],
	authors: [{ name: 'Alvina Chow' }],
	creator: 'Alvina Chow',
	openGraph: {
		title: 'Alvina Chow - Portfolio',
		description: 'Passionate product manager developing software that solves problems. Explore my work and experiences.',
		url: 'https://your-domain.com',
		siteName: 'Alvina Chow - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Alvina Chow - Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
