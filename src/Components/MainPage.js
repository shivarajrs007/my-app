import React from "react";
import { useState} from "react";
import './MainPage.css';
const MainPage = () => 
{
    const [listItems,setListItems]=useState([{ id: 1, itemName: "item1", price: 100 }, { id: 2, itemName: "item2", price: 300 }, { id: 3, itemName: "item3", price: 400 }, { id: 4, itemName: "item4", price: 500 }]);
    const Total = listItems.reduce((total, item) => total + item.price, 0);
    const removeItem = (Id) => {
        const result = listItems.filter(item => item.id != Id);
        setListItems(result);
        console.log(listItems)
    }
    return (
        <div className='app-background'>
            <div className='main-container'>
                <div className='item-list'>
                    {listItems.map((item) => (
                        <div className='item-container' key={item.id}>
                            <div className='item-name' >
                                <span>{item.itemName}</span>
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
    );
}

export default MainPage;