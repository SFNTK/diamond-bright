import { LocateIcon, Mail, PhoneCall, PinIcon } from 'lucide-react';
import React from 'react';

const Infodata = () => {
    return (
        <div id="infosdata">
              <div className='info font-bold text-2xl'>Diamond Bright Cleaning Inc : </div>
            <div className='info'><PhoneCall/> : (808) 728-0379 </div>
            <div className='info'><Mail/> : diamondbrightcleaninginc@gmail.com</div>
            <div className='info'><PinIcon/> : 3841A Keanu St. Honolulu HI 96816 </div>
          
        </div>
    );
}

export default Infodata;
