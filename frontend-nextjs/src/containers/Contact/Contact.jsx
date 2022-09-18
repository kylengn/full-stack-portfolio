import React, { useState } from "react";
import SectionHeadings from "../../components/SectionHeadings/SectionHeadings";
import {
  UilPhone,
  UilEnvelope,
  UilMapMarker,
  UilMessage,
} from "@iconscout/react-unicons";
import { send } from "emailjs-com";

const Contact = ({ contact }) => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Kyle",
    message: "",
    reply_to: "",
    projectSubject: "",
  });
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    send("service_cei2j9j", "template_i1e3e15", toSend, "-N19hjba9sxB2J42i")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setLoading(false);
        setIsFormSubmitted(false);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SectionHeadings title={contact.title} subtitle={contact.subtitle} />

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <UilPhone width={35} height={35} className="contact__icon" />

            <div>
              <h3 className="contact__title">Phone</h3>
              <a href={`tel: ${contact.phone}`} className="contact__subtitle">
                {contact.phone}
              </a>
            </div>
          </div>

          <div className="contact__information">
            <UilEnvelope width={35} height={35} className="contact__icon" />

            <div>
              <h3 className="contact__title">Email</h3>
              <a href={`mailto:${contact.email}`} className="contact__subtitle">
                {contact.email}
              </a>
            </div>
          </div>

          <div className="contact__information">
            <UilMapMarker width={35} height={35} className="contact__icon" />

            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">{contact.location}</span>
            </div>
          </div>
        </div>

        {!isFormSubmitted ? (
          <form onSubmit={onSubmit} className="contact__form grid">
            <div className="contact__inputs grid">
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Name
                </label>
                <input
                  name="from_name"
                  type="text"
                  className="contact__input"
                  value={toSend.from_name}
                  onChange={handleChange}
                />
              </div>
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Email
                </label>
                <input
                  name="reply_to"
                  type="email"
                  className="contact__input"
                  value={toSend.reply_to}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Project
              </label>
              <input
                name="projectSubject"
                type="text"
                className="contact__input"
                value={toSend.projectSubject}
                onChange={handleChange}
              />
            </div>

            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Message
              </label>
              <textarea
                name="message"
                id=""
                cols="0"
                rows="7"
                className="contact__input"
                value={toSend.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div>
              <button type="submit" className="button button--flex">
                {loading ? "Sending" : "Send Massage"}
                <UilMessage className="button__icon" />
              </button>
            </div>
          </form>
        ) : (
          <div>
            <h3 className="">Thank you for getting in touch! 🍀</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
