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

const Modal = ({ handleClick }) => {
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
			<div className="absolute inset-0 bg-secondaryDark bg-opacity-20 transition-all animate-[fadeIn_.1s_ease-in-out]"></div>
			<div className="fixed w-full md:w-[580px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg bg-white rounded-[51px] p-16 z-[1000] transition-all animate-[fadeIn_.2s_ease-in-out]">
				<button
					onClick={handleClick}
					className="bg-white absolute top-5 right-8"
				>
					<VscClose size={30} />
				</button>
				<div className="text-center w-full">
					<h1 className="text-medium mb-1">Get in touch with us</h1>
					<p className="text-small text-secondaryDark mb-8 leading-[25px]">
						Do you have questions or need assistance? Reach out to our team.
					</p>
				</div>
				<div className="w-full mt-6">
					<form
						className="text-sm sm:text-sm md:text-md"
						onSubmit={handleSubmit(onSubmit)}
					>
						<h1 className="text-medium text-start mb-2">
							Enter your contact information
						</h1>
						{/* register your input into the hook by invoking the "register" function */}
						<div className="w-full flex justify-between mb-2">
							<div className="w-[48%]">
								<input
									className={`w-full mb-2 bg-tertiaryLightDark placeholder-secondaryDark  p-5 rounded-[16px] outline-none text-secondaryDark  text-sm sm:text-md ${
										errors.name ? 'border-red border-[1px]' : ''
									}`}
									type="text"
									placeholder="First Name"
									{...register('name', {
										required: 'This field is required',
									})}
								/>
							</div>
							<div className="w-[48%]">
								<input
									className={`w-full mb-2   bg-tertiaryLightDark placeholder-secondaryDark p-5 rounded-[16px] outline-none text-secondaryDark font-light text-sm sm:text-md ${
										errors.lastName ? 'border-red border-[1px]' : ''
									}`}
									type="text"
									placeholder="Last Name"
									{...register('lastName', { required: true })}
								/>
							</div>
						</div>
						<div className="w-full mb-2 text-center">
							<input
								className={`  placeholder-secondaryDark bg-tertiaryLightDark mb-2 w-full p-5 rounded-[16px] outline-none text-secondaryDark font-light text-sm sm:text-md ${
									errors.subject ? 'border-red border-[1px]' : ''
								}`}
								type="text"
								placeholder="Subject"
								{...register('subject', { required: true })}
							/>
						</div>
						<div className="w-full mb-2 text-center">
							<input
								className={`  placeholder-secondaryDark bg-tertiaryLightDark mb-2 w-full p-5 rounded-[16px] outline-none text-secondaryDark font-light text-sm sm:text-md ${
									errors.email ? ' border-red border-[1px]' : ''
								}`}
								type="email"
								placeholder="Email"
								{...register('email', {
									required: 'The email is required',
									validate: {
										matchPattern: (v) =>
											/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
											'Email address must be a valid address',
									},
								})}
							/>
						</div>
						<h1 className="text-medium text-start mb-2 mt-5">
							What do you need assistance with?
						</h1>
						<div className="w-full mb-2 text-center">
							<textarea
								className={`  placeholder-secondaryDark bg-tertiaryLightDark mb-2 w-full p-5 rounded-[16px] outline-none text-secondaryDark font-light text-sm sm:text-md ${
									errors.message ? 'border-red border-[1px]' : ''
								}`}
								{...register('message', { required: true })}
								placeholder="Message"
								rows={6}
							/>
						</div>

						<div className="w-full justify-center items-center">
							<button
								type="submit"
								className="mt-3 w-full rounded-[16px] text-small p-3 font-light text-dark border-tertiaryLighertDark bg-tertiaryLightDark hover:bg-blue hover:text-white duration-150"
							>
								Submit{' '}
							</button>
							<Link
								href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER"
								target="_blank"
								className="text-whatsapp bg-white w-full flex justify-center align-middle mt-3  rounded-[16px] text-small p-3 font-light text-secondaryDark border-tertiaryLighertDark hover:bg-whatsapp hover:text-white duration-150"
							>
								{/* <div className="w-full"> */}
								<AiOutlineWhatsApp className="mt-1 mr-2" />
								Send a message / Whatsapp
								{/* </div> */}
							</Link>
							<Link
								href="/faq"
								className="w-full flex justify-center align-middle mt-4 text-small text-blue"
								onClick={handleClick}
							>
								Read our FAQ
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

const ContactUs = () => {
	const { isOpen, handleModal } = useContext(ContactContext);
	console.log(isOpen, handleModal);

	return <>{isOpen ? <Modal handleClick={handleModal} /> : null}</>;
};

export default ContactUs;