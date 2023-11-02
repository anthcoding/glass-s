import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from './global/nav-bar/index';
import Footer from './global/footer';
import ContactUs from './components/contact-us/ContactUs';
import ContactUsEsp from './components/contact-us/ContactUsEsp';
import FastContact from './components/contact-us/FastContact';
import { ModalProvider } from './store/contact-context';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'StockSource Glass Solutions Inc',
	description: 'Stock Source Glass Solutions Website. Shower Doors.',
	icons: {
		icon: ['/favicon.ico?-v4'],
		apple: ['/apple-touch-icon.png?-v4'],
		shortcut: ['/apple-touch-icon.png'],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
				/>
			</Head>
			<ModalProvider>
				<body
					className={`${inter.className} relative`}
					suppressHydrationWarning={true}
				>
					<Toaster position="bottom-center" reverseOrder={false} />
					<NavBar />
					{children}
					<Footer />
					<ContactUs />
					<ContactUsEsp />
					<FastContact />
				</body>
			</ModalProvider>
		</html>
	);
}
