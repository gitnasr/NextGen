"use client";

import MiniPost from "@/components/post/mini-post";
import { Post } from "@/types";
import SearchInput from "@/components/inputs/search-input";
import { getPostBySearch } from "@/API";
import { useDebounce } from "@uidotdev/usehooks";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const SearchPage = () => {
	const [searchValue, setSearchValue] = useState("");
	const debouncedSearchValue = useDebounce(searchValue, 300);

	const { isLoading, isError, isSuccess, data } = useQuery({
		queryKey: ["searchBy", debouncedSearchValue],
		queryFn: () => getPostBySearch(debouncedSearchValue),
		enabled: debouncedSearchValue.length > 0,
	});

	const renderResult = () => {
		if (isLoading) {
			return <div className='search-message'>Loading...</div>;
		}
		if (isError) {
			return <div className='search-message'>Something went wrong</div>;
		}
		if (isSuccess) {
			if (data.length === 0) {
				return <span>No Result</span>;
			}
			return (
				<div className='flex flex-col gap-3'>
					{data.map((post: Post) => (
						<MiniPost
							body={post.body}
							title={post.title}
							key={post.id}
							id={post.id}
							handler='@handler'
							name='PostFromSearch'
						/>
					))}
				</div>
			);
		}
		return <></>;
	};
	return (
		<div className='max-w-xl  mx-auto p-4'>
			<h1 className='font-semibold text-lg'>Search Post</h1>
			<SearchInput
				onChange={({
					target: { value },
				}: React.ChangeEvent<HTMLInputElement>) => setSearchValue(value)}
			/>

			<div className='mt-4'>{renderResult()}</div>
		</div>
	);
};

export default SearchPage;
