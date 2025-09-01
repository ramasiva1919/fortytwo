// {steps.map((label, index) => (
                                                // <Step key={index}>
                                                //     <StepLabel>{label}</StepLabel>
                                                //     <StepContent>

                                                //         {getStepContent(index)}

                                                //         <Box mt={2}>
                                                //             {activeStep > 0 && (
                                                //                 <EvanButton sx={{marginRight: 2}} onClick={handleBack}
                                                //                             variant="outlined">
                                                //                     Back
                                                //                 </EvanButton>
                                                //             )}
                                                //             <EvanSubmitButton>
                                                //                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                //             </EvanSubmitButton>

                                                //         </Box>


                                                //     </StepContent>
                                                // </Step>


    //                                              const experienceDecrement = (e, id) => {
    //     e.preventDefault();
    //     setFormData(previousState => {
    //         let exp = previousState.experiences?.map((exp) => {
    //             let temp = {...exp}
    //             if (Number(id) === Number(temp.id)) {
    //                 temp.value = Math.max(0, Number(temp['value']) - 1);
    //             }
    //             return temp;
    //         });

    //         return {
    //             ...previousState,
    //             experiences: exp
    //         }
    //     })
    // }



    //  {formData.emergencyContacts?.map((ec, index) => (
    //                 <FieldGroupContainer key={index} title={'Emergency Contact'} number={index + 1}>
    //                     <Grid container spacing={3}>
    //                         <Grid size={{xs: 12, sm: 3}}>
    //                             <GeneralTextField
    //                                 fullWidth={true}
    //                                 id="name"
    //                                 label="Contact name"
    //                                 onChange={e => handleEmergencyContactFieldChange(index, e.target.name, e.target.value)}
    //                                 name="name"
    //                                 value={ec.name}
    //                                 validators={['required']}
    //                                 errorMessages={['This field is required.']}
    //                             />
    //                         </Grid>

    //                         <Grid size={{xs: 12, sm: 3}}>
    //                             <GeneralTextField
    //                                 fullWidth={true}
    //                                 id="relationship"
    //                                 label="Relationship"
    //                                 onChange={e => handleEmergencyContactFieldChange(index, e.target.name, e.target.value)}
    //                                 name="relationship"
    //                                 value={ec.relationship}
    //                                 validators={['required']}
    //                                 errorMessages={['This field is required.']}
    //                             />
    //                         </Grid>

    //                         <Grid size={{xs: 12, sm: 3}}>
    //                             <PhoneNumberField
    //                                 fullWidth={true}
    //                                 id="phoneNumber"
    //                                 label="Contact number"
    //                                 onChange={phoneNumber => handleEmergencyContactFieldChange(index, 'phoneNumber', phoneNumber)}
    //                                 name="phoneNumber"
    //                                 value={ec.phoneNumber}
    //                                 validators={['required']}
    //                                 errorMessages={['This field is required.']}
    //                             />
    //                         </Grid>

    //                         <Grid size={{xs: 12, sm: 3}}>
    //                             <EvanAddOrRemoveButtons
    //                                 total={formData.emergencyContacts.length}
    //                                 index={index}
    //                                 onRemoveClick={() => removeEmergencyContactField(index)}
    //                                 onAddClick={() => addEmergencyContactField()}
    //                                 removeButtonText={'Remove Contact'}
    //                                 addButtonText={'Add Contact'}
    //                                 styleButton={{height: '56px'}}
    //                             />
    //                         </Grid>
    //                     </Grid>
    //                 </FieldGroupContainer>
    //             ))}

    // <Grid md={12} item>
                //     <Grid spacing={2} container>
                //         {documents?.map((d, i) => d.fileName === 'PUBLIC_CRIMINAL_RECORD' &&
                //             <RosaFileThumbnail rosaFileThumbnailSize={4} height={120} key={i} file={d}/>)}
                //     </Grid>
                // </Grid>


    //              const experienceIncrement = (e, id) => {
    //     setFormData(previousState => {
    //         let exp = previousState.experiences?.map((exp) => {
    //             let temp = {...exp}
    //             if (Number(id) === Number(temp.id)) {
    //                 temp.value = Number(temp['value']) + 1
    //             }
    //             return temp;
    //         });
    //         return {
    //             ...previousState,
    //             experiences: exp
    //         }
    //     })
    // }


    //   <EvanChip title={'Client Type'} value={client.clientTypes?.map(x => x.title)?.join(", ")}/>

    //                             {client.depositCollected &&
    //                                 <EvanChip title={'Deposit Collected'} value={`$ ${client.depositCollected}`}/>
    //                             }



    //  <Grid size={{xs: 12, sm: 6}}>
    //                             <GeneralSingleSelectDropdown
    //                                 id="address"
    //                                 label="ADDRESS"
    //                                 name="address"
    //                                 value={address}
    //                                 onChange={(event) => setAddress(event.target.value)}
    //                                 options={client?.addresses?.map(x => {
    //                                     const a = compact([x.address, x.address2, x.city, x.country, x.state, x.zipcode]).join(',');
    //                                     return {id: a, value: a};
    //                                 })}
    //                             />
    //                         </Grid>



    //   <Box sx={{overflow: 'auto', maxHeight: '70vh'}}>
    //             {pocs.length > 0 ? (
    //                 pocs.map((poc, index) => (
    //                     <POCCard key={index} poc={poc} editPoc={editPoc} deletePoc={deletePoc}/>
    //                 ))
    //             ) : (
    //                 <Typography align="center" variant="body2" color="text.secondary" sx={{marginTop: 2}}>
    //                     Not yet Planned.
    //                 </Typography>
    //             )}
    //         </Box>


    //   .addCase(updateCaregiver.fulfilled, (state, action) => {
    //             state.isLoading = false;
    //             state.caregivers = state.caregivers.map((caregiver) =>
    //                 caregiver.id === action.payload.data.id ? action.payload.data : caregiver
    //             );
    //         })


    //  .addCase(updateClient.fulfilled, (state, action) => {
    //             state.isLoading = false;
    //             state.clients = state.clients.map((client) =>
    //                 client.id === action.payload.data.id ? action.payload.data : client
    //             );
    //         })