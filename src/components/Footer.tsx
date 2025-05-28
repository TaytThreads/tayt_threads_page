import React from "react";
import {
  FacebookBlackIcon,
  TwitterBlackIcon,
  InstagramBlackIcon,
  GithubBlackIcon,
  VisaIcon,
  MasterCardIcon,
  PaypalIcon,
  ApplePayIcon,
  GooglePayIcon,
} from "../assets/icons/index";

const Footer: React.FC = () => {
  const socialLinks = [
    { name: "Twitter", icon: TwitterBlackIcon, url: "https://twitter.com" },
    { name: "Facebook", icon: FacebookBlackIcon, url: "https://facebook.com" },
    {
      name: "Instagram",
      icon: InstagramBlackIcon,
      url: "https://instagram.com",
    },
    { name: "Github", icon: GithubBlackIcon, url: "https://github.com" },
  ];

  const paymentMethods = [
    { name: "Visa", icon: VisaIcon },
    { name: "Mastercard", icon: MasterCardIcon },
    { name: "PayPal", icon: PaypalIcon },
    { name: "Apple Pay", icon: ApplePayIcon },
    { name: "Google Pay", icon: GooglePayIcon },
  ];

  const footerSections = [
    {
      title: "COMPANY",
      links: ["About", "Features", "Works", "Career"],
    },
    {
      title: "HELP",
      links: [
        "Customer Support",
        "Delivery Details",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },
    {
      title: "FAQ",
      links: ["Account", "Manage Deliveries", "Orders", "Payments"],
    },
    {
      title: "RESOURCES",
      links: [
        "Free eBooks",
        "Development Tutorial",
        "How to - Blog",
        "Youtube Playlist",
      ],
    },
  ];

  return (
    <footer className="w-full p-8 md:p-14 bg-black">
      <div className="mx-auto lg:px-18 py-12 mt-36">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-7">
              <a href="/" className="block">
                <h2 className="text-white custom-heading text-3xl md:text-3xl font-bold hover:opacity-80 transition-opacity duration-200">
                  TaytThreads.co
                </h2>
              </a>
              <p className="text-gray-600 text-sm mb-6 max-w-[14rem]">
                We have clothes that suits your style and which you're proud to
                wear. From women to men.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-sm font-semibold text-gray-700">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={social.icon}
                        alt={`${social.name} icon`}
                        className="w-5 h-5"
                      />
                    </a>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-sm font-semibold text-white mb-4 tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 ">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              TaytThreads.co © 2000-2023, All Rights Reserved
            </p>

            {/* Payment Methods */}
            <div className="flex gap-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="flex items-center justify-center"
                >
                  <span className="text-white text-xs font-bold">
                    <img
                      src={method.icon}
                      alt={`${method.name} icon`}
                      width={46}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
