import {useEffect, useRef, useState} from "react";
// import Dialog from '@mui/material/Dialog';
// import Button from '@mui/material/Button';
// import { TextValidator } from 'react-material-ui-form-validator';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { Grid, Button } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// import {div2 as div} from "@mui/material";
// import {ValidatorForm} from "react-material-ui-form-validator";
// import {useDispatch} from "react-redux";
// import {formErrorHandle} from "../../../utils/common.js";
// import GeneralTextField from "../../common/form/GeneralTextField.jsx";
// import EvanSubmitButton from "../../common/buttons/EvanSubmitButton.jsx";
// import EvanDialog from "../../common/dialog/EvanDialog.jsx";
// import PhoneNumberField from "../../common/form/PhoneNumberField.jsx";
// import EmailField from "../../common/form/EmailField.jsx";
// import ApiClient from "../../../services/apiClient.js";
// import {createOrUpdateClientContact} from "../../../features/ClientSlice.js";
// import {showToaster} from "../../../features/toasterSlice.js";
import axios from 'axios';

const AddContactDialog = ({id, onClose, open, clientId}) => {

    const formRef = useRef(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [relationship, setRelationship] = useState('');
    const contact ="contact"

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     if (id > 0) {
    //         ApiClient.get(`/client/contact/${id}`).then((response) => {
    //             const item = response.data;
    //             this.setState({
    //                 id: item.id,
    //             })
    //         }).catch(console.log);
    //     }
    // }, [id]);


    // const handleSubmit = async () => {
    //     try {
    //         await dispatch(createOrUpdateClientContact({
    //             clientId,
    //             id,
    //             name,
    //             email,
    //             phoneNumber,
    //             relationship
    //         })).unwrap();
    //         dispatch(
    //             showToaster({
    //                 message: id ? 'Contact updated successfully!' : 'Contact created successfully!',
    //                 severity: 'success',
    //             })
    //         );
    //         onClose();
    //     } catch (error) {
    //         dispatch(
    //             showToaster({
    //                 message: error?.message || 'An error occurred while saving the Contact.',
    //                 severity: 'error',
    //             })
    //         );
    //     }
    // };

useEffect(() => {
        if (id > 0) {
            axios.get(`/client/contact/${id}`)
                .then((response) => {
                    const item = response.data;
                    setContact(prev => ({
                        ...prev,
                        id: item.id,
                        name: item.name,
                        email: item.email,
                        phoneNumber: item.phoneNumber,
                        relationship: item.relationship,
                    }));
                })
                .catch((error) => {
                    console.error('Error fetching contact:', error);
                    alert('Failed to fetch contact');
                });
        }
    }, [id]);

    const handleSubmit = async () => {
        try {
            // if (contact.id) {
                // Update existing contact
                // await axios.put(`/client/contact/${contact.id}`, {
                            await axios.post(`/client/contact`, {

                    clientId,
                    ...contact
                });
                alert('Contact updated successfully!');
            // } else {            // 
            //     await axios.post(`/client/contact`, {

                // Create new contact
            //         clientId,
            //         ...contact
            //     }
            // );
            //     alert('Contact created successfully!');
            // }
            onClose();
        } catch (error) {
            console.error('Save failed:', error);
            alert(error?.message || 'An error occurred while saving the contact.');
        }
    };

    return (
//         <Dialog open={open}
//                     maxWidth={'sm'}
//                     handleClose={onClose}
//                     // title={`${id ? 'Update Contact' : 'Save Contact'}`}
//                     >
//             <Form noValidate
//                            ref={formRef}
//                            onSubmit={handleSubmit}
//                            autoComplete="off"
//                            onError={formErrorHandle}>
//                 <div container spacing={2}>

//                     <div size={12}>
//                         <input
//                             fullWidth={true}
//                             type="text"
//                             id="name"
//                             label="Contact Name"
//                             onChange={event => setName(event.target.value)}
//                             name="name"
//                             // value={name}
//                             validators={['required']}
//                             errorMessages={['This field is required.']}
//                         />
//                     </div>
//                     <div size={12}>
//                         <input
//                             fullWidth={true}
//                             id="email"
//                             type="email"
//                             label="Contact Email"
//                             onChange={event => setEmail(event.target.value)}
//                             name="email"
//                            // value={email}
//                             validators={['isEmail']}
//                             errorMessages={['Please enter a valid email address.']}
//                         />
//                     </div>
//                     <div size={12}>
//                         {/* <input
//                             fullWidth={true}
//                             id="phoneNumber"
//                             type="number"
//                             label="Phone Number"
//                             onChange={phoneNumber => setPhoneNumber(phoneNumber)}
//                             name="phoneNumber"
//                            // value={phoneNumber}
//                             validators={['required']}
//                             errorMessages={['This field is required.']}
//                         /> */}
//                         <input
//   fullWidth
//   id="phoneNumber"
//   label="Phone Number"
//   type="number"
//   name="phoneNumber"
//   value={phoneNumber}
//   onChange={(e) => setPhoneNumber(e.target.value)}
//   validators={['required']}
//   errorMessages={['This field is required.']}
// />
//                     </div>
//                     <div size={12}>
//                         <input
//                             fullWidth={true}
//                             id="relationship"
//                             type="text"
//                             label="Relationship"
//                             onChange={event => setRelationship(event.target.value)}
//                             name="relationship"
//                            // value={relationship}
//                             validators={['required']}
//                             errorMessages={['This field is required.']}
//                         />
//                     </div>


//                     <div size={12}>
//                         <Button>
//                             Add Contact
//                         </Button>
//                     </div>

//                 </div>
//             <Form>
//         </Dialog>
        <Dialog open={open} maxWidth="sm" onClose={onClose} fullWidth>
            <DialogTitle>{name ? 'Update Contact' : 'Save Contact'}</DialogTitle>
            <DialogContent>
                <ValidatorForm
                    ref={formRef}
                    onSubmit={handleSubmit}
                    onError={(errors) => console.log(errors)}
                    autoComplete="off"
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextValidator
                                fullWidth
                                label="Contact Name"
                                onChange={(e) => setName(e.target.value)}
                                name="name"
                                value={name}
                                validators={['required']}
                                errorMessages={['This field is required.']}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                fullWidth
                                label="Contact Email"
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                value={email}
                                validators={['isEmail']}
                                errorMessages={['Please enter a valid email address.']}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                fullWidth
                                label="Phone Number"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                name="phoneNumber"
                                type="number"
                                value={phoneNumber}
                                validators={['required']}
                                errorMessages={['This field is required.']}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                fullWidth
                                label="Relationship"
                                onChange={(e) => setRelationship(e.target.value)}
                                name="relationship"
                                value={relationship}
                                validators={['required']}
                                errorMessages={['This field is required.']}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" type="submit" color="primary">
                                Add Contact
                            </Button>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </DialogContent>
        </Dialog>

    )

}

export default AddContactDialog;
