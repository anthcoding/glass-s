'use client';

import Image from 'next/image';
import React from 'react';
import localFont from '@next/font/local';

const bogart = localFont({
	src: '../../assets/bogart/Bogart-Light-trial.ttf',
});

import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const Testimonial = ({ data, goNext, goPrev }) => {
	console.log(data);

	return (
		<div className="w-full mx-auto relative" style={bogart.style}>
			<div className="max-w-[260px] mx-auto flex">
				<Image
					src={data.img}
					alt={data.name}
					className="rounded-[50%] float-righ mr-2"
				/>

				<div className="">
					<h4 className="text-medium text-dark">
						{data.name} <br />
					</h4>

					<div className="flex items-center">
						<span className="flex mr-2">
							{data.star}
							{data.star}
							{data.star}
							{data.star}
							{data.star}
						</span>
						<p className="text-secondaryDark">{data.date}</p>
					</div>
				</div>
			</div>

			<div className=" xl:w-6/12 mx-auto mt-10 transition-all duration-450 animate-[fadeIn_1s_ease-in-out]">
				<h1 className="text-center text-base text-secondaryDark leading-[35px]">
					{data.comment}
				</h1>
				<IoIosArrowDropleftCircle
					onClick={goPrev}
					className="text-lg text-secondaryLightDark absolute top-[60%] left-[18%] cursor-pointer"
				/>
				<IoIosArrowDroprightCircle
					onClick={goNext}
					className="text-lg text-secondaryLightDark absolute top-[60%] right-[18%] cursor-pointer"
				/>
				{/* <button className="rounded-[52px]"></button>
				<button className="rounded-[52px]"></button> */}
			</div>
		</div>
	);
};

export default Testimonial;
