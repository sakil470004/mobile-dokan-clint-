import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';


export default function Product(props) {
    const { first_name, img, price, _id ,id} = props.mobile;
    const history = useHistory();
    const handleShowFullDetails = () => {
        const url = `/products/${_id}`
        history.push(url);
    }

    return (
        // give here hover effect , it go across the all component
        // minWidth: 275,
        <Card className='cursorPointer'
            onClick={handleShowFullDetails}

            sx={{
                border: 0, boxShadow: 0, borderRadius: 3, py: 1,
                '&:hover': {
                    boxShadow: 3,
                    transition: '0.8s'

                }
            }}>
            <CardMedia
                component="img"
                style={{ width: '100%', margin: '0 auto' }}
                image={img}
                alt="Paella dish"
            />
            <CardContent >
                <Typography variant="h5" component="div" style={{ color: '#EF827D' }}>
             {first_name}
                </Typography>
                <Typography variant="h6" component="div" style={{ color: '#48A7A3' }}>
                    $  {price}
                </Typography>

                {/* <Typography variant="body2" color="text.secondary">
                    {description}

                </Typography> */}

                {props.children}
            </CardContent>
        </Card>
    )
}
