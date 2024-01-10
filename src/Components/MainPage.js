import React from "react";
import './MainPage.css';
const MainPage = () => {
    const items = [{ id: 1, itemName: "item1", price: 100 }, { id: 2, itemName: "item2", price: 300 }, { id: 3, itemName: "item3", price: 400 }, { id: 4, itemName: "item4", price: 500 }];
    const Total = items.reduce((total, item) => total + item.price, 0);
    return (
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
    );
}

export default MainPage;