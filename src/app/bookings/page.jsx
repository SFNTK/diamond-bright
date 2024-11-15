"use client"
import React, { useState } from 'react';
import "./bookings.css"
import Layoutadmin from '../components/layoutadmin';
import Tablebooking from '../components/tablebooking';
import Bookingheader from '../components/bookingheader';

import { Chartcompo } from '../components/chartcompo';
import { Piemonths } from '../components/piemonths';

const Page = () => {
    const [validatororder,setvalidatororder]=useState("all")
    return (
        <Layoutadmin>
            <Bookingheader setvalidatororder={setvalidatororder} />
            <div id='contentbook'>
                <Tablebooking validatororder={validatororder}/>
                <div id='chartscontainer'>
                    <Chartcompo />
                    <Piemonths/>
                </div>

            </div>



        </Layoutadmin>
    );
}

export default Page;
