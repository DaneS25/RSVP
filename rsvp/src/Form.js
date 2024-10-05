import React from 'react';

export const Form = ({ onSubmit }) => {
return (
<form onSubmit={onSubmit}>
  <div className="form-group">
      <label className='label-text-name' htmlFor="name">Name</label>
    <input className="form-control-name" id="name" />
  </div> 
  
  <div className="form-group">
    <label className='label-text-email' htmlFor="email">Email address</label>
    <input type="email" className="form-control-email" id="email"
     placeholder="name@example.com" 
    />
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