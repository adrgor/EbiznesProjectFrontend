import React from 'react'
import placeholderImg from '../images/placeholder.png'

const ItemEditable = (props) => {

    return (
        <div className="item">
            <img src={placeholderImg} alt="Placeholder" style={{width: "100%"}}/>
            <div className="details">
                <div style={{height:"2em"}}>{props.name}</div>
                <div style={{padding: "0.5em", maxHeight: "1em"}}>{props.price + "zł"}</div>
                <a href={`/admin/edit-item/${props.id}`}><div className='edit-product-btn' style={{borderTop: "1px solid black", margin: "auto", textAlign: "center"}}>Edit item</div></a>
            </div>
        </div>
    )
}

export default ItemEditable
