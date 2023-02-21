import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe'

const Footer = () => {
  return (
    <div>
        {/* Footer Start */}
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-about">
                            <h3>About Us</h3>
                            <p>
                            दानापुर मंडल में खगौल स्थित रेलवे स्कूल की स्थापना 14
था। प्रारम्भ में यह विद्यालय कलकत्ता विश्वविद्यालय से संबद्ध था।
नवम्बर, 1889 को हुई थी।
                            </p>
                            <div className="footer-social">
                                <Link to="" className='twitter'><i className="fab fa-twitter"></i></Link>
                                <Link to="" className='ms-2 facebook'><i className="fab fa-facebook-f"></i></Link>
                                <Link to="" className='ms-2 youtube'><i className="fab fa-youtube"></i></Link>
                                <Link to="" className='ms-2 instagram'><i className="fab fa-instagram"></i></Link>
                                <Link to="" className='ms-2 linkedin'><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="footer-links">
                            <h3>Useful Links</h3>
                            <Link to="/About-School">About US</Link>
                            <Link to="/Academic-Calendar">Calendar</Link>
                            <Link to="/Contact-Us">Contact us</Link>
                            
                            <Link to="/Infrastructure">Infrastructure</Link>
                            <Link to="/Faculty">Faculty</Link>
                            <Link to="/Gallery">Gallery</Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-contact">
                            <h3>Get In Touch</h3>
                            <p><i className="fa fa-map-marker-alt"></i> H2JX+93P, Khagaul, <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Patna, Bihar 801105</p>
                            <p><i className="fa fa-phone-alt"></i>+012 345 67890</p>
                            <p><i className="fa fa-envelope"></i>info@example.com</p>
                            <p><i className="far fa-clock"></i>Mon - Fri, 9AM - 10PM</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-project">
                            <h3>Map Location</h3>
                            <Iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14394.882235224492!2d85.047696!3d25.5809621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa277c2ec9d8eca7!2sE.C%20Railway%20Senior%20Secondary%20School%2C%20Danapur!5e0!3m2!1sen!2sin!4v1673950175688!5m2!1sen!2sin" 
                           
                            height="190" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container footer-newsletter">
         
                <p>Copyright &copy; 2023 <Link to="">ECR Senior Secondary School</Link>. All Rights Reserved</p>
                
    
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="copy-text">
                                <p>Developed & Maintain By <Link to="">AGSPL </Link></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="copy-menu">
                                <Link to="/about">About</Link>
                                <Link to="">Terms</Link>
                                <Link to="">Privacy</Link>
                                <Link to="">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Footer End  */}
    </div>
  )
}

export default Footer