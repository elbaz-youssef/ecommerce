import { Mail, MapPin, Phone } from "lucide-react";

const Location = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center gap-10">
          <div>
            <p className="uppercase">get in touch</p>
            <h3>Visit one of our agency locations or contact us today</h3>
            <h5 className="font-bold my-4">Head Office</h5>
            <ul>
              <li className="flex items-center gap-3">
                <span>
                  <Mail />
                </span>
                <p>mail@gmail.com</p>
              </li>
              <li className="flex items-center gap-3">
                <span>
                  <Phone />
                </span>
                <p>+212 601020304</p>
              </li>
              <li className="flex items-center gap-3">
                <span>
                  <MapPin />
                </span>
                <p>Agadir, Morocco</p>
              </li>
            </ul>
          </div>
          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212753.67440327315!2d-7.7518064707472245!3d33.572178281731155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sen!2sma!4v1751280955211!5m2!1sen!2sma"
              allowFullScreen
              className="w-full h-full border-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
