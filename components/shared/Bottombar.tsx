import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface BottombarProps {
	companyName: string;
}
const Bottombar = ({ companyName }: BottombarProps) => {
	const sections = [
		{
			title: "Product",
			links: [
				{ label: "Overview", url: "#" },
				{ label: "Features", url: "#" },
				{ label: "Solutions", url: "#" },
				{ label: "Tutorials", url: "#" },
				{ label: "Pricing", url: "#" },
				{ label: "Releases", url: "#" },
			],
		},
		{
			title: "Company",
			links: [
				{ label: "About", url: "#" },
				{ label: "Careers", url: "#" },
				{ label: "Press", url: "#" },
				{ label: "News", url: "#" },
				{ label: "Media Kit", url: "#" },
				{ label: "Contact", url: "#" },
			],
		},
		{
			title: "Resources",
			links: [
				{ label: "Blog", url: "#" },
				{ label: "Newsletter", url: "#" },
				{ label: "Events", url: "#" },
				{ label: "Help Centre", url: "#" },
				{ label: "Tutorials", url: "#" },
				{ label: "Support", url: "#" },
			],
		},
		{
			title: "Social",
			links: [
				{ label: "Twitter", url: "#" },
				{ label: "Linkedin", url: "#" },
				{ label: "Facebook", url: "#" },
				{ label: "GitHub", url: "#" },
				{ label: "AngelList", url: "#" },
				{ label: "Dribble", url: "#" },
			],
		},
		{
			title: "Legal",
			links: [
				{ label: "Terms", url: "#" },
				{ label: "Privacy", url: "#" },
				{ label: "Cookies", url: "#" },
				{ label: "Licenses", url: "#" },
				{ label: "Settings", url: "#" },
				{ label: "Contact", url: "#" },
			],
		},
	];
	return (
		<footer className='bg-white  shadow-xl  w-full  border-t'>
			<div className='mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8'>
				<div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
					<div>
						<p className='mt-4 max-w-xs text-gray-500'>
							Design amazing digital experiences that create more happy in the
							world.
						</p>
					</div>
                    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-5'>

					{sections.map((section, index) => (
						<div key={index}>
							<p className='font-medium text-sm text-gray-900'>
								{section.title}
							</p>
							<ul className='mt-6 space-y-4 text-sm'>
								{section.links.map((link, linkIndex) => (
									<li key={linkIndex}>
										<a
											href={link.url}
											className='text-gray-700 transition hover:opacity-75'>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				</div>
			</div>
			<div className='text-xs text-gray-500 bg-gray-900 w-full h-14 items-center flex'>
				<div className='container mx-auto flex justify-around items-center'>
					<p className='text-xs text-gray-500 bg-gray-900'>
						&copy; {new Date().getFullYear()}. {companyName}. All rights
						reserved.
					</p>
                    <div className="flex flex-row gap-2 cursor-pointer text-xl">
                        <FaTwitter />
                        <FaLinkedin />
                        <FaFacebook/>
                        <FaGithub />
                    </div>
				</div>
			</div>
		</footer>
	);
};

export default Bottombar;
