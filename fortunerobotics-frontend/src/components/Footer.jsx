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
    <footer className="bg-gray-100 font-sans mt-4">
      <div className="container p-5">
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="mb-4">
              <img
                src={logo}
                alt="Logo"
                className="img-fluid mb-3"
                style={{ height: "48px", width: "auto" }}
              />
              <p
                style={{ fontFamily: "'Red Rose', cursive", fontSize: "15px" }}
              >
                At Fortune Robotics, we're redefining automation across
                hospitality, healthcare, logistics, and corporate industries.
              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="d-flex justify-content-between gap-4">
              {/* Left side: Menu */}
              <ul
                className="list-unstyled mb-0"
                style={{ fontFamily: "'Red Rose', cursive", fontSize: "15px" }}
              >
                <li className="mb-2">
                  <a
                    href="/products-services"
                    className="text-dark text-decoration-none"
                  >
                    Our Products
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/research"
                    className="text-dark text-decoration-none"
                  >
                    Research
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/blog" className="text-dark text-decoration-none">
                    Blog
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/contact" className="text-dark text-decoration-none">
                    Contact Us
                  </a>
                </li>
              </ul>

              {/* Right side: Contact info */}
              <div
                className="d-flex flex-column gap-2"
                style={{ fontFamily: "'Red Rose', cursive", fontSize: "15px" }}
              >
                <div className="d-flex align-items-start gap-2">
                  <LocalPhoneIcon className="text-dark" />
                  <span className="text-muted">+971 505 227 439</span>
                </div>
                <div className="d-flex align-items-start gap-2">
                  <LocationOnIcon className="text-dark" />
                  <span className="text-muted">
                    3571 W.Gray St.Utica,Pennsylvania <br /> 57867
                  </span>
                </div>
                <div className="d-flex align-items-start gap-2">
                  <LocationOnIcon className="text-dark" />
                  <span className="text-muted">
                    4517 Washington Ave.Manchester, <br />
                    Kentucky 39495
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-start gap-2">
                <EmailIcon className="text-dark" />
                <span className="text-muted mb-4">
                  contact@fortunerobotics.com
                </span>
              </div>

              <h4
                className="mb-1"
                style={{ fontFamily: "'Red Rose', cursive", fontSize: "18px" }}
              >
                Follow Us
              </h4>

              <div className="d-flex gap-2">
                <a
                  href="https://www.facebook.com/fortunerobotics/"
                  className="bg-light p-2 rounded-circle d-inline-flex align-items-center justify-content-center"
                >
                  <FacebookIcon className="text-dark" />
                </a>
                <a
                  href="https://www.instagram.com/fortune_robotics3/"
                  className="bg-light p-2 rounded-circle d-inline-flex align-items-center justify-content-center"
                >
                  <InstagramIcon className="text-dark" />
                </a>
                <a
                  href="https://x.com/fortunerobo3/status/1893935326072058293"
                  className="bg-light p-2 rounded-circle d-inline-flex align-items-center justify-content-center"
                >
                  <TwitterIcon className="text-dark" />
                </a>
                <a
                  href="https://www.linkedin.com/company/fortunerobotics"
                  className="bg-light p-2 rounded-circle d-inline-flex align-items-center justify-content-center"
                >
                  <LinkedInIcon className="text-dark" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <hr />
      <div className="border-t border-gray-600 mt-8 py-6 text-center text-sm text-gray-700 mt-5">
        <p> © 2025 Lunar Enterprises. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
