'use client';

import React, { useState, useContext } from 'react';
import localFont from '@next/font/local';
import Link from 'next/link';
import Image from 'next/image';
import ContactContext from '../store/contact-context';

import FlyingStar from '../assets/images/flyingStar.png';
import Hero from '../assets/images/hero.png';
import Before from '../assets/images/before.jpg';
import After from '../assets/images/after.jpg';
import CurvedArrow from '../assets/images/curvedArrow.png';
import Star from '../assets/images/star.svg';
import Star2 from '../assets/images/star2.svg';
import GroupPeople from '../assets/images/groupPeople.png';
import SpanishFlag from '../assets/images/spanishFlag.png';
import Reglas from '../assets/images/ruler.jpeg';
import FramelessDoorEnclosure from '../assets/images/frameless-door-enclosure.jpg';
import FramelessDoor from '../assets/images/frameless-door.jpg';
import SlidingDoor from '../assets/images/sliding-door.jpg';
import FixedPanel from '../assets/images/fixed-panel.jpg';
import StairRailing from '../assets/images/stair-railing.jpg';
import PivotDoor from '../assets/images/pivo.jpg';
import PivotDoorHd from '../assets/images/pivHd.jpg';
import Mirror from '../assets/images/mirror.jpeg';

import AmaliaPP from '../assets/images/amaliaPP.png';
import ElaynePP from '../assets/images/elainePP.png';
import MishaPP from '../assets/images/michaPP.png';
import SaddyPP from '../assets/images/saddyPP.png';

import { HiMiniArrowLongRight } from 'react-icons/hi2';
import { GiRoundStar } from 'react-icons/gi';

import Products from '../components/products/Products';
import Testimonial from '../components/testimonial/Testimonial';
import Footer from '../global/footer/index';

const FIRST_PRODUCTS_DATA = [
	{
		id: 1,
		name: 'Frameless Shower Door',
		buttonName: 'F-shower door',
		description: 'Swing door + fixed panel',
		price: '$850',
		img: FramelessDoor,
	},
	{
		id: 2,
		name: 'Fixed Panel',
		buttonName: 'Fixed pannel',
		description: 'Fixed panel',
		price: '$500',
		img: FixedPanel,
	},
	{
		id: 3,
		name: 'Frameless Shower Enclosure',
		buttonName: 'F-shower encl',
		description: 'Fixed panels + door',
		price: '$1200',
		img: FramelessDoorEnclosure,
	},
	{
		id: 4,
		name: 'Frameless Sliding Shower Door',
		buttonName: 'FS-shower door',
		description: 'Fixed panel + door + four rolling system tubular',
		price: '$1250',
		img: SlidingDoor,
	},
];

const SECOND_PRODUCTS_DATA = [
	{
		id: 1,
		name: 'Glass Railing',
		buttonName: 'G-railing',
		description: 'Glass railing with standoff',
		price: '$3500',
		img: StairRailing,
	},
	{
		id: 2,
		name: 'Interior Pivot Door',
		buttonName: 'I-pivot-door',
		description: 'Interior door (frosted glass)',
		price: '$900',
		img: PivotDoor,
	},
	{
		id: 3,
		name: 'Mirror',
		buttonName: 'Mirror',
		description: 'Mirror one-quarter',
		price: '$300',
		img: Mirror,
	},
	{
		id: 4,
		name: 'Pivor Heavy Duty Glass Enclosure',
		buttonName: 'P-HD-glass',
		description: 'One-half clear glass with hydraulic hinges',
		price: '$2189',
		img: PivotDoorHd,
	},
];

const TESTIMONIALS_DATA = [
	{
		name: 'Elaine Barroso',
		comment:
			'Great quality work ! Very satisfied with the results. I highly recommend this company to anyone. Ronald and his employees are dedicated and you can see they really love what they do. Always working hard to satisfy their customers.',
		date: 'a year ago',
		star: <GiRoundStar />,
		img: ElaynePP,
	},
	{
		name: 'Amalia Abraham',
		comment:
			'Great service! Very professional and everything on time. I enthusiastically recommend Ronald, you will not regret it!',
		date: 'a year ago',
		star: <GiRoundStar />,
		img: AmaliaPP,
	},
	{
		name: 'Saddy',
		comment:
			"I'm super happy !! Very satisfied with the work they did in my bathroom!! Excellent service and very fast!! Thank you very much ✅",
		star: <GiRoundStar />,
		date: 'two years ago',
		img: SaddyPP,
	},
	{
		name: 'Misha Khaytsis',
		comment:
			'Absolutely great and professional company. Always on time. Always prepared. Always staying true to the word. Ronald is a very attentive and made everything we have asked him. The mirrors he installed on the whole wall, are very high quality. Just a perfect job!',
		star: <GiRoundStar />,
		date: 'two years ago',
		img: MishaPP,
	},
];

const acorn = localFont({
	src: '../assets/acorn/Acorn-Regular.woff2',
});

const acornLight = localFont({
	src: '../assets/acorn/Acorn-Light.woff2',
});

const bogart = localFont({
	src: '../assets/bogart/Bogart-Light-trial.ttf',
});

const bogartRegular = localFont({
	src: '../assets/bogart/Bogart-Regular-trial.ttf',
});

const Page = () => {
	const [testimonialIndex, setTestimonialIndex] = useState(0);

	const { handleModal } = useContext(ContactContext);

	const prevTestimonialHandler = () => {
		if (testimonialIndex === 0) {
			setTestimonialIndex(TESTIMONIALS_DATA.length - 1);
			return;
		}

		setTestimonialIndex(testimonialIndex - 1);
	};

	const nextTestimonialHandler = () => {
		if (testimonialIndex === TESTIMONIALS_DATA.length - 1) {
			setTestimonialIndex(0);
			return;
		}

		setTestimonialIndex(testimonialIndex + 1);
	};

	return (
		<>
			<div className="pt-24  lg:pt-64 w-11/12 mx-auto h-fit lg:flex ">
				<div className="lg:w-[65%] lg:shrink flex flex-col">
					<div
						style={acornLight.style}
						className="text-xxlMobile xl:text-xxl tracking-tight leading-[70px] xl:leading-[130px] h-fit"
					>
						Unlock elegance <br /> Through glass
						<br />
						and more
					</div>
					<div
						style={bogart.style}
						className="leading-[20px] lg:leading-[35px] mt-4 lg:mt-10"
					>
						<p className="text-dark mt-10 lg:mt-0 text-baseMobile lg:text-base">
							Seeking sleek and modern interior glass installations?
						</p>
						<p className="text-secondaryDark hidden lg:inline text-baseMobile lg:text-base mt-4 lg:mt-0">
							We provide free on-site quotes for your convenience.
						</p>
						<div className="flex flex-col lg:flex-row leading-[15px] mt-2 lg:mt-0">
							<p className="text-smallMobile lg:text-small text-secondaryDark">
								Available in South Florida.
							</p>
							<button
								onClick={handleModal}
								className="lg:ml-3 text-blue flex lg:justify-center items-center z-[5px] hover:tracking-tight transition-all duration-200"
							>
								Tell us where to go next <HiMiniArrowLongRight />
							</button>
						</div>
					</div>
					<div
						style={bogart.style}
						className="text-secondaryDark text-medium bg-tertiaryWhite w-fit px-6 py-3 rounded-lg mt-2 lg:mt-10 relative"
					>
						we craft your exact desires
						<Image
							className="absolute -top-3 -right-4"
							src={FlyingStar}
							width={50}
							height={50}
							alt="FlyingStar"
						/>
					</div>
				</div>
				<div className="mt-32 lg:mt-0 w-full lg:w-[35%] h-fit relative">
					<div className="w-[171px] h-[134px] absolute -top-16 right-0 bg-secondaryDark rounded-[50px]"></div>
					<div className="w-[171px] h-[134px] absolute -bottom-20 left-0 bg-secondaryDark rounded-[50px]"></div>
					<Image className="w-9/12 mx-auto" src={Hero} alt="Bathroom Photo" />
				</div>
			</div>
			<div
				style={acornLight.style}
				className="bg-tertiaryWhite mt-60 lg:mt-28 w-full py-4 lg:p-20 rounded-[50px]"
			>
				<div className="w-11/12 mx-auto">
					<h1 className="text-xlMobile xl:text-xxl tracking-tight leading-[40px] xl:leading-[130px] lg:w-[60%] mx-auto text-center text-secondaryDark mt-12">
						We can take you from this...
					</h1>
					<div className="w-full lg:w-9/12 bg-dark mx-auto rounded-[50px] mt-16 relative">
						<Image
							placeholder="blur"
							src={Before}
							alt="Before photo"
							className="content-fit rounded-[50px]"
						/>
					</div>
					<Image
						src={CurvedArrow}
						alt="Arrow"
						className="ml-[35%] lg:ml-[45%] max-w-[69px] lg:max-w-[109px] my-16"
					/>
					<h1
						className="text-xlMobile xl:text-xxl tracking-tight leading-[10px] xl:leading-[130px] lg:w-[60%] mx-auto text-center text-secondaryDark mt-12 "
						style={acornLight.style}
					>
						To this!
					</h1>
					<div className="w-full lg:w-9/12 bg-dark mx-auto rounded-[50px] mt-16 relative">
						<Image
							src={After}
							alt="After photo"
							className="w-full rounded-[50px]"
							placeholder="blur"
						/>
						<Image
							src={Star2}
							alt="Stars"
							className="text-secondaryDark absolute -top-12 -left-10  lg:-top-32 lg:-left-20  z-10  h-[100px] w-[100px] lg:h-[200px] lg:w-[200px]"
						/>
						<Image
							src={Star}
							width={150}
							height={150}
							alt="Star"
							className="text-secondaryDark absolute -bottom-0 -right-0 lg:-bottom-14 lg:-right-10  z-10 h-[40px] w-[40px] lg:h-[100px] lg:w-[100px]"
						/>
					</div>
				</div>
			</div>
			<div style={bogart.style} className="w-8/12 mx-auto pt-32 lg:py-80">
				<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
					<div className="min-h-[250px] lg:min-h-[337px] rounded-xl lg:col-span-2 flex flex-col gap-5 lg:gap-0 lg:flex-row justify-center items-center gradient-bg-first px-3 py-5 lg:px-11">
						<div className="w-full lg:w-2/3 ">
							<h1
								className="text-xlMobile md:text-xl lg:text-xlMobile xl:text-xl leading-[30px] md:leading-[40px] lg:leading-[50px] mb-5 pr-8"
								style={bogartRegular.style}
							>
								We have exceeded expectations for{' '}
								<span style={acornLight.style}>200+</span> clients.
							</h1>
							<Link
								href={'/gallery'}
								className="items-center text-start text-smallMobile md:text-lgMobile lg:text-medium text-secondaryDark leading-[25px] hover:tracking-tight hover:text-blue transition-all duration-200"
							>
								Come see more projects in the gallery{' '}
								<HiMiniArrowLongRight className="inline" />
							</Link>
						</div>
						<div className="w-1/3">
							<Image src={GroupPeople} alt="GroupPeople" />
						</div>
					</div>
					<div
						onClick={handleModal}
						className="min-h-[250px] hover:cursor-pointer hover:outline hover:outline-4 hover:outline-blue  lg:min-h-[337px] rounded-xl bg-dark flex flex-col xl:justify-center relative px-3 py-5 lg:px-11 duration-150"
					>
						<h1
							className="text-xlMobile md:text-xl lg:text-xlMobile xl:text-xl leading-[30px] md:leading-[40px] lg:leading-[50px] text-white"
							style={bogartRegular.style}
						>
							Hablamos español
						</h1>
						<h1 className="w-full items-center text-start text-smallMobile md:text-lgMobile lg:text-medium text-secondaryWhite mt-5 leading-[25px]  transition-all duration-200">
							Sientase libre de comunicarse <br /> con nosotros{' '}
							{/* <HiMiniArrowLongRight className="inline" /> */}
						</h1>
						<Image
							src={SpanishFlag}
							alt="Little Spanish Flag"
							className="absolute right-5 bottom-5 h-[50px] w-[50px]"
						/>
					</div>
					<div className="h-[250px] lg:h-[337px] rounded-xl flex flex-col overflow-hidden relative">
						<Image
							src={Reglas}
							alt="Ruler Photo"
							className="object-contain absolute bottom-0 "
						/>
						<h1
							className="text-xlMobile md:text-xl lg:text-xlMobile xl:text-xl  text-white z-20 absolute px-3 py-5 lg:p-11 leading-[30px] md:leading-[40px] lg:leading-[50px]"
							style={bogartRegular.style}
						>
							Get a free quote in less than{' '}
							<span style={acornLight.style}>15</span> minutes.
						</h1>
					</div>
					<div className="min-h-[250px] lg:min-h-[337px] rounded-xl lg:col-span-2 flex flex-col justify-center items-center gradient-bg-second px-3 py-5 lg:px-11">
						<h1
							className="text-xlMobile md:text-xl lg:text-xlMobile xl:text-xl leading-[30px] md:leading-[40px] lg:leading-[50px] "
							style={bogartRegular.style}
						>
							Experience unbeatable value with the perfect blend of quality and
							affordability.
						</h1>
						<p className="items-center text-start text-smallMobile md:text-lgMobile lg:text-medium text-secondaryDark mt-5 leading-[25px]">
							Extensive selection of products, including shower doors, office
							dividers, stairs railings, and more, starting at just{' '}
							<span style={acornLight.style}>$350.</span>
						</p>
					</div>
				</div>
			</div>
			<div className="bg-cream pt-32 pb-4">
				<div className="w-10/12 mx-auto">
					<p
						style={acornLight.style}
						className="text-xl leading-[50px] xl:text-xxl tracking-tight lg:leading-[80px] xl:leading-[130px] xl:w-full mx-auto text-center lg:text-start text-dark mt-12 mb-20 lg:mb-40 "
					>
						Take a look <br /> at what we do
					</p>
				</div>
				<Products products={SECOND_PRODUCTS_DATA} />
				<Products products={FIRST_PRODUCTS_DATA} right />
			</div>

			<div className="w-10/12 lg:w-9/12 mx-auto my-40 xl:my-80">
				<p
					style={acornLight.style}
					className="text-xl leading-[50px] xl:text-xxl tracking-tight lg:leading-[80px] xl:leading-[130px] xl:w-full mx-auto text-center text-dark mt-12 mb-20 lg:mb-40"
				>
					Check what our customers say about us
				</p>
				<Testimonial
					data={TESTIMONIALS_DATA[testimonialIndex]}
					goPrev={prevTestimonialHandler}
					goNext={nextTestimonialHandler}
				/>
			</div>
		</>
	);
};

export default Page;
