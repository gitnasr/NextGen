'use client';

import { PostHeader } from "./header";
import { useRouter } from "next/navigation";

const Sidepanel = () => {
    const router = useRouter();
	return (
		<div className='max-w-md'>
			<h2 className='font-medium text-lg'>Related Posts</h2>
			<input
            onClick={() => router.push('/posts/search')}
				type='text'
				placeholder='Search'
				className='border border-gray-300 rounded-lg p-2 w-full mt-4'
			/>
			<div className='flex flex-col gap-4 mt-4 border p-2 rounded-lg cursor-pointer'>
				<PostHeader name={"A1 RST"} handler={"@Yousef"} />
				<p className='line-clamp-1 '>
					Lorem Iusto aut voluptates. Ea ea molestias est rerum. Harum
					repellendus ipsa laudantium non ipsam vitae quibusdam. Ut facere
					expedita esse vitae voluptatem et quas. Aspernatur ipsa blanditiis
					mollitia consequuntur molestiae perspiciatis omnis. Autem voluptas
					voluptatibus magni quia ad aut animi minus. Porro incidunt voluptatem
					aut deserunt natus culpa.
				</p>
			</div>
            <div className='flex flex-col gap-4 mt-4 border p-2 rounded-lg cursor-pointer'>
				<PostHeader name={"A1 RST"} handler={"@Yousef"} />
				<p className='line-clamp-1'>
					Lorem Iusto aut voluptates. Ea ea molestias est rerum. Harum
					repellendus ipsa laudantium non ipsam vitae quibusdam. Ut facere
					expedita esse vitae voluptatem et quas. Aspernatur ipsa blanditiis
					mollitia consequuntur molestiae perspiciatis omnis. Autem voluptas
					voluptatibus magni quia ad aut animi minus. Porro incidunt voluptatem
					aut deserunt natus culpa.
				</p>
			</div>
		</div>
	);
};

export default Sidepanel;
