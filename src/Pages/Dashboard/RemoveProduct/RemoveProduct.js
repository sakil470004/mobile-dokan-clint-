import React, { useEffect, useState } from 'react';

export default function RemoveProduct() {

    const [products, setProducts] = useState([]);


    const handleRemove = id => {
        if (window.confirm("Press a button!") === true) {

            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)

                    if (data.deletedCount) {
                        alert('deleted')
                        const remaining = products.filter(food => food._id !== id);
                        setProducts(remaining)
                    }
                })

            alert('Deleted')
        } else {
            alert('Deleted Cencle')

        }


    }

    useEffect(() => {
        fetch('http://localhost:5000/products')
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
