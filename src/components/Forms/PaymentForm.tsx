import { DevTool } from "@hookform/devtools"
import Button from "../common/ui/Button"
import InputField from "../common/ui/InputField"
import {useForm} from "react-hook-form"
import { paymentSchema, type Payment } from "@/schemas/payment"
import { zodResolver } from "@hookform/resolvers/zod"
import type { CheckoutProps } from "../Checkout/types"

import creditCardImg from "@/assets/pay/cc.svg";
import paypalImg from "@/assets/pay/paypal.webp";
import afterPayImg from "@/assets/pay/CashAppAfterpay.svg";
import klarnaImg from "@/assets/pay/klarna.webp";

const PaymentForm = ({activeSection, setActiveSection}: CheckoutProps) => {
    const form = useForm({
        resolver: zodResolver(paymentSchema),
        mode: "onBlur"
    });
    const {register, handleSubmit, control, formState: {errors}} = form;

    const onSubmit = (data: Payment) => {
        console.log(data);
        setActiveSection(activeSection + 1);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Email & Phone Number */}
                <div className="flex flex-col gap-5">
                    {/* Email */}
                    <InputField<Payment>
                        label="Email"
                        name="user.email"
                        type="email"
                        register={register}
                        error={errors.user?.email?.message}
                    />

                    {/* Password */}
                    <InputField<Payment>
                        label="Phone Number"
                        name="user.phoneNumber"
                        register={register}
                        error={errors.user?.phoneNumber?.message}
                    />
                </div>

                <div className="mt-8 mb-5">
                    <div className="flex items-center gap-3 flex-wrap py-4 border-b border-gray-200">
                        <input type="radio" name="payment-method" value="Credit card" className="w-5 h-5" /> 
                        <img src={creditCardImg} alt="credit-card-image" loading="lazy" width="60" />
                        <span className="font-bold text-xl">Credit card</span>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap py-4 border-b border-gray-200">
                        <input type="radio" name="payment-method" value="Paypal" className="w-5 h-5" /> 
                        <img src={paypalImg} alt="paypal-image" loading="lazy" width="60" />
                        <span className="font-bold text-xl">Paypal</span>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap py-4 border-b border-gray-200">
                        <input type="radio" name="payment-method" value="Afterpay" className="w-5 h-5" /> 
                        <img src={afterPayImg} alt="after-pay-image" loading="lazy" width="60" />
                        <span className="font-bold text-xl">Afterpay</span>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap py-4 border-b border-gray-200">
                        <input type="radio" name="payment-method" value="Klarna" className="w-5 h-5" /> 
                        <img src={klarnaImg} alt="klarna-image" loading="lazy" width="60" />
                        <span className="font-bold text-xl">Klarna</span>
                    </div>
                </div>

                <Button>Continue to order review</Button>
            </form>
            <DevTool control={control} />
        </>
    )
}

export default PaymentForm;