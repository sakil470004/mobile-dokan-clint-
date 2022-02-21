import React, { useEffect, useState } from 'react';

export default function RemoveProduct() {

    const [products, setProducts] = useState([]);


    const handleRemove = id => {
        if (window.confirm("Are You Sure Want to Delete Mobile") === true) {

            const url = `https://mobile-dokan-api.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)

                    if (data.deletedCount) {
                        alert('Deleted')
                        const remaining = products.filter(food => food._id !== id);
                        setProducts(remaining)
                    }
                })

        } else {
            alert('Deleted cancel')

        }


    }

    useEffect(() => {
        fetch('https://mobile-dokan-api.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {


                setProducts(data)
            })

    }, [])

    return <div>

        {
            products.map(product =>
                <div key={product._id}>
                    <h1>{product.first_name} <span onClick={() => handleRemove(product._id)} style={{ color: 'red', cursor: 'pointer' }}> X </span></h1>
                </div>

            )
        }
    </div>;
}
