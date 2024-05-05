import Sidepanel from "@/components/post/sidepanel";

interface PostsLayoutProps {
	children: React.ReactNode;
}
const PostsLayout = ({ children }: PostsLayoutProps) => {
	return (
		<div className='flex md:flex-row flex-col'>
			{children}
			<Sidepanel />
		</div>
	);
};

export default PostsLayout;
