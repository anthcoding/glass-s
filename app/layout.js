import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from './global/nav-bar/index';
import Footer from './global/footer';
import ContactUs from './components/contact-us/ContactUs';
import FastContact from './components/contact-us/FastContact';
import { ModalProvider } from './store/contact-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Stock Source Glass Solutions',
	description: 'Stock Source Glass Solutions Website. Shower Doors.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<ModalProvider>
				<body
					className={`${inter.className} relative`}
					suppressHydrationWarning={true}
				>
					<NavBar />
					{children}
					<Footer />
					<ContactUs />
					<FastContact />
				</body>
			</ModalProvider>
		</html>
	);
}
