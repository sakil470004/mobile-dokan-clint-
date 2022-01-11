import { Alert,  Snackbar, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useRef, useState } from 'react'

export default function AddMobile() {
    const [product, setProduct] = useState({})
    const form = useRef(null)
    // snackbar code
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    // end of snackbar code

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductData = { ...product };
        newProductData[field] = value;
        setProduct(newProductData)

    }
    const handleAddService = (e) => {
        // console.log(product)
        // send data to the server
        fetch('https://mobile-dokan-server.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // alert('Product Added')
                    handleClick()

                    form.current.reset();
                }
            })

        e.preventDefault()
    }
    return (
        <Box>
            <form
                ref={form}
                onSubmit={handleAddService}>

                <TextField
                    required
                    sx={{ width: '75%', m: 2 }}
                    label="Product Name"
                    variant="standard"
                    name='first_name'
                    onBlur={handleOnBlur} />

                <TextField
                    required
                    sx={{ width: '75%', m: 2 }}
                    label="Price Of The Product"
                    variant="standard"
                    type='number'
                    name='price'
                    onBlur={handleOnBlur} />

                <TextField
                    required
                    sx={{ width: '75%', m: 2 }}
                    label="Ram"
                    variant="standard"
                    name='ram'
                    type='number'
                    onBlur={handleOnBlur} />
                <TextField
                    required
                    sx={{ width: '75%', m: 2 }}
                    label="Rom"
                    variant="standard"
                    name='rom'
                    type='number'
                    onBlur={handleOnBlur} />
                <TextField
                    required
                    sx={{ width: '75%', m: 2 }}
                    label="Brand"
                    variant="standard"
                    name='brand'
                    onBlur={handleOnBlur} />
                <TextField
                    required
                    sx={{ width: '75%', m: 2 }}
                    label="Front Camera"
                    variant="standard"
                    name='frontCamera'
                    type='number'
                    onBlur={handleOnBlur} />
                <TextField
                    required
                    sx={{ width: '75%', m: 2 }}
                    label="Rear Camera"
                    variant="standard"
                    name='rearCamera'
                    type='number'
                    onBlur={handleOnBlur} />
                <TextField
                    required
                    sx={{ width: '75%', m: 2 }}
                    label="Battery"
                    variant="standard"
                    name='battery'
                    type='number'
                    onBlur={handleOnBlur} />
                <TextField
                    required
                    sx={{ width: '75%', m: 2 }}
                    label="Image Link"
                    variant="standard"
                    name='img'
                    onBlur={handleOnBlur} />

                <button

                    style={{ width: '75%', backgroundColor: '#FFDA00', color: 'black', padding: '10px', borderRadius: '15px', cursor: 'pointer' }} type='submit'>Add Product</button>



            </form>
                {/* snackbar code */}
                <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Product Added
                    </Alert>
                </Snackbar>
                {/* end of snackbar code */}
        </Box>
    )
}
