import React from "react";
import { Icon } from "@iconify/react";
const ContactElementNoLink = ({ contact }) => {
  return (
    <div className="contact-element">
      <span className="contact-logo">
        <Icon
          icon={contact.icon}
          color="#363636"
          className="contact-logo-img"
        />
      </span>
      <span className="contact-main">{contact.main}</span>
      <span className="contact-info">{contact.content}</span>
    </div>
  );
};
const ContactElement = ({ contact }) => {
  const style = {
    gridRow: "2/5",
  };
  return (
    <a
      className="contact-element"
      href={contact.link}
      style={style}
      target="__blank"
      refererr="noreferrer"
    >
      <span className="contact-logo">
        <Icon
          icon={contact.icon}
          color="#363636"
          className="contact-logo-img"
        />
      </span>
      <span className="contact-main">{contact.main}</span>
    </a>
  );
};
const Contact = ({ contacts }) => {
  const contactLinked = contacts.filter((contact) => !contact.content);
  const contactNoLinked = contacts.filter((contact) => !contact.link);
  return (
    <footer>
      <h2 className="section-heading">Contact Me</h2>
      <div className="contact-holder-no-link">
        {contactNoLinked.map((contact, i) => (
          <ContactElementNoLink contact={contact} key={i} />
        ))}
      </div>
      <div className="contact-holder">
        {contactLinked.map((contact, i) => (
          <ContactElement contact={contact} key={i} />
        ))}
      </div>
    </footer>
  );
};

export default Contact;
