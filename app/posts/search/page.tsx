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
	const [searchSource, updateSource] = useState("title")
	const { isLoading, isError, isSuccess, data } = useQuery({
		queryKey: ["searchBy", debouncedSearchValue],
		queryFn: () => getPostBySearch(debouncedSearchValue,searchSource),
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
			

			<div className="flex flex-col gap-3  ">
			<SearchInput
				onChange={({
					target: { value },
				}: React.ChangeEvent<HTMLInputElement>) => setSearchValue(value)}
			/>
				<div>
				<label
					htmlFor='searchBy'
					className='block text-sm font-medium text-gray-900'>
					Search By
				</label>

				<select
				onChange={(event) => updateSource(event.target.value)}
					name='searchBy'
					id='searchBy'
					className='border border-gray-300 rounded-lg p-2 w-full mt-1'>
					<option value='title'>In Titles</option>
					<option value='body'>In Post Content</option>
					
				</select>
				</div>
			</div>
			<div className='mt-4'>{renderResult()}</div>
		</div>
	);
};

export default SearchPage;
