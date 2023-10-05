'use client';

import React from 'react';

const GroupButtons = ({ value, activeButton, handleButtonClick }) => {
	return (
		<button
			className={`px-3 py-1 rounded-[62px] mr-2 mt-2 transition-all duration-250 ${
				activeButton === value.id
					? 'bg-blue text-white '
					: 'bg-lightDark text-secondaryDark'
			}`}
			onClick={() => handleButtonClick(value.id)}
		>
			{value.name}
		</button>
	);
};

export default GroupButtons;
