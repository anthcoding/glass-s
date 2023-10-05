'use client';

import React, { useState, useEffect } from 'react';
import localFont from '@next/font/local';
import { usePathname } from 'next/navigation';

import BlueGradient from '../../assets/images/gradientBlue.jpg';
import WhiteGradient from '../../assets/images/gradientCream.jpg';
import Image from 'next/image';
import Link from 'next/link';

const acorn = localFont({
	src: '../../assets/acorn/Acorn-Light.woff2',
});

const bogart = localFont({
	src: '../../assets/bogart/Bogart-Light-trial.ttf',
});

const NavLinks = [
	{ name: 'Home', url: '/home' },
	{ name: 'About', url: '/about' },
	{ name: 'Gallery', url: '/gallery' },
	{ name: 'FAQ', url: '/faq' },
];

const SocialLinks = [
	{ name: 'Instagram', url: '/instagram' },
	{ name: 'Facebook', url: '/facebook' },
	{ name: 'Tiktok', url: '/tittok' },
];

const Footer = () => {
	const [themeColor, setThemeColor] = useState('dark');
	var currentTime = new Date();
	const currentRoute = usePathname();

	useEffect(() => {
		if (currentRoute === '/home' || '/gallery' || '') {
			setThemeColor('dark');
		} else {
			setThemeColor('light');
		}

		console.log(currentRoute);
	}, [currentRoute]);

	return (
		<div className="w-full h-[100vh] relative" style={bogart.style}>
			<Image
				quality={100}
				src={BlueGradient}
				alt="Blue gradient"
				placeholder="blur"
				sizes="100vw"
				fill
				style={{
					objectFit: 'cover',
					zIndex: '-1',
				}}
			/>
			<div className="mb-30 mx-auto flex flex-col items-center justify-center">
				<h1
					className={`${
						themeColor === 'light' ? 'text-dark' : 'text-white'
					} text-xl text-center leading-[45px] mb-12 mt-[200px]`}
				>
					Available in South Florida
					<br />
					<span className=" text-secondaryLightWhite ">
						Starting at: <span style={acorn.style}>$350</span>
					</span>
				</h1>

				<p className="text-smallMobile lg:text-small text-secondaryLightWhite  mb-2">
					Not in South Florida?
				</p>
				<button
					style={bogart.style}
					className="bg-blue rounded-[62px] text-white text-sm px-5 py-2"
				>
					We can expand
				</button>
			</div>

			<div className="grid grid-cols-2 grid-row-3 xl:grid-cols-3 lg:w-9/12 xl:w-9/12 mx-auto mt-[20%]">
				<div className="flex flex-col">
					{NavLinks.map((link) => {
						return (
							<Link
								key={link.url}
								href={link.url}
								className="text-xl text-white leading-[45px] pl-[50%] hover:text-secondaryLightWhite  duration-250"
							>
								{link.name}
							</Link>
						);
					})}
				</div>
				<div className="flex flex-col">
					<h1 className="text-xl text-secondaryLightWhite  leading-[45px] pl-[35%] ">
						Social
					</h1>
					{SocialLinks.map((link) => {
						return (
							<Link
								key={link.url}
								href={link.url}
								className="text-xl text-white leading-[45px] pl-[35%] hover:text-secondaryLightWhite  duration-250"
							>
								{link.name}
							</Link>
						);
					})}
				</div>
				<div className="">
					<h1 className="col-span-2 text-xl text-secondaryLightWhite leading-[45px] xl:pl-[15%] mb-4">
						Any questions?
					</h1>
					<button className="xl:ml-[15%] bg-[#ffffff26]  text-white w-[85%] py-4 rounded-lg hover:bg-lightDark border-[1px] border-[#ffffff26] duration-200">
						Contact us
					</button>
				</div>
			</div>
			<div className="w-7/12 mx-auto flex items-center justify-center mt-16">
				<p className="text-smallMobile lg:text-small text-secondaryLightWhite  bottom-3 mr-2">
					©<span style={acorn.style}>{currentTime.getFullYear()} </span>Glass
					Stock Solutions.{' '}
				</p>
				<span className="text-smallMobile lg:text-small text-white mr-2">
					{' '}
					Designed and developed by:
				</span>
				<Link
					target="_blank"
					href="https://www.anthl.xyz/"
					className="text-blue text-smallMobile lg:text-small hover:underline duration-250"
				>
					anth
				</Link>
			</div>
		</div>
	);
};

export default Footer;