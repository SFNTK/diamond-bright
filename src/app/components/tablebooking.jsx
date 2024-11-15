"use client"
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Paperclip } from 'lucide-react';

const Tablebooking = ({ validatororder }) => {
  const [tabledata, settabledata] = useState()
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "08226254343", service: "regular housekeeping", Number_of_Bathrooms: 2, Number_of_Bedrooms: 3, Square_Footage: 1200, address: "123 Maple St, Springfield", status: "confirmed" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "08226783456", service: "deep cleaning", Number_of_Bathrooms: 1, Number_of_Bedrooms: 1, Square_Footage: 800, address: "456 Elm St, Riverside", status: "no" },
    { id: 3, name: "Mike Johnson", email: "mike.j@example.com", phone: "08226985431", service: "moveout cleaning", Number_of_Bathrooms: 3, Number_of_Bedrooms: 4, Square_Footage: 2000, address: "789 Oak St, Fairview", status: "confirmed" },
    { id: 4, name: "Alice Brown", email: "alice.b@example.com", phone: "08226563427", service: "regular housekeeping", Number_of_Bathrooms: 2, Number_of_Bedrooms: 2, Square_Footage: 1100, address: "321 Pine St, Meadowbrook", status: "no" },
    { id: 5, name: "Chris Evans", email: "chris.e@example.com", phone: "08226455248", service: "deep cleaning", Number_of_Bathrooms: 1, Number_of_Bedrooms: 2, Square_Footage: 900, address: "654 Cedar St, Lakeview", status: "confirmed" },
    { id: 6, name: "Sophia Turner", email: "sophia.t@example.com", phone: "08226247899", service: "moveout cleaning", Number_of_Bathrooms: 2, Number_of_Bedrooms: 3, Square_Footage: 1300, address: "987 Birch St, Highland Park", status: "no" },
    { id: 7, name: "Liam Garcia", email: "liam.g@example.com", phone: "08226371234", service: "regular housekeeping", Number_of_Bathrooms: 3, Number_of_Bedrooms: 4, Square_Footage: 1800, address: "159 Willow St, Sunnyside", status: "confirmed" },
    { id: 8, name: "Emma Wilson", email: "emma.w@example.com", phone: "08226734561", service: "deep cleaning", Number_of_Bathrooms: 1, Number_of_Bedrooms: 1, Square_Footage: 700, address: "753 Spruce St, Greenfield", status: "no" },
    { id: 9, name: "David Miller", email: "david.m@example.com", phone: "08226895436", service: "moveout cleaning", Number_of_Bathrooms: 2, Number_of_Bedrooms: 3, Square_Footage: 1400, address: "852 Chestnut St, Maplewood", status: "confirmed" },
    { id: 10, name: "Olivia Davis", email: "olivia.d@example.com", phone: "08226213579", service: "regular housekeeping", Number_of_Bathrooms: 2, Number_of_Bedrooms: 2, Square_Footage: 1000, address: "951 Redwood St, Brookside", status: "no" }
  ];

  useEffect(() => {
    if (validatororder == "all") {
      const datatable2 = data.map((item, index) => {
        return <TableRow key={index}>

          <TableCell>{item.name}</TableCell>

          <TableCell>{item.phone}</TableCell>
          <TableCell>
            {item.status == "confirmed" ? <span className='text-darkprimarycolor font-bold'>{item.status} </span> : <span className='font-bold text-warm'>not confirmed </span>}


          </TableCell>
          <TableCell className="cell2">
            <AlertDialog>
              <AlertDialogTrigger> <div className='getinfo  text-darkslate bg-lightprimarycolor'><Paperclip /> get the informations</div></AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>{item.name} | {item.phone} | {item.email}</AlertDialogTitle>
                  <AlertDialogDescription>
                    service: {item.service}<br />
                    Number of Bathrooms:    {item.Number_of_Bathrooms} <br />
                    Number of Bedrooms: {item.Number_of_Bedrooms}<br />
                    Square footage : {item.Square_Footage}<br />
                    status : {item.status == "confirmed" ? <span className='text-lightprimarycolor'>{item.status} </span> : <span className='text-warm'>not confirmed </span>}<br />
                    adress:  {item.address}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Go back (without confirmation)</AlertDialogCancel>
                  <AlertDialogAction>Confirm it</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

          </TableCell>



        </TableRow>
      })
      settabledata(datatable2)
    }
    else if(validatororder=="confirmed") {
      const datatable2 = data.map((item, index) => {
        if(item.status=="confirmed"){
        return <TableRow key={index}>

          <TableCell>{item.name}</TableCell>

          <TableCell>{item.phone}</TableCell>
          <TableCell>
            {item.status == "confirmed" ? <span className='text-darkprimarycolor font-bold'>{item.status} </span> : <span className='font-bold text-warm'>not confirmed </span>}


          </TableCell>
          <TableCell className="cell2">
            <AlertDialog>
              <AlertDialogTrigger> <div className='getinfo  text-darkslate bg-lightprimarycolor'><Paperclip /> get the informations</div></AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>{item.name} | {item.phone} | {item.email}</AlertDialogTitle>
                  <AlertDialogDescription>
                    service: {item.service}<br />
                    Number of Bathrooms:    {item.Number_of_Bathrooms} <br />
                    Number of Bedrooms: {item.Number_of_Bedrooms}<br />
                    Square footage : {item.Square_Footage}<br />
                    status : {item.status == "confirmed" ? <span className='text-lightprimarycolor'>{item.status} </span> : <span className='text-warm'>not confirmed </span>}<br />
                    adress:  {item.address}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Go back (without confirmation)</AlertDialogCancel>
                  <AlertDialogAction>Confirm it</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

          </TableCell>



        </TableRow>}
      })
      settabledata(datatable2)
    }
    else if(validatororder=="unconfirmed") {
      const datatable2 = data.map((item, index) => {
        if(item.status=="no"){
        return <TableRow key={index}>

          <TableCell>{item.name}</TableCell>

          <TableCell>{item.phone}</TableCell>
          <TableCell>
            {item.status == "confirmed" ? <span className='text-darkprimarycolor font-bold'>{item.status} </span> : <span className='font-bold text-warm'>not confirmed </span>}


          </TableCell>
          <TableCell className="cell2">
            <AlertDialog>
              <AlertDialogTrigger> <div className='getinfo  text-darkslate bg-lightprimarycolor'><Paperclip /> get the informations</div></AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>{item.name} | {item.phone} | {item.email}</AlertDialogTitle>
                  <AlertDialogDescription>
                    service: {item.service}<br />
                    Number of Bathrooms:    {item.Number_of_Bathrooms} <br />
                    Number of Bedrooms: {item.Number_of_Bedrooms}<br />
                    Square footage : {item.Square_Footage}<br />
                    status : {item.status == "confirmed" ? <span className='text-lightprimarycolor'>{item.status} </span> : <span className='text-warm'>not confirmed </span>}<br />
                    adress:  {item.address}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Go back (without confirmation)</AlertDialogCancel>
                  <AlertDialogAction>Confirm it</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

          </TableCell>



        </TableRow>}
      })
      settabledata(datatable2)
    }


  }, [validatororder])
  return (
    <Table id="table">
      <TableHeader>
        <TableRow>

          <TableHead>Name</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Status</TableHead>



        </TableRow>
      </TableHeader>
      <TableBody>
        {tabledata}
      </TableBody>
    </Table>
  );
}

export default Tablebooking;
