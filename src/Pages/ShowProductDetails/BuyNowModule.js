import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useAuth from '../../hooks/useAuth';
import { Alert, Snackbar, TextField } from '@mui/material';

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

export default function BuyNowModule({ open, handleClose, first_name, price, img }) {


    const { user } = useAuth()
    const initialInfo = { userName: user.displayName, email: user.email, phone: '', action: 'pending' };
    const [userInfo, setUserInfo] = React.useState(initialInfo);


    // snackbar code
    const [sOpen, setSOpen] = React.useState(false);

    const handleClick = () => {
        setSOpen(true);
    };

    const handleSClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSOpen(false);
    };
    // end of snackbar code



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
        const placeOrder = {
            ...userInfo,
            mobileName: first_name,
            img: img
        }
        // send data to the server
        // console.log(placeOrder)
        fetch('https://mobile-dokan-server-indol.vercel.app/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(placeOrder)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // setBookingSuccess(true);
                    handleClose()
                    // alert('Your product Added')
                    handleClick()
                }
            })
        // console.log(placeOrder)
        e.preventDefault()
    }

    return (
        <div>

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
            {/* snackbar code */}
            <Snackbar open={sOpen} autoHideDuration={2000} onClose={handleSClose}>
                <Alert onClose={handleSClose} severity="success" sx={{ width: '100%' }}>
                   You Product added our Delivery list
                </Alert>
            </Snackbar>
            {/* end of snackbar code */}
        </div>
    );
}
