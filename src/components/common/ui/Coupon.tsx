import Button from "@/components/common/ui/Button"

const Coupon = () => {
    return (
        <div className="mt-5 mb-5">
            <h4 className="mb-2">Apply Coupon</h4>
            <div className="flex flex-wrap gap-3">
                <input type="text" placeholder="Enter Your Coupon" className="w-60 sm:w-80 border border-gray-100 p-3 rounded-lg" />
                <Button>Apply</Button>
            </div>
        </div>
    )
}

export default Coupon