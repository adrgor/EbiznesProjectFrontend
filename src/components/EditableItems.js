import React, { useEffect, useState } from 'react'
import ItemEditable from './ItemEditable';

export default function EditableItems() {

    let [items, setItems] = useState([])

    useEffect(() => {
        fetch("https://ebiznesbackend.azurewebsites.net/api/products/not-initial", {
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              "Authorization": `Bearer ${localStorage.getItem("JWT_TOKEN")}`
            }
            })
        .then(res => res.json())
        .then(res => setItems(res))
    }, []);

  return (
      <div>
        {items.length > 0 ? 
        <div>{items.map(item => (<ItemEditable id={item.id} name={item.name} price={item.price}/>))}</div> :
        <div>No editable items</div>
        }
        
      </div>
  )
}
