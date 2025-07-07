import {z} from "zod";

export const userSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "password should be at least 6 characters"),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Confirmed password is incorrect",
    path: ["confirmPassword"]
})

export type UserType = z.infer<typeof userSchema>