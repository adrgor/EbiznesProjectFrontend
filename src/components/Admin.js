import React from 'react'
import EditableItems from './EditableItems'

export default function Admin() {
  const buttonStyle = {
    width: "fit-content",
    textAlign: "center",
    marginTop: "2em",
    fontSize: "2em",
    padding: "0.5em",
    paddingLeft: "1em",
    paddingRight: "1em",
    backgroundColor: "#000e29",
    borderRadius: "50000px",
    color: "#efefef",
    minWidth: "5em",
    margin: "auto"
}

  return (
    <div>
        <EditableItems/>
        <a href="/admin/add-item"><div style={buttonStyle} id="add-product-btn">Add new product</div></a>
    </div>
  )
}
