'use client';

import React, { useState } from 'react';
import localFont from '@next/font/local';

const acorn = localFont({
	src: '../assets/acorn/Acorn-Regular.woff2',
});

const Page = () => {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<div className="w-full" style={acorn.style}>
			<h1 className="text-xxlMobile xl:text-xxl tracking-tight leading-[80px] xl:leading-[130px] mx-auto text-center text-secondaryDark pt-12">
				Gallery
			</h1>
		</div>
	);
};

export default Page;
