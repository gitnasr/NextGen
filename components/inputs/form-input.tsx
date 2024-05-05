import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
	id: string;
	register: UseFormRegisterReturn;
	label: string;
	errorMessage: FieldError | undefined;
    inputType: "text" | "textarea";
}
export const FormInput: React.FC<FormInputProps> = ({
	id,
	register,
	label,
	errorMessage,
    inputType = 'text'
}) => {
	return (
		<div>
			<label htmlFor={id} className='block text-xs font-medium text-gray-700'>
				{label}
			</label>

			{
                inputType === 'text' ? (
                    <input
                        id={id}
                        {...register}
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                    />
                ) : (
                    <textarea
                        id={id}
                        {...register}
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                    />
                )
            }

			{errorMessage && <span className="text-xs text-red-500">{errorMessage.message}</span>}
		</div>
	);
};
