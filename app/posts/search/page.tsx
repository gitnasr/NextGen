import MiniPost from "@/components/post/mini-post";
import { PostHeader } from "@/components/post/header";
import SearchInput from "@/components/inputs/search-input";

const SearchPage = () => {
	return (
		<div className="max-w-xl  mx-auto">
			<h1 className="font-semibold text-lg">Search Post</h1>
            <SearchInput />

            <div className="mt-4">
                {/* Search Results */}
                <MiniPost
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                title="Post Title"
                handler="@author"
                name="Author Name"
                id="1"
                />
                </div>
		</div>
	);
};

export default SearchPage;
