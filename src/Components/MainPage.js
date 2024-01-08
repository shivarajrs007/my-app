import React from "react";

const MainPage = () => 
{
    const items = [{ id: 1,itemName: "item1", price: "100" },{ id: 2,itemName: "item2", price: "200" },{ id: 3,itemName: "item3", price: "400" },{ id: 4,itemName: "item4", price: "500" }];
    const arrayDataItems = items.map(course => 
        <li className="list-group-item" key={course.id}>
          <span>ItemName:{course.itemName}</span>
          <span className="d-flex justify-content-end">ItemPrice:{course.price}</span>
        </li>
      )
    return (
        <div className="d-flex justify-content-center">
            <div className="card " style={{width: '25rem'}}>
                <ul className="list-group list-group-flush">
                   {arrayDataItems}
                </ul>
            </div>
        </div>
    );
}

export default MainPage;