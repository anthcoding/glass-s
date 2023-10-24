import React from 'react';
import localFont from '@next/font/local';

const acornLight = localFont({
	src: '../assets/acorn/Acorn-Light.eot',
});

const bogart = localFont({
	src: '../assets/bogart/Bogart-Light-trial.ttf',
});

const page = () => {
	return (
		<div className="bg-cream w-full">
			<div
				className="w-full px-12 lg:w-7/12 mx-auto py-5 xl:py-32 animate-[fadeIn_.5s_ease-in-out]"
				style={acornLight.style}
			>
				<h1 className="text-lg lg:text-xxl tracking-tight leading-[80px] xl:leading-[130px] mx-auto text-center text-secondaryDark mt-12">
					Our <span className="text-dark">purpose</span>
				</h1>
				<p
					className="text-secondaryDark text-center text-sm md:text-baseMobile lg:text-base lg:leading-[30px] lg:mt-20 mb-60"
					style={bogart.style}
				>
					With over four years of dedicated experience, we are seasoned Glass
					and Mirrors Contractors and manufacturers, proudly serving the vibrant
					community of South Florida. Our roots are firmly planted in Miami-Dade
					County, but our commitment to excellence knows no boundaries as we
					extend our exceptional products and services across a broader
					geographic area. <br /> <br /> At SS-GLASS, we specialize in crafting
					customized glass and mirror solutions tailored to meet your unique
					needs. Whether you are envisioning stunning shower doors, elegant
					stairs railing, sophisticated office glass partitions, or exquisite
					mirrors, our skilled team is here to turn your vision into reality.{' '}
					<br /> <br /> Our passion for precision and quality craftsmanship
					drives everything we do. We take pride in being your trusted partner
					for both residential and commercial projects, offering a blend of
					expertise, creativity, and reliability that has earned us a stellar
					reputation in the industry. <br /> <br /> We look forward to
					collaborating with you and bringing your ideas to life with the beauty
					and functionality that only glass and mirrors can provide
				</p>
			</div>
		</div>
	);
};

export default page;
