import React from 'react';
import "./testicard.css"
const Testicard = ({ name, review, company }) => {
    return (
        <div>
 
    <div className="testimonial-card">
      <p className="testimonial-review">"{review}"</p>
      <div className="testimonial-author">
        <p className="testimonial-name">{name}</p>
        <p className="testimonial-company">{company}</p>
      </div>
    </div>
  


        </div>
    );
}

export default Testicard;
