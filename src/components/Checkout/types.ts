import type { Dispatch, SetStateAction } from "react";

export interface CheckoutProps {
    activeSection: number;
    setActiveSection: Dispatch<SetStateAction<number>>
}

export interface FormProps {
    setActiveSection: Dispatch<SetStateAction<number>>
}