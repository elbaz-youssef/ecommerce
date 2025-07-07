import { useState } from "react";
import OrdreSummary from "./OrdreSummary";
import Payment from "./Payment";
import PlaceOrder from "./PlaceOrder";
import ShippingAddress from "./ShippingAddress";

const Checkout = () => {
  const [activeSection, setActiveSection] = useState(0);
  return (
    <section className="w-full bg-[var(--lightWhite)] py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Form Section */}
          <div className="flex-1 bg-[var(--lightWhite)]">
            {/* Checkout Header */}
            <div className="flex items-center justify-between gap-5 flex-wrap pb-3 border-b border-gray-300">
              <h2 className="text-xl font-semibold">Checkout</h2>
              <p className="!text-sm !my-0">Order (3 items)</p>
            </div>

            {/* Sections */}
            <ShippingAddress
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            <Payment
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            <PlaceOrder
              activeSection={activeSection}
            />
          </div>

          {/* Right: Order Summary */}
          <div className="w-full md:max-w-sm bg-white shadow-md rounded-lg p-6">
            <OrdreSummary />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
