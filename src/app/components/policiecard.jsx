import React from 'react';

const Policiecard = ({number,title,content}) => {
    return (
     
              <div className='number'>
                <div id='numberheadline' className='text-lightprimarycolor'>{number}</div>
                <span id='numbermini'  className='text-darkprimarycolor'>{title}</span>
                <p id='numberpara'>{content}</p>
            </div>
      
    );
}

export default Policiecard;
