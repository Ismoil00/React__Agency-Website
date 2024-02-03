import "./footer.scss";
import LOGO from "../logo";
import Button from "../button";
import Icon from "../icon";
import { useState, useEffect } from "react";

const Footer = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 450) setMobile(true);
  }, []);

  return (
    <div className="footer">
      <section className="footer__upper-part">
        <div className="footer__logo">
          <div className="footer_logoWrapper">
            <LOGO color="white" />
          </div>
          <p>
            We&#39;re a team of strategic creator and digital innovator, united
            focus in our pursuit of mastery and joyful.
          </p>
        </div>
        <div className="footer__pages">
          <h1>Pages</h1>
          <p className="footer__p">Home</p>
          <p className="footer__p">Home 2</p>
          <p className="footer__p">About</p>
          <p className="footer__p">Contact Us</p>
          <p className="footer__p">Portfolio</p>
          <p className="footer__p">Portfolio Single</p>
        </div>
        <div className="footer__utilities">
          <h1>Utility Pages</h1>
          <p className="footer__p">Style Guide</p>
          <p className="footer__p">Instruction</p>
          <p className="footer__p">License</p>
          <p className="footer__p">Changelog</p>
          <p className="footer__p">Error 404</p>
          <p className="footer__p">Password Protected</p>
        </div>
        <div className="footer__sub-parent">
          <h1>Subscribe</h1>
          <div className="footer__subscribe">
            <input type="email" placeholder="Enter your email here" />
            <div className="footer__btn-wrapper">
              <Button text="Subscribe" color={mobile ? "white" : "black"} />
            </div>
          </div>
        </div>
      </section>

      <div className="footer__divider"></div>

      <section className="footer__lower-part">
        <div className="footer__copyright">
          <h1>Copyright by</h1>
          <p>Designed by Iconstica.com</p>
        </div>
        <div className="footer__contact">
          <h1>Contact Us</h1>
          <p>+0 12 457 4578</p>
        </div>
        <div className="footer__address">
          <h1>Address</h1>
          <p>119 Tanglewood Lane Gulfport, MS 39503</p>
        </div>
        <div className="footer__icons">
          <Icon size={50} icon="facebook" bg="white" />
          <Icon size={50} icon="instagram" bg="white" />
          <Icon size={50} icon="linkedin" bg="white" />
        </div>
      </section>
    </div>
  );
};

export default Footer;
