import ContactInfo from "@/components/common/ui/ContactInfo";
import Maps from "./Maps";

const Location = () => {
  return (
    <section className="py-25">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center gap-10">

          {/* Contact Info Section */}
          <div>
            <p className="uppercase">get in touch</p>
            <h3>Visit one of our agency locations or contact us today</h3>
            <span className="inline-block font-bold my-4">Head Office</span>
            <ContactInfo />
          </div>

          {/* Maps Section */}
          <Maps />

        </div>
      </div>
    </section>
  );
};

export default Location;
