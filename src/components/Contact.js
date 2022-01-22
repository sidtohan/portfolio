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
  return (
    <a
      className="contact-element"
      href={contact.link}
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
    <footer id="contacts">
      <h2 className="section-heading contacts-heading">Contact Me</h2>
      <div className="contacts-holder-no-link">
        {contactNoLinked.map((contact, i) => (
          <ContactElementNoLink contact={contact} key={i} />
        ))}
      </div>
      <div className="contacts-holder">
        {contactLinked.map((contact, i) => (
          <ContactElement contact={contact} key={i} />
        ))}
      </div>
    </footer>
  );
};

export default Contact;
