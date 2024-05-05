"use client";

import { MiniPostProps } from "@/types";
import { PostHeader } from "./header";
import React from "react";
import { useRouter } from "next/navigation";
import useStore from "@/state/store";

const MiniPost: React.FC<MiniPostProps> = ({
	name,
	handler,
	body,
	title,
	id,
	showBody,
}) => {
	const router = useRouter();
	const store = useStore();
	const handleClick = async () => {
		await store.setCurrentPost({
			name,
			handler,
			body,
			title,
			id,
		});

		router.push(`/posts/${id}`);
	};
	return (
		<div
			onClick={handleClick}
			className='flex flex-col border p-4 rounded-2xl max-w-2xl cursor-pointer'>
			<PostHeader name={name} handler={handler} />
			<h1 className='text-lg font-bold mt-2'>{title}</h1>
			{showBody && (
				<p className='tracking-tighter line-clamp-2 text-gray-500'>{body}</p>
			)}
		</div>
	);
};

export default MiniPost;
