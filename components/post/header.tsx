import { PostHeaderProps } from "@/types";

export const PostHeader = ({ name, handler }: PostHeaderProps) => {
	return (
		<div className='flex flex-row gap-5'>
			<div className='w-12 h-12 bg-gray-300 rounded-xl' />
			<div className='flex flex-col'>
				<h1 className='text-xl font-extrabold'>{name}</h1>
				<span className='text-blue-600'>{handler}</span>
			</div>
		</div>
	);
};
