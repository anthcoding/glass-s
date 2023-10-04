import React from 'react';
import localFont from '@next/font/local';

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
	{ name: 'Tiktok', url: '/instagram' },
];

const Footer = () => {
	var currentTime = new Date();

	return (
		<div className="w-full h-[100vh] relative">
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
			<div className="w-fit pt-48 mb-30 mx-auto flex flex-col items-center justify-center">
				<h1 className="text-xl text-center text-white leading-[45px] mb-12">
					Available in South Florida
					<br />
					<span className=" text-white opacity-40">
						Starting at: <span style={acorn.style}>$350</span>
					</span>
				</h1>

				<p className="text-smallMobile lg:text-small text-white opacity-40 mb-2">
					Not in South Florida?
				</p>
				<button
					style={bogart.style}
					className="bg-blue rounded-[62px] text-white text-sm px-5 py-2"
				>
					We can expand
				</button>
			</div>

			<div className="grid grid-cols-3 w-7/12 mx-auto mt-[20%]">
				<div className="flex flex-col">
					{NavLinks.map((link) => {
						return (
							<Link
								key={link.url}
								href={link.url}
								className="text-xl text-white leading-[45px] pl-[50%] hover:opacity-40 duration-250"
							>
								{link.name}
							</Link>
						);
					})}
				</div>
				<div className="flex flex-col">
					<h1 className="text-xl text-white leading-[45px] pl-[35%] opacity-40">
						Social
					</h1>
					{SocialLinks.map((link) => {
						return (
							<Link
								key={link.url}
								href={link.url}
								className="text-xl text-white leading-[45px] pl-[35%] hover:opacity-40 duration-250"
							>
								{link.name}
							</Link>
						);
					})}
				</div>
				<div>
					<h1 className="text-xl text-white leading-[45px] pl-[15%] opacity-40">
						Any questions?
					</h1>
					<button className="bg-teriaryWhite text-white">Contact us</button>
				</div>
			</div>
			<div className="w-7/12 mx-auto flex items-center justify-center mt-16">
				<p className="text-smallMobile lg:text-small text-white bottom-3 opacity-40 mr-2">
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
