'use client';

import React, { useContext } from 'react';
import ContactContext from '../../store/contact-context';
import { VscClose } from 'react-icons/vsc';
import localFont from '@next/font/local';
import { useForm } from 'react-hook-form';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

const bogart = localFont({
	src: '../../assets/bogart/Bogart-Light-trial.ttf',
});

const FastContactModal = ({ handleClick }) => {
	const notify = () => toast('Email sent');

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: '',
			lastName: '',
			subject: '',
			email: '',
			message: '',
		},
		mode: 'all',
	});

	const onSubmit = async (data) => {
		sendContactForm(data);
		notify();

		reset({
			name: '',
			lastName: '',
			subject: '',
			email: '',
			message: '',
		});
	};

	return (
		<>
			<div
				className="absolute inset-0 z-20 bg-secondaryDark bg-opacity-20 transition-all animate-[fadeIn_.1s_ease-in-out]"
				onClick={handleClick}
			></div>
			<div className="fixed w-[90%] md:w-[580px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg bg-white rounded-[51px] p-5 lg:p-16 z-[1000] transition-all animate-[fadeIn_.2s_ease-in-out]">
				<button
					onClick={handleClick}
					className="bg-white absolute top-5 right-8"
				>
					<VscClose size={30} />
				</button>
				<div className="text-center w-full ">
					<h1 className="text-sm lg:text-medium mb-2 mt-4">
						Get in touch with us
					</h1>
					<p className="text-smMobile md:text-sm text-secondaryDark mb-4 lg:mb-8 leading-[15px] lg:leading-[25px]">
						Do you have questions or need assistance? Reach out to our team.
					</p>

					<Link href="tel:786-290-5299">Give us a call</Link>
					<Link
						target="_blank"
						href="https://calendly.com/stocksourceglass/free-estimate?month=2023-10"
					>
						Sechedulle
					</Link>
				</div>
			</div>
		</>
	);
};

const ContactUs = () => {
	const { isFastContactOpen, handleFastContactModal } =
		useContext(ContactContext);

	return (
		<>
			{isFastContactOpen ? (
				<FastContactModal handleClick={handleFastContactModal} />
			) : null}
		</>
	);
};

export default ContactUs;
