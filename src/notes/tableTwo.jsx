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
import { useParams } from 'react-router-dom';
import AddContactDialog from './addContactDialouge'
import useDialog from "./useDialog";



const rows = {
    id:1,
    name:"John",
    email:'john@gmail.com',
    phone:'9848022338',
    address:'hyd'
}
// ,{
//     id:2,
//     name:"John",
//     email:'john@gmail.com',
//     phone:'9848022338',
//     address:'hyd'
// },{
//     id:3,
//     name:"John",
//     email:'john@gmail.com',
//     phone:'9848022338',
//     address:'hyd'
// }


// index statrs with 0,1,2...
export default function TableIdTwo() {
      const {handleDialogOpen, handleDialogClose, isDialogOpen, getDialogData} = useDialog();

    const { id } = useParams();
    console.log(id,"id")
  return (
    <div>
    <TableContainer component={Paper}>
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

 {/* <div size={12}>
                                <ProfilePictureUploader
                                    alt={client.name}
                                    uploadUrl={`/client/upload/profile/${id}`}
                                    removeUrl={`/client/remove/profile/${id}`}
                                    photoUrl={client.clientPhoto}
                                />
                            </div> */}
          </TableRow>
        </TableHead>
        <TableBody>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {id}
              </TableCell>
              <TableCell component="th" scope="row">
                {rows.name}
              </TableCell>
              <TableCell align="right">{rows.email}</TableCell>
              <TableCell align="right">{rows.phone}</TableCell>
              <TableCell align="right">{rows.address}</TableCell>
              <TableCell><Button variant="contained" startIcon={<EditIcon />}></Button></TableCell>
               <TableCell><Button variant="contained" startIcon={<DeleteIcon />}></Button></TableCell>

            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
    <div>
                                    {/* <Button onClick={() => handleDialogOpen('AddContactDialog')}>Add Contact</Button> */}
                                    </div>
                                    {/* {isDialogOpen('AddContactDialog') &&
                <AddContactDialog
                    clientId={clientId}
                    // id={getDialogData('AddContactDialog')?.id}
                    onSubmit={() => console.log}
                    onClose={() => handleDialogClose('AddContactDialog')}
                    open={isDialogOpen('AddContactDialog')}/>
            } */}
            <Button onClick={() => handleDialogOpen('AddContactDialog')}>Add Contact</Button>

{isDialogOpen('AddContactDialog') && (
    <AddContactDialog
        // clientId={id} // using the param as clientId
        // onSubmit={() => console.log('Submitted')}
        // onClose={() => handleDialogClose('AddContactDialog')}
        // open={isDialogOpen('AddContactDialog')}
                            // clientId={clientId}
                    id={getDialogData('AddContactDialog')?.id}
                    onSubmit={() => console.log}
                    onClose={() => handleDialogClose('AddContactDialog')}
                    open={isDialogOpen('AddContactDialog')}
    />
)}

    </div>
  );
}