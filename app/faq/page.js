import React from 'react';
import localFont from '@next/font/local';

const acorn = localFont({
	src: '../assets/acorn/Acorn-Regular.woff2',
});

const bogart = localFont({
	src: '../assets/bogart/Bogart-Light-trial.ttf',
});

const Page = () => {
	return (
		<div className="w-full lg:w-8/12 py-32 px-12  mx-auto" style={acorn.style}>
			<h1 className="xl:w-9/12 text-xxlMobile xl:text-xxl tracking-tight leading-[80px] xl:leading-[130px] mx-auto text-center text-secondaryDark pt-">
				Frequently asked questions
			</h1>
			<div className="my-20 l¡g:w-9/12 mx-auto" style={bogart.style}>
				<div className="text-white text-base rounded-[52px] bg-[#0000004d] px-10 py-4 w-1/3 ml-20">
					Do we offer warranty?
				</div>
				<div className="text-secondaryDark text-baseMobile rounded-[52px] bg-cream px-10 py-5 w-2/4 mx-auto leading-[1]">
					At Stock Source, we are committed to ensuring your satisfaction an the
					longevity of our products. That is why we offer a comprehensive
					warranty to provide you with peace of mind.
					<br />
					<br />
					<span className="text-base" style={acorn.style}>
						Hardware Warranty
					</span>{' '}
					<br />
					<br />
					All of our hardware components come with a generous three-year
					warranty. This means that for a period of three years from the date of
					purchase, you can rest assured that any hardware issues will be
					promptly addressed and resolved by our team. This warranty covers
					defects and malfunctions that may occur under normal use and
					conditions.
					<br />
					<br />
					<span className="text-base" style={acorn.style}>
						Installation Warranty
					</span>{' '}
					<br />
					<br />
					In addition to our hardware warranty, we also provide a one-year
					warranty on our installation services. We take pride in our skilled
					installation team, and we want to ensure that your newly installed
					glass and mirror products are free from installation-related issues.
					If you encounter any problems within the first year after
					installation, our team will be there to make it right.
				</div>
			</div>
			<div className="my-20 w-9/12 mx-auto" style={bogart.style}>
				<div className="text-white text-base rounded-[52px] bg-[#0000004d] px-10 py-4 w-1/3 ml-20">
					What area do we serve?
				</div>
				<div className="text-secondaryDark text-baseMobile rounded-[52px] bg-cream px-10 py-5 w-2/4 mx-auto leading-[1]">
					Our service area extends from the stunning Florida Keys up to the
					vibrant West Palm region. We are dedicated to serving the communities
					within this expansive stretch, ensuring everyone in this area has
					access to our exceptional glass and mirror products, as well as our
					top-notch services.
					<br />
					For projects outside of this primary service area, we are open to
					exploring possibilities based on the specific requirements and nature
					of the project. Our commitment to our clients remains unwavering, and
					we strive to accommodate and cater to various locations, always
					prioritizing exceptional results and customer satisfaction.
				</div>
			</div>
			<div className="my-20 w-9/12 mx-auto" style={bogart.style}>
				<div className="text-white text-base rounded-[52px] bg-[#0000004d] px-10 py-4 w-2/5 ml-20">
					How is the order process?
				</div>
				<div className="text-secondaryDark text-baseMobile rounded-[52px] bg-cream px-10 py-5 w-2/4 mx-auto leading-[1]">
					<span className="text-base" style={acorn.style}>
						1:
					</span>{' '}
					Estimation and Precise Measurements We begin the order process by
					providing an estimate for your project. Our team will visit your
					location to take precise measurements, ensuring that your glass or
					mirror is customized to fit your exact specifications.
					<br />
					<br />
					<span className="text-base" style={acorn.style}>
						2:
					</span>{' '}
					Order Placement Once you have approved the project and the estimate,
					we proceed to place the order for the glass or mirror. This step
					involves selecting the type, size, and any additional customization
					options to meet your specific needs.
					<br />
					<br />
					<span className="text-base" style={acorn.style}>
						3:
					</span>{' '}
					Glass Production After the order is placed, we work with our trusted
					suppliers to procure the glass. Our commitment to quality means that
					we source only the finest materials to ensure your complete
					satisfaction.
					<br />
					<br />
					<span className="text-base" style={acorn.style}>
						4:
					</span>{' '}
					Installation On a scheduled date, our skilled installation team will
					arrive at your location to complete the installation. We take pride in
					our precise and professional installation process, ensuring that your
					glass or mirror product is securely and beautifully installed.
					<br />
					<br />
				</div>
			</div>
			<div className="my-20 w-9/12 mx-auto" style={bogart.style}>
				<div className="text-white text-base rounded-[52px] bg-[#0000004d] px-10 py-4 w-1/3 ml-20">
					Payment methods
				</div>
				<div className="text-secondaryDark text-baseMobile rounded-[52px] bg-cream px-10 py-5 w-2/4 mx-auto leading-[1]">
					<span className="text-base" style={acorn.style}>
						We offer a variety of convenient payment methods to accommodate your
						preferences:
					</span>{' '}
					<br />
					<br />
					<span className="text-base" style={acorn.style}>
						Cash:
					</span>{' '}
					For those who prefer the simplicity of cash transactions, we gladly
					accept cash payments.
					<br />
					<br />
					<span className="text-base" style={acorn.style}>
						Check:
					</span>{' '}
					You can also choose to pay by check, providing a traditional and
					secure payment option.
					<br />
					<br />
					<span className="text-base" style={acorn.style}>
						Zelle:
					</span>{' '}
					We offer the convenience of Zelle for quick and hassle-free electronic
					payments.
					<br />
					<br />
					<span className="text-base" style={acorn.style}>
						Credit or Debit Card:
					</span>{' '}
					To ensure flexibility, we accept credit and debit card payments,
					allowing you to use your preferred card for your convenience.
					<br />
					<br />
				</div>
			</div>
		</div>
	);
};

export default Page;
