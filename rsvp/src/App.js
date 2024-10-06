import React from 'react';
import './App.css';
import { Container } from './Container';
import image from './Daneandran.jpg';

const App = () => {
const triggerText = 'RSVP';
   const onSubmit = (event) => {
   event.preventDefault(event);
   console.log(event.target.name.value);
   console.log(event.target.email.value);
 };
return (
  <div className="App">
    <div className='picturehead'>
      <img className='image-of-us' src={image} alt="us" />
    </div>
    <div className='head-text'>
      <h1>Dane & Ran</h1>
    </div>
    <div className='front-text'>
      <p>You are invited to our wedding<br></br>29th August 2025<br></br>St Georges, Havelock North, Hawkes Bay<br></br>From 3:00pm - 8:00pm<br></br>Please sumbit your RSVP at your earliest convience<br></br>We hope to see you there<br></br>Thank you</p>
    </div>
    <div className="rsvp">
      <Container triggerText={triggerText} onSubmit={onSubmit} /> 
    </div>
  </div>
  );
 };
 export default App;
