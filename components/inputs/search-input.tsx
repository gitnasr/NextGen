import React, { ChangeEventHandler } from "react";

interface SearchInputProps {
	onChange: ChangeEventHandler<HTMLInputElement>;
}
const SearchInput: React.FC<SearchInputProps> = ({ onChange }) => {
	return (
		<input
			onChange={onChange}
			type='text'
			placeholder='Search...'
			className='border border-gray-300 rounded-lg p-2 w-full mt-4'
		/>
	);
};


export default SearchInput;