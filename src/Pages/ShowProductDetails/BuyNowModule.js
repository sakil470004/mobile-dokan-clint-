import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useAuth from '../../hooks/useAuth';
import { TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BuyNowModule({ open, handleClose, first_name, price }) {


    const { user } = useAuth()
    const initialInfo = { userName: user.displayName, email: user.email, phone: '' };
    const [userInfo, setUserInfo] = React.useState(initialInfo);



    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...userInfo };
        newInfo[field] = value;
        // console.log(newInfo)
        setUserInfo(newInfo);
    }

    const handleBookingSubmit = (e) => {
        // alert('booking')
        // collect Data from from
        const appointment = {
            ...userInfo,
            mobileName: first_name,
        }
        // send data to the server
        console.log(appointment)
        // fetch('https://damp-island-23434.herokuapp.com/appointments', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(appointment)

        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             // setBookingSuccess(true);
        //             handleClose()
        //         }
        //     })
        // console.log(appointment)
        e.preventDefault()
    }

    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {first_name}
                        </Typography>
                        <form onSubmit={handleBookingSubmit}>
                            <TextField
                                disabled
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue={`Price : ${price}`}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                onBlur={handleOnBlur}
                                name='patientName'
                                defaultValue={user.displayName}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue={user.email}
                                onBlur={handleOnBlur}
                                name='email'
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                label='Your phone number'
                                defaultValue=''
                                onBlur={handleOnBlur}
                                name='phone'
                                size="small"
                                required
                            />
                            <TextField
                                onBlur={handleOnBlur}
                                label='Address'
                                name='address'
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue=''
                                size="small"
                                required
                            />
                            <Button type='submit' variant="contained">Submit</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
