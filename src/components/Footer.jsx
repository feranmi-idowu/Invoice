import React from "react";

import { LuGithub, LuPhone } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { BriefcaseBusiness } from 'lucide-react';
import pic from '../img/IMG_8818.jpeg'
const contacts = {
  Github: "https://github.com/feranmi-idowu",
  Linkedin: "https://www.linkedin.com/in/idowu-feranmi",
  Mail: "mailto:idowuferanmi4@gmail.com",
  Portfolio: "https://my-portfolio-rose-omega-25.vercel.app/",
  Whatsapp: "https://wa.me/2348074223959",
};


function Footer() {
  return (
    <footer className="no-print">
    <section id="contact" className="footerStyle"> 
        <div className="footerPic-container">
            <img
                src={pic}
                alt=""
                className="footerPic"
                loading="lazy"
              />
        </div>
        <h2 className="contact-title">Contact</h2>
        <a  href={contacts.Whatsapp} 
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"><LuPhone size={40}/>+2348074223959</a>
        <div className="contact-links">
            <a  href={contacts.Portfolio} 
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"><BriefcaseBusiness size={40}/>Portfolio Website</a>
            <a  href={contacts.Github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"><LuGithub size={40}/>Github profile</a>
            <a  href={contacts.Mail} 
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"><LuMail size={40}/>Email</a>
            <a  href={contacts.Linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"><LuLinkedin size={40}/>LinkedIn profile</a>
         </div>
    </section>
      © {new Date().getFullYear()} Interferons
    </footer>
  );
}

export default Footer;