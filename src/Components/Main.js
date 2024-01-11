import Headers from './../Components/Headers';
import React from 'react';
import {Link} from 'react-router-dom';

import './../App.css'
const Main = () => {
    const reports=[
        { id: 1, price: 200, name :"report1",img: "document.png" },
        { id: 2, price: 300, name :"report2",img: "document.png" },
        { id: 3, price: 500, name :"report3",img: "document.png" },
        { id: 4, price: 600, name :"report4",img: "document.png" },
        { id: 5, price: 400, name :"report5",img: "document.png" },
        { id: 6, price: 300, name :"report6",img: "document.png" },
        { id: 7, price: 700, name :"report7",img: "document.png" },
        { id: 8, price: 900, name :"report8",img: "document.png" }
    ];
    const cartItems =[]
    const addCart = (Id) =>{
        const cartItm = reports.filter(reports => reports.id === Id);
        const report_item=cartItm[0].name

        alert(`${report_item} item added to cart`)
        cartItems.push(...cartItm)
        console.log(cartItems);
        localStorage.setItem('items', JSON.stringify(cartItems))
    }
    return (
        <>
        <Headers></Headers>
        <div className="mainContainer" style={{display: "flex",flexWrap: "wrap"}}>
            {reports.map(report => (
                // <div className="child">
                    <div className="repoert-card" key={report.id}  onClick={() => addCart(report.id)}>
                        <img src={process.env.PUBLIC_URL + report.img} alt="" style={{width:"100%"}} />
                        <div className="repoert-container">
                            <div className="card-text"><h4>{report.name}</h4><br></br><b>Price : </b>{report.price}</div>
                        </div>
                    </div>
                   

                // </div>

            ))}
        </div>
        <Link to="/CheckoutPage">
        <button className='btn-body'>CartPage</button>
      </Link>
        </>);
}

export default Main;