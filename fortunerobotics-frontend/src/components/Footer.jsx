import logo from "../assets/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
    return (
        <footer className="bg-gray-100 font-sans">
            <div className="container mx-auto py-12 px-6 md:px-12">
                {/* The main grid container to hold the footer columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* First Column: Logo & About */}
                    <div className="flex flex-col space-y-4">
                        <img src={logo} alt="Logo" className="h-12 w-auto" />
                        <p className="text-gray-600 leading-relaxed max-w-xs">
                            At Fortune Robotics, we're redefining automation across
                            hospitality, healthcare, logistics, and corporate industries.
                        </p>
                    </div>

                    {/* Second Column: Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg text-gray-800 mb-3">Our Products</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/products-services" className="text-gray-800 hover:text-black transition">Our Products</a>
                            </li>
                            <li>
                                <a href="/research" className="text-gray-800 hover:text-black transition">Research</a>
                            </li>
                            <li>
                                <a href="/blog" className="text-gray-800 hover:text-black transition">Blog</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-800 hover:text-black transition">Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    {/* Third Column: Contact Info (Phone & Address) */}
                    <div className="space-y-4">
                        <div className="flex items-start space-x-2">
                            <LocalPhoneIcon className="text-black" />
                            <span className="text-gray-600">+971 505 227 439</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <LocationOnIcon className="text-black" />
                            <span className="text-gray-600">
                                312, SIT Tower, Dubai Silicon Oasis, Dubai, UAE
                            </span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <LocationOnIcon className="text-black" />
                            <span className="text-gray-600">
                                4517 Washington Ave, Manchester, Kentucky 39495
                            </span>
                        </div>
                    </div>

                    {/* Fourth Column: Email & Social Media */}
                    <div className="space-y-4">
                        <div className="flex items-start space-x-2">
                            <EmailIcon className="text-black" />
                            <span className="text-gray-600">contact@fortunerobotics.com</span>
                        </div>
                        <h4 className="font-bold text-lg text-gray-800 mb-3">Follow Us</h4>
                        <div className="flex space-x-3">
                            <a href="https://www.facebook.com/fortunerobotics/" aria-label="Facebook" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
                                <FacebookIcon className="text-black" />
                            </a>
                            <a href="https://www.instagram.com/fortune_robotics3/" aria-label="Instagram" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
                                <InstagramIcon className="text-black" />
                            </a>
                            <a href="https://x.com/fortunerobo3/status/1893935326072058293" aria-label="Twitter" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
                                <TwitterIcon className="text-black" />
                            </a>
                            <a href="https://www.linkedin.com/company/fortunerobotics" aria-label="LinkedIn" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
                                <LinkedInIcon className="text-black" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-300 mt-8 py-6 text-center text-sm text-gray-500">
                <p>© 2025 Lunar Enterprises. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
