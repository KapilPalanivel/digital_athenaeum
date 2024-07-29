import React from 'react';
import './Footer.css';
import {
  FaRegArrowAltCircleRight,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  const companyLinks = [
    { label: 'About Us', icon: FaRegArrowAltCircleRight, Link: 'about' },
    { label: 'Contact Us', icon: FaRegArrowAltCircleRight, Link: 'contact' },
    { label: 'Privacy Policy', icon: FaRegArrowAltCircleRight, Link: '' },
    { label: 'Terms & Condition', icon: FaRegArrowAltCircleRight, Link: '' },
  ];

  const contactInfo = [
    { icon: 'fa-map-marker-alt', text: 'CHANDRA GARDEN' },
    { icon: 'fa-phone-alt', text: '6380279113' },
    { icon: 'fa-envelope', text: 'Discountkumar-it072@vaadagai.kettle', isEmail: true },  
  ];

  const socialLinks = [
    { icon: FaTwitter, scale: 1.3 },
    { icon: FaFacebookF, scale: 1.3 },
    { icon: FaYoutube, size: 40, scale: 1.3 },
    { icon: FaLinkedin, scale: 1.3 },
  ];

  const founders = ['KAPIL PA', 'KARTHIKEYAN B', 'KARNAN R'];

  return (
    <React.Fragment>
      <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="footer-content">
            <div className="footer-section company">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
              {companyLinks.map((link, index) => (
                <a key={index} className="btn btn-link d-flex align-items-center" href={link.Link}>
                  {React.createElement(link.icon, { className: 'me-2' })}
                  {link.label}
                </a>
              ))}
            </div>
            <div className="footer-section">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
              {contactInfo.map((info, index) => (
                <p key={index} className={`mb-2 ${info.isEmail ? 'bold-email' : ''}`}>
                  <i className={`fa ${info.icon} me-3`} />
                  {info.text}
                </p>
              ))}
              <div className="d-flex pt-2">
                {socialLinks.map((social, index) => (
                  <a key={index} className="btn btn-outline-light btn-social" href="">
                    {React.createElement(social.icon, { className: 'display-1', style: { transform: `scale(${social.scale})` } })}
                  </a>
                ))}
              </div>
            </div>
            <div className="footer-section">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Founders</h4>
              {founders.map((founder, index) => (
                <p key={index} className="mb-2">{founder}</p>
              ))}
            </div>
            <div className="footer-section">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
              <p>Subscribe To our News Letter.</p>
              <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                <input style={{borderRadius:"5px"}} className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                <button type="button" style={{borderRadius:"5px"}} className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="text-center">
              © <a className="border-bottom" href="#">Digital Athenaeum</a>, All Right Reserved.
              <br />
              <br />
              <div className="footer-menu">
                <a href="">Home</a>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
