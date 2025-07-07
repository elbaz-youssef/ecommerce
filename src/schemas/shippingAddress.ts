import {z} from "zod";

const nameSchema = z.string()
                    .nonempty("Please fill out this field.")
                    .min(2, "Please enter at least two characters.")
                    .regex(/^[a-zA-Z- ']+$/, {
                        message: "Numbers or special characters not accepted"
                    });

const addressSchema = z.object({

    addresses: z.tuple([
        z.string()
        .nonempty("Please fill out this field.")
        .min(2, "2-36 characters are required.")
        .max(36, "2-36 characters are required."),

        z.string()
        .optional()
        .refine(data => !data || (data.length >= 2 && data.length <= 36), {
            message: "Please match the requested format."
        })
    ]),

    city: z.string()
          .nonempty("Please fill out this field.")
          .min(2, "Please enter a city name with at least two characters."),

    state: z.string()
            .nonempty("Please select an item in the list."),
            
    zipCode: z.string()
             .nonempty("Please fill out this field.")
             .regex(/^(\d{5}|\d{5}-\d{4})$/, "Please enter a 5 or 9-digit ZIP code.")
             
});

export const userSchema = z.object({
    firstName: nameSchema,
    lastName: nameSchema,
    address: addressSchema
})

export type User = z.infer<typeof userSchema>