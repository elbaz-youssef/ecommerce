import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { userSchema, type UserType } from "@/schemas/login";



const Login = () => {
    const {register, handleSubmit, formState, control, reset} = useForm<UserType>({
        resolver: zodResolver(userSchema)
    });

    const {errors, isSubmitting, isSubmitSuccessful} = formState;

    const onSubmit = (data: UserType) => {
        console.log(data);
        if(isSubmitSuccessful) {
            console.log("submitted successfully");
            reset();
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="flex flex-col gap-2 mb-5 mt-5">
                    <label htmlFor="email">Email <span className="text-red-500">*</span></label>
                    <input 
                        type="email"
                        id="email"
                        aria-invalid={!!errors.email}
                        {...register("email")}
                        className="p-3 border border-gray-500 rounded-lg"
                    />
                    { errors.email && <span className="block text-sm text-red-500">{errors.email.message}</span> }
                </div>
                <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="password">Password <span className="text-red-500">*</span></label>
                    <input 
                        type="password"
                        id="password"
                        aria-invalid={!!errors.password}
                        {...register("password")}
                        className="p-3 border border-gray-500 rounded-lg"
                    />
                    { errors.password && <span className="block text-sm text-red-500">{errors.password.message}</span> }
                </div>
                <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="cPassword">Confirm Password <span className="text-red-500">*</span></label>
                    <input 
                        type="password"
                        id="cPassword"
                        aria-invalid={!!errors.confirmPassword}
                        {...register("confirmPassword")}
                        className="p-3 border border-gray-500 rounded-lg"
                    />
                    { errors.confirmPassword && <span className="block text-sm text-red-500">{errors.confirmPassword.message}</span> }
                </div>
                <button disabled={isSubmitting} className="py-2 px-3 rounded-lg bg-[var(--primary)] text-white">
                    {
                        isSubmitting? "Submitting..." : "submit"
                    }
                </button>
            </form>
            <DevTool control={control} />
        </>
    )
}

export default Login