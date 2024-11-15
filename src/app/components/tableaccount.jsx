import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Tableaccount = () => {
    const data = [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
        { id: 3, name: "Jane Smith", email: "jane@example.com" },
        { id: 4, name: "Jane Smith", email: "jane@example.com" },
      
        // Add more data as needed
      ];
    return (
        <div>
              <Table id="table">
               <TableHeader>
                  <TableRow>
                  <TableHead>Id</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Email</TableHead>
                    

                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>0637483920</TableCell>
                 
                      <TableCell>get the message</TableCell>
                     
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
        </div>
    );
}

export default Tableaccount;
