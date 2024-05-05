import { BiComment, BiDislike, BiHeart, BiLike, BiShare } from "react-icons/bi";

import Image from "next/image";
import PostComment from "@/components/post/comment";
import { PostHeader } from "@/components/post/header";

const PostDetails = () => {
	const post = {
		title: "Post Title",
		author: "Author Name",
		handler: "@author",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	};
	return (
		<div className='flex flex-col border p-3 rounded-xl mx-4 flex-1'>
			<PostHeader name={post.author} handler={post.handler} />
			<div className='my-4 flex flex-col gap-4'>
				<p>{post.body}</p>
				<div className='w-full h-64 bg-gray-300 rounded-xl' />
				<div className='flex flex-row justify-between'>
					<div className='flex flex-row gap-x-4 text-gray-600 text-2xl'>
						<BiLike className='cursor-pointer' />
						<BiDislike className='cursor-pointer' />
					</div>
					<div className='flex flex-row gap-x-8 text-gray-600 justify-between '>
						<div className='flex flex-row gap-2 items-center'>
							<BiComment className='cursor-pointer text-xl ' />
							<span>6</span>
						</div>
						<div className='flex flex-row gap-2  items-center'>
							<BiHeart className='cursor-pointer text-xl ' />
							<span>36</span>
						</div>
						<div className='flex flex-row gap-2 text-xl items-center'>
							<BiShare className='cursor-pointer ' />
						</div>
					</div>
				</div>
				<PostComment />
				<PostComment />
				<PostComment />
				<PostComment />
			</div>
		</div>
	);
};

export default PostDetails;
