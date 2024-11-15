import React from 'react';
import "./accounts.css"
import Layoutadmin from '../components/layoutadmin';
import Tableaccount from '../components/tableaccount';
const Page = () => {
    return (
      <Layoutadmin>
        <Tableaccount/>
      </Layoutadmin>
    );
}

export default Page;
