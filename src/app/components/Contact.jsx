import "../styles/contact.css";
import MailForm from "./MailForm";

function Contact() {
    return (
        <div className="contact">
            <div className="logos">
                <a href="mailto:r34rangaraja@gmail.com" target="_blank">
                    <div className="logo">
                        <h4>Email</h4>
                        <img src="/mail.svg" alt="Github" typeof="svg" />
                    </div>
                </a>
                <a href="https://github.com/RangaRaja-R" target="_blank">
                    <div className="logo">
                        <h4>Github</h4>
                        <img src="/github.svg" alt="Github" typeof="svg" />
                    </div>
                </a>
                <a
                    href="https://www.linkedin.com/in/rangaraja-r"
                    target="_blank"
                >
                    <div className="logo">
                        <h4>LinkedIn</h4>
                        <img src="/linkedin.svg" alt="Github" typeof="svg" />
                    </div>
                </a>
            </div>
            <div className="vl" />
            <MailForm />
        </div>
    );
}

export default Contact;
