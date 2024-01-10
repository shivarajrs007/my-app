
import React from 'react';
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
        cartItems.push(cartItm)
        console.log(cartItems);
    }
    return (
        <div className="mainContainer" style={{display: "flex",flexWrap: "wrap"}}>
            {reports.map(report => (
                // <div className="child">
                    <div className="card" key={report.id}  onClick={() => addCart(report.id)}>
                        <img src={process.env.PUBLIC_URL + report.img} alt="" style={{width:"100%"}} />
                        <div className="container">
                            <p className="card-text"><h4>{report.name}</h4><br></br><b>Price : </b>{report.price}</p>
                        </div>
                    </div>
                   

                // </div>

            ))}
        </div>
    );
}

export default Main;