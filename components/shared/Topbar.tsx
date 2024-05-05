import Link from "next/link";

const Topbar = () => {
	return (
		<div className=' bg-white drop-shadow-xl  w-full text-gray-900 px-4'>
			<div className='container mx-auto'>
				<div className='flex justify-between items-center py-4'>
					<div className='flex space-x-4'>
						<Link href='/' className='text-lg font-bold'>
							NextGen Assignment
						</Link>
					</div>
					<div className='flex space-x-4 items-center'>
						<Link href='/register' className='text-lg font-semibold'>
							Register
						</Link>
						<Link
							href='/login'
							className='font-semibold bg-blue-700 flex items-center mx-auto w-24 justify-center text-center h-8 rounded-lg text-white'>
							Login
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
