'use client';

import React, { useContext } from 'react';
import ContactContext from '../../store/contact-context';
import { VscClose } from 'react-icons/vsc';
import localFont from '@next/font/local';
import { useForm } from 'react-hook-form';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import { sendContactForm } from '../../lib/api';

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
			<div
				className="absolute inset-0 z-20 bg-secondaryDark bg-opacity-20 transition-all animate-[fadeIn_.1s_ease-in-out]"
				onClick={handleClick}
			></div>
			<div className="fixed w-[90%] md:w-[580px] lg:max-h-[789px] lg:overflow-y-scroll xl:max-h-[1579px] xl:overflow-visible top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg bg-white rounded-[51px] p-5 lg:p-16 z-[1000] transition-all animate-[fadeIn_.2s_ease-in-out]">
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
				</div>
				<div className="w-full lg:mt-6">
					<form
						className="text-sm sm:text-sm md:text-md"
						onSubmit={handleSubmit(onSubmit)}
					>
						<h1 className="text-sm lg:text-medium text-start mb-2">
							Enter your contact information
						</h1>
						<div className="w-full flex justify-between mb-1 lg:mb-2">
							<div className="w-[48%]">
								<input
									className={`w-full mb-1 lg:mb-2 bg-tertiaryLightDark placeholder-secondaryDark   p-4 lg:p-5 rounded-[16px] outline-none text-secondaryDark  text-smMobile lg:text-sm ${
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
									className={`w-full mb-1 lg:mb-2   bg-tertiaryLightDark placeholder-secondaryDark  p-4 lg:p-5 rounded-[16px] outline-none text-secondaryDark font-light text-smMobile lg:text-sm ${
										errors.lastName ? 'border-red border-[1px]' : ''
									}`}
									type="text"
									placeholder="Last Name"
									{...register('lastName', { required: true })}
								/>
							</div>
						</div>
						<div className="w-full mb-1 lg:mb-2 text-center">
							<input
								className={`  placeholder-secondaryDark bg-tertiaryLightDark mb-1 lg:mb-2 w-full  p-4 lg:p-5 rounded-[16px] outline-none text-secondaryDark font-light text-smMobile lg:text-sm ${
									errors.subject ? 'border-red border-[1px]' : ''
								}`}
								type="text"
								placeholder="Subject"
								{...register('subject', { required: true })}
							/>
						</div>
						<div className="w-full mb-1 lg:mb-2 text-center">
							<input
								className={`  placeholder-secondaryDark bg-tertiaryLightDark mb-1 lg:mb-2 w-full  p-4 lg:p-5 rounded-[16px] outline-none text-secondaryDark font-light text-smMobile lg:text-sm ${
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
						<h1 className="text-sm lg:text-medium text-start mb-2 mt-5">
							What do you need assistance with?
						</h1>
						<div className="w-full mb-2 text-center">
							<textarea
								className={`  placeholder-secondaryDark bg-tertiaryLightDark mb-2 w-full  p-4 lg:p-5 rounded-[16px] outline-none text-secondaryDark font-light text-smMobile lg:text-sm ${
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
								className=" w-full rounded-[16px] text-smMobile lg:text-sm p-3 font-light text-dark border-tertiaryLighertDark bg-tertiaryLightDark hover:bg-blue hover:text-white duration-150"
							>
								Submit{' '}
							</button>
							<Link
								href="https://wa.me/message/YVKF72Z5H4TLM1?src=qr"
								target="_blank"
								className="text-whatsapp bg-white w-full flex justify-center align-middle mt-1  rounded-[16px] text-smMobile lg:text-sm p-3 font-light text-secondaryDark border-tertiaryLighertDark hover:bg-whatsapp hover:text-white duration-150"
							>
								{/* <div className="w-full"> */}
								<AiOutlineWhatsApp className="mt-1 mr-2" />
								Send a message / Whatsapp
								{/* </div> */}
							</Link>
							<Link
								href="/faq"
								className="w-full flex justify-center align-middle mt-1 text-smMobile lg:text-sm text-blue"
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
	const { isContactOpen, handleContactModal } = useContext(ContactContext);

	return (
		<>{isContactOpen ? <Modal handleClick={handleContactModal} /> : null}</>
	);
};

export default ContactUs;
