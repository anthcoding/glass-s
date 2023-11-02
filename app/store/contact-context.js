'use client';

import React, { useState } from 'react';

const ContactContext = React.createContext({
	isContactOpen: true,
	handleContactModal: () => {},
	isContactOpenEsp: true,
	handleContactModalEsp: () => {},
	isFastContactOpen: true,
	handleFastContactModal: () => {},
});

export function ModalProvider({ children }) {
	const [isContactOpen, setIsContactOpen] = useState(false);
	const [isContactOpenEsp, setIsContactOpenEsp] = useState(false);
	const [isFastContactOpen, setIsFastContactOpen] = useState(false);

	const handleContactModal = () => {
		setIsContactOpen((prevStatus) => !prevStatus);
	};

	const handleContactModalEsp = () => {
		setIsContactOpenEsp((prevStatus) => !prevStatus);
	};

	const handleFastContactModal = () => {
		setIsFastContactOpen((prevStatus) => !prevStatus);
	};
	return (
		<ContactContext.Provider
			value={{
				isContactOpen: isContactOpen,
				isContactOpenEsp: isContactOpenEsp,
				handleContactModal: handleContactModal,
				handleContactModalEsp: handleContactModalEsp,
				isFastContactOpen: isFastContactOpen,
				handleFastContactModal: handleFastContactModal,
			}}
		>
			{children}
		</ContactContext.Provider>
	);
}

export default ContactContext;
