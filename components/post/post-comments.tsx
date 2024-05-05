'use client'

import { BiShare } from "react-icons/bi";
import { Comment } from "@/types";
import { getComments } from "@/API";
import { useQuery } from "@tanstack/react-query";
import useStore from "@/state/store";

const PostComment = ({comment}: {comment: Comment}) => {
    return (
        <div className='mt-8 p-4-rounded-xl ' >
        <div className='flex flex-row justify-between'>
            <div className='flex  flex-row gap-4 items-center'>
                <div className='w-12 h-12 bg-gray-300 rounded-full '></div>
                <div className='flex flex-col'>
                    <h1 className='text-sm md:text-lg font-extrabold max-w-xs break-words'>{comment.name}</h1>
                    <span className='text-xs'>2 hours ago</span>
                </div>
            </div>
            <div className='flex flex-row items-center gap-1 text-indigo-800 cursor-pointer'>
                <BiShare className=' text-xl' />
                <small>Replay</small>
            </div>
        </div>
        <div className='my-4'>
            <p className="max-w-xl">{comment.body}</p>
        </div>
    </div>
    );
};

const AllComments = () => {
    const store = useStore();
    const currentPostId = store.currentPost?.id;
    const queryKey = ["comments", currentPostId];
    const { data } = useQuery({ queryKey, queryFn: () => getComments(currentPostId) , enabled: !!currentPostId});
    return (
        <div className='grid grid-cols-1 my-4 gap-4 px-3  w-full '>
            {data?.map((comment: Comment) => (
                 <PostComment comment={comment} key={comment.id} />
            ))}
        </div>
    );

}

export default AllComments;