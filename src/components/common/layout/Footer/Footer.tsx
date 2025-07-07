import SocialIcon from "./SocialIcon";
import FooterLinks from "./FooterLinks";
import Apps from "./Apps";
import Copyright from "./Copyright";
import ContactInfo from "@/components/common/ui/ContactInfo";
import Logo from "@/components/common/ui/Logo";
import { socialLinks, footerLinks, apps } from "./data";

const Footer = () => {
  return (
    <footer className="pt-15">
      <div className="container">
        <div className="flex justify-between flex-wrap gap-10">
          <div>
            {/* Logo */}
            <Logo />

            {/* Contact Info */}
            <h5 className="font-bold mt-7 mb-4">Contact</h5>
            <ContactInfo />

            {/* Social Media Links */}
            <h5 className="font-bold mt-7 mb-4">Follow Us</h5>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map(({ icon: Icon, href, label, hover }, index) => (
                <SocialIcon
                  key={label + index}
                  Icon={Icon}
                  href={href}
                  label={label}
                  hover={hover}
                />
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map(({ id, title, links }) => (
            <FooterLinks key={id} title={title} links={links} />
          ))}

          {/* Apps */}
          <Apps apps={apps} />

        </div>

        {/* Copyright */}
        <Copyright />

      </div>
    </footer>
  );
};

export default Footer;
