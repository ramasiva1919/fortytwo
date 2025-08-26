// import Grid2 from "@mui/material/Grid2";
// import FieldGroupContainer from "../../common/form/FieldGroupContainer.jsx";
// import GeneralTextField from "../../common/form/GeneralTextField.jsx";
// import PhoneNumberField from "../../common/form/PhoneNumberField.jsx";
// import EvanAddOrRemoveButtons from "../../common/buttons/EvanAddOrRemoveButtons.jsx";
// import PropTypes from "prop-types";

// export default function ClientContacts(props) {

//     const {handleChange, removeField, addField, contacts = [], isLead = false} = props;


//     return (
//         <>
//             {/* {contacts?.map((contact, index) => ( */}
//                 <FieldGroupContainer key={index} title={'Contact'} number={index + 1}>
//                     <Grid2 container spacing={2}>
//                         <Grid2 size={2}>
//                             <GeneralTextField
//                                 fullWidth={true}
//                                 id="name"
//                                 label="Contact Name"
//                                 onChange={event => handleChange(index, 'name', event.target.value)}
//                                 name="name"
//                                 value={contact.name ?? ''}
//                                 validators={isLead ? [] : ['required']}
//                                 errorMessages={['This field is required.']}
//                             />
//                         </Grid2>
//                         <Grid2 size={3}>
//                             <GeneralTextField
//                                 fullWidth={true}
//                                 id="contactEmail"
//                                 label="Contact Email"
//                                 onChange={event => handleChange(index, 'email', event.target.value)}
//                                 name="email"
//                                 value={contact.email ?? ''}
//                                 validators={[]}
//                             />
//                         </Grid2>
//                         <Grid2 size={3}>
//                             <PhoneNumberField
//                                 fullWidth={true}
//                                 id="contactPhoneNumber"
//                                 label="Phone Number"
//                                 onChange={value => handleChange(index, 'phoneNumber', value)}
//                                 name="phoneNumber"
//                                 value={contact.phoneNumber ?? ''}
//                                 validators={isLead ? [] : ['required']}
//                                 errorMessages={['This field is required.']}
//                             />
//                         </Grid2>
//                         <Grid2 size={2}>
//                             <GeneralTextField
//                                 fullWidth={true}
//                                 id="relationship"
//                                 label="Relationship"
//                                 onChange={event => handleChange(index, 'relationship', event.target.value)}
//                                 name="relationship"
//                                 value={contact.relationship ?? ''}
//                                 validators={isLead ? [] : ['required']}
//                                 errorMessages={['This field is required.']}
//                             />
//                         </Grid2>

//                         <Grid2 size={2}>
//                             <EvanAddOrRemoveButtons
//                                 total={contacts.length}
//                                 index={index}
//                                 onRemoveClick={() => removeField(index, 'contacts')}
//                                 onAddClick={() => addField('contacts')}
//                             />
//                         </Grid2>


//                     </Grid2>
//                 </FieldGroupContainer>
//             {/* ))
//             } */}
//         </>
//     )
// }

// ClientContacts.propTypes = {
//     handleChange: PropTypes.func.isRequired,
//     removeField: PropTypes.func.isRequired,
//     addField: PropTypes.func.isRequired,
//     contacts: PropTypes.arrayOf(PropTypes.object),
//     isLead: PropTypes.bool,
// };