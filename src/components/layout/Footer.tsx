import { Link } from "react-router-dom"
import logo from "@/assets/logo.png"
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import playStore from "@/assets/pay/play.jpg"
import appStore from "@/assets/pay/app.jpg"
import pay from "@/assets/pay/pay.png"

const Footer = () => {
  return (
    <footer className="pt-15">
      <div className="container">
        <div className="flex justify-between flex-wrap gap-10">
            <div>
              <div>
                <Link to="/">
                  <img src={logo} alt="logo" loading="lazy" />
                </Link>
              </div>
              <h3 className="font-bold mt-7 mb-4">Contact</h3>
              <div>
                <span>Address: </span>
                <span className="opacity-60">Agadir, Morocco</span>
              </div>
              <div>
                <span>Phone: </span>
                <span className="opacity-60">+212602030405</span>
              </div>
              <h3 className="font-bold mt-7 mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <FaFacebookF size={20} className="hover:text-blue-500 transition duration-300" />
                <FaInstagram size={20} className="hover:text-pink-500 transition duration-300" />
                <FaTwitter size={20} className="hover:text-sky-500 transition duration-300" />
                <FaGithub size={20} className="hover:text-black transition duration-300" />
                <FaLinkedin size={20} className="hover:text-blue-600 transition duration-300" />
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">About</h3>
              <ul className="flex flex-col gap-1">
                <li>
                  <Link to="/about" className="opacity-60">About Us</Link>
                </li>
                <li>
                  <Link to="/" className="opacity-60">Delivery Information</Link>
                </li>
                <li>
                  <Link to="/" className="opacity-60">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/" className="opacity-60">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/contact" className="opacity-60">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">My Account</h3>
              <ul className="flex flex-col gap-1">
                <li>
                  <Link to="/" className="opacity-60">Sign In</Link>
                </li>
                <li>
                  <Link to="/cart" className="opacity-60">View Cart</Link>
                </li>
                <li>
                  <Link to="/" className="opacity-60">My Wishlist</Link>
                </li>
                <li>
                  <Link to="/" className="opacity-60">Track My Order</Link>
                </li>
                <li>
                  <Link to="/contact" className="opacity-60">Help</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Install App</h3>
              <p>From App Store or Google Play</p>
              <div className="flex gap-3">
                <div className="border border-[var(--black)]">
                  <img src={appStore} alt="app store" loading="lazy" />
                </div>
                <div className="border border-[var(--black)]">
                  <img src={playStore} alt="play store" loading="lazy" />
                </div>
              </div>
              <p>Secured Payment Gateways</p>
              <div>
                <img src={pay} alt="payments method" loading="lazy" />
              </div>
            </div>

        </div>
        <p className="text-center !mt-10 border-t border-t-gray-100 py-3">&copy; <span>{new Date().getFullYear()}</span>, Youssef, React Ecommerce Template</p>
      </div>
    </footer>
  )
}

export default Footer