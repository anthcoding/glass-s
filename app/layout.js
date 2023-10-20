import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from './global/nav-bar/index';
import Footer from './global/footer';
import ContactUs from './components/contact-us/ContactUs';
import { ModalProvider } from './store/contact-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Glassss',
	description: 'Generated by create next app',
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
				</body>
			</ModalProvider>
		</html>
	);
}
