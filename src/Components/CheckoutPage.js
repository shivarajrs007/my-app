import React from "react";
import './CheckoutPage.css';
import { useState} from "react";
import Headers from './../Components/Headers';
const CheckoutPage = () => {
    const items = JSON.parse(localStorage.getItem('items'));
    const [listItems,setListItems]=useState(items);
    const Total = listItems.reduce((total, item) => total + item.price, 0);
    const removeItem = (Id) => {
        const result = listItems.filter(item => item.id != Id);
        setListItems(result);
    }
    return (<>
        <Headers></Headers>
        <div className='app-background'>
            <div className='main-container'>
                <div className='item-list'>
                    {listItems.map((item) => (
                        <div className='item-container' key={item.id}>
                            <div className='item-name' >
                                <span>{item.name}</span>
                            </div>
                            <div className='quantity'>
                                <span>{item.price}</span>
                            </div>
                            <div className='quantity'>
                                <button onClick={() => removeItem(item.id)}>
                                    Delete Items
                                </button>
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