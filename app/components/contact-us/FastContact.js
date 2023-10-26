'use client';

import React, { useContext } from 'react';
import ContactContext from '../../store/contact-context';
import { VscClose } from 'react-icons/vsc';
import localFont from '@next/font/local';
import { useForm } from 'react-hook-form';
import { TbPhone } from 'react-icons/tb';
import { AiOutlineSchedule } from 'react-icons/ai';
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
				<div className="text-center w-full">
					<h1 className="text-sm lg:text-medium mb-2 mt-4">Need assistance?</h1>
					<p className="text-smMobile md:text-sm text-secondaryDark mb-4 lg:mb-8 leading-[15px] lg:leading-[25px]">
						Feel free to give us a call or schedule an appointment with our
						team.
					</p>

					<div className="flex flex-col">
						<Link
							href="tel:786-794-6229"
							className="text-dark bg-tertiaryLightDark text-start shadow-sm hover:opacity-75 p-4 lg:p-5 rounded-[16px] w-full flex justify-center align-middle mt-1 text-smMobile lg:text-sm font-light text-secondaryDark border-tertiaryLighertDark duration-150"
						>
							{/* <div className="w-full"> */}
							<TbPhone className="mt-1 mr-4 text-blue text-base" />
							Give us a call at (+1 786-794-6229). Available 24/7 every business
							day.
							{/* </div> */}
						</Link>

						<Link
							className="text-dark bg-tertiaryLightDark text-start shadow-sm hover:opacity-75 p-4 lg:p-5 rounded-[16px] w-full flex justify-center align-middle mt-3 text-smMobile lg:text-sm font-light text-secondaryDark border-tertiaryLighertDark duration-150"
							target="_blank"
							href="https://calendly.com/stocksourceglass/free-estimate?month=2023-10"
						>
							<AiOutlineSchedule className="mt-1 mr-4 text-xlMobile text-blue" />
							Planning ahead for a discussion? You can easily schedule a call
							with us at your preferred time.
						</Link>
					</div>
					<Link
						href="/faq"
						className="w-full flex justify-center align-middle mt-12 text-smMobile lg:text-sm text-blue"
						onClick={handleClick}
					>
						Read our FAQ
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
