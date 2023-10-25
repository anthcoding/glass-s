'use client';

import React, { useState } from 'react';

const ContactContext = React.createContext({
	isContactOpen: true,
	handleContactModal: () => {},
	isFastContactOpen: true,
	handleFastContactModal: () => {},
});

export function ModalProvider({ children }) {
	const [isContactOpen, setIsContactOpen] = useState(false);
	const [isFastContactOpen, setIsFastContactOpen] = useState(false);

	const handleContactModal = () => {
		setIsContactOpen((prevStatus) => !prevStatus);
	};

	const handleFastContactModal = () => {
		setIsFastContactOpen((prevStatus) => !prevStatus);
	};
	return (
		<ContactContext.Provider
			value={{
				isContactOpen: isContactOpen,
				handleContactModal: handleContactModal,
				isFastContactOpen: isFastContactOpen,
				handleFastContactModal: handleFastContactModal,
			}}
		>
			{children}
		</ContactContext.Provider>
	);
}

export default ContactContext;
