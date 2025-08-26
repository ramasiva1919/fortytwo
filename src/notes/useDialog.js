import {useState} from "react";

export default function useDialog() {
    const [dialogStates, setDialogStates] = useState({});

    const handleDialogOpen = (dialogId, data) => {
        console.log("dialog",dialogId,dialogStates)
        setDialogStates((prevStates) => ({
            ...prevStates,
            [dialogId]: true,
            data: {
                [dialogId]: data
            }
        }));
    };

    const handleDialogClose = (dialogId) => {
        setDialogStates((prevStates) => ({
            ...prevStates,
            [dialogId]: false,
            data: {}
        }));
    };

    const isDialogOpen = (dialogId) => {
        return dialogStates[dialogId]===true? true:false
    };

    const getDialogData = (dialogId) => {
        return dialogStates['data'][dialogId];
    };

    return {handleDialogOpen, handleDialogClose, isDialogOpen, getDialogData};
}
