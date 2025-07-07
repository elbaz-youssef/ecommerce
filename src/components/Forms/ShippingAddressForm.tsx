import InputField from "@/components/common/ui/InputField";
import SelectField from "@/components/common/ui/SelectField"; 
import Button from "@/components/common/ui/Button";
import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, type User } from "@/schemas/shippingAddress";

import { states } from "./data";
import type { CheckoutProps } from "../Checkout/types";



const ShippingAddressForm = ({activeSection, setActiveSection}: CheckoutProps) => {

    const form = useForm({
        resolver: zodResolver(userSchema),
        mode: "onBlur"
    });

    const {register, handleSubmit, formState, control, setFocus} = form;

    const {errors} = formState;

    const onSubmit = (data: User) => {
        console.log(data);
        setActiveSection(activeSection + 1);
    }

    const onInput = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        // replace none digit value with empty string
        if(target.value.length < 6) {
            target.value = target.value.replace(/\D/g, "");
        }
        else {
            // add dash before the six digit
            if(target.value.length === 6 && !target.value.includes("-")) {
                target.value = target.value.slice(0, 5) + '-' + target.value.slice(5);
            }
            // prevent zip code from exceeding (10digits with dash)
            if(target.value.length > 10) {
                target.value = target.value.slice(0, -1);
            }
            // preserve - in the zip code
            target.value = target.value.replace(/[^0-9-]/g, "");
        }
            
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // prevent non numbers but allow some special keyboard keys like [Backspace, ...]
        if(!/\d/.test(e.key) && !["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab"].includes(e.key)) {
            e.preventDefault();
        }
    }

    useEffect(() => {
        setFocus("firstName");
    }, [setFocus])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* first & last Name */}
                <div className="flex flex-col lg:flex-row gap-5 mb-5">
                    <div className="flex-1 flex flex-col">
                        <InputField 
                            label="First Name" 
                            name="firstName"
                            register={register}
                            error={errors.firstName?.message}
                        />
                    </div>
                    <div className="flex-1 flex flex-col">
                        <InputField
                            label="Last Name"
                            name="lastName"
                            register={register}
                            error={errors.lastName?.message}
                        />
                    </div>
                </div>

                {/* Addresses 1 & 2(optional) */}
                <div className="flex flex-col lg:flex-row gap-5 mb-5">
                    <div className="flex-1 flex flex-col">
                        <InputField<User>
                            label="Address 1"
                            name="address.addresses.0"
                            register={register}
                            error={errors.address?.addresses?.[0]?.message}
                        />
                    </div>
                    <div className="flex-1 flex flex-col">
                        <InputField<User>
                            label="Address 2 (optional)"
                            name="address.addresses.1"
                            isOptional={true}
                            register={register}
                            error={errors.address?.addresses?.[1]?.message}
                        />
                    </div>
                </div>

                {/* City | State | ZipCode */}
                <div className="flex flex-col lg:flex-row gap-5 mb-5">
                    {/* City */}
                    <div className="flex-1 flex flex-col">
                        <InputField<User>
                            label="City"
                            name="address.city"
                            register={register}
                            error={errors.address?.city?.message}
                        />
                    </div>
                    <div className="flex-1 flex flex-col lg:flex-row gap-3">
                        {/* State */}
                        <div className="flex-1 flex flex-col">
                            <SelectField<User>
                                options={states}
                                label="State"
                                name="address.state"
                                register={register}
                                error={errors.address?.state?.message}
                            />
                        </div>

                        {/* Zip Code */}
                        <div className="flex-1 flex flex-col">
                            <InputField<User>
                                label="Zip Code"
                                name="address.zipCode"
                                register={register}
                                error={errors.address?.zipCode?.message}
                                onInput={onInput}
                                onKeyDown={onKeyDown}
                            />
                        </div>
                    </div>
                   
                </div>

                <Button>Continue to shipping method</Button>
            </form>
            <DevTool control={control} />
        </>
    )
}

export default ShippingAddressForm;