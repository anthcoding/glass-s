'use client';

import Image from 'next/image';
import React, { useState, useRef } from 'react';
import localFont from '@next/font/local';
import GroupButtons from './GroupButtons';

const acornLight = localFont({
	src: '../../assets/acorn/Acorn-Light.woff2',
});

const bogart = localFont({
	src: '../../assets/bogart/Bogart-Light-trial.ttf',
});

const Products = ({ products, right }) => {
	const initialActiveButton = products.length > 0 ? products[0] : null;
	const [activeButton, setActiveButton] = useState(initialActiveButton);

	const myImage = useRef();

	const handleButtonClick = (value) => {
		setActiveButton(value);
	};

	return (
		<div
			className="xl:flex w-10/12 mx-auto mb-8 xl:mt-20 xl:mb-80 "
			style={bogart.style}
		>
			<div
				className={`${right ? 'xl:order-last' : ''} max-h-[1060px] xl:w-3/4`}
			>
				<Image
					className="rounded-[50px] max-h-[1060px] shadow-xl transition-all duration-250 focus:animate-[fadeIn_.5s_ease-in-out] "
					alt={activeButton.name}
					src={activeButton.img}
					placeholder="blur"
					ref={myImage}
				/>
			</div>
			<div className="mt-10 mb-20 xl:w-1/4 lg:px-5 relative">
				<div className={`${right ? 'xl:absolute xl:bottom-0' : ''}`}>
					<p className="items-center text-start text-smallMobile md:text-lgMobile lg:text-medium text-dark">
						{activeButton.name}
					</p>
					<p className="items-center -mt-1 leading-5 text-start text-smallMobile md:text-lgMobile lg:text-medium text-secondaryDark">
						{activeButton.description}
					</p>
					<h1 className="text-smallMobile lg:text-small text-secondaryDark">
						Starting at:{' '}
						<span style={acornLight.style}>{activeButton.price}</span>
					</h1>

					<div className="xl:w-full">
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
