"use client"
import React, { useState } from 'react';
import Layoutadmin from '../components/layoutadmin';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Tablecontact from '../components/tablecontact';
import Contactnav from '../components/contactnav';
import "./dashcontact.css"
import { Contactchar } from '../components/contactchart';
const Page = () => {
  
    const [typetable,settypetable]=useState("all")
    return (
     <Layoutadmin>
      <Contactnav settypetable={settypetable}/>
      <div id='contactcontaoner'>
      <Tablecontact typetable={typetable} />
      <div id='chart2cont'>
      <Contactchar/>
      </div>
      </div>
     </Layoutadmin>
    );
}

export default Page;
