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
    <div className='front-text'>
      <p>Text describing what the wedding will be like and where it is at</p>
    </div>
    <div className="rsvp">
      <Container triggerText={triggerText} onSubmit={onSubmit} /> 
    </div>
  </div>
  );
 };
 export default App;
