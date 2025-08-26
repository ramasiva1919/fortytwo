import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
 import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
// import ClientContacts from './contactDetails'

const rows = [{
    id:1,
    name:"John",
    email:'john@gmail.com',
    phone:'9848022338',
    address:'hyd'
},{
    id:2,
    name:"John",
    email:'john@gmail.com',
    phone:'9848022338',
    address:'hyd'
},{
    id:3,
    name:"John",
    email:'john@gmail.com',
    phone:'9848022338',
    address:'hyd'
}]

// index statrs with 0,1,2...
export default function BasicTable() {



  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/user/${id}`); // or pass via state
  };

  const handleDelete = (id) => {
    navigate(`/user/${id}`);
  };
  //  navigate(`/user/${rowData.id}`);
  return (
   
   <div><TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id </TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Home Address</TableCell>
          <TableCell align="right">Edit</TableCell>
               <TableCell align="right">Delete</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell><Button variant="contained" startIcon={<EditIcon />} onClick={() => handleEdit(row.id)}></Button></TableCell>
               <TableCell><Button variant="contained" startIcon={<DeleteIcon />} onClick={() => handleDelete(row.id)}></Button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
      {/* <ClientContacts /> */}
  </div>
  );
}