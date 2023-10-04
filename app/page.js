import localFont from '@next/font/local';
import Home from './home/page';

const myFont = localFont({
	src: '../app/assets/bogart/Bogart-Regular-trial.ttf',
});

export default function page() {
	return (
		<main style={myFont.style}>
			<Home />
		</main>
	);
}
