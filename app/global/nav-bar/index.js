'use client';

import Link from 'next/link';
import './nav-bar.css';
import React, { useState } from 'react';
import localFont from '@next/font/local';

const bogart = localFont({
	src: '../../assets/bogart/Bogart-Light-trial.ttf',
});

const NavLinks = [
	{ name: 'Home', url: '/home' },
	{ name: 'About', url: '/about' },
	{ name: 'Gallery', url: '/gallery' },
	{ name: 'FAQ', url: '/faq' },
];

const NavBar = () => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked); // Toggle the checked state
	};

	return (
		<>
			<div
				style={bogart.style}
				className="fixed w-11/12 pt-5 left-0 right-0 mx-auto z-20"
			>
				<div className="flex justify-between items-center">
					<div className="text-[30px] hidden md:block">
						<Link href="/home">glassss</Link>
					</div>
					<div className="px-5 py-2 hidden md:flex justify-center bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
						<ul className="flex gap-8">
							<li>
								<Link href="/home">Home</Link>
							</li>
							<li>
								<Link href="/about">About</Link>
							</li>
							<li>
								<Link href="/gallery">Gallery</Link>
							</li>
							<li>
								<Link href="/faq">FAQ</Link>
							</li>
						</ul>
					</div>
					<div className="ml-auto md:ml-0">
						<button className="bg-blue rounded-[62px] text-white text-sm px-5 py-2">
							Contact us
						</button>
					</div>
				</div>
			</div>
			<div className="md:hidden z-30 relative">
				<label className="hamburger-menu">
					<input
						type="checkbox"
						checked={isChecked}
						onChange={handleCheckboxChange}
					/>
				</label>
				<aside className="sidebar flex flex-col justify-between">
					<ul className="flex flex-col gap-8 items-center text-lg w-full">
						{NavLinks.map((value) => (
							<Link
								style={bogart.style}
								className="nav-link text-center text-dark border-b-[.3px] w-full"
								key={value.name}
								href={value.url}
								onClick={handleCheckboxChange}
							>
								{value.name}
							</Link>
						))}
					</ul>
					<div className="w-full text-center text-[20px] text-secondaryDark">
						glassss
					</div>
				</aside>
			</div>
		</>
	);
};

export default NavBar;