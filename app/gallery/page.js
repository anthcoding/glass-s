'use client';

import React, { useEffect } from 'react';
import localFont from '@next/font/local';
import BlurImage from '../components/blur-image/BlurImage';

import Mirror from '../assets/images/gallery/mirror.jpeg';
import Pivot1 from '../assets/images/gallery/pivot1.jpg';
import Pivot2 from '../assets/images/gallery/pivot2.jpg';
import Shower from '../assets/images/gallery/shower.jpg';
import Shower1 from '../assets/images/gallery/shower1.webp';
import Shower2 from '../assets/images/gallery/shower2.jpg';
import Shower3 from '../assets/images/gallery/shower3.jpg';
import Shower4 from '../assets/images/gallery/shower4.jpg';
import Shower5 from '../assets/images/gallery/shower5.jpg';
import Shower6 from '../assets/images/gallery/shower6.jpg';
import Shower7 from '../assets/images/gallery/shower7.jpg';
import SlidingDoor from '../assets/images/gallery/sliding-door.jpg';
import Stair1 from '../assets/images/gallery/stair1.webp';

const acornLight = localFont({
	src: '../assets/acorn/Acorn-Light.woff2',
});

const data = [
	{ url: Mirror, alt: 'Picture a of a mirror' },
	{ url: Pivot1, alt: 'Picture a of a frameless office door' },
	{ url: Pivot2, alt: 'Picture a of a frameless office door' },
	{ url: Shower4, alt: 'Picture a of a frameless shower door' },

	{ url: Shower5, alt: 'Picture a of a frameless shower door' },
];

const data2 = [
	{ url: Shower3, alt: 'Picture a of a frameless shower door' },
	{ url: Shower, alt: 'Picture a of a frameless shower door' },
	{ url: Shower1, alt: 'Picture a of a frameless shower door' },
	{ url: Shower2, alt: 'Picture a of a frameless shower door' },
];

const data3 = [
	{ url: Shower6, alt: 'Picture a of a frameless shower door' },
	{ url: Shower7, alt: 'Picture a of a frameless shower door' },
	{ url: SlidingDoor, alt: 'Picture a of a sliding door' },
	{ url: Stair1, alt: 'Picture a of a stair' },
];

const Page = () => {
	return (
		<div
			className="w-full mx-auto py-16 px-4 sm:py-24 sm:px-6"
			style={acornLight.style}
		>
			<h1 className="text-xxlMobile xl:text-xxl tracking-tight leading-[80px] xl:leading-[130px] mx-auto text-center text-secondaryDark pt-12 mb-20">
				Gallery
			</h1>

			<div className="w-full lg:w-4/5 grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 h-fit gap-4 rounded-[52px] mx-auto">
				<div className="grid gap-4">
					{data.map((value, idx) => {
						return <BlurImage key={idx} imgData={value} />;
					})}
				</div>
				<div className="grid gap-4">
					{data2.map((value, idx) => {
						return <BlurImage key={idx} imgData={value} />;
					})}
				</div>

				<div className="grid gap-4">
					{data3.map((value, idx) => {
						return <BlurImage key={idx} imgData={value} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Page;
