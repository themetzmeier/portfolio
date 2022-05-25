import React, { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact({ isMobile }) {
    const [formInfo, setFormInfo] = useState({
        email: '',
        subject: '',
        message: ''
    });
    const handleChange = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        // console.log(formInfo);
        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID, 
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            {
                subject: formInfo.subject,
                email: formInfo.email,
                message: formInfo.message,
            }, 
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        );
    };

    return (
        <div id="contact" style={{ "minHeight": "95vh", "display": "flex", "alignItems": "center" }} className="section-container">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section-container-spacer text-center">
                            <h1 className="h2">Contact me</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <form onSubmit={(e) => sendEmail(e)} className="reveal-content">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="form-group">
                                                <input type="email" name="email" value={formInfo.email} onChange={(e) => handleChange(e)} className="form-control" id="email" placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="subject" value={formInfo.subject} onChange={(e) => handleChange(e)} className="form-control" id="subject" placeholder="Subject" />
                                            </div>
                                            <div className="form-group">
                                                <textarea className="form-control" name="message" value={formInfo.message} onChange={(e) => handleChange(e)} rows="5" placeholder="Enter your message"></textarea>
                                            </div>
                                            {formInfo.email && formInfo.message && formInfo.subject ? (
                                                <button type="submit" className="btn btn-default btn-lg">Send</button>
                                            ) : (
                                                <button disabled type="submit" className="btn btn-default btn-lg">Send</button>
                                            )}
                                            
                                        </div>
                                        <div className="col-md-5 address-container">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <span className="fa-icon">
                                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                                    </span>
                                                    + 1 (812) 399-9547
                                                </li>
                                                <li>
                                                    <span className="fa-icon">
                                                        <i className="fa fa-at" aria-hidden="true"></i>
                                                    </span>
                                                    themetzmeier@gmail.com
                                                </li>
                                                <li>
                                                    <span className="fa-icon">
                                                        <i className="fa fa fa-map-marker" aria-hidden="true"></i>
                                                    </span>
                                                    Sterling, VA
                                                </li>
                                            </ul>
                                            <h3>Follow me on social networks</h3>
                                            <a href="https://www.facebook.com/tanner.metzmeier" target="_blank" rel="noreferrer" className="fa-icon">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                            <a href="https://twitter.com/themetzmeier" target="_blank" rel="noreferrer" className="fa-icon">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                            <a href="https://www.linkedin.com/in/tannermetzmeier/" target="_blank" rel="noreferrer" className="fa-icon">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}