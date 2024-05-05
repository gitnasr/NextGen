import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import MiniPost from "@/components/post/mini-post";
import { PostHeader } from "@/components/post/header";

export default function Home() {
	return (
		<section className='container mx-auto py-12 md:py-32 w-full'>
			<div className='flex flex-row px-4 items-center'>
				<h1 className='text-2xl font-extrabold flex-1'>Mini Blog</h1>
				<Link
					href='/posts/create'
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl'>
					<FaPlus className='inline-block mr-1' />
					<span className='inline-block'>Create Post</span>
				</Link>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 my-4 gap-4 px-3  w-full'>
				<MiniPost
        id="1"
					name='Author Name'
					content='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
					title='Post Title'
					handler='@author'
				/>
      
        
			</div>
		</section>
	);
}
