import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

export const Form = ({ closeModal }) => {
  const form = useRef();
  const [captchaToken, setCaptchaToken] = useState(null); // Store the reCAPTCHA token
  const [toastId, setToastId] = useState(null); // Track toast ID

  // Function to send email via EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    // Verify if the captcha is solved
    if (!captchaToken) {
      if (!toast.isActive(toastId)) {
        const id = toast.error('Please complete the reCAPTCHA.', { autoClose: true });
        setToastId(id); // Save the toast ID so we can close it later
      }
      return;
    }

    // Proceed with sending the email
    emailjs.sendForm('service_wqp0hv4', 'template_c3qdemo', form.current, '3_FB-mibcvcaR-QGj')
    .then((result) => {
      console.log("Email sent successfully:", result.text);
      toast.success('RSVP sent successfully!', { theme: 'dark' }); // Toast should be triggered here

      // Reset the form after a successful submission
      form.current.reset();
      setCaptchaToken(null);
      setTimeout(() => closeModal(), 6000); // Delay modal closing to allow toast to display
      //closeModal();
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      toast.error('An error occurred, please try again.', { theme: 'dark' });
    });
  };

  // Handle the reCAPTCHA token
  const handleCaptcha = (token) => {
    setCaptchaToken(token); // Set the captcha token when verified
    if (toastId) {
      toast.dismiss(toastId); // Dismiss the "complete reCAPTCHA" toast when user fills it out
      setToastId(null); // Reset toastId to prevent future dismissals
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <ToastContainer theme="dark"/>
      <div className="form-group">
        <label className='label-text-name' htmlFor="name">Name</label>
        <input className="form-control-name" id="name" name="user_name" required />
      </div> 

      <div className="form-group">
        <label className='label-text-email' htmlFor="email">Email address</label>
        <input type="email" className="form-control-email" id="email" name="user_email" placeholder="name@example.com" required />
      </div>

      <div className="form-group">
        <label className='label-text-attendance'>Will you be attending?</label>
        <div className="form-control-attending">
          <input className="yesButton" type="radio" id="yes" name="attending" value="Yes" required />
          <label htmlFor="yes">Yes</label>

          <input className="noButton" type="radio" id="no" name="attending" value="No" required />
          <label htmlFor="no">No</label>
        </div>
      </div>

      <ReCAPTCHA
        sitekey="6LcBG2AqAAAAAD8B1C1Bii_a8Wftn0azwAh99RIU"
        onChange={handleCaptcha} // Handle the token on change
        theme="dark"
      />

      <div className="form-group">
        <button className="form-control-submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;