"use client"

import { PostHeader } from "./header";
import React from "react";
import { useRouter } from "next/navigation";

interface MiniPostProps {
    name: string;
    handler: string;
    content: string;
    title: string;
    id: string;
}
const MiniPost:React.FC<MiniPostProps> = ({ name, handler, content, title, id }) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/posts/${id}`);
    }
    return (
        <div onClick={handleClick} className="flex flex-col border p-4 rounded-2xl max-w-2xl cursor-pointer">
          <PostHeader name={name} handler={handler}/>
          <h1 className="text-lg font-bold mt-2">{title}</h1>
          <p className="tracking-tighter line-clamp-2 text-gray-500">{content}</p>
        </div>
    );
};

export default MiniPost;