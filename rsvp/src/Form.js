import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";

export const Form = ({ closeModal }) => {
  const form = useRef();
  const [captchaToken, setCaptchaToken] = useState(null); // Store the reCAPTCHA token

  // Function to send email via EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    // Verify if the captcha is solved
    if (!captchaToken) {
      alert('Please complete the reCAPTCHA.');
      return;
    }

    // Proceed with sending the email
    emailjs.sendForm('service_wqp0hv4', 'template_c3qdemo', form.current, '3_FB-mibcvcaR-QGj')
      .then((result) => {
          console.log(result.text);
          alert('RSVP sent successfully!');
          
          // Reset the form first, then close the modal
          form.current.reset(); // Reset form after successful submission
          setCaptchaToken(null); // Reset captcha token
          closeModal(); // Close the modal last
      }, (error) => {
          console.log(error.text);
          alert('An error occurred, please try again.');
      });
  };

  // Handle the reCAPTCHA token
  const handleCaptcha = (token) => {
    setCaptchaToken(token); // Set the captcha token when verified
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
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
