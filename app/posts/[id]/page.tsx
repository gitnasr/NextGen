'use client'

import { BiComment, BiDislike, BiHeart, BiLike, BiShare } from "react-icons/bi";
import { useParams, usePathname } from "next/navigation";

import AllComments from "@/components/post/post-comments";
import Image from "next/image";
import { PostHeader } from "@/components/post/header";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useStore from "@/state/store";

const getPostById = async (id: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.json();
}
const PostDetails = () => {
    const params = useParams();
    const store = useStore();



	let post = store.currentPost
    const postId = post?.id || params.id;
    
    const queryKey = ["postById", params.id];

    const query = useQuery({queryKey, queryFn: () => getPostById(postId),  enabled: !post   });
   
    if (query.isLoading) {
        return <div>Loading...</div>
    }
    if (query.isError) {
        return <div>Error</div>
    }
    if (query.data && (query.data.id !== store.currentPost?.id) ) {
        store.setCurrentPost({
           ...query.data,
           name: "Pub Name",
           handler: "@pubhandler"
        });
    }

    
    
    
	return (
		<div className='flex flex-col border p-3 rounded-xl mx-4 flex-1'>
			<PostHeader name={post?.name} handler={post?.handler} />
			<div className='my-4 flex flex-col gap-4'>
                <h1 className="font-extrabold text-2xl">{post?.title}</h1>
				<p className="tracking-wider">{post?.body}</p>
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
			<AllComments />
			</div>
		</div>
	);
};

export default PostDetails;
