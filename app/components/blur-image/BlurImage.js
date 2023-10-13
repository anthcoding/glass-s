'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const BlurImage = ({ imgData }) => {
	const [isLoading, setIsloading] = useState(true);

	return (
		// <div className="aspect-w-1 aspect-h-1 xl:aspect-h-7 xl:aspect-w-8 w-full overflow-hidden rounded-[52px] bg-white] relative h-auto">
		<Image
			className={`duration-700 easy-in-out rounded-[52px] w-full ${
				isLoading ? 'blur-2xl grayscale' : 'blur-0 grayscale-0'
			}`}
			height={100}
			width={600}
			src={imgData.href}
			alt={imgData.alt}
			// layout="fill"
			// objectFit="cover"
			h
			onLoadingComplete={() => setIsloading(false)}
		/>
		// </div>
	);
};

export default BlurImage;
