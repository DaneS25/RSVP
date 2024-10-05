import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Form = () => {
  const form = useRef();

  // Function to send email via EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wqp0hv4', 'template_c3qdemo', form.current, '3_FB-mibcvcaR-QGj')
      .then((result) => {
          console.log(result.text);
          alert('RSVP sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('An error occurred, please try again.');
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="form-group">
        <label className='label-text-name' htmlFor="name">Name</label>
        <input className="form-control-name" id="name" name="user_name" />
      </div> 

      <div className="form-group">
        <label className='label-text-email' htmlFor="email">Email address</label>
        <input type="email" className="form-control-email" id="email" name="user_email" placeholder="name@example.com" />
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

      <div className="form-group">
        <button className="form-control-submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;