"use client"
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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

const Tablecontact = ({ typetable }) => {
  const [contacts, setcontacts] = useState(<></>)
  const data = [
    { id: 1, name: "John Doe", viewed: true, email: "john@example.com", phone: "08226254343", message: "I would like more information about your services." },
    { id: 2, name: "Jane Smith", viewed: false, email: "jane@example.com", phone: "08226783456", message: "Can we schedule a meeting next week?" },
    { id: 3, name: "Mike Johnson", viewed: false, email: "mike.j@example.com", phone: "08226985431", message: "Do you offer custom packages?" },
    { id: 4, name: "Alice Brown", viewed: false, email: "alice.b@example.com", phone: "08226563427", message: "I have some questions about pricing." },
    { id: 5, name: "Chris Evans", viewed: true, email: "chris.e@example.com", phone: "08226455248", message: "Could you send me a brochure?" },
    { id: 6, name: "Sophia Turner", viewed: true, email: "sophia.t@example.com", phone: "08226247899", message: "What are your business hours?" },
    { id: 7, name: "Liam Garcia", viewed: true, email: "liam.g@example.com", phone: "08226371234", message: "I’m interested in collaborating with your team." },
    { id: 8, name: "Emma Wilson", viewed: true, email: "emma.w@example.com", phone: "08226734561", message: "Can you provide a quote for my project?" },
    { id: 9, name: "David Miller", viewed: false, email: "david.m@example.com", phone: "08226895436", message: "Do you offer a satisfaction guarantee?" },
    { id: 10, name: "Olivia Davis", viewed: false, email: "olivia.d@example.com", phone: "08226213579", message: "How long does it take to get a response?" }
  ]

  const alleffect = () => {
    const datacontact = data.map((data, index) => {
      return <TableRow key={index}>
        <TableCell>{data.id}</TableCell>
        <TableCell>{data.name}</TableCell>
        <TableCell>{data.email}</TableCell>
        <TableCell>{data.phone}</TableCell>
        <TableCell className="getinfo bg-darkprimarycolor text-brightwhite my-2">
          <AlertDialog>
            <AlertDialogTrigger>Get the message</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{data.name}</AlertDialogTitle>
                <AlertDialogDescription>
                  {data.message}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-lightprimarycolor">Go back</AlertDialogCancel>
                <AlertDialogAction className="bg-darkprimarycolor">Mark as read</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

        </TableCell>
      </TableRow>


    })
    setcontacts(datacontact)
  }

  useEffect(() => {
    alleffect();
  }, [])

  useEffect(() => {
    if (typetable == "all") {
      alleffect();

    } 
    else if (typetable == "viewed") {
      const datacontact = data.map((data, index) => {
        if (data.viewed) {
          return <TableRow key={index}>
            <TableCell>{data.id}</TableCell>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.email}</TableCell>
            <TableCell>{data.phone}</TableCell>
            <TableCell className="getinfo bg-darkprimarycolor text-brightwhite my-2">
              <AlertDialog>
                <AlertDialogTrigger>Get the message</AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>{data.name}</AlertDialogTitle>
                    <AlertDialogDescription>
                      {data.message}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-lightprimarycolor">Go back</AlertDialogCancel>
                    <AlertDialogAction className="bg-darkprimarycolor">Mark as read</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

            </TableCell>
          </TableRow>
        }



      })
      setcontacts(datacontact)
    }
    else{
      const datacontact = data.map((data, index) => {
        if (!data.viewed) {
          return <TableRow key={index}>
            <TableCell>{data.id}</TableCell>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.email}</TableCell>
            <TableCell>{data.phone}</TableCell>
            <TableCell className="getinfo bg-darkprimarycolor text-brightwhite my-2">
              <AlertDialog>
                <AlertDialogTrigger>Get the message</AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>{data.name}</AlertDialogTitle>
                    <AlertDialogDescription>
                      {data.message}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-lightprimarycolor">Go back</AlertDialogCancel>
                    <AlertDialogAction className="bg-darkprimarycolor">Mark as read</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

            </TableCell>
          </TableRow>
        }



      })
      setcontacts(datacontact)
    }
  }, [typetable])
  return (
    <Table id="table">
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{contacts}</TableBody>
    </Table>

  );
}

export default Tablecontact;
