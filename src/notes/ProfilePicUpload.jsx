import { useState } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import Dialog from '@mui/material/Dialog';
import { DialogActions, DialogContent, DialogTitle } from '@mui/material';
import PropTypes from 'prop-types';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Button from '@mui/material/Button';
import axios from 'axios';

const ProfilePictureUploader = ({ uploadUrl, removeUrl, photoUrl = '', alt = 'ETZCare' }) => {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [cropper, setCropper] = useState(null);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setImage(null);
        setCroppedImage(null);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setOpen(true);
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCrop = () => {
        if (cropper) {
            const croppedCanvas = cropper.getCroppedCanvas();
            if (croppedCanvas) {
                setCroppedImage(croppedCanvas.toDataURL());
            }
        }
    };

    const handleUpload = async () => {
        
            try {
                await axios.post(uploadUrl, { file: image });
                handleClose();
            } catch (error) {
                console.error("Upload failed:", error);
            }
        
    };

    const handleRemove = async () => {
        try {
            await axios.delete(removeUrl);
            handleClose();
        } catch (error) {
            console.error("Remove failed:", error);
        }
    };

    return (
        <div>
            <img
                src={image || photoUrl || `https://eu.ui-avatars.com/api/?name=${alt}&size=300`}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = `https://eu.ui-avatars.com/api/?name=${alt}&size=300`;
                }}
                alt={alt}
                style={{ minHeight: 200, width: '100%', borderRadius: 8 }}
            />

            <div style={{ textAlign: "center", marginTop: "5px" }}>
                <input
                    accept="image/*"
                    id="file-upload"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                />
                <label htmlFor="file-upload">
                    <Button
                        variant="contained"
                        component="span"
                        startIcon={<UploadFileIcon />}
                    >
                        Upload Image
                    </Button>
                </label>
            </div>

            {image && (
                <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                    <DialogTitle>Upload Profile Picture</DialogTitle>
                    <DialogContent>
                        <Cropper
                            src={image}
                            style={{ height: 400, width: '100%' }}
                            initialAspectRatio={1}
                            aspectRatio={1}
                            guides={false}
                            cropBoxResizable={true}
                            viewMode={1}
                            background={false}
                            responsive={true}
                            autoCropArea={1}
                            checkOrientation={false}
                            onInitialized={(instance) => setCropper(instance)}
                        />
                        {croppedImage && (
                            <div style={{ marginTop: 10 }}>
                                <strong>Preview:</strong>
                                <img
                                    src={croppedImage}
                                    alt="Cropped"
                                    style={{ display: 'block', marginTop: 10, maxWidth: '100%' }}
                                />
                            </div>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCrop}>Crop</Button>
                        <Button onClick={handleUpload} variant="contained" color="primary">
                            Upload
                        </Button>
                        <Button onClick={handleRemove} color="error">
                            Remove
                        </Button>
                        <Button onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            )}
        </div>
    );
};

ProfilePictureUploader.propTypes = {
    uploadUrl: PropTypes.string.isRequired,
    removeUrl: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
    alt: PropTypes.string,
};

export default ProfilePictureUploader;
// import {useState} from 'react';
// import Cropper from 'react-cropper';
// import 'cropperjs/dist/cropper.css';
// //  import EvanButton from "./buttons/EvanButton.jsx";
// import Dialog from "@mui/material/Dialog";
// import {DialogActions, DialogContent, DialogTitle} from "@mui/material";
// import * as PropTypes from "prop-types";
// // import ApiClient from "../../services/apiClient.js";
// import UploadFileIcon from "@mui/icons-material/UploadFile";
// import Button from '@mui/material/Button';


// const ProfilePictureUploader = ({uploadUrl, removeUrl, photoUrl= '', alt='ETZCare'}) => {

//     const [open, setOpen] = useState(false);
//     const [image, setImage] = useState(null);
//     const [croppedImage, setCroppedImage] = useState(null);
//     const [cropper, setCropper] = useState(null);

//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = () => {
//                 setOpen(true);
//                 setImage(reader.result);
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleCrop = () => {
//         if (cropper) {
//             setCroppedImage(cropper.getCroppedCanvas().toDataURL());
//         }
//     };

//     const handleUpload = () => {
//         if (croppedImage) {
//             ApiClient.post(uploadUrl, {
//                 file: croppedImage,
//             }).then(() => {
//                 setImage(null);
//                 handleClose();
//             }); // Reset after upload
//         }
//     };

//     const handleRemove = () => {
//         ApiClient.delete(removeUrl).then(() => {
//             setImage(null);
//             handleClose();
//         });
//     };

//     return (
//         <div>
//              <img src={(image || photoUrl || `https://eu.ui-avatars.com/api/?name=${alt}&size=300`)}
//                      onError={({currentTarget}) => {
//                          currentTarget.onerror = null; // prevents looping
//                          currentTarget.src = `https://eu.ui-avatars.com/api/?name=${alt}&size=300`;
//                      }}
//                      alt={alt} style={{minHeight: 200, width: '100%', borderRadius: 8}}/>

//             <div sx={{textAlign: "center", marginTop: "5px"}}>
//                 <input
//                     accept="image/*"
//                     id="file-upload"
//                     type="file"
//                     style={{display: "none"}}
//                     onChange={handleFileChange}
//                 />
//                 <label htmlFor="file-upload">
//                     <Button
//                         variant="contained"
//                         component="span"
//                         startIcon={<UploadFileIcon/>}
//                     >
                        
//                     </Button>image
//                 </label>
//             </div>
//             {image && (
//                 <Dialog open={open} onClose={handleClose}>
//                     <DialogTitle>Upload Profile Picture</DialogTitle>
//                     <DialogContent>
//                         <Cropper
//                             src={image}
//                             style={{height: 400, width: '100%'}}
//                             initialAspectRatio={1}
//                             aspectRatio={1}
//                             guides={false}
//                             cropBoxResizable={true}
//                             viewMode={1}
//                             background={false}
//                             responsive={true}
//                             autoCropArea={1}
//                             checkOrientation={false}
//                             onInitialized={(instance) => setCropper(instance)}
//                         />
//                         {croppedImage && <img src={croppedImage} alt="Cropped"/>}
//                     </DialogContent>
//                     <DialogActions>
//                         <Button onClick={handleCrop}>Crop</Button>
//                         <Button onClick={handleUpload}>Upload</Button>
//                         <Button onClick={handleRemove}>Remove</Button>
//                     </DialogActions>
//                 </Dialog>
//             )}

//         </div>
//     );
// };

// ProfilePictureUploader.prototype = {
//     uploadUrl: PropTypes.string,
//     removeUrl: PropTypes.string,
//     photoUrl: PropTypes.string,
// }
// export default ProfilePictureUploader;