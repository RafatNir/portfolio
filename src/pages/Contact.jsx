import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event) { event.preventDefault(); setSubmitted(true); }
  return <section className="page-shell contact-grid"><div><p className="eyebrow">Contact me</p><h1>Let&apos;s start a conversation.</h1><p className="lead">Have a project, opportunity, or question? Send a message and I&apos;ll get back to you.</p><p><strong>Email</strong><br />rafat@example.com</p><p><strong>Location</strong><br />Toronto, Ontario</p></div><form className="contact-form" onSubmit={handleSubmit}><label htmlFor="firstName">First name</label><input id="firstName" name="firstName" required /><label htmlFor="lastName">Last name</label><input id="lastName" name="lastName" required /><label htmlFor="email">Email address</label><input id="email" name="email" type="email" required /><label htmlFor="message">Message</label><textarea id="message" name="message" required /><button className="button" type="submit">Send message</button>{submitted && <p role="status">Thanks for reaching out. I&apos;ll be in touch soon.</p>}</form></section>;
}
