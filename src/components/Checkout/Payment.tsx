import PaymentForm from "../Forms/PaymentForm"
import type { CheckoutProps } from "./types"

const Payment = ({activeSection, setActiveSection}: CheckoutProps) => {
  return (
    <div className="relative bg-white p-5 mt-10 rounded-lg sm:ml-14 sm:after:content-[''] after:absolute after:top-20 after:-left-9 after:-translate-x-1/2 after:w-[2px] after:h-[calc(100%-40px)] after:bg-[var(--primary)]">
        <div className={`hidden sm:flex items-center justify-center font-bold text-lg w-10 h-10 rounded-full absolute top-5 -left-14 z-10 ${activeSection === 1? " text-white bg-[var(--primary)]" : "bg-white text-[var(--primary)] border-2 border-[var(--primary)]"}`}>2</div>
        <h3>Payment</h3>
        {
            activeSection === 1 && (
                <>
                    <p className="!text-sm !mt-0">*Indicates required field</p>
                    <PaymentForm activeSection={activeSection} setActiveSection={setActiveSection}/>
                </>
            )
        }
    </div>
  )
}

export default Payment