import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddItem() {
    let [name, setName] = useState("")
    let [category, setCategory] = useState("")
    let [price, setPrice] = useState()
    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const obj = JSON.stringify({id: 0, name, category, price})
        fetch("https://ebiznesbackend.azurewebsites.net/api/products/", {
            mode: 'cors',
            method: 'post',
            body: obj,
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              "Authorization": `Bearer ${localStorage.getItem("JWT_TOKEN")}`
            }
            }).then(navigate('/', {replace: true}), [navigate])
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input id="name-input" value={name} onChange={e => setName(e.target.value)}/>
        <label>Category</label>
        <input id="category-input" value={category} onChange={e => setCategory(e.target.value)}/>
        <label>Price</label>
        <input id="price-input" value={price} onChange={e => setPrice(e.target.value)} type="number" step="0.01"/>
        <button id="submit-btn" type="submit">Submit</button>
    </form>
  )
}
