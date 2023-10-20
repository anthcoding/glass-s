'use client';

import React from 'react';
import Image from 'next/image';

const BlurImage = ({ imgData }) => {
	return (
		<div>
			<Image
				placeholder="blur"
				className="h-auto max-w-full rounded-[52px] transition-all animate-[fadeIn_.2s_ease-in-out]"
				src={imgData.url}
				alt={imgData.alt}
			/>
		</div>
	);
};

export default BlurImage;
