'use client';

import Link from 'next/link';
import './nav-bar.css';
import React, { useState, useContext } from 'react';
import localFont from '@next/font/local';
import ContactContext from '../../store/contact-context';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import BlackLogo from '../../assets/images/stocksourceBlackLogo.png';

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
	const { handleContactModal } = useContext(ContactContext);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked); // Toggle the checked state
	};

	const currentRoute = usePathname();

	return (
		<>
			<div
				style={bogart.style}
				className="fixed w-11/12 pt-5 left-0 right-0 mx-auto z-20"
			>
				<div className="flex justify-between items-center">
					<div className="text-[30px] hidden md:block">
						<Link href="/home">
							<Image className="h-12 w-12" alt="Company Logo" src={BlackLogo} />
						</Link>
					</div>
					<div className="px-5 py-2 hidden md:flex justify-center bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
						<ul className="flex gap-8">
							{NavLinks.map((link) => (
								<li key={link.name}>
									<Link
										className={`${
											currentRoute === `${link.url}`
												? 'text-dark'
												: 'text-tertiaryDark'
										}`}
										href={link.url}
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="ml-auto md:ml-0">
						<button
							onClick={handleContactModal}
							className="bg-blue rounded-[62px] text-white text-sm px-5 py-2"
						>
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
								className={`${
									currentRoute === `${value.url}`
										? 'text-dark'
										: 'text-secondaryDark'
								} nav-link text-center text-dark border-b-[.3px] border-secondaryDark w-full `}
								key={value.name}
								href={value.url}
								onClick={handleCheckboxChange}
							>
								{value.name}
							</Link>
						))}
					</ul>
					<div className="w-full flex justify-center align-center text-[20px] text-secondaryDark mb-12">
						<Image className="h-12 w-12" alt="Company Logo" src={BlackLogo} />
					</div>
				</aside>
			</div>
		</>
	);
};

export default NavBar;
