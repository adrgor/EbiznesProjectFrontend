import React, { useContext } from 'react'
import { BasketContext } from '../App'


const CheckoutSummary = (props) => {
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
        minWidth: "5em"
    }

    const summaryStye = {
        margin: "auto",
        marginTop: "2.5em",
        fontSize: "2em",
        paddingLeft: "1em",
        color: "#000e29",
    }

    const basket = useContext(BasketContext)

    return (
        <div >
            <div style={summaryStye}>Total price: ${basket.map(item => item.price).reduce((partialSum, a) => partialSum + a, 0).toFixed(2)}</div>
            {
                !props.isCardView ?
                <>
                <div style={buttonStyle} onClick={props.changeView}>Go back</div>
                </> : 
                <div style={buttonStyle} onClick={props.changeView}>Go to payment details ></div>
            }
            
        </div>
    )
}

export default CheckoutSummary