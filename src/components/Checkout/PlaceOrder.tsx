import Button from "../common/ui/Button"

interface PlaceOrderProps {
    activeSection: number;
}

const PlaceOrder = ({activeSection}: PlaceOrderProps) => {
    return (
    <div className="relative bg-white p-5 mt-10 rounded-lg sm:ml-14">
        <div className={`hidden sm:flex items-center justify-center font-bold text-lg w-10 h-10 rounded-full absolute top-5 -left-14 z-10 ${activeSection === 2? " text-white bg-[var(--primary)]" : "bg-white text-[var(--primary)] border-2 border-[var(--primary)]"}`}>3</div>
        <h3>Review & Place Order</h3>
        {
            activeSection === 2 && (
                <>
                    <Button>Place Order</Button>
                </>
            )
        }
    </div>
    )
}

export default PlaceOrder