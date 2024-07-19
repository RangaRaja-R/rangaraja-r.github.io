'use client'
import React from 'react'
import emailjs from 'emailjs-com'

export default function MailForm() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_t21dx48",
                "template_j392iq4",
                e.target,
                "KM0VrMFCnlKMPtGwj"
            )
            .then(
                (result) => {
                    console.log(result);
                    window.location.reload();
                },
                (error) => {
                    console.log(error.text);
                }
            );
        alert("Mail sent successfully");
    }
    return (
        <div className="form">
            <form onSubmit={sendEmail}>
                <fieldset>
                    <legend>Contact me</legend>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Mail"
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                    />
                    <input
                        type="textarea"
                        name="message"
                        placeholder="message here"
                    />
                    <button type="submit">Send</button>
                </fieldset>
            </form>
        </div>
    )
}
