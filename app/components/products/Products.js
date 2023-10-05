'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import localFont from '@next/font/local';
import GroupButtons from './GroupButtons';

const acornLight = localFont({
	src: '../../assets/acorn/Acorn-Light.woff2',
});

const bogart = localFont({
	src: '../../assets/bogart/Bogart-Light-trial.ttf',
});

const Products = ({ products, right }) => {
	const [isLoading, setIsLoading] = useState(true);

	const initialActiveButton = products.length > 0 ? products[0]?.id : null;
	const [activeButton, setActiveButton] = useState(initialActiveButton);

	const handleButtonClick = (buttonId) => {
		setActiveButton(buttonId);
	};

	const item = products.find((product) => product.id === activeButton);

	return (
		<div
			className="xl:flex w-10/12 mx-auto mt-5 mb-8 xl:mt-20 xl:mb-80"
			style={bogart.style}
		>
			<div
				className={`${
					right ? 'xl:order-last' : ''
				} max-h-[1060px] xl:w-3/4 duration-250`}
			>
				<Image
					className={`rounded-[50px] max-h-[1060px] shadow-xl ${
						isLoading ? 'grayscale blur-2xl' : 'grayscale-0 blur-0'
					}`}
					alt={item.name}
					src={item.img}
					placeholder="blur"
					onLoadingComplete={() => setIsLoading(false)}
				/>
			</div>
			<div className="xl:w-1/4 px-10 relative">
				<div className={`${right ? 'xl:absolute xl:bottom-0' : ''}`}>
					<p className="items-center text-start text-smallMobile md:text-lgMobile lg:text-medium text-dark">
						{item.name}
					</p>
					<p className="items-center text-start text-smallMobile md:text-lgMobile lg:text-medium text-secondaryDark">
						{item.description.toUpperCase()}
					</p>
					<h1 className="text-smallMobile lg:text-small text-secondaryDark">
						Starting at: <span style={acornLight.style}>{item.price}</span>
					</h1>

					<div className="xl:w-full mt-5">
						{products.map((value) => (
							<GroupButtons
								key={value.id}
								value={value}
								activeButton={activeButton}
								handleButtonClick={handleButtonClick}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
