'use client'; // to allow interactivity on the client side, must be top of file
import React from 'react'

const AddToCart = () => {
    return (
        <div>
            <button className='btn btn-primary' onClick={() => console.log('clicked')}>Click me</button>
        </div>
    )
}

export default AddToCart
