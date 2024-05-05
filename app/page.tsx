import {
	HydrationBoundary,
	QueryClient,
	dehydrate
} from "@tanstack/react-query";

import { FaPlus } from "react-icons/fa";
import Link from "next/link";
import Posts from "@/components/post/all-posts";
import { getPosts } from "@/API";

export default async function Home() {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ["posts"],
		queryFn: getPosts,
	});

	return (
		<section className='container mx-auto py-12 md:py-32 w-full'>
			<div className='flex flex-row px-4 items-center'>
				<h1 className='text-2xl font-extrabold flex-1'>Mini Blog (15)</h1>
				<Link
					href='/posts/create'
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl'>
					<FaPlus className='inline-block mr-1' />
					<span className='inline-block'>Create Post</span>
				</Link>
			</div>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<Posts />
			</HydrationBoundary>
		</section>
	);
}
