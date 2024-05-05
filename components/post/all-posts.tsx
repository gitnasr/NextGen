"use client";

import MiniPost from "./mini-post";
import { useQuery } from "@tanstack/react-query";

const getPosts = async () => {
	const response = await fetch(
		"https://jsonplaceholder.typicode.com/posts?_start=0&_limit=15"
	);
	return response.json();
};

const Posts = () => {
	const { data } = useQuery({ queryKey: ["posts"], queryFn: getPosts });
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 my-4 gap-4 px-3  w-full'>
			{data.map((post: any) => (
				<MiniPost
					key={post.id}
					id={post.id}
					name='Author Name'
					body={post.body}
					title={post.title}
					handler='@author'
					showBody
				/>
			))}
		</div>
	);
};

export default Posts;
