import React from 'react';
import './App.css';
import { Container } from './Container';

const App = () => {
const triggerText = 'RSVP';
   const onSubmit = (event) => {
   event.preventDefault(event);
   console.log(event.target.name.value);
   console.log(event.target.email.value);
 };
return (
  <div className="App">
    <div className='head-text'>
      <h1>Ran<br></br>+ Dane</h1>
    </div>
    <div className='front-text'>
      <p>Invite you to join them in<br></br>celebration of their marriage<hr /></p>
    </div>
    <div className='date-text'>
      <p>29.08.2025</p>
    </div>
    <div className='front-text-2'>
      <p>3PM at St Georges Restaurant<br></br>452 Saint Georges Road, Havelock North, Hawkes Bay<br></br><br></br>Dress in black formal<br></br><br></br>Please sumbit your RSVP at your earliest convience<br></br>We hope to see you there!</p>
    </div>
    <div className="rsvp">
      <Container triggerText={triggerText} onSubmit={onSubmit} /> 
    </div>
  </div>
  );
 };
 export default App;
