import {z} from "zod";

const contactSchema = z.object({
    email: z.string()
            .nonempty("Please fill out this field")
            .email("Whoops. Not a valid email address. Try again?"),

    phoneNumber: z.string()
                  .nonempty("Please fill out this field")
                  .regex(/^\(\d{3}\)\s\d{3}-\d{4}$/, "Please enter a valid phone number."),
        
})

export const paymentSchema = z.object({
    user: contactSchema,
    // paymentMethod: z.string().nonempty("Please select a payment method.")
})

export type Payment = z.infer<typeof paymentSchema>