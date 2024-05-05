"use client";

import * as z from "zod";

import { CreatePost } from "@/validation/create-post";
import { ErrorMessage } from "@hookform/error-message";
import { FormInput } from "@/components/inputs/form-input";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = z.infer<typeof CreatePost>;

const PostCreate = () => {
	const router = useRouter();
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting,  },
	} = useForm<FormData>({
		resolver: zodResolver(CreatePost),
	});
	async function onSubmit(data: FormData) {
		console.log(isSubmitting);
		console.log(data);
		
		await new Promise<void>((resolve) => {
			setTimeout(() => {
				resolve();
			}, 2000); 
		});
		toast.success("Post created successfully");
		router.push("/");
	}
	return (
		<section className="flex-grow px-4" >
			<h1 className='text-xl font-extrabold'>Create a Post</h1>
			<form onSubmit={handleSubmit(onSubmit)} className="flex gap-4 flex-col mt-4">
				<FormInput id='title' register={register("title")} label='Title' errorMessage={errors?.title} inputType={"text"} />
				<FormInput id='uid' register={register("userId")} label='User ID' errorMessage={errors?.userId} inputType={"text"} />
				<FormInput id='body' register={register("body")} label='Post Body' errorMessage={errors?.body} inputType={"textarea"} />
			
				<button
				disabled={isSubmitting}
					type='submit'
					className='mt-4 disabled:bg-blue-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
				>Create</button>
			</form>
		</section>
	);
};

export default PostCreate;
