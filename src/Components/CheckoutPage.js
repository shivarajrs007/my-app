import React from "react";
import './CheckoutPage.css';
import Headers from './../Components/Headers';
const CheckoutPage = () => {
    const items = JSON.parse(localStorage.getItem('items'));
    console.log(items);
    const Total = items.reduce((total, item) => total + item.price, 0);
    return (<>
        <Headers></Headers>
        <div className='app-background'>
            <div className='main-container'>
                <div className='item-list'>
                    {items.map((item) => (
                        <div className='item-container' key={item.id}>
                            <div className='item-name' >
                                <span>{item.itemName}</span>
                            </div>
                            <div className='quantity'>
                                <span>{item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='total'>Total: {Total}</div>
            </div>
        </div>
        </>);
}

export default CheckoutPage;