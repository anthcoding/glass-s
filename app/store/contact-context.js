'use client';

import React, { useState } from 'react';

const ContactContext = React.createContext({
	isOpen: true,
	handleModal: () => {},
});

export function ModalProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleModal = () => {
		setIsOpen((prevStatus) => !prevStatus);
	};
	return (
		<ContactContext.Provider
			value={{ isOpen: isOpen, handleModal: handleModal }}
		>
			{children}
		</ContactContext.Provider>
	);
}

export default ContactContext;
