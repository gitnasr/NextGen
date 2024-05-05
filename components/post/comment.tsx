import { BiShare } from "react-icons/bi";

const PostComment = () => {
    return (
        <div className='mt-8 p-4-rounded-xl'>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-row gap-4 items-center'>
                <div className='w-12 h-12 bg-gray-300 rounded-full'></div>
                <div className='flex flex-col'>
                    <h1 className='text-xl font-extrabold'>Author Name</h1>
                    <span className='text-xs'>2 hours ago</span>
                </div>
            </div>
            <div className='flex flex-row items-center gap-1 text-indigo-800 cursor-pointer'>
                <BiShare className=' text-xl' />
                <small>Replay</small>
            </div>
        </div>
        <div className='my-4'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
    </div>
    );
};

export default PostComment;