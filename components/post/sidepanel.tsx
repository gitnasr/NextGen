"use client";

import MiniPost from "./mini-post";
import { PostHeader } from "./header";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const getRelatedPosts = async () => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_start=15&_limit=5`
	);
	return response.json();
};
const Sidepanel = () => {
	const router = useRouter();
	const queryKey = ["related"];
	const query = useQuery({
		queryKey,
		queryFn: getRelatedPosts,
	});
	if (query.isLoading) {
		return <h1>Loading</h1>;
	}
	return (
		<div className='max-w-md p-4'>
			<h2 className='font-medium text-lg'>Related Posts</h2>
			<input
				onClick={() => router.push("/posts/search")}
				type='text'
				placeholder='Search'
				className='border border-gray-300 rounded-lg p-2 w-full mt-4'
			/>

			<div className="flex flex-col gap-4 mt-4">
			{query.data &&
				query.data.map((post) => (
					<MiniPost
						handler='@handler'
						id={post.id}
						name='Auther Name'
						title={post.title}
						key={post.id}
						body={post.body}
						showBody={false}
					/>
				))}
			</div>
		</div>
	);
};

export default Sidepanel;
