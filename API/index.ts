const getPostById = async (id: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.json();
}
const getPostBySearch = async (searchValue: string) => {
	const data = await fetch(
		`https://jsonplaceholder.typicode.com/posts?title_like=^${searchValue}`
	);
	return await data.json();
};
const getPosts = async () => {
	const response = await fetch(
		"https://jsonplaceholder.typicode.com/posts?_start=0&_limit=15"
	);
	return response.json();
};
const getComments = async (id:number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments?_start=0&_limit=5`);
    return response.json();
};
const getRelatedPosts = async () => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_start=15&_limit=5`
	);
	return response.json();
};
export {
    getPostById,
    getPostBySearch,
    getPosts,
    getComments,
    getRelatedPosts
}