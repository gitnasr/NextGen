interface Post {
	body:string
	title:string
	id:string
	handler:string,
	name:string
}

interface PostHeaderProps {
	name: string;
	handler: string;
}
interface MiniPostProps extends Post {

	showBody?: boolean;
}
interface Comment {
    name:string
    body:string
    id:string
}
export type {
    Post,PostHeaderProps,MiniPostProps,Comment
}