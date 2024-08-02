import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState("");
    const [statusBad, setStatusBad] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        if (email !== confirmEmail) {
            setStatusBad("Emails do not match.");
            return;
        }

        emailjs
            .sendForm(
                "service_ca4s326", // Your service ID
                "template_omxwu1q", // Your template ID
                form.current,
                "HemjDFbCtwuouLVFf" // Your user ID
            )
            .then(
                (result) => {
                    setStatus("Message sent successfully!");
                    setStatusBad("");
                },
                (error) => {
                    setStatus("");
                    setStatusBad("Failed to send message.");
                }
            );
    };

    return (
        <section className="contact-container">
            <div className="contact-text">
                <h1>Contact Request Form</h1>
                <h2>Personal Info</h2>
            </div>

            <form ref={form} onSubmit={sendEmail}>
                <div className="inputer">
                    <div className="div-input">
                        <div className="top">
                            <a>name</a> <a className="required"> (required)</a>
                        </div>
                        <input
                            type="text"
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            className="middle"
                            name="firstname"
                        />
                        <div className="bottom">
                            <a className="under-info">first</a>
                        </div>
                    </div>

                    <div className="div-input">
                        <div className="top">
                            <a></a> <a className="required">‎ </a>
                        </div>
                        <input
                            type="text"
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            className="middle"
                            name="lastname"
                        />
                        <div className="bottom">
                            <a className="under-info">last</a>
                        </div>
                    </div>

                    <div className="div-input">
                        <div className="top">
                            <a>email</a> <a className="required"> (required)</a>
                        </div>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="middle"
                            name="email"
                        />
                        <div className="bottom">
                            ‎ <a className="under-info">‎ </a>
                        </div>
                    </div>

                    <div className="div-input">
                        <div className="top">
                            <a>confirm email</a>{" "}
                            <a className="required"> (required)</a>
                        </div>
                        <input
                            type="email"
                            onChange={(e) => setConfirmEmail(e.target.value)}
                            required
                            className="middle"
                            name="confirm_email"
                        />
                        <div className="bottom">
                            ‎ <a className="under-info">‎ </a>
                        </div>
                    </div>

                    <div className="div-input">
                        <div className="top">
                            <a>company</a>
                        </div>
                        <input
                            type="text"
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="middle"
                            name="company"
                        />
                        <div className="bottom">
                            ‎ <a className="under-info">‎ </a>
                        </div>
                    </div>

                    <div className="div-input">
                        <div className="top">
                            <a>Phone Number</a> <a className="required"> </a>
                        </div>
                        <input
                            type="text"
                            onChange={(e) => setPhone(e.target.value)}
                            className="middle"
                            name="phone"
                        />
                        <div className="bottom">
                            ‎ <a className="under-info">‎ </a>
                        </div>
                    </div>
                </div>

                <button className="black-bt submit-button" type="submit">
                    Send
                </button>
                {status && <h1 className="messagebon">{status}</h1>}
                {statusBad && <h1 className="messagepasbon">{statusBad}</h1>}
            </form>
        </section>
    );
};

export default Contact;
