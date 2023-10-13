import React from 'react';
import localFont from '@next/font/local';
import { getImages } from '../lib/get-gallery-data';
import BlurImage from '../components/blur-image/BlurImage';

const acornLight = localFont({
	src: '../assets/acorn/Acorn-Light.woff2',
});

const Page = async () => {
	const data = await getImages();
	console.log('client', data);

	return (
		<div
			className="w-full mx-auto mx-w-2xl lg:max-w-7xl py-16 px-4 sm:py-24 sm:px-6"
			style={acornLight.style}
		>
			<h1 className="text-xxlMobile xl:text-xxl tracking-tight leading-[80px] xl:leading-[130px] mx-auto text-center text-secondaryDark pt-12 mb-20">
				Gallery
			</h1>

			<div className="w-full grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-4">
				{data.map((value) => {
					return <BlurImage key={value.href} imgData={value} />;
				})}
			</div>
		</div>
	);
};

export default Page;
